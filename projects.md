---
layout: page
title: projects
permalink: /projects/
order: 3
---

<div class="projects-section">
    <h2>Hackathons</h2>
    <div class="card">
        <div class="card-header">
            <h3>CryptoCaching</h3>
            <div class="card-meta">EPFL Hackathon 2025 • <span class="project-award">🥉 3rd Place</span></div>
        </div>
        <p>A blockchain-based alternative to traditional GeoCaching. We solved the admin maintenance problem by creating
            a P2P network to claim and verify cache discoveries. Each cache contains an NFC tag reprogrammed by users,
            with a token passing mechanism implemented on Hedera to prevent false claims of unvisited caches.</p>
        <p class="card-tags">
            <span class="tag">Tokenization</span>
            <span class="tag">P2P</span>
            <span class="tag">Blockchain</span>
        </p>
        <div class="card-links">
            <a href="https://pitch.com/v/bsa-hackathon-2025-epfl-d2j4ds" class="button">Pitch Presentation</a>
            <a href="/assets/presentations/epfl_bsa_hackathon_2025.pdf" class="button">PDF Presentation</a>
        </div>
    </div>
</div>

<div class="projects-section">
    <h2>University Projects</h2>
    <div class="card">
        <div class="card-header">
            <h3>Optimization of fluid dynamics simulation</h3>
            <div class="card-meta">TU Munich • Spring 2025
            </div>
        </div>
        <p>
            This final project was part of the High-Performance Computing Praktikum at TUM. We worked on implementing a parallelized tsunami simulation, with a primary focus on single-core parallelism using SIMD operations. Our approach leveraged x86 architecture features such as vectorized addition and multiplication. Additionally, we addressed load imbalances present in the existing code to improve overall performance.
        </p>
        <p class="card-tags">
            <span class="tag">C++</span>
            <span class="tag">High-Performance-Computation</span>
        </p>
        <div class="card-links">
            <a href="/assets/presentations/hpc_presentation.pdf" class="button">presentation</a>
            <a href="/assets/reports/hpc_report.pdf" class="button">report</a>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h3>Efficient Möbius Computations on Permutations</h3>
            <div class="card-meta">Charles University • Autumn 2023 • Advisor: Vít Jelínek
            </div>
        </div>
        <p>
        todo!
        </p>
        <p class="card-tags">
            <span class="tag">Rust</span>
            <span class="tag">Combinatorics</span>
            <span class="tag">Algorithms</span>
        </p>
        <div class="card-links">
            <a href="https://github.com/benbencik/mobius_function" class="button">GitHub</a>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h3>Classification of magnetic phases by graph neural networks</h3>
            <div class="card-meta">Charles University • Spring 2023 • Advisor: Pavel Baláž
            </div>
        </div>
        <p> 
            This project, supported by the <a href="https://www.mff.cuni.cz/en/students/bc-mgr/sfg" target="_blank">Student Faculty Grant</a>, explores the application of graph neural networks (GNNs) in physics. We encoded the magnetic configurations of the Ising model as graphs, where nodes represent spins and edges capture interactions. Using this model, we aimed to predict configurations with minimal energy. This problem is particularly interesting as it is <a href="https://arxiv.org/pdf/1302.5843" target="_blank">known</a> to be NP-complete. We experimented with various GNN architectures using PyTorch and concluded with a report on our results, highlighting the most effective approach. 
        </p> 
        <p class="card-tags">
            <span class="tag">PyTorch</span>
            <span class="tag">GNN</span>
            <span class="tag">Physics</span>
        </p>
        <div class="card-links">
            <a href="https://github.com/benbencik/sfg_gnn/" class="button">GitHub</a>
        </div>
    </div>

</div>

<!-- <div class="projects-section">
  <h2>Open Source Contributions</h2>
  <div class="card">
    <h3><a href="https://github.com/organization/ark-works" class="repo-link">Ark-works</a></h3>
    <div class="contribution-list">
      <div class="contribution-item">
        <div class="contribution-title"><a href="#">Issue #123: Feature Implementation</a></div>
        <p>Added support for XYZ feature by implementing ABC algorithm, which improved performance by 25%.</p>
      </div>
      
      <div class="contribution-item">
        <div class="contribution-title"><a href="#">Issue #456: Bug Fix</a></div>
        <p>Fixed critical authentication vulnerability by properly validating user input.</p>
      </div>
      
      <div class="contribution-item">
        <div class="contribution-title"><a href="#">Issue #789: Documentation</a></div>
        <p>Improved API documentation with examples and clearer explanations.</p>
      </div>
    </div>
  </div>
  
</div> -->
