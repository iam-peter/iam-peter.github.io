---
title: "Master thesis: Time-varying parallel coordinates"
date: 2011-04-01
category: academic
thesis: true
featured: true
period: "SS 11"
institution: "Bauhaus-Universität Weimar, Virtual Reality and Visualization Research"
supervisors: ["Prof. Dr. Bernd Fröhlich", "Patrick Riehmann"]
summary: "A focus-and-context visualization that embeds time-series plots between the axes of a parallel-coordinates display."
images: ["vanishing-point-plot.png", "multiple-vanishing-points.png", "comparison.png", "time-panel-comparison.png", "simulation-explorer.png"]
publications:
  - "H. Gruendl, P. Riehmann, Y. Pausch, B. Froehlich. *Time-Series Plots Integrated in Parallel-Coordinates Displays.* Computer Graphics Forum 35, 3 (2016), 321–330."
---

The thesis was motivated by a collaboration with a company that develops tools
for robust design optimization of parametric simulations, for example
finite-element analyses. Their simulations produce multivariate time-varying
data sets with a similar structure: independent input parameters, dependent
responses, and criteria evaluated before and after the run. One set of input
values configures a simulation run, which produces mostly time-dependent
responses such as displacement or temperature curves at various locations in
an engine, or crash pulses in a vehicle body. Exploring the design space
produces families of curves for every time-varying response. The trends of
these time series and how the parameters depend on each other over time are
at the core of time-varying multivariate data analysis.

## The problem with time in parallel coordinates

Parallel-coordinates plots (PCP) are an established tool for analyzing
multivariate data, but the traditional two-dimensional plot is of limited use
for time-varying data. Time can be shown as an axis, but this causes heavy
overplotting even for small data sets. For very short time series and few
time-dependent parameters, each point in time can become its own axis, but
that doesn't scale to longer sequences or more parameters. Time-series data
is therefore often analyzed with coordinated multiple views (CMV): the
time-dependent variables are shown in separate views, linked to a
parallel-coordinates plot that only shows time-independent attributes or a
single time step.

## Our approach

We developed a focus-and-context visualization that integrates
pseudo-perspective time-series plots between adjacent axes of a
parallel-coordinates display. The idea is to treat time as an extension of
the parallel-coordinates display in depth. The time-series plots are embedded
in a pseudo-3D perspective to emphasize their spatial relationship. An
independent parallel-coordinates panel connecting two time-series plots can
move forward and backward in time to explore how their relationship changes.
Brushing and selection tools define subsets of the data and work consistently
across the parallel-coordinates displays and the time-series plots.

Each time-series plot shows a single attribute over time for many data
records, in our use case simulation runs. A curve in one plot corresponds to
exactly one curve in the other, both belonging to the same run. Our
time-series vanishing-point widget uses parallel coordinates to show this 1:1
relationship at a single point in time; moving it through time reveals how
the relationship changes.

We integrated the widget into a prototype visual analysis tool for multi-run,
time-dependent, multivariate simulation data and evaluated it with expert
users on a real-world data set. We also applied the tool to other domains
where changes in the relationship of attributes over time matter.
