# atom-work-log package

Simple work logging based on file save activity in Atom

Screenshot to come, but here's the obligatory meta-example of my work activity
from the moment I finished the logging feature until I started working on the
README.

```
2017MAR07 20:32:07 /[HOME_DIR]/projects/open_source/atom-work-log/lib/atom-work-log.js
2017MAR07 20:32:24 /[HOME_DIR]/projects/open_source/atom-work-log/lib/atom-work-log.js
2017MAR07 20:34:08 /[HOME_DIR]/projects/open_source/atom-work-log/lib/atom-work-log.js
2017MAR07 20:43:03 /[HOME_DIR]/projects/open_source/atom-work-log/lib/atom-work-log.js
2017MAR07 20:43:24 /[HOME_DIR]/projects/open_source/atom-work-log/lib/atom-work-log.js
2017MAR07 20:46:01 /[HOME_DIR]/projects/open_source/atom-work-log/lib/atom-work-log.js
2017MAR07 20:48:52 /[HOME_DIR]/.atom_work_log
2017MAR07 20:58:58 /[HOME_DIR]/projects/open_source/atom-work-log/menus/atom-work-log.json
2017MAR07 21:01:22 /[HOME_DIR]/projects/open_source/atom-work-log/menus/atom-work-log.json
2017MAR07 21:01:37 /[HOME_DIR]/projects/open_source/atom-work-log/CHANGELOG.md
2017MAR07 21:01:56 /[HOME_DIR]/.atom_work_log
2017MAR07 21:03:20 /[HOME_DIR]/projects/open_source/atom-work-log/LICENSE.md
2017MAR07 21:06:24 /[HOME_DIR]/projects/open_source/atom-work-log/package.json
2017MAR07 21:07:11 /[HOME_DIR]/projects/open_source/atom-work-log/package.json
```

## Features:

- [x] Log to a file each time a file is saved in atom
- [x] Menu item in Atom to view said file
- [ ] Ability to configure logfile location (currently hardcoded to `$HOME/.atom_work_log`)

## Caveats:

* This has only been used on a Mac thus far.
* I wrote this in about an hour.
* There are 0 tests.
