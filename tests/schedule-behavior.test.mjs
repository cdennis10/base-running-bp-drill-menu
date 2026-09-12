import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const html = readFileSync(new URL("../schedule.html", import.meta.url), "utf8");
const configSource = readFileSync(new URL("../schedule-config.js", import.meta.url), "utf8");

const configContext = { window: {} };
vm.runInNewContext(configSource, configContext);
const config = configContext.window.DR_SCHEDULE_CONFIG;

function extractObject(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start);
  assert.notEqual(start, -1, `Missing ${startMarker}`);
  assert.notEqual(end, -1, `Missing ${endMarker}`);
  const objectSource = source.slice(start + startMarker.length, end).trim().replace(/;$/, "");
  return vm.runInNewContext(`(${objectSource})`);
}

const drills = extractObject(html, "const drills = ", "\n\n    const schedule =");
const inlineScript = html.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/)?.[1];

test("schedule and inline JavaScript parse", () => {
  assert.ok(inlineScript, "Inline application script was not found");
  assert.doesNotThrow(() => new vm.Script(inlineScript));
  assert.equal((html.match(/<style>/g) || []).length, 1);
  assert.equal((html.match(/<\/style>/g) || []).length, 1);
});

test("the original calendar still contains exactly 16 workload blocks", () => {
  const blocks = config.schedule.filter((entry) => entry.load);
  assert.equal(blocks.length, 16);
  assert.deepEqual(
    Array.from(blocks, (entry) => entry.date),
    [
      "2026-09-07", "2026-09-08", "2026-09-09", "2026-09-10",
      "2026-09-11", "2026-09-12", "2026-09-14", "2026-09-15",
      "2026-09-16", "2026-09-17", "2026-09-18", "2026-09-19",
      "2026-09-21", "2026-09-28", "2026-10-02", "2026-10-03"
    ]
  );
  assert.match(inlineScript, /eligibleEntries\.forEach\(\(entry\) => \{/);
  assert.match(inlineScript, /UID:base-running-\$\{entry\.date\}/);
});

test("each block has two recommendations and never crosses workloads", () => {
  const blocks = config.schedule.filter((entry) => entry.load);
  blocks.forEach((entry, blockIndex) => {
    const matching = Object.entries(drills)
      .filter(([, drill]) => drill.load === entry.load)
      .map(([id]) => id);
    const first = blockIndex % matching.length;
    const choices = [matching[first], matching[(first + 1) % matching.length]];
    assert.equal(choices.length, 2);
    choices.forEach((id) => assert.equal(drills[id].load, entry.load));
  });
});

test("Spanish and English guided-autonomy copy remains present", () => {
  const required = [
    "El calendario organiza la carga del día.",
    "The calendar organizes the day’s workload.",
    "Decisión del coach",
    "Coach’s decision",
    "Omitir guía",
    "Skip guide",
    "Conversación semanal del staff",
    "Weekly staff conversation"
  ];
  required.forEach((text) => assert.ok(html.includes(text), `Missing copy: ${text}`));

  const forbidden = [
    "bloqueada",
    "opciones aprobadas",
    "opciones correctas",
    "no tienes que recordar",
    "te mantiene en el paso correcto",
    "cumplimiento",
    "bloques omitidos",
    "coordinator can see"
  ];
  forbidden.forEach((text) => assert.ok(!html.toLocaleLowerCase("es").includes(text), `Forbidden copy remains: ${text}`));
});

test("all outcomes, required explanation, and old-record default are protected", () => {
  for (const outcome of ["planned", "adapted", "notCompleted"]) {
    assert.match(html, new RegExp(`value === \\"${outcome}\\"|\\[\\"planned\\", \\"adapted\\", \\"notCompleted\\"\\]`));
  }
  assert.match(html, /outcome: record\?\.outcome \|\| "planned"/);
  assert.match(html, /outcomeReason\.required = needsReason/);
  assert.match(html, /outcome === "notCompleted" \? String\(form\.get\("outcomeReason"\)/);
});

test("outcomes are included in cards, summaries, sharing, and CSV", () => {
  assert.match(html, /outcomeLabel\(recordOutcome\(record\)\)/);
  assert.match(html, /const blocksRun = records\.filter/);
  assert.match(html, /const headers = \[.*t\("outcome"\).*t\("outcomeReason"\)/);
  assert.match(html, /recordText\(date\)/);
  assert.match(html, /reportText\(\)/);
});

test("HTML ids are unique", () => {
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length);
});
