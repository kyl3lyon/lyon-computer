---
title: "Launch Commit Weather Classification"
description: "Built a launch weather classifier with the SDA TAP Lab to automate “GO/NOGO” decisions at Cape Canaveral, turning manual weather checks into data-driven risk scores for faster, more reliable launch readiness."
date: 2024-12-01
type: projects
layout: layouts/post.njk
permalink: "/projects/launch-commit-weather-classification/index.html"
---
Weather routinely disrupts rocket launches at Cape Canaveral, where the 45th Weather Squadron manually checks conditions against the Launch Commit Criteria. To ease this burden, I built a machine learning classifier to turn weather data into fast, objective “GO” or “NOGO” decisions. The idea emerged after conversations with Space Force meteorologists at the 2023 Data Derby Hackathon, where the limits of manual checks stood out amid rising launch rates.

Using LightGBM for transparency, the model transformed atmospheric variables into risk scores and delivered consistent launch-or-scrub calls despite coarse public weather data and limited historical scrub records. Deployed during SDA TAP Lab Cohorts 4 and 5, it supported real launch decisions, including the Starship IFT-6 mission on November 19, 2024, proving the value of automation in a rapidly scaling launch environment.

<figure>
  <img src="/assets/images/projects/launch-status-classifier.png" alt="Launch Weather Status Classifier">
  <figcaption>Launch Weather Status Classifier</figcaption>
</figure>