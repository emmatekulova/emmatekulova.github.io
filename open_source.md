---
layout: page
permalink: /open_source/
title: Open Source
order: 4
---

<style>
.card:hover .card-header h3 { text-decoration: underline; }
.card { cursor: pointer; border: 1px solid var(--border-color); padding: 1rem; margin-bottom: 1.25rem; border-radius: 6px; background: var(--content-bg-color); }
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

<div class="card" onclick="toggleDescription('rdmoDesc')">
  <div class="card-header"><h3>RDMO</h3></div>
  <p class="card-meta">First open-source contribution • Darmstadt Sprints</p>
  <div id="rdmoDesc" style="display: none; margin-top:0.75rem;">
    <p>My first open-source contribution. I solved this issue at the sprints in Darmstadt</p>
    <div class="button-container"><a href="https://github.com/rdmorganiser/rdmo/issues/1563#event-26612211407" class="button" target="_blank">GitHub Issue</a></div>
  </div>
</div>

</div>
