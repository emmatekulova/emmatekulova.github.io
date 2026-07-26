---
layout: page
title: CV
permalink: /cv/
order: 1
---

<style>
    .cv-entry {
    margin-bottom: 1em;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 1em;
}

.cv-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.cv-heading-text {
    flex: 1;
    padding-right: 0.5em;
}

.cv-subheading {
    font-size: 0.9rem;
    /* color: var(--); */
}

.cv-img {
    width: 65px;
    height: 65px;
    object-fit: contain;
    /* padding: 8px; */
    border-radius: 8px;
    border: 3px solid var(--border-color);
    // filter: grayscale(100%) brightness(0.9) sepia(0.2) invert(0.8);
    // box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    // transition: all 0.3s ease;
}

.cv-description {
    margin-top: 0.75em;
    padding: 0.75em 1em;
    background-color: var(--bg-color-alt);
    border-left: 3px solid var(--primary-color);
    border-radius: 0 6px 6px 0;
}
.cv-description p:last-child,
.cv-description ul:last-child { margin-bottom: 0; }
.cv-description ul { margin: 0; padding-left: 1.2em; }
.cv-description li { margin-bottom: 0.4em; }
.cv-description .cv-links { margin-top: 0.75em; }

.cv-skill-tag {
    display: inline-block;
    padding: 0.3rem 0.6rem;
    margin: 0 0.4rem 0.4rem 0;
    border-radius: 0.3rem;
    background-color: var(--content-bg-color);
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    font-size: 0.8rem;
}

.thin-divider { border: none; border-top: 1px solid var(--border-color); margin: 0.35em 0; height: 0; }

.cv-entry.clickable { cursor: pointer; }
.cv-entry.clickable:hover .cv-heading-text strong { text-decoration: underline; }

.clickable-heading { cursor: pointer; }
.clickable-heading:hover .cv-heading-text strong { text-decoration: underline; }
</style>

<script>
function toggleDescription(id) {
    var element = document.getElementById(id);
    if (!element) return;
    element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
}

window.addEventListener('DOMContentLoaded', function() {
    var id = window.location.hash.replace('#', '');
    var desc = document.getElementById(id);
    if (desc && desc.classList.contains('cv-description')) {
        desc.style.display = 'block';
        desc.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});
</script>


### Education
<div class="cv-entry clickable" onclick="toggleDescription('mscAiDesc')">
    <div class="cv-heading">
        <div class="cv-heading-text">
            <strong>Informatics – Artificial Intelligence (MSc)</strong><br>
            <span class="cv-subheading">
                <a href="https://www.cuni.cz/en">Charles University</a> • 09/2025 – present<br>
                Prague, Czech Republic 🇨🇿
            </span>
        </div>
        <img src="../assets/images/charles-uni.jpg" class="cv-img" alt="Charles University">
    </div>
    Working in the Structural Bioinformatics Group led by David Hoksza; thesis focused on protein language models.
    <div id="mscAiDesc" class="cv-description" style="display: none;">
        <span class="cv-skill-tag">Machine Learning</span><span class="cv-skill-tag">Data Science</span><span class="cv-skill-tag">Data Structures</span><span class="cv-skill-tag">Complexity Theory</span><span class="cv-skill-tag">Bioinformatics</span><span class="cv-skill-tag">Computational Neuroscience</span><span class="cv-skill-tag">Python</span>
    </div>
</div>

<div class="cv-entry clickable" onclick="toggleDescription('bscBioinfDesc')">
    <div class="cv-heading">
        <div class="cv-heading-text">
            <strong>Bioinformatics (BSc)</strong><br>
            <span class="cv-subheading">
                <a href="https://www.vscht.cz/en">University of Chemistry and Technology</a> • 09/2023 – 06/2025<br>
                Prague, Czech Republic 🇨🇿
            </span>
        </div>
        <img src="../assets/images/logoVSCHT_zkr_zakl.jpg" class="cv-img" alt="University of Chemistry and Technology">
    </div>
    Graduated summa cum laude.<br>
    Bachelor's thesis: <a href="/projects/#coatingDesc" target="_blank">Automation of nuclear material cladding coating measurement process</a>
    <div id="bscBioinfDesc" class="cv-description" style="display: none;">
        <span class="cv-skill-tag">Bioinformatics</span><span class="cv-skill-tag">Biochemistry</span><span class="cv-skill-tag">Molecular Biology</span><span class="cv-skill-tag">Biology</span><span class="cv-skill-tag">Computational Chemistry</span><span class="cv-skill-tag">Genetics</span><span class="cv-skill-tag">Databases</span><span class="cv-skill-tag">C/C++/Python</span><span class="cv-skill-tag">Graph Theory</span><span class="cv-skill-tag">Algorithms</span><span class="cv-skill-tag">Statistics</span><span class="cv-skill-tag">Automata</span>
    </div>
</div>

<div class="cv-entry clickable" onclick="toggleDescription('bscChemDesc')">
    <div class="cv-heading">
        <div class="cv-heading-text">
            <strong>Chemistry (BSc, unfinished)</strong><br>
            <span class="cv-subheading">
                <a href="https://www.vscht.cz/en">University of Chemistry and Technology</a> • 09/2022 – 06/2023<br>
                Prague, Czech Republic 🇨🇿
            </span>
        </div>
        <img src="../assets/images/logoVSCHT_zkr_zakl.jpg" class="cv-img" alt="University of Chemistry and Technology">
    </div>
    <div id="bscChemDesc" class="cv-description" style="display: none;">
        <span class="cv-skill-tag">Inorganic Chemistry</span><span class="cv-skill-tag">Organic Chemistry</span><span class="cv-skill-tag">Physical Chemistry</span><span class="cv-skill-tag">Analytical Chemistry</span><span class="cv-skill-tag">Mathematics</span><span class="cv-skill-tag">Python</span><span class="cv-skill-tag">Biochemistry</span>
    </div>
</div>

<div style="text-align: center; margin: 15px 0;">• • •</div>


<a id="work-experience"></a>
### <a href="/projects/#rez">Work Experience</a>

<div class="cv-entry clickable" onclick="toggleDescription('msdDesc')">
    <div class="cv-heading">
        <div class="cv-heading-text">
            <strong>Chemoinformatics AI/ML Intern</strong><br>
            <span class="cv-subheading">
                <a href="https://www.msd.cz/cs/">MSD</a> • 02/2026 – Present<br>
                Prague, Czech Republic 🇨🇿
            </span>
        </div>
        <img src="../assets/images/msd.jpg" class="cv-img" alt="MSD">
    </div>
    Building agentic systems for molecular dynamics simulations and automating steps of the drug development process. Also worked with MLOps/DevOps tooling, including Docker, deployment pipelines, and GitHub Actions.
    <div id="msdDesc" class="cv-description" style="display: none;">
        <span class="cv-skill-tag">Agentic AI Systems</span><span class="cv-skill-tag">Molecular Dynamics Simulations</span><span class="cv-skill-tag">Drug Discovery Automation</span><span class="cv-skill-tag">MLOps</span><span class="cv-skill-tag">DevOps</span><span class="cv-skill-tag">Docker</span><span class="cv-skill-tag">Deployment Pipelines</span><span class="cv-skill-tag">GitHub Actions</span><span class="cv-skill-tag">Python</span>
    </div>
</div> 

<div class="cv-entry clickable" onclick="toggleDescription('cvrDesc')">
    <div class="cv-heading">
        <div class="cv-heading-text">
            <strong>Junior Scientific Researcher – Computer Vision Focus</strong><br>
            <span class="cv-subheading">
                <a href="https://www.cvrez.cz/en">Nuclear Research Institute - Research Centre Řež</a> • 08/2023 – 02/2026<br>
                Prague, Czech Republic 🇨🇿
            </span>
        </div>
        <img src="../assets/images/cvr.jpg" class="cv-img" alt="Nuclear Research Institute">
    </div>
    In this role, I design and build end-to-end computer vision and machine learning pipelines, covering everything from data processing and model development to deployment and integration into research workflows.
    <div id="cvrDesc" class="cv-description" style="display: none;">
        <ul>
            <li>Defined system requirements in collaboration with domain experts and translated them into implementable ML solutions.</li>
            <li>Developed and evaluated multiple approaches, going from rule-based methods to a CNN-based image analysis pipeline (Python, PyTorch, OpenCV), currently used in practice.</li>
            <li>Led data labeling efforts by organizing and managing a team of annotators.</li>
            <li>Introduced ML workflows to domain experts, enabling integration of AI methods into existing scientific processes.</li>
            <li>Result: the system remains in active use, serving as the foundation for current development. Received 1st place at the <a href="/projects/#sscDesc" target="_blank">Student Scientific Conference</a> (VŠCHT) for a Bachelor's thesis.</li>
        </ul>
        <div class="cv-links">
            <a href="https://github.com/emmatekulova/coating_detectio" class="button" target="_blank">GitHub</a>
            <a href="https://github.com/research-centre-rez/segmentation-lightning-base" class="button" target="_blank">segmentation-lightning-base</a>
        </div>
    </div>
</div> 


<div class="cv-entry">
    <div class="cv-heading">
        <div class="cv-heading-text">
            <strong>Computational Chemist</strong><br>
            <span class="cv-subheading">
                <a href="https://www.uochb.cz/en">Institute of Organic Chemistry and Biochemistry</a> • 09/2022 – 10/2023<br>
                Prague, Czech Republic 🇨🇿
            </span>
        </div>
        <img src="../assets/images/uochb_logo.jpg" class="cv-img" alt="Institute of Organic Chemistry and Biochemistry">
    </div>
    Focused on exploring and analyzing the properties of diverse helicenes using tools such as Gaussian, VMD, Molden, Avogadro, and QuantumATK for simulation and examination.<br>
    Project: <a href="/projects/#racemDesc" target="_blank">Racemization of n-Helicenes</a>
    <div id="iocbChemistDesc" class="cv-description" 
    style="display: none;">
        <p>TBD</p>
    </div>
</div>

<div class="cv-entry">
    <div class="cv-heading">
        <div class="cv-heading-text">
            <strong>Organic Chemist (Internship)</strong><br>
            <span class="cv-subheading">
                <a href="https://www.uochb.cz/en">Institute of Organic Chemistry and Biochemistry</a> • 06/2022 – 08/2022<br>
                Prague, Czech Republic 🇨🇿
            </span>
        </div>
        <img src="../assets/images/uochb_logo.jpg" class="cv-img" alt="Institute of Organic Chemistry and Biochemistry">
    </div>
    Conducted organic synthesis focused on the preparation of specific helicenes as part of a hands-on research internship.
</div>

<div style="text-align: center; margin: 15px 0;">• • •</div>

### Volunteering

<div class="cv-heading">
    <div class="cv-heading-text">
        <strong>EuroPython Reviewer</strong><br>
        <span class="cv-subheading">03/2026</span>
    </div>
    <img src="../assets/images/europython.png" class="cv-img" alt="EuroPython">
</div>

- Volunteer reviewer for EuroPython 2026 conference, providing feedback to help shape the event program.

  
<hr class="thin-divider">
<div class="cv-heading">
    <div class="cv-heading-text">
        <strong>Competition Author & Reviewer</strong><br>
        <span class="cv-subheading">KSICHT Chemistry Competition • Prague, Czech Republic 🇨🇿 09/2022 – 12/23</span>
    </div>
    <img src="../assets/images/ksicht%20.png" class="cv-img" alt="KSICHT">
</div>

- Correspondence seminar focused on chemistry for high school students
- Authored and reviewed competition problems  
  [View sample problem (PDF)](https://ksicht.natur.cuni.cz/media/rocniky/zadani/KSICHT-22-1_final.pdf)
  
<hr class="thin-divider">

<div class="cv-heading">
    <div class="cv-heading-text">
        <strong>Event Organizer – Head of Legal Team</strong><br>
        <span class="cv-subheading">TEDxYouth@Bratislava • Bratislava, Slovakia 🇸🇰 05/2018 – 08/2020</span>
    </div>
    <img src="../assets/images/tedx.jpg" class="cv-img" alt="TEDxYouth@Bratislava">
</div>

- Oversaw licensing and compliance for event with 300+ participants
<hr class="thin-divider">
<div style="text-align: center; margin: 15px 0;">• • •</div>

<a id="honours-and-awards"></a>
### <a href="/projects">Honours and Awards</a>

- **Student Scientific Conference** – 🇨🇿 28/11/2024 UCT *1st place*  
- **Chemistry Olympiad – National Round** 🇸🇰 03/2022 – *5th place*  
- **Chemiklání Chemistry Team Competition** 🇨🇿 02/2022 – *4th place* (Team Captain)
- **Chemistry Olympiad – National Round** 🇸🇰 03/2021 – *10th place*  
- **IBIS Biology Competition** 🇸🇰 06/2021 – *2nd place*  
<hr class="thin-divider">

<div style="text-align: center; margin: 15px 0;">• • •</div>

<a id="summer-schools-projects"></a>
### <a href="/projects">Summer Schools & Projects</a>

<div class="clickable-heading" onclick="toggleDescription('emblDesc')">
    <div class="cv-heading">
        <div class="cv-heading-text">
            <strong>EMBL Lautenschläger Summer School – Visualising Life</strong><br>
            <span class="cv-subheading">Heidelberg, Germany 🇩🇪 2026</span>
        </div>
        <img src="../assets/images/embl.jpg" class="cv-img" alt="EMBL">
    </div>
</div>

<div id="emblDesc" class="cv-description" style="display: none;">
    <ul>
        <li>Visited numerous labs across EMBL and learned about current approaches to AI/ML in biology and imaging techniques</li>
        <li>Worked on a hands-on project lead by Jess Ewald using a dataset of CellProfiler morphological features extracted from cell images treated with specific compounds</li>
        <li>Trained XGBoost and neural network models, using labels from a different dataset, to predict compound toxicity</li>
    </ul>
    <div class="cv-links">
        <a href="https://www.embl.org/about/info/undergraduates/events/2026-visualising-life/" class="button" target="_blank">Program Link</a>
    </div>
</div>
<hr class="thin-divider">

<div class="clickable-heading" onclick="toggleDescription('aiprohealthCvDesc')">
    <div class="cv-heading">
        <div class="cv-heading-text">
            <strong>AIProHealth Summer School</strong><br>
            <span class="cv-subheading">Tartu, Estonia 🇪🇪 12/08/2024 – 30/08/2024</span>
        </div>
        <img src="../assets/images/AI_for_helath.jpg" class="cv-img" alt="AIProHealth">
    </div>
</div>

<div id="aiprohealthCvDesc" class="cv-description" style="display: none;">
    <ul>
        <li>Participated in AIProHealth summer school focused on AI innovation in healthcare</li>
        <li>Developed a digital medical device prototype -> 2nd place in the hackathon</li>
        <li>Gained hands-on experience with EU regulations and built valuable connections :)</li>
    </ul>
    <div class="cv-links">
        <a href="https://eithealth.eu/programmes/aiprohealth/" class="button" target="_blank">Program Link</a>
    </div>
</div>
<hr class="thin-divider">
<div style="text-align: center; margin: 15px 0;">• • •</div>

