## Launch Commit Weather Classification

Weather has a way of holding rocket launches hostage, and at Cape Canaveral, the 45th Weather Squadron contends with it daily, parsing spreadsheets by hand to determine if conditions align with the Launch Commit Criteria. I set out to build a classifier that could shoulder some of that load, turning weather data into a straightforward “GO” or “NOGO” verdict. Though this project ran under Silicon Mountain Technologies for the SDA TAP Lab, the idea sparked from conversations I had with Space Force meteorologists attending the 2023 Data Derby Hackathon, where their manual process struck me as increasingly untenable given the uptick in launch schedules. The goal was a tool that worked locally, with potential to fine-tune for other national aerospace program geographies as an intelligence tool.

The data posed immediate constraints as OpenMeteo’s API delivered hourly weather at 3 km resolution, useful but coarse, and historical launch records skewed toward successful launches, as scrubs and delays were underrepresented in public and government databases. The Kennedy Space Center did offer better granular data, but its data lagged in programmability and timeliness. I used LightGBM for transparency, and leaned on piecewise transformations to refine the weather inputs, translating atmospheric variables such as wind, cloud, and instability into risk scores anchored by statistical thresholds.

The classifier that emerged performed respectably consistent on clear launch-or-scrub decisions. The team presented and deployed it at the SDA TAP Lab Cohort 4 and 5, where it held up under review as it supported a satisfactory decision for the Starship IFT-6 Launch Experiment on November 19, 2024.

The SDA TAP Lab, where this played out, is a Space Force effort in Colorado Springs focused on accelerating tech solutions for space domain awareness—think detecting threats or, in my case, predicting launch weather. It runs 3-month cycles, like Cohorts 4 and 5, bringing together industry, academia, and operators to tackle defense challenges fast. It’s a sandbox with data and tools, pushing collaboration over bureaucracy, and it gave me a platform to test and refine this classifier.

<figure>
  <img src="assets/images/projects/launch-status-classifier.png" alt="Launch Weather Status Classifier">
  <figcaption>Launch Weather Status Classifier</figcaption>
</figure>