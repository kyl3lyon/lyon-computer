---
title: "Predictive UAS Response Platform for Layered Engagement"
description: "PURPLE is the decision layer for counter-UAS operations that fuses multi-sensor tracks under zone-specific rules of engagement, applies agentic consensus gated by deterministic escalation rules, and produces fully auditable response recommendations."
date: 2025-12-01
type: projects
layout: layouts/post.njk
permalink: "/projects/purple/index.html"
---

Counter-UAS work has converged on one question: how do you bring the drone down. The market is full of better jammers, nets, and interceptors. The operators I worked with have a different problem. A single track shows up first as an acoustic ping, then an RF fingerprint, then a shape on a camera, and the operator has to fuse it, decide what it is, and pick a response while reconciling shifting airspace restrictions, overlapping legal authorities, and rules of engagement that change from one zone to the next. When the tooling answers with endless alerts and dropdowns, they fall back to phone calls. PURPLE is built for that gap — not the effector, but the layer that decides whether to use one, who holds the authority, and what the rules permit, and that can reconstruct the reasoning afterward.

<figure>
  <img src="/assets/images/projects/purple-predictive-uas-operator-console.png" alt="PURPLE Operator Console with live multi-sensor track fusion, camera evidence, and zone policy" />
  <figcaption>PURPLE Operator Console displaying fused tracks, live video, and applicable zone policies.</figcaption>
</figure>

PURPLE runs a deterministic perception tier: real-time detection, tracking, and camera-anchored monocular localization that places a drone on the map from a fixed camera's geometry alone, with no GPS telemetry. Every sensor inherits its zone's rules of engagement, standard operating procedures, and jurisdictions, so a detection is scored in the authority context where it occurred. Above that sit agentic layers that reach consensus on environment and signal, then triage the threat and recommend a response — but the recommendation walks a rule-based, time-graduated escalation ladder rather than a model's free choice. 

<figure>
  <img src="/assets/images/projects/purple-predictive-uas-pipeline-monitor.png" alt="PURPLE Pipeline Monitor showing layered detection, consensus, and threat triage agents" />
  <figcaption>PURPLE Pipeline Monitor: detection agents feed into consensus and threat triage layers.</figcaption>
</figure>

That is the design bet worth stating plainly: generative models from leading research labs are strong at synthesis, citation, and operator-readable narrative, and wrong as the thing that authorizes a kinetic shot. So the model reasons and explains; deterministic rules gate what it is allowed to surface, and a hard floor overrides it on a confirmed breach. Low-consequence actions can auto-approve, anything destructive stops for a human, and every step persists as an auditable record. 

<figure>
  <img src="/assets/images/projects/purple-predictive-uas-zones-settings.png" alt="PURPLE Zones and Policies settings interface with sensor placement and rules configuration" />
  <figcaption>PURPLE Zones and Policies configuration showing NFZ, TFR, and rules of engagement per zone.</figcaption>
</figure>

The next step is generalizing the regulatory layer so any operator can load their own policy and command media, swap detectors and model providers behind stable interfaces, and carry the localization onto moving platforms for convoy defense.
