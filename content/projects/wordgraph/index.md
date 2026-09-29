---
title: "Bachelor thesis: Wordgraph"
date: 2009-04-01
category: academic
thesis: true
featured: true
period: "SS 09"
institution: "Bauhaus-Universität Weimar, Virtual Reality and Visualization Research"
supervisors: ["Prof. Dr. Bernd Fröhlich", "Patrick Riehmann"]
summary: "An interactive graph visualization for context-sensitive word choice, built on top of the Netspeak phrase search engine."
images: ["overview-bar-1.png", "overview-bar-2.png", "tight-raster.png", "netspeak.png", "netspeak-examples.png"]
publications:
  - "P. Riehmann, H. Gruendl, B. Froehlich, M. Potthast, M. Trenkmann, B. Stein. *The NETSPEAK WORDGRAPH: Visualizing keywords in context.* IEEE Pacific Visualization Symposium (PacificVis '11), 123–130. **Best Paper Award.**"
  - "P. Riehmann, H. Gruendl, M. Potthast, M. Trenkmann, B. Stein, B. Froehlich. *WORDGRAPH: Keyword-in-Context Visualization for NETSPEAK's Wildcard Search.* IEEE Transactions on Visualization and Computer Graphics 18, 9 (2012), 1411–1423."
---

The Wordgraph is a visual tool for context-sensitive word choice. It lets its
users check how common a phrase is and express uncertainty about word choice
by writing queries that contain wildcards. The search results are turned into
a legible, interactive graph. The graph has one layer for every literal word
and wildcard of the query, filled dynamically with results from the
retrieval engine of [Netspeak](https://netspeak.org/).

## Netspeak

Netspeak uses a query language made of literal words and wildcard operators.
Literal words must occur in the phrase, while wildcards express uncertainty.
Five operators are supported:

- `?` matches exactly one word
- `*` matches any sequence of words
- `~word` matches any synonym of the word
- `{a b c}` matches any ordering of the listed words
- `[a b c]` matches any one word from a list of options

The text interface shows the results as a ranked list of phrases, ordered by
absolute and relative frequency, so users can judge how common a phrase is.
Example sentences for each phrase can be loaded on demand to show the larger
context.

Netspeak is meant for people who are unsure how certain phrases are commonly
formed. Second language speakers in particular face this problem, since their
*Sprachgefühl*, their innate sense of language, is often not developed well
enough. Netspeak indexes more than 3 billion word n-grams of up to five words,
along with their frequencies on a large portion of the web.

## The Wordgraph

The text interface offers no interaction beyond loading example sentences.
The Wordgraph adds filtering, navigation and, most importantly, visual query
expansion and modification, with animated transitions between subsequent
result sets.

The resulting n-grams of a query are shown as a layered graph. Nodes are the
words of the n-grams, and an edge connects two subsequent words, so every
n-gram is a path through the graph. The layers are arranged in vertical
columns to make reading easy, one column for every element of the query.
Multiple occurrences of the same word in a column are merged into a single
node. Users can start with a simple query and refine or extend it visually,
while the graph animates between the changing result sets.
