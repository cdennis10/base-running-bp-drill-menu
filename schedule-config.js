/*
  DR Base Running configuration
  Edit this file to update the program dates, Low/High workloads, weekly chat
  day, site version, or the approved centralized-report destination.

  Weekdays use JavaScript numbering: 0=Sunday, 1=Monday, 3=Wednesday.
*/
window.DR_SCHEDULE_CONFIG = {
  version: "2026.09.12.3",
  updatedDate: "2026-09-12",
  timeZone: "America/Santo_Domingo",
  timeZoneLabel: "AST / UTC−4",
  programStart: "2026-09-06",
  programEnd: "2026-10-31",
  defaultChatDay: 3,

  // Public Microsoft Form used as the shared coordinator record; no sign-in required.
  centralReportUrl: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=RuumN88yyUG9MLIz_mc-rDw-v2Vf9XBGmurfIGVhBEhUOE5NNUozUTZNUTZBSFRJT0tZVVBXRFhFNS4u",

  schedule: [
    { date: "2026-09-06", type: "off" },
    { date: "2026-09-07", type: "practice", load: "low" },
    { date: "2026-09-08", type: "practice", load: "low" },
    { date: "2026-09-09", type: "practice", load: "high" },
    { date: "2026-09-10", type: "practice", load: "low" },
    { date: "2026-09-11", type: "practice", load: "high" },
    { date: "2026-09-12", type: "practice", load: "low" },
    { date: "2026-09-13", type: "off" },
    { date: "2026-09-14", type: "practice", load: "high" },
    { date: "2026-09-15", type: "practice", load: "high" },
    { date: "2026-09-16", type: "practice", load: "low" },
    { date: "2026-09-17", type: "practice", load: "high" },
    { date: "2026-09-18", type: "practice", load: "high" },
    { date: "2026-09-19", type: "practice", load: "low" },
    { date: "2026-09-20", type: "off" },
    { date: "2026-09-21", type: "practice", load: "high" },
    { date: "2026-09-22", type: "game", detail: "Game 1 · Blue vs Gray" },
    { date: "2026-09-23", type: "camp" },
    { date: "2026-09-24", type: "game", detail: "Game 2 · Blue vs Gray" },
    { date: "2026-09-25", type: "game", detail: "Game 3 · Blue vs Gray" },
    { date: "2026-09-26", type: "off" },
    { date: "2026-09-27", type: "off" },
    { date: "2026-09-28", type: "practice", load: "high" },
    { date: "2026-09-29", type: "conditionalGame", detail: "Game 4 · Blue vs Gray" },
    { date: "2026-09-30", type: "camp" },
    { date: "2026-10-01", type: "conditionalGame", detail: "Game 5 · Blue vs Gray" },
    { date: "2026-10-02", type: "practice", load: "high" },
    { date: "2026-10-03", type: "practice", load: "low" },
    { date: "2026-10-04", type: "off" },
    { date: "2026-10-05", type: "camp" },
    { date: "2026-10-06", type: "game", detail: "11:00 AM · @ Pirates" },
    { date: "2026-10-07", type: "camp" },
    { date: "2026-10-08", type: "game", detail: "11:00 AM · @ Kansas City" },
    { date: "2026-10-09", type: "game", detail: "11:00 AM · Pirates" },
    { date: "2026-10-10", type: "camp" },
    { date: "2026-10-11", type: "off" },
    { date: "2026-10-12", type: "camp" },
    { date: "2026-10-13", type: "game", detail: "11:00 AM · @ Dodgers" },
    { date: "2026-10-14", type: "camp" },
    { date: "2026-10-15", type: "game", detail: "11:00 AM · Pirates" },
    { date: "2026-10-16", type: "game", detail: "10:30 AM · @ D-Backs" },
    { date: "2026-10-17", type: "camp" },
    { date: "2026-10-18", type: "off" },
    { date: "2026-10-19", type: "camp" },
    { date: "2026-10-20", type: "game", detail: "11:00 AM · @ Texas" },
    { date: "2026-10-21", type: "camp" },
    { date: "2026-10-22", type: "game", detail: "11:00 AM · @ Pirates" },
    { date: "2026-10-23", type: "game", detail: "11:00 AM · Texas" },
    { date: "2026-10-24", type: "camp" },
    { date: "2026-10-25", type: "off" },
    { date: "2026-10-26", type: "camp" },
    { date: "2026-10-27", type: "game", detail: "11:00 AM · @ Texas" },
    { date: "2026-10-28", type: "camp" },
    { date: "2026-10-29", type: "game", detail: "11:00 AM · Texas" },
    { date: "2026-10-30", type: "game", detail: "10:30 AM · @ D-Backs" },
    { date: "2026-10-31", type: "camp" }
  ]
};
