# Healloo

Clickable prototype of the Healloo mobile app, built from the Figma screens.
Plain HTML, CSS and JavaScript — no build step, no backend, no dependencies.

## Run it

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8080
```

## What's in here

- `index.html` — phone frame, status bar, font loading
- `styles.css` — design tokens and every screen's styles
- `app.js` — screen router, rendering, interactions
- `data.js` — all mock content: program, tasks, moods, diary entries, VOD, SOS

## Screens

Splash · Home (four-card carousel) · Tasks deck · Program Details · All tasks of Part One ·
Profile with weekly statistics · Set Up Your Mood · My Note · My Diary (calendar + Mood Gantt) ·
SOS "What Happened?" · Community member match.

## What actually works

- Swipe the home carousel — the button under it follows the card
- Check a task; the ring, counters and "tasks remaining" all update
- Pick a mood, write a note, save it, land in the diary
- Toggle Mood & Notes / Mood Gantt, tap any day with an entry
- Pick an SOS reason and get matched

State lives in memory only. Reloading restores the sample data.

## Editing the content

Everything readable comes from `data.js`. Change a task, add a diary entry or a mood and the
screens pick it up on reload — no other file needs touching.
