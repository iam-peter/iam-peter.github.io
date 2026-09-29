---
title: "Acceleration Structures for Real-Time Ray Tracing II"
date: 2010-10-02
category: academic
featured: true
period: "WS 10/11"
institution: "Bauhaus-Universität Weimar, Virtual Reality and Visualization Research"
supervisors: ["Prof. Dr. Bernd Fröhlich", "Stephan Beck"]
participants: ["Henning Gründl", "Sebastian Thiele"]
tools: ["C++", "CUDA"]
summary: "Real-time construction of bounding interval hierarchies on the GPU with CUDA, for ray tracing dynamic scenes."
images: ["bmw-330i.png", "action.jpg", "lancia.png", "four-spheres-cuda.jpg"]
---

Building on the [first project]({{< relref "ray-tracing-acceleration-structures" >}}),
the goal was a BIH (bounding interval hierarchy) construction algorithm for
the GPU that reaches real-time performance by making full use of the
hardware. The algorithm builds tree nodes in breadth-first order to exploit
the fine-grained parallelism of modern GPUs at every stage of the
construction.

Modern GPUs are massively parallel and need 10³–10⁴ threads for optimal
performance. Breadth-first order fits this architecture well: at each step,
every node on the current tree level spawns a new thread, so the number of
threads doubles from one step to the next.

We integrated the BIH builder into a GPU ray tracer for arbitrary dynamic
scenes. It reached interactive frame rates with shadows and multi-bounce
reflection and refraction. BIH traversal on the GPU used a conventional
stack-based scheme with a local stack per thread, implemented efficiently in
CUDA as a fixed-size array in thread-local memory. Our GPU ray tracer handled
dynamic scenes and outperformed a state-of-the-art multicore CPU ray tracer.
