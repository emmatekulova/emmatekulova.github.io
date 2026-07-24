# CV Clickable Entries

## Problem

The Education and Work Experience entries on `cv.md` are static. The user wants to click an entry (e.g. a degree) and reveal more detail — courses taken, skills, etc.

## Approach

Reuse the existing click-to-expand pattern already used on `projects.md` and `open_source.md`: a `.card`-style element with `onclick="toggleDescription(id)"` that shows/hides a hidden `<div>`.

Apply it to `cv.md`'s existing `.cv-entry` blocks without changing their current visual layout:

- Add the same `toggleDescription()` script and a hover-underline style (on `.cv-heading-text strong`) that `projects.md`/`open_source.md` already use.
- Give each of the 3 Education entries and 4 Work Experience entries a unique id and a hidden `<div>` at the end of the entry, toggled by clicking the entry.
- Hidden content is a placeholder `<p>TBD</p>` for the user to fill in with courses/skills later.

## Scope

- File touched: `cv.md` only.
- Entries: Education (MSc Informatics-AI, BSc Bioinformatics, BSc Chemistry unfinished) + Work Experience (MSD, Nuclear Research Institute, IOCB Computational Chemist, IOCB Organic Chemist Internship).
- No other CV sections (Volunteering, Honours, Summer Schools) are touched.
