---
layout: page
permalink: /work/
title: Work
---



<style>
.card:hover .card-header h3 { text-decoration: underline; }
.work-card-image {
  width: 100%;
  height: 190px;          /* adjust as needed */
  object-fit: cover;
  object-position: center;
  display: block;
}.card { cursor: pointer; border: 1px solid var(--border-color); padding: 1rem; margin-bottom: 1.25rem; border-radius: 6px; background: var(--content-bg-color); }
.card-header h3 { margin: 0 0 0.25rem 0; }
.card-meta { font-size: 0.9rem; color: var(--text-color); }
.button-container { margin-top: 0.5rem; }
</style>

<script>
function toggleDescription(id) {
  var element = document.getElementById(id);
  if (!element) return;
  element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
}
</script>

<div class="projects-section">

<div class="card" onclick="toggleDescription('coatingDesc')">
  <img class="work-card-image" src="/assets/images/preview.png" alt="Coating segmentation preview">
  <div class="card-header"><h3>Automation of nuclear material cladding coating measurement process</h3></div>
  <p class="card-meta">Nuclear Research Institute • Bachelor's thesis work</p>
  <div id="coatingDesc" style="display: none; margin-top:0.75rem;">
    <p>This project began as a solution to the time-intensive manual labeling of microscopy images during my work at the Nuclear Research Institute in Řež. I later expanded it into the focus of my bachelor’s thesis. The core objective was to semi-automate the institute’s coating analysis workflow by integrating a trained U-Net model into their existing process.</p>
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
    <p>This Python-based project focuses on processing image pairs—typically “before” and “after” shots—to analyze changes in a grid-like structure. It calculates the elongation and width differences of grid elements between the two images, providing insights into material deformation. The final work was integrated into a web-app.</p>
    <div class="button-container"><a href="https://github.com/emmatekulova/nanoindent_growth_measurments/" class="button">Github Repo</a></div>
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