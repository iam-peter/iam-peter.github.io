---
title: "Visual Data Mining"
date: 2008-10-01
category: academic
period: "WS 08/09"
institution: "Bauhaus-Universität Weimar, Virtual Reality and Visualization Research"
supervisors: ["Patrick Riehmann", "Nedim Lipka"]
participants: ["Henning Gründl", "Konstantin Silin", "Carsten Tetens"]
summary: "A framework that combines clustering and multidimensional scaling with 3D visualization to explore large text corpora."
images: ["data-mining.jpg"]
---

In this project we developed a visual data mining framework for analyzing and
exploring large text corpora. Visual data mining combines data mining
algorithms with visualization techniques, adding the creativity, introspection
and imagination of the user to the data mining process. Inhomogeneous and
noisy data become easier to spot, which improves the results of the data
mining algorithms.

We implemented several cluster analysis and multidimensional scaling (MDS)
algorithms. The vector space model we used required every document to be
converted into a vector: stop words were removed and the remaining words were
used to build a global vocabulary. These vectors were then used to compute
the similarity between all documents.

The results of the data mining algorithms served as the basis for a
three-dimensional visualization. The documents could be colored by their
assigned cluster and positioned either by a force-directed layout based on
the computed similarities or by metric MDS. This made visual features such as
clusters, outliers and trends easy to identify. To analyze the content of a
single document or a group of documents, we provided word clouds and word
trees.

The visualizations did not only show the results of the data mining
algorithms. They were also used to evaluate and adjust their input
parameters, so the user could refine the analysis iteratively.
