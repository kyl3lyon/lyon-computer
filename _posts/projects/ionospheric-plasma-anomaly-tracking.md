## Ionospheric Plasma Anomaly Tracking

Demoed an alpha prototype at the SDA TAP Lab in Colorado Springs, showing how SuperDARN radar data can be engineered into a virtual sensor grid. The proof of concept explores the ionosphere as a new sensing layer for detecting space-capable objects.

As space capabilities push beyond conventional flight limits, non-traditional propulsion and exotic orbits increasingly evade legacy sensors.

The prototype software leverages high-frequency data from the SuperDARN radar network. By building a quad-tree grid from overlapping radar coverage, each node operates as a virtual sensor, with fidelity tied to radar density. From the radar’s auto-correlation function (ACF), we extract velocity, power, and spectral width to identify anomalous events—spikes and blips indicative of space-capable velocities. These are stitched into plausible tracks using kinematic constraints.

This first iteration runs on ACF-level data to prove feasibility. Higher fidelity will require raw machine-level inputs. Next steps include validating candidate tracks against historical TLEs to establish baseline performance. The ultimate objective: outputting tracks to the Unified Data Library for unclassified tipping-and-queuing across command-and-control networks—enabling detection of HF radar echoes from hypersonic plasma trails and ionospheric disturbances from orbital debris.

<p style="max-width:100%;text-align:center;">
  <img src="assets/images/projects/ionospheric-plasma-anomaly-detection.gif" alt="Ionospheric Plasma Anomaly Detection Demo" style="max-width:100%;height:auto;display:inline-block;" />
</p>