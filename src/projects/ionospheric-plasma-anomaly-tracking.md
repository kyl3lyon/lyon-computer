---
title: "Ionospheric Plasma Anomaly Tracking"
description: "Demoed an alpha prototype at SDA TAP Lab using SuperDARN radar data to build a virtual sensor grid, exploring the ionosphere as a new sensing layer for detecting space-capable objects."
date: 2025-07-19
type: projects
layout: layouts/post.njk
permalink: "/projects/ionospheric-plasma-anomaly-tracking/index.html"
---
At the SDA TAP Lab in Colorado Springs, I demoed an alpha prototype exploring how SuperDARN radar data can be transformed into a virtual sensor grid, turning the ionosphere itself into a new sensing layer for detecting space-capable objects. As space operations push beyond conventional flight limits, with non-traditional propulsion and exotic orbits increasingly evading legacy sensors, fresh detection methods are essential.

The prototype software leverages high-frequency data from the SuperDARN radar network. Using overlapping radar coverage, it builds a quad-tree grid where each node acts as a virtual sensor, its fidelity tied to radar density. From the radar’s auto-correlation function (ACF), we extract velocity, power, and spectral width to identify anomalous events, spikes or blips characteristic of space-capable velocities, and stitch them into plausible tracks using kinematic constraints. This first iteration runs on ACF-level data to prove feasibility, with higher fidelity to come from raw machine-level inputs. Next steps include validating candidate tracks against historical TLEs to establish baseline performance, ultimately feeding tracks to the Unified Data Library for unclassified tipping-and-queuing across command-and-control networks. The goal: enable detection of HF radar echoes from hypersonic plasma trails and ionospheric disturbances caused by orbital debris.

<figure>
  <img src="/assets/images/projects/ionospheric-plasma-anomaly-detection.gif" alt="Ionospheric Plasma Anomaly Detection Demo" />
  <figcaption>Ionospheric Plasma Anomaly Detection Demo</figcaption>
</figure>