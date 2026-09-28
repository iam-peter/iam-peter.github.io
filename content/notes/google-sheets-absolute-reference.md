---
title: "Google Sheets: absolute cell references"
date: 2026-09-28
tags: [google-sheets, spreadsheet]
---

A `$` in front of the column or row keeps that part of a cell reference fixed
when a formula is copied or dragged to other cells:

| Reference | When copied |
| --------- | ----------- |
| `B14`     | column and row both shift |
| `$B$14`   | always points to B14 |
| `$B14`    | column stays B, row shifts |
| `B$14`    | row stays 14, column shifts |

Example: with a tax rate in B14, `=A2*$B$14` can be dragged down a whole
column and every row still uses B14.

Tip: place the cursor on a reference while editing a formula and press
**F4** (**Fn + F4** on some laptops) to cycle through the four variants.
