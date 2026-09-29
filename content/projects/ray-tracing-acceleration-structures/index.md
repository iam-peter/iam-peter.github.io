---
title: "Acceleration Structures for Real-Time Ray Tracing"
date: 2010-04-01
category: academic
period: "SS 10"
institution: "Bauhaus-Universität Weimar, Virtual Reality and Visualization Research"
supervisors: ["Prof. Dr. Bernd Fröhlich", "Stephan Beck"]
participants: ["Sascha Gärtner", "Henning Gründl", "Sebastian Thiele"]
summary: "A multithreaded CPU ray tracer with global illumination, comparing k-d trees, BVHs and BIHs."
images: ["conference.jpg", "clio.jpg", "lucy.jpg", "four-spheres.jpg"]
---

The aim of this project was the design and implementation of a real-time ray
tracing system with global illumination for static scenes of medium
complexity. The system relied on several acceleration structures and on the
features of modern hardware, such as parallelism and large amounts of system
memory.

Acceleration structures speed up ray/primitive intersection tests
significantly by subdividing the scene spatially and hierarchically. In the
first stage we implemented a *k*-d tree, a bounding volume hierarchy (BVH)
and a bounding interval hierarchy (BIH). In the second stage we tuned the
configuration of each technique and evaluated their performance. Although the
BIH took longer to build than the BVH, it rendered most of our test scenes
faster.

To increase the rendering performance further, the image was divided into
equally sized tiles, each rendered by a separate thread. This parallelized the
work, but the load was unbalanced since it depends heavily on the scene and
the camera. Dynamically adapting the size and position of the tiles balanced
the load better and improved performance in the end.
