BASE RUNNING BLOCK / BP ROTATION DRILL MENU
===========================================

Open index.html in any modern browser. An internet connection is required to
stream the linked YouTube drill videos.

WEBSITE CONTENTS
----------------
The site is a single-page bilingual drill menu. Six drills include separate
English and Spanish YouTube videos. Video Review / GreenLight remains marked
as coming soon until its videos are available.

The "Daily plan and 2026 calendar" button opens schedule.html. That page adds:
- The September 6 through October 31 DR instructional calendar
- A base running block on every Low and High day
- The complete approved drill menu for each block's Low or High workload
- A four-step first-use walkthrough for coaches
- A visual Choose > Run > Report progress guide on every session
- Clear explanations of why only Low or High drills are shown
- A 30-second coach completion report
- A weekly meeting card, shareable staff link, and downloadable .ics calendar
- Weekly report copy and CSV export

COACH REPORTS AND MONITORING
----------------------------
The GitHub Pages version does not require a login or database. A coach's drill
choice and completion report are saved in that device's browser. After saving,
the coach should tap "Share report" and send the update through WhatsApp,
Teams, email, or another installed sharing app. The Report tab can also copy a
weekly summary or download a CSV.

This device-only model is intentional for the first release: it works on a
static GitHub Pages site and does not expose player-development notes publicly.
For a live multi-device coordinator dashboard, connect the completion form to
an approved shared system such as Microsoft Forms/Excel or Google Forms/Sheets.

WEEKLY COACH CHAT
-----------------
Open schedule.html, choose Report, and enter the day, DR time, and meeting URL.
"Copy staff link" creates a shareable calendar URL containing those meeting
settings. "Download calendar (.ics)" creates all 16 base running blocks plus
the weekly chats (when a time has been entered). Meeting times are interpreted
in Dominican Republic time (AST / UTC-4).

CALENDAR SOURCE
---------------
The dates and labels in schedule.html were transcribed from the supplied
"DR Instructs 2026 Calendar" PDF. Base running blocks are assigned only to the
dates marked Low or High in that source calendar.

UPDATING VIDEO LINKS
--------------------
Open index.html in a text editor and search for data-video-es or data-video-en.

Each drill has separate Spanish and English video fields. Paste the complete
video URLs between the matching quotation marks, for example:

data-video-es="https://your-spanish-video.example"
data-video-en="https://your-english-video.example"

When Español is selected, the page plays the data-video-es version. When English
is selected, it plays the data-video-en version. Videos play inside the menu.

YouTube, Vimeo, direct MP4/WebM links, and relative local video paths are supported.
When the corresponding field is empty, clicking the drill shows the localized
"video coming soon" message. The local videos folder is intentionally excluded
from GitHub because the website streams the unlisted YouTube versions.

DRILLS TRANSCRIBED FROM THE NOTES
---------------------------------
Light day:
- Video Review / GreenLight in Auditorium
- Standing Returns at 1B
- Odd + Even Momentum

Medium / Heavy day:
- 1v1 Momentum
- Catch the Tennis Ball
- 1v1 at 2B with Looks — Must Do Crossover Step
- Live Returns with Pitcher
