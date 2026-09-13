BASE RUNNING BLOCK / BP ROTATION DRILL MENU
===========================================

Open index.html in any modern browser to go directly to today's schedule.
Use drills.html for the full bilingual drill library. An internet connection
is required to stream the linked YouTube drill videos.

WEBSITE CONTENTS
----------------
The site is a single-page bilingual drill menu. Six drills include separate
English and Spanish YouTube videos. Video Review / GreenLight remains marked
as coming soon until its videos are available.

The shared site opens schedule.html as its landing page. That page adds:
- The September 6 through October 31 DR instructional calendar
- A base running block on every Low, High, and game day
- The full recommended drill menu for each block's Low or High workload
- The full drill menu on every confirmed or if-necessary game day
- A four-step first-use walkthrough that can be reopened at any time
- A visual Choose > Run > Report progress guide on every session
- Clear context for the Low or High workload shown by the calendar
- A brief coach completion report
- A weekly-call scheduler, shareable schedule link, and downloadable .ics calendar
- Weekly report copy and CSV export

COACH REPORTS AND SHARED CONTEXT
--------------------------------
The GitHub Pages schedule does not require a login. A local copy of each drill
choice and completion report is saved in that device's browser so the calendar
can show scheduled, logged, and unreported blocks. Coaches may also open the
linked Microsoft Form and add their update to the staff's shared record. The
form accepts anonymous responses without sign-in.

The local Share, Copy, and CSV tools remain available as fallbacks. The
centralized report URL is configured in schedule-config.js.

WEEKLY STAFF CONVERSATION
-------------------------
The conversation recurs every Wednesday. A coach can choose the date, Dominican
Republic time (AST / UTC-4), and duration in the Report view. The site opens a
prefilled Outlook invitation addressed to cdennis@cubs.com; Outlook sends the
invitation when the coach reviews it and selects Send. No mail credentials are
stored in this public site. The .ics download also includes Wednesday all-day
conversation reminders.

UPDATING THE PROGRAM
--------------------
Edit schedule-config.js to change the program dates, Low/High workloads,
default Wednesday setting, displayed version, or centralized report URL.
Increment the version and update the script version in schedule.html whenever
the configuration changes so browsers fetch the latest file.

CALENDAR SOURCE
---------------
The dates and labels in schedule.html were transcribed from the supplied
"DR Instructs 2026 Calendar" PDF. Base running blocks are assigned to the dates
marked Low or High and to confirmed or if-necessary game dates.

UPDATING VIDEO LINKS
--------------------
Open drills.html in a text editor and search for data-video-es or data-video-en.

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
