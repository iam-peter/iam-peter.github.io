---
title: "Git: stage changes interactively"
date: 2026-09-28
tags: [git]
---

To commit only some of the changes in a file, stage them hunk by hunk:

```sh
git add -p            # all modified files
git add -p path/file  # a single file
```

Git shows each hunk and asks what to do with it:

| Key | Action |
| --- | ------ |
| `y` | stage this hunk |
| `n` | skip this hunk |
| `s` | split the hunk into smaller ones |
| `e` | edit the hunk by hand |
| `q` | quit, keep what's staged so far |
| `?` | show help for all keys |

Check the result before committing:

```sh
git diff --staged
```

The same works in reverse: `git restore -p --staged` unstages hunks and
`git restore -p` discards them. `git add -i` opens the full interactive menu,
which can also add untracked files.
