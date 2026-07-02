# LFA First Division — Club Index

A searchable, filterable digital index of every title-winning club
in the history of the Liberian Football Association First Division.

Built as an original reimagining of the freeCodeCamp Football Team
Cards project.

## Live Demo

[View Live](https://simeonatarr231.github.io/teamcards)

---

## About

The LFA First Division Club Index documents all ten clubs that have
won the Liberian top-flight league since its founding in 1956. Every
entry is built from verified data sourced from Wikipedia, the RSSSF
football statistics archive, and Soccerway — founding years, title
counts, stadium names, peak eras, and full club histories.

Search filters across club name, nickname, stadium, and founding year.
Decade filter buttons narrow the index by era. Clicking any club opens
a detail panel with the full club profile — history, notable facts,
title years, and stadium capacity. Clubs can be saved with a heart
toggle, with a live counter tracking saved clubs in the header.

---

## Features

- Ten LFA First Division title-winning clubs with fully documented profiles
- Real-time search filtering across name, nickname, stadium, and year
- Decade filter buttons — combinable with search simultaneously
- Slide-in detail panel with full club history and verified statistics
- Save/favorite toggle with live counter in the header
- LFA colors throughout — red and blue from the Liberian national flag
- Full light and dark mode
- Responsive down to mobile

---

## Data Sources

All club data verified via:
- Wikipedia — individual club articles
- RSSSF (Rec.Sport.Soccer Statistics Foundation) — official title records
- Soccerway — founding years and stadium information

---

## Built With

- HTML5 — semantic structure
- CSS3 — custom properties, CSS Grid, slide panel, pseudo-element animations
- Vanilla JavaScript — search, filter, save toggle, detail panel,
  event delegation, combined filter state
- Google Fonts — Bebas Neue, Inter

---

## JavaScript Concepts Practiced

- Combined multi-condition filtering (search AND decade filter simultaneously)
- Event delegation distinguishing between two interactive elements
  on the same parent (save button vs card click)
- Slide panel open/close with overlay, scroll lock, and Escape key
- requestAnimationFrame for reliable overlay transitions
- Array.filter() with multiple AND conditions
- toLocaleString() for formatted number display
- Dual live counters derived from the same data source
- Per-property CSS custom property injection via style.setProperty()

---

## Project Structure
teamcards/
├── index.html      — semantic HTML with detail panel structure
├── style.css       — LFA design system, card grid, slide panel
├── script.js       — data layer, render engine, search, filter, save
└── README.md       — project documentation

---

## Local Setup

```bash
git clone https://github.com/SimeonATarr231/teamcards.git
cd teamcards
```

Open `index.html` in your browser. No build tools or dependencies required.

---

## Designed & Built by [Simeon Aseon Tarr](https://github.com/SimeonATarr231)

© 2025 Tarr. All rights reserved.