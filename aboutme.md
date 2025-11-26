---
layout: page
title: About
subtitle: Engineering Greatness into the tools you use every day
---

<style>
  /* Agency Layout Styles */
  .agency-layout {
    background-color: #1a1a1a;
    color: #f0f0f0;
    padding: 40px 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Or inherit from site */
    line-height: 1.6;
  }

  /* Override main container background if needed, ensuring dark theme persists */
  body {
    background-color: #1a1a1a; 
  }
  
  /* If the theme has a white background on the main container, we might need to target it. 
     Assuming .agency-layout wraps the content, we style it. 
     But to ensure the whole page feels dark, we might need global overrides or just rely on the wrapper 
     if it covers enough area. For now, we style the wrapper and its children. */

  .agency-layout h2, .agency-layout h3 {
    color: #ffffff;
    margin-bottom: 1rem;
  }

  /* Mission Section */
  .mission-section {
    max-width: 700px;
    margin: 0 auto 60px auto;
    text-align: center;
    font-size: 1.2rem;
    color: #d0d0d0;
  }

  /* Section Eyebrows */
  .eyebrow {
    display: block;
    text-transform: uppercase;
    color: #888;
    font-size: 0.85rem;
    letter-spacing: 2px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center; /* Default center */
  }

  /* Engineer Section */
  .engineer-section {
    margin-bottom: 60px;
  }
  
  .engineer-grid {
    display: grid;
    grid-template-columns: 1fr 2fr; /* Image | Text */
    gap: 40px;
    align-items: center;
  }

  .engineer-img-container {
    text-align: center;
  }

  .engineer-img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%; /* Circle */
    border: 4px solid #333;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
  }

  .engineer-bio {
    font-size: 1.1rem;
  }

  /* Standard Section */
  .standard-section {
    margin-bottom: 40px;
  }

  .standard-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .feature-card {
    background-color: #252525;
    padding: 30px;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    border: 1px solid #333;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.4);
    background-color: #2a2a2a;
    border-color: #444;
  }

  .feature-card h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: #fff;
    border-bottom: 2px solid #444;
    padding-bottom: 10px;
    display: inline-block;
  }

  .feature-card p {
    font-size: 1rem;
    color: #ccc;
    margin: 0;
  }

  /* Responsiveness */
  @media (max-width: 768px) {
    .engineer-grid {
      grid-template-columns: 1fr;
      text-align: center;
    }
    
    .engineer-img {
      width: 200px;
      height: 200px;
      margin-bottom: 20px;
    }

    .standard-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="agency-layout">

  <!-- Section 1: The Mission -->
  <div class="mission-section">
    <div class="eyebrow">The Mission</div>
    <p>
      <strong>Incremental Greatness</strong> is built on a simple premise: The biggest productivity gains don't come from massive overhauls, but from optimizing the small, repetitive actions we do every day. We build software that removes friction, automates the mundane, and helps engineering teams get 1% better, every single deployment.
    </p>
  </div>

  <!-- Section 2: The Engineer -->
  <div class="engineer-section">
    <div class="eyebrow">The Engineer</div>
    <div class="engineer-grid">
      <div class="engineer-img-container">
        <img src="/assets/img/kamal-headshot.jpg" alt="Kamal Broomes" class="engineer-img">
      </div>
      <div class="engineer-bio">
        <p>
          <strong>Incremental Greatness</strong> is the work of Kamal Broomes. I am a Senior Software Engineer with a career defined by high-stakes environments—from engineering services on the Azure platform at Microsoft to analyzing systems for the Department of Defense.
        </p>
        <p>
          I founded this studio to bring enterprise-grade discipline to the technology you rely on. While deep technical expertise is my baseline, my true strength lies in understanding the context of the problem and the people involved.
        </p>
      </div>
    </div>
  </div>

  <!-- Section 3: The Standard -->
  <div class="standard-section">
    <div class="eyebrow">Our Standards</div>
    <div class="standard-grid">
      
      <!-- Card 1 -->
      <div class="feature-card">
        <h3>Distributed Systems Expertise</h3>
        <p>With experience managing multiple cloud services, I architect apps that scale with your organization.</p>
      </div>

      <!-- Card 2 -->
      <div class="feature-card">
        <h3>Enterprise-grade Discipline</h3>
        <p>I bring the same level of discipline to the tools you use every day as I do to the systems I build.</p>
      </div>

      <!-- Card 3 -->
      <div class="feature-card">
        <h3>Security by Design</h3>
        <p>My background in securing enterprise systems and vulnerability research means security is baked in from line one, not added as a patch later.</p>
      </div>

    </div>
  </div>

</div>