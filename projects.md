---
layout: page
title: projects
permalink: /projects/
order: 3
---

<style>
.card:hover .card-header h3 {
    text-decoration: underline;
}
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
    <div class="card" onclick="toggleDescription('aiprohealthDesc')">
        <div class="card-header">
            <h3>AIProHealth Summer School</h3>
            <div class="card-meta">Tartu, Estonia 🇪🇪 • 12/08/2024 – 30/08/2024 • <span class="project-award">🥈 2nd Place (Hackathon)</span></div>
        </div>
        <p class="card-tags">
            <span class="tag">Healthcare</span>
            <span class="tag">AI</span>
            <span class="tag">EU Regulation</span>
        </p>
        <div id="aiprohealthDesc" style="display: none;">
            <p>
                Participated in the AIProHealth summer school focused on advancing AI solutions in healthcare. As part of an interdisciplinary team, we developed a prototype of a digital medical device aimed at helping doctors predict early onset preeclampsia in pregnant women — potentially reducing healthcare costs and saving lives. I was responsible for the technical aspects of the machine learning model. 
            </p>
            <div class="card-links">
                <a href="https://eithealth.eu/programmes/aiprohealth/" class="button" target="_blank">Program Info</a>
                <a href="/assets/presentations/tartu_presentation.pdf" class="button">Presentation</a>
            </div>
        </div>
    </div>

<div class="card" onclick="toggleDescription('sscDesc')">
        <div class="card-header">
            <h3>Student Scientific Conference</h3>
            <div class="card-meta">University of Chemistry and Technology, Prague 🇨🇿 • 28/11/2024</div>
        </div>
        <p class="card-tags">
            <span class="tag">Scientific Presentation</span>
            <span class="tag">Bachelor Thesis</span>
        </p>
        <div id="sscDesc" style="display: none;">
            <p>
                Presented my bachelor thesis research at the annual Student Scientific Conference alongside top student projects from across the university in my fiels.
            </p>
        </div>
    </div>
</div>

