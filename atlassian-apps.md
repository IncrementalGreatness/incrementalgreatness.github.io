---
layout: page
title: Atlassian Apps
subtitle: Apps built to improve productivity
---

<style>
  /* App Spotlight Card Styles */
  .app-separator {
    margin-top: 10px;
    margin-bottom: 40px;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .app-spotlight-card {
    display: flex;
    flex-direction: row;
    background-color: #161b22;
    border: 1px solid #30363d;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 40px;
    padding: 40px;
    gap: 40px;
    align-items: center;
  }

  .app-content {
    flex: 3; /* 60% roughly */
  }

  .app-visual {
    flex: 2; /* 40% roughly */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .app-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  .app-header h3 {
    margin: 0;
    font-size: 1.75rem;
    color: #ffffff;
  }

  .jira-badge {
    height: 24px;
    width: auto;
  }

  .app-description {
    font-size: 1.1rem;
    color: #c9d1d9;
    margin-bottom: 25px;
    line-height: 1.6;
  }

  .app-features {
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 30px;
    color: #8b949e;
  }

  .app-features li {
    margin-bottom: 10px;
  }

  .app-cta {
    display: inline-block;
    background-color: #0052cc; /* Primary Blue */
    color: white !important;
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.2s ease;
  }

  .app-cta:hover {
    background-color: #0065ff;
    text-decoration: none;
    color: white !important;
  }

  .app-visual img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    transform: perspective(1000px) rotateY(-5deg) rotateX(2deg); /* Subtle 3D effect */
    transition: transform 0.3s ease;
  }
  
  .app-spotlight-card:hover .app-visual img {
     transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .app-spotlight-card {
      flex-direction: column-reverse; /* Image on top on mobile? Or text on top? User said "stack columns so the image appears below the text" -> column is correct if content is first in HTML */
      flex-direction: column;
      padding: 20px;
      gap: 30px;
    }

    .app-content, .app-visual {
      flex: 1;
      width: 100%;
    }
    
    .app-visual img {
        transform: none;
    }
    .app-spotlight-card:hover .app-visual img {
        transform: none;
    }
  }
</style>

<h2>Jira Cloud Apps</h2>
<hr class="app-separator">

<div class="app-spotlight-card">
  <div class="app-content">
    <div class="app-header">
      <h3>Issue Quality Auditor</h3>
      <img src="/assets/img/Jira_attribution_dark.svg" alt="Jira Badge" class="jira-badge">
    </div>
    <p class="app-description">Issue Quality Auditor monitors your Jira tasks in real-time, highlighting missing data without frustrating users with workflow blockers.</p>
    <ul class="app-features">
      <li>Define "Quality Rules" by Issue Type.</li>
      <li>Instant "Pass/Fail" feedback in the sidebar.</li>
      <li>Track project health via standard Jira dashboards.</li>
    </ul>
    <a href="#" class="app-cta">View Documentation</a>
  </div>
  <div class="app-visual">
    <img src="/assets/img/QualityCheck.png" alt="Issue Quality Auditor Interface">
  </div>
</div>
