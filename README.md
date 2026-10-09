# OmBhatt15.github.io

Personal engineering portfolio for **Om Bhatt** — mechatronics undergraduate at Monash University,
Co-Founder of ARES Technologies. Live at **[ombhatt15.github.io](https://ombhatt15.github.io/)**.

## Stack

Hand-written static site. No build step, no dependencies, no framework — GitHub Pages serves the
files exactly as they are committed.

| File | Purpose |
| --- | --- |
| `index.html` | All page content: hero, projects, experience, skills, education |
| `styles.css` | Dark technical theme, blueprint grid, responsive layout |
| `app.js` | Lightbox, discipline filtering, scroll reveal |
| `Om_Bhatt_Resume.tex` | Résumé source (LaTeX) |
| `Om_Bhatt_Resume.pdf` | Compiled résumé, linked from the hero |

Media files live at the repository root and are referenced directly from `index.html`.

## Projects covered

| Project | Domain | Status |
| --- | --- | --- |
| Project Cassowary — Measurement & Logging Board (Monash UAS) | Mixed-signal hardware | In development |
| ECKO — Haptic Sight Blindfold | Assistive hardware | In development |
| JAEGAR — Bio-Mimetic Robotic Hand | Robotics / power electronics | Operational |
| SCORPION — Autonomous Hexapod | Robotics / embedded | Operational |
| SENTINEL — Computer-Vision Tracking Turret | Computer vision | Operational |
| Project Weirman — Course-Correcting Robot | Hardware / control | 10th of 160 teams |
| Self-Play Card Game AI Agent | AI / search | Completed |
| Endeavour — Habit Tracking App | Mobile software | In development |

## Updating the résumé

The PDF is committed, so the download link works without a build. To regenerate it after editing
the `.tex` source:

```bash
pdflatex Om_Bhatt_Resume.tex
```

Keep it to one page — the layout is tuned to fit exactly.

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` directly from the filesystem works too,
though some browsers restrict video playback over `file://`.
