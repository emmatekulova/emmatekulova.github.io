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
    margin-top: 0.5em;
}
.thin-divider { border: none; border-top: 1px solid var(--border-color); margin: 0.35em 0; height: 0; }

.cv-entry.clickable { cursor: pointer; }
.cv-entry.clickable:hover .cv-heading-text strong { text-decoration: underline; }
</style>

<script>
function toggleDescription(id) {
    var element = document.getElementById(id);
    if (!element) return;
    element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
}
</script>


### Education
<div class="cv-entry clickable" onclick="toggleDescription('mscAiDesc')">
    <div class="cv-heading">
        <div class="cv-heading-text">
            <strong>Informatics – Artificial Intelligence (MSc)</strong><br>
            <span class="cv-subheading">
                <a href="https://www.cuni.cz/en">Charles University</a> • 09/2025 – 06/2027<br>
                Prague, Czech Republic 🇨🇿
            </span>
        </div>
        <img src="../assets/images/charles-uni.jpg" class="cv-img" alt="Charles University">
    </div>
    <div id="mscAiDesc" class="cv-description" style="display: none;">
        <p>Machine Learning, Data Science, Data Structures, Complexity Theory, Bioinformatics, Computational Neuroscience, Python</p>
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
    Graduated summa cum laude.
    <div id="bscBioinfDesc" class="cv-description" style="display: none;">
        <p>Bioinformatics, Biochemistry, Molecular Biology, Biology, Computational Chemistry, Genetics, Databases, C/C++/Python, Graph Theory, Algorithms, Statistics, Automatas, </p>
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
        <p>Inorganic Chemistry, Organic Chemistry, Physical Chemistry, Analytical Chemistry, Mathematics, Python, Biochemistry</p>
    </div>
</div>

<div style="text-align: center; margin: 15px 0;">• • •</div>


<a id="work-experience"></a>
### <a href="/work">Work Experience</a>

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
        <p>Agentic AI Systems, Molecular Dynamics Simulations, Drug Discovery Automation, MLOps, DevOps, Docker, Deployment Pipelines, GitHub Actions, Python</p>
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
        <p>C</p>
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
    Focused on exploring and analyzing the properties of diverse helicenes using tools such as Gaussian, VMD, Molden, Avogadro, and QuantumATK for simulation and examination.
    <div id="iocbChemistDesc" class="cv-description" 
    style="display: none;">
        <p>TBD</p>
    </div>
</div>

<div class="cv-entry clickable" onclick="toggleDescription('iocbInternDesc')">
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
    <div id="iocbInternDesc" class="cv-description" style="display: none;">
        <p>TBD</p>
    </div>
</div>

<div style="text-align: center; margin: 15px 0;">• • •</div>

### Volunteering

**EuroPython Reviewer**  
*03/2026* 
- Volunteer reviewer for EuroPython 2026 conference, providing feedback to help shape the event program.

  
<hr class="thin-divider">
**Competition Author & Reviewer**  
*KSICHT Chemistry Competition • Prague, Czech Republic 🇨🇿 09/2022 – 12/23*  
- Correspondence seminar focused on chemistry for high school students
- Authored and reviewed competition problems  
  [View sample problem (PDF)](https://ksicht.natur.cuni.cz/media/rocniky/zadani/KSICHT-22-1_final.pdf)
  
<hr class="thin-divider">

**Event Organizer – Head of Legal Team**  
*TEDxYouth@Bratislava • Bratislava, Slovakia 🇸🇰 05/2018 – 08/2020*  
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

**EMBL Lautenschläger Summer School – Visualising Life**  
*Heidelberg, Germany 🇩🇪 2026*  
- Visited numerous labs across EMBL and learned about current approaches to AI/ML in biology and imaging techniques
- Worked on a hands-on project lead by Jess Ewald using a dataset of CellProfiler morphological features extracted from cell images treated with specific compounds  
- Trained XGBoost and neural network models, using labels from a different dataset, to predict compound toxicity  

- [EMBL Summer School Program Link](https://www.embl.org/about/info/undergraduates/events/2026-visualising-life/)
<hr class="thin-divider">
<div style="text-align: center; margin: 15px 0;">• • •</div>

**AIProHealth Summer School**  
*Tartu, Estonia 🇪🇪 12/08/2024 – 30/08/2024*  
- Participated in AIProHealth summer school focused on AI innovation in healthcare  
- Developed a digital medical device prototype; secured **2nd place** in the hackathon  
- Gained hands-on experience with EU regulations and built valuable connections  
- [AIProHealth Program Link](https://eithealth.eu/programmes/aiprohealth/)
<hr class="thin-divider">
<div style="text-align: center; margin: 15px 0;">• • •</div>

