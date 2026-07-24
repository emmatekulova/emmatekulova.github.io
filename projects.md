---
layout: page
title: Projects
permalink: /projects/
order: 3
---

<style>
.card { cursor: pointer; }
.card:hover .card-header h3 {
    text-decoration: underline;
}
.work-card-image {
  width: 100%;
  height: 190px;
  object-fit: cover;
  object-position: center;
  display: block;
}
.projects-section > h3 { margin-top: 2rem; }
.projects-section > h3:first-of-type { margin-top: 0; }
</style>

<script>
function toggleDescription(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
</script>
<div class="projects-section">

<h3 id="rez">Řež – Nuclear Research Institute</h3>

<div class="card" onclick="toggleDescription('coatingDesc')">
  <img class="work-card-image" src="/assets/images/preview.png" alt="Coating segmentation preview">
  <div class="card-header"><h3>Automation of nuclear material cladding coating measurement process</h3></div>
  <p class="card-meta">Nuclear Research Institute • Bachelor's thesis work</p>
  <div id="coatingDesc" style="display: none; margin-top:0.75rem;">
    <p>This project began as a solution to the time-intensive manual labeling of microscopy images during my work at the Nuclear Research Institute in Řež. I later expanded it into the focus of my bachelor's thesis. The core objective was to semi-automate the institute's coating analysis workflow by integrating a trained U-Net model into their existing process.</p>
    <p>A major part of the work involved building a custom dataset from scratch, as no suitable dataset previously existed. The training process, model architecture, and dataset creation are all thoroughly documented in the thesis.</p>
    <p>Through this work, I learned how to collect and process data in close collaboration with domain experts, train deep learning models for image segmentation, and integrate them into practical workflows. I gained hands-on experience with Python, OpenCV, PyTorch, Docker, and a range of machine learning tools and libraries.</p>
    <div class="button-container"><a href="https://github.com/emmatekulova/coating_detection" class="button">Github Repo</a> <a href="https://github.com/emmatekulova/Automation_of_coating_measurement_process" class="button">Bachelor Thesis</a></div>
  </div>
</div>

<div class="card" onclick="toggleDescription('nanoDesc')">
  <img class="work-card-image" src="/assets/images/vertex.png" alt="Nanoindent growth measurement preview">
  <div class="card-header"><h3>Nanoindent growth measurements + web app</h3></div>
  <p class="card-meta">Measurement process automation • web app </p>
  <div id="nanoDesc" style="display: none; margin-top:0.75rem;">
    <p>This Python-based project focuses on processing image pairs—typically "before" and "after" shots—to analyze changes in a grid-like structure. It calculates the elongation and width differences of grid elements between the two images, providing insights into material deformation. The final work was integrated into a web-app.</p>
    <div class="button-container"><a href="https://github.com/emmatekulova/nanoindent_growth_measurments/" class="button">Github Repo</a></div>
  </div>
</div>

<div class="card" onclick="toggleDescription('segmentation-lightning-base')">
    <div class="card-header">
        <h3>Library - segmentation-lightning-base</h3>
    </div>
    <p class="card-tags">
        <span class="tag">Řež</span>
        <span class="tag">Computer Vision</span>
    </p>
    <div id="segmentation-lightning-base" style="display: none;">
        <p>
            During my work in Řež, I contributed to the library for training segmentation models. I add integration of Optuna for hyperparameter tuning. 
        </p>
        <div class="card-links">
            <a href="https://github.com/research-centre-rez/segmentation-lightning-base" class="button" target="_blank">Our Project</a>
        </div>
    </div>
</div>

<h3 id="hackathons">Hackathons</h3>

<div class="card" onclick="toggleDescription('ethglobalDesc')">
    <div class="card-header">
        <h3>ETHGlobal - Hackathon</h3>
        <div class="card-meta">
            Buenos Aires, Argentina 🇦🇷 • 11/2025 • 
        </div>
    </div>
    <p class="card-tags">
        <span class="tag">Blockchain</span>
        <span class="tag">Data analysis</span>
        <span class="tag">Ethereum</span>
    </p>
    <div id="ethglobalDesc" style="display: none;">
        <p>
            I helped build WiFi-Radar, a decentralized “public good” platform that makes it easy to find and verify real Wi-Fi hotspots. Our system uses cryptographic verification and real-time testing so that every listed hotspot is accurate and trustworthy, and contributors can add new locations through a simple interactive map.
        </p>
        <div class="card-links">
            <a href="https://ethglobal.com/showcase/wifi-radar-jsqac" class="button" target="_blank">Our Project</a>
        </div>
    </div>
</div>

<div class="card" onclick="toggleDescription('efmevDesc')">
    <div class="card-header">
        <h3>Ethereum Foundation Research Challenge x TUM Blockchain Conference</h3>
        <div class="card-meta">
            Munich, Germany 🇩🇪 • 12/09/2025 • 
            <span class="project-award">🏅 Honorary Mention</span>
        </div>
    </div>
    <p class="card-tags">
        <span class="tag">Blockchain</span>
        <span class="tag">Data analysis</span>
        <span class="tag">MEV Analysis</span>
        <span class="tag">Ethereum</span>
    </p>
    <div id="efmevDesc" style="display: none;">
        <p>
            Explored the characteristics of **sandwich attacks** on the Ethereum blockchain. Gained hands-on experience with blockchain data analysis, understanding MEV concepts, the mempool, gas fees, and transaction ordering.
        </p>
        <div class="card-links">
            <a href="https://apply.tum-blockchain.com/ef-research-challenge" class="button" target="_blank">Program Info</a>
            <a href="https://github.com/emmatekulova/EF-Research-Challenge-x-TUM-Blockchain-Club/tree/main" class="button" target="_blank">GitHub Repo</a>
        </div>
    </div>
</div>

<div class="card" onclick="toggleDescription('flexproverDesc')">
    <div class="card-header">
        <h3>FlexProver</h3>
        <div class="card-meta">
            ETHGlobal Cannes 2026 • 
            <span class="project-award">🥈 2nd Place – Flare Network Prize</span>
        </div>
    </div>
    <p class="card-tags">
        <span class="tag">Blockchain</span>
        <span class="tag">Flare</span>
        <span class="tag">TEE</span>
        <span class="tag">Smart Accounts</span>
    </p>
    <div id="flexproverDesc" style="display: none;">
        <p>
            TBD
        </p>
        <div class="card-links">
            <a href="https://ethglobal.com/showcase/flexprover-7xuf8" class="button" target="_blank">Our Project</a>
        </div>
    </div>
</div>

<div class="card" onclick="toggleDescription('aiprohealthDesc')">
    <div class="card-header">
        <h3>AIProHealth Summer School</h3>
        <div class="card-meta">
            Tartu, Estonia 🇪🇪 • 12/08/2024 – 30/08/2024 • 
            <span class="project-award">🥈 2nd Place (Hackathon)</span>
        </div>
    </div>
    <p class="card-tags">
        <span class="tag">Healthcare</span>
        <span class="tag">AI</span>
        <span class="tag">EU Regulation</span>
    </p>
    <div id="aiprohealthDesc" style="display: none;">
        <p>
            Participated in the AIProHealth summer school focused on advancing AI solutions in healthcare. As part of an interdisciplinary team, we developed a prototype of a digital medical device aimed at helping doctors predict early onset preeclampsia in pregnant women, potentially reducing healthcare costs and saving lives. I was responsible for the technical aspects of the machine learning model.
        </p>
        <div class="card-links">
            <a href="https://eithealth.eu/programmes/aiprohealth/" class="button" target="_blank">Program Info</a>
            <a href="/assets/presentations/tartu_presentation.pdf" class="button">Presentation</a>
        </div>
    </div>
</div>

<h3 id="other">Academic & Other</h3>

<div class="card" onclick="toggleDescription('sscDesc')">
    <div class="card-header">
        <h3>Student Scientific Conference</h3>
        <div class="card-meta">
            University of Chemistry and Technology, Prague 🇨🇿 • 28/11/2024 
            <span class="project-award">🥇 1st Place</span>
        </div>
    </div>
    <p class="card-tags">
        <span class="tag">Scientific Presentation</span>
        <span class="tag">Bachelor Thesis</span>
    </p>
    <div id="sscDesc" style="display: none;">
        <p>
            Presented my bachelor thesis research at the annual Student Scientific Conference alongside top student projects from across the university in my field.
        </p>
        <div class="card-links">
            <a href="/assets/presentations/SVK_presentation_24.pdf" class="button">Presentation</a>
        </div>
    </div>
</div>

<div class="card" onclick="toggleDescription('racemDesc')">
  <img class="work-card-image" src="/assets/images/uochb2.png" alt="Racemization of n-Helicenes">
  <div class="card-header"><h3>Racemization of n-Helicenes</h3></div>
  <p class="card-meta">Computational chemistry: transition states, IR spectra</p>
  <div id="racemDesc" style="display: none; margin-top:0.75rem;">
    <p>I worked on the racemization properties of several helicenes, including <b>pentahelicene</b>, <b>hexahelicene</b>, <b>heptahelicene</b>, and <b>dinaphtho[5]helicene</b>. My research focused on calculating <b>racemization barriers</b>, identifying <b>transition states</b>, and analyzing <b>IR spectra</b>.</p>
    <p>Along the way, I gained experience with tools like <b>Gaussian</b>, <b>VMD</b>, <b>Avogadro</b> and <b>QuantumATK</b> for molecular modeling and simulation.</p>
    <div class="button-container"><a href="/assets/presentations/uochb_presentation.pdf" class="button">Mid-Project Presentation</a></div>
  </div>
</div>

</div>
