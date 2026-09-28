---
title: "Evince can't zoom in any further"
date: 2026-09-28
tags: [ubuntu, linux, gnome, evince, pdf]
---

Evince (GNOME Document Viewer, the default PDF viewer on Ubuntu) sometimes
refuses to zoom past a seemingly random value, for example 75.94 %. Typing a
larger value just snaps back.

This is by design: the maximum zoom is limited by the page cache size.
Large-format PDFs such as maps or charts hit the limit quickly. Raise the
cache size (in MiB, the default is 50) and restart Evince:

```sh
gsettings set org.gnome.Evince page-cache-size 200
```

Go higher if 200 is still not enough. To go back to the default:

```sh
gsettings reset org.gnome.Evince page-cache-size
```

Source: [Red Hat Bugzilla #1344859](https://bugzilla.redhat.com/show_bug.cgi?id=1344859)
