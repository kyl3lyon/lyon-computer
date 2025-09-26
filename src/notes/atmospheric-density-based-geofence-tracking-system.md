---
title: "$100k Atmospheric Geofence Satellite Tracking Prototype"
description: "Atmospheric Geofence tracks satellites by detecting their disturbances in the upper atmosphere, adding a passive, CCDM-resilient layer to Space Domain Awareness."
date: 2025-05-15
type: notes
layout: layouts/post.njk
permalink: "/notes/atmospheric-geofence-satellite-tracking-prototype/index.html"
---
<figure>
  <img src="/assets/images/notes/kyle-diu.webp" alt="Meeting with Liz McNally, Deputy Director of Commercial Operations at the Defense Innovation Unit" />
  <figcaption>Meeting with Liz McNally, Deputy Director of Commercial Operations at the Defense Innovation Unit.</figcaption>
</figure>

The global reliance on space-based assets is fundamental to modern life and national security. Military operations, from precision navigation and global communications to intelligence, surveillance, and reconnaissance (ISR), are inextricably linked to the capabilities provided by satellites. Civilian sectors, too, depend on space for everything from weather forecasting and financial transactions to agriculture and disaster relief. However, this critical domain is no longer a sanctuary. The operational landscape of space is now an active, contested environment. Nations are developing and deploying a spectrum of counterspace capabilities, including direct-ascent anti-satellite (ASAT) missiles, co-orbital threats, electronic warfare systems, and directed energy weapons. These developments create a precarious situation.

As General Saltzman noted in the "Competitive Endurance" white paper, "Unrestrained military force in space would
create catastrophic orbital debris that endangers the many space capabilities providing prosperity and security for the United States and the world." This underscores a central dilemma: how to protect national interests in space and deter aggression without actions that render orbits unusable for generations, or that push adversaries into positions of desperation or, conversely, embolden them. The imperative is to ensure the U.S. Space Force can field combat-ready forces that "avoid operational surprise, deny first-mover advantage in space, and undertake responsible counter space campaigning."

### Competitive Endurance Shapes Space Combat Strategy
[The Theory of Competitive Endurance](tab:https://www.spaceforce.mil/Portals/2/Documents/White_Paper_Summary_of_Competitive_Endurance.pdf), articulated by General Chance Saltzman, Chief of Space Operations, provides the foundational strategic framework for the U.S. Space Force in this complex era. It is not a call for dominance through overwhelming destructive force, which, as noted, is counterproductive in the space domain. Instead, Competitive Endurance emphasizes achieving and maintaining space superiority through sustained, intelligent, and responsible competition. It aims to ensure the Joint Force's ability to operate in, from, and to space when necessary, while preserving the safety, security, stability, and long-term sustainability of the domain.

The theory’s three core tenets guide this approach:

*   **Avoiding Operational Surprise:** This necessitates a profound and persistent understanding of the space environment. It involves detecting and preempting any actions or conditions be they adversarial maneuvers, natural phenomena, or unintentional interference that could compromise the ability of the Joint Force to achieve its objectives. This requires advanced Space Domain Awareness (SDA) capabilities that go beyond simply cataloging objects.

*   **Denying First-Mover Advantage:** The current visibility and predictability of many space architectures can favor offensive action. Competitive Endurance seeks to render a preemptive strike against U.S. space assets impractical and self-defeating. This involves fielding resilient constellations, diversifying capabilities, enhancing protection measures, and ensuring the ability to rapidly reconstitute critical functions if attacked.

*   **Responsible Counterspace Campaigning:** When faced with malign activity, the response must be measured and preserve the domain. This means confronting threats through protracted, day-to-day competition, often below the threshold of armed conflict. Should deterrence fail, actions taken to protect U.S. interests must be conducted responsibly, avoiding the generation of hazardous debris that would indiscriminately threaten all space users.

Competitive Endurance is thus a strategy of vigilance, resilience, and principled action, designed to navigate the intricate challenges of a domain where escalation carries unique and lasting consequences.

### The SDA TAP Lab Operationalizes Competitive Endurance

<figure>
  <img src="/assets/images/notes/ssc_sdataplab.webp" alt="SDA TAP Lab in Colorado Springs" />
  <figcaption>The SDA TAP Lab in Colorado Springs accelerates the delivery of advanced space battle management tools to the U.S. Space Force.</figcaption>
</figure>

[The SDA Tools, Applications, and Processing (SDA TAP)](tab:https://sdataplab.org/) Lab in Colorado Springs serves as a critical conduit for translating the strategic vision of Competitive Endurance into tangible, operator-focused software capabilities. The Lab's mission is to accelerate the delivery of advanced space battle management tools to the U.S. Space Force. It achieves this by deeply understanding operator needs through methodologies like **Kill Chain Decomposition (KCD)**. KCD analytically dissects potential adversary threat profiles, from the launch of an ASAT to the subtle maneuvering of a co-orbital inspector satellite into distinct phases. This allows the Lab to identify critical points where timely information or specific capabilities can disrupt the adversary's actions, thereby informing software development priorities that directly support the tenets of Competitive Endurance.

The Apollo Accelerator program, hosted by the TAP Lab, is a key initiative in this effort. It provides a collaborative environment where industry, academia, and government personnel can rapidly prototype and iterate on solutions to pressing SDA challenges. Having participated in Cohorts 4 and 5, I gained firsthand experience with the Lab's focus on practical application and operator feedback, which was invaluable in shaping the approach to SDA.
 
### The INDOPACOM AOR Underscores Rising SDA Pressure
The Indo-Pacific Command (INDOPACOM) Area of Responsibility is arguably one of the most strategically vital and operationally challenging theaters on the globe. Its vast geographic expanse, encompassing nearly half the Earth's surface, major global shipping lanes, numerous island chains, and the territories of key allies and strategic competitors, makes comprehensive SDA exceptionally difficult. The region presents a confluence of factors that strain traditional SDA capabilities:

*   **Geographic Scale and Environmental Factors:** The sheer size of the AOR requires distributed sensor networks. Persistent cloud cover over large swathes of the Pacific and Southeast Asia frequently limits the effectiveness of ground-based optical sensors. The dynamic ionosphere in equatorial regions can disrupt RF signals.

*   **Operational Density:** The INDOPACOM AOR sees high volumes of air and maritime traffic, alongside significant commercial and military satellite activity, creating a dense and complex operational picture.

*   **Adversarial Capabilities and CCDM:** Regional actors possess increasingly sophisticated space and counterspace capabilities and are adept at employing Camouflage, Concealment, Deception, and Maneuver (CCDM) to obscure their intentions and evade detection.

Sustaining space domain awareness in this environment is essential not just for operational readiness, but for preserving regional balance and safeguarding U.S. and allied assets.

### Dual Horizons Challenge Demands Fresh SDA Solutions

<figure>
  <img src="/assets/images/notes/dual_horizons.webp" alt="Dual Horizons: U.S.-India Satellite Tracking Challenge" />
  <figcaption>Dual Horizons: U.S.-India Satellite Tracking Challenge—advancing SDA innovation through U.S.-India collaboration.</figcaption>
</figure>

Recognizing the acute SDA challenges in the INDOPACOM AOR, the Defense Innovation Unit (DIU), an organization within the Department of Defense tasked with accelerating the adoption of commercial technology, partnered with USSPACEFOR-INDOPAC, the SDA TAP Lab, and India’s Innovations for Defence Excellence (iDEX) to launch the [Dual Horizons: U.S.-India Satellite Tracking Challenge](tab:https://nsin.mil/events/2025-01-09-us-india-satellite-tracking-challenge/). This bilateral initiative, part of the broader INDUS-X framework to vitalize U.S.-India defense industrial cooperation, specifically sought innovative algorithms to dynamically detect and track LEO satellites transiting the INDOPACOM AOR, particularly those that may have recently maneuvered or were employing CCDM.

The core problem was clear: in a contested environment, the failure to rapidly reacquire threats on-orbit leaves the Joint Force vulnerable. The challenge required participants to develop solutions capable of producing high-quality state vectors (position, velocity, and uncertainty information) or Two-Line Element sets (TLEs), a standard data format describing the orbit of an Earth-orbiting satellite, for these elusive targets in near real-time. While participants could aggregate data from various sources, a neutral atmospheric density dataset was provided as a potentially useful, though not mandatory, resource. Winning the challenge required not just a novel algorithm, but a well-articulated concept of operations, technical soundness, and a clear demonstration of how the proposed solution addressed the specific technical specifications and operational needs outlined by DIU and its partners.

During my participation in Cohort 6 of the Apollo Accelerator, I focused efforts on this demanding problem. I am honored to state that my atmospheric density-based geofence tracking system pitch and prototype [secured first place in the Dual Horizons challenge](tab:https://www.linkedin.com/posts/diux_defense-innovation-unit-diu-team-members-activity-7328051331057729536-dWj1), earning $100,000 from the $150,000 prize pool. DIU's official citation highlighted the system for its "novel tracking algorithms that directly addressed threats posed by adversarial satellite maneuvers using concealment and deception." This recognition subsequently led to an award from the SDA TAP Lab to further mature this technology, commencing with participation in Cohort 7.

### Atmospheric Density Enables a New Model for SDA

The system introduces a fundamentally new modality for Space Domain Awareness by leveraging the Earth's upper atmosphere, specifically the thermosphere (altitudes ranging roughly from 100 km to 600 km), as a vast, distributed sensor medium. The scientific basis for this approach is rooted in well-established principles of fluid dynamics and gas-kinetic theory as they apply to the rarefied atmospheric conditions prevalent at these altitudes.

When a satellite transits LEO at hypersonic velocities (approximately 7-8 kilometers per second), it interacts significantly with the ambient neutral atmospheric constituents, which are primarily atomic oxygen, nitrogen, and helium. This interaction is not trivial; it creates distinct, albeit subtle and transient, perturbations in the local atmospheric density field. Two primary phenomena are of interest:

*   **Wake Formation:** Directly behind the satellite, a region of significantly reduced neutral density forms. This "umbra" or rarefied wake occurs because atmospheric particles are swept aside or absorbed by the satellite's surface more rapidly than ambient thermal motion can replenish the void. The extent and characteristics of this wake are influenced by factors such as the satellite's size, shape, velocity, and the background atmospheric conditions.

*   **Compression Region:** Preceding the satellite, a region of localized density enhancement, akin to a bow shock in denser fluids, can form as incident atmospheric particles accumulate.

The core of the prototype is a computationally defined, three-dimensional "geofence," a grid of virtual, computationally defined monitoring nodes (prisms) strategically distributed within LEO. These nodes are designed to analyze localized, transient changes in atmospheric density patterns hypothesized to correlate with satellite transits. The innovation lies not just in detecting absolute density changes, which can be heavily influenced by broad space weather events (solar flares, geomagnetic storms), but more critically, in identifying subtle shifts in the **heterogeneity** or "texture" of the density field within these geofence volumes. A satellite passing through a node, by creating both a leading compression and a trailing wake, fundamentally alters this local density texture in a characteristic temporal sequence. Detecting this pattern change is key.

This atmospheric sensing approach offers distinct advantages and fills critical capability gaps:

*   **Complementary Modality:** It operates independently of traditional optical, radar, or RF sensors, each of which has its own vulnerabilities (e.g., weather dependency for optical, line-of-sight requirements, spectrum congestion or jamming for RF). This provides data diversity crucial for robust SDA.

*   **Potential for CCDM Counter:** Satellites attempting to evade detection through optical or RF stealth, or by maneuvering in sensor shadow zones, may still induce detectable atmospheric perturbations. Their physical presence cannot be entirely masked from interaction with the atmosphere.

*   **Passive and Non-Intrusive:** The system is entirely passive, observing naturally occurring atmospheric phenomena. It generates no emissions that could reveal its own presence or methods and, importantly, creates no orbital debris, aligning perfectly with the principles of responsible counter space operations.

### Cohort 7 Aligns Inputs Outputs and Battle Management
Participation in Cohort 7 of the Apollo Accelerato is dedicated to the maturation of the atmospheric density-based geofence tracking system and, crucially, its deep integration within the broader SDA ecosystem, particularly with battle management frameworks like **Welder's Arc**. This system is conceptualized not as a standalone sensor but as an integrated component designed for bidirectional data exchange, enhancing overall situational awareness.

**Scalable Geofence Deployment Strategies:**
The operational concept envisions a network of these computationally defined 3D monitoring nodes forming a distributed, adaptable "geofence."

*   **Targeted Monitoring:** Nodes can be strategically placed along high-traffic orbital corridors, critical geographic regions (e.g., INDOPACOM AOR boundaries or choke points), or dynamically instantiated by C2 systems to monitor predicted paths of specific high-interest objects.

*   **Resource Allocation and Dynamic Tasking:** The computational nature allows for focused resource allocation. Upon initial detection or correlation of a track, the system architecture can support spawning "follower" tasks that dynamically define and monitor subsequent geofence nodes along an estimated trajectory, enabling continuous track maintenance or focused reacquisition efforts.

**Bidirectional Integration and Contributions TO the Ecosystem (Welder's Arc Subsystems):**
The system is designed to be both a producer and a consumer of data.

As a Data Producer (Outputs):
*   **Unique Observational Data (for Sensors & Data Handling):** It provides a distinct data stream based on atmospheric density perturbations. This complements traditional RF, optical, and infrared sensors and offers resilience against conditions (weather, EM interference, certain CCDM) that may degrade other sensor types. Outputs include node-level density statistics, atmospheric variance metrics (indicative of the density field's heterogeneity), anomaly flags, and correlated detection timings. This unique data offers a new layer of insight for the overall sensor network.

*   **Data for Fusion & State Estimation:** Detection flags, correlated track segments (identifying specific node crossings over time), and preliminary state estimates or TLEs serve as direct inputs for data fusion engines and state estimation filters. This data enhances critical functions such as:
    *   *Track Initiation:* Providing initial orbit estimates for newly detected or uncorrelated objects, helping to quickly establish custody.

    *   *Track Maintenance/Update:* Offering positional and timing observations to refine existing orbital data for known objects, which is particularly valuable after an object has maneuvered and its previous trajectory is no longer accurate.

    *   *Anomaly Resolution:* Flagging detections that are inconsistent with known objects or their predicted behaviors, prompting further investigation and helping to answer the crucial question: "Is something new or unexpected out there?"

*   **Cueing & Tasking Information (for Command & Control):** Confirmed atmospheric detections or high-confidence anomaly flags can serve as valuable cues. This information can direct other, often higher-fidelity, sensors (like radar or optical telescopes) to a specific region of interest for more detailed confirmation or characterization, thereby optimizing the use of scarce sensor resources.

*   **Evidence for CCDM Evaluation & Hostility Monitoring:** Detections that significantly deviate from predicted paths for instance, an object appearing where it shouldn't or disappearing unexpectedly based on its last known trajectory can provide tangible evidence. This supports the assessment of potential maneuvers or sophisticated CCDM activities, contributing to a broader situational understanding, especially when fused with other intelligence sources.

*   **Informing Response Recommendations:** Early indications of potentially threatening maneuvers or unexpected activity, derived from atmospheric sensing, can significantly inform the timeliness, nature, and proportionality of potential response options. This provides decision-makers with a more complete and nuanced operational picture from which to act.

As a Data Consumer (Inputs):
*   **Improved Atmospheric Baselines (via Sensors & Data Handling):** The system's detection sensitivity is fundamentally linked to the accuracy of the background atmospheric density field. Its performance can be directly improved by consuming higher-fidelity baseline data generated by:
    *   Advanced physics-based atmospheric models (e.g., TIE-GCM, WACCM-X) operated elsewhere.

    *   Data assimilation products (like HASDM or future equivalents) that fuse real-time observations into atmospheric models.

    *   Outputs from specialized atmospheric monitoring sensors or dedicated research efforts.

*   **Known Object Ephemerides and Tasking (via Data Handling & Command & Control):**
    *   Access to reliable TLE catalogs (e.g., from Space-Track.org, CelesTrak) or precise state vector feeds for known objects is essential. This allows the system to predict expected transits, correlate its detections, and accurately identify genuinely uncorrelated or anomalous events.

    *   The system can receive tasking orders from C2, defining specific geofence volumes, altitude bands, or target objects for focused monitoring based on current operational priorities or inputs from other intelligence capabilities (e.g., Target Nomination).

*   **Simulation Outputs for Validation (from State Estimation Teams):** The system can ingest simulated trajectory data, particularly hypotheses about post-maneuver orbits generated by state estimation teams. By comparing the atmospheric perturbation signature predicted by these simulations against the signature actually observed by its geofence nodes, the system can provide valuable feedback on which simulation best matches reality, thereby aiding in precise maneuver characterization.

*   **External Sensor Data for Enhanced Fusion (via Sensors & Data Handling):** While the core detection mechanism relies on atmospheric density, future iterations could incorporate data from other collocated or correlated sensors. For example, local plasma density measurements or magnetic field fluctuations could be fused into its detection algorithms as additional features to improve signal discrimination, reduce false alarm rates, and potentially offer richer characterization.

**Enhancing Broader SDA Capabilities:**
Through this deep, bidirectional integration, the atmospheric tracking system contributes to:

*   **Search and Reacquire:** Its capacity for persistent monitoring within defined geofence volumes allows for the detection of unexpected transits (objects appearing in an 'unexpected' state), providing crucial cues for reacquisition sensors. The ability to generate even a preliminary TLE from correlated detections directly supports initiating the reacquisition process.

*   **Event Detection (Maneuver):** The system can directly detect maneuvers that cause a deviation from an object's predicted path. This is often flagged by a transition from a 'correlated' or 'expecting' state to a 'lost' state in one node sequence, potentially followed by an 'unexpected' detection in another nearby node sequence.

*   **Track Correlation & Anomaly Detection:** It provides an independent data source for correlating ambiguous tracks generated by other sensors. Uncorrelated tracks from the atmospheric system represent potential new objects or significant maneuvers requiring further investigation, helping to confirm "is something there?" even if the precise identity isn't immediately known.

*   **Target Nomination:** Uncorrelated tracks or significant maneuver detections identified by the system can serve as high-priority nominations for tasking characterization assets.

*   **(Potential Future) Launch/Reentry Monitoring:** While currently focused on LEO transits, the fundamental physics could potentially be adapted, or nodes strategically placed, to detect density anomalies associated with the ascent or decay phases of space objects, though this would require specific investigation and algorithm refinement.

The operational value is maximized through data fusion — ingesting the best atmospheric specifications (Atmospheric Baseline Fusion), correlating detection flags with other sensors (Sensor-Level Fusion), and fusing generated tracks/TLEs with other sensor data in central estimation filters (Track-Level Fusion). 

The opportunity to contribute this system to the United States' defense apparatus is a profound one, and the work in Cohort 7 is pivotal to realizing its full operational potential.

### Strategic Awareness Advances in a New Space Era
The character of conflict in the space domain necessitates continuous innovation and adaptation. Strategic frameworks like Competitive Endurance provide the essential vision for navigating this complex environment. Initiatives such as the SDA TAP Lab and the Dual Horizons challenge are critical for fostering and accelerating the development of novel solutions that can meet the evolving threats. The atmospheric density-based geofence tracking system represents one such innovation, offering a new paradigm for enhancing Space Domain Awareness. As this technology matures through rigorous development and integration with next-generation battle management systems, its potential to contribute significantly to avoiding operational surprise, supporting responsible counter space operations, and ultimately ensuring the security of U.S. and allied interests in space is substantial. The path from scientific concept to operational capability is challenging, but the imperative to secure the high ground demands nothing less.
