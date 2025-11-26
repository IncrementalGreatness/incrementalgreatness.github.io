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
    flex: 2; /* 40% roughly */
  }

  .app-visual-column {
    flex: 3; /* 60% roughly */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .app-visual-tabs {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    background-color: rgba(0,0,0,0.2);
    padding: 5px;
    border-radius: 8px;
  }

  .app-visual-tab {
    background: transparent;
    border: none;
    color: #8b949e;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .app-visual-tab:hover {
    color: #c9d1d9;
  }

  .app-visual-tab.active {
    color: #ffffff;
    background-color: rgba(255,255,255,0.1);
    box-shadow: 0 1px 0 rgba(0,0,0,0.1);
  }

  .app-visual-container {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-areas: "stack";
    perspective: 1000px;
  }

  .app-visual-img {
    grid-area: stack;
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    transform: rotateY(-5deg) rotateX(2deg); /* Subtle 3D effect */
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0;
    z-index: 0;
    pointer-events: none;
  }

  .app-visual-img.active {
    opacity: 1;
    z-index: 1;
    pointer-events: auto;
  }
  
  .app-spotlight-card:hover .app-visual-img.active {
     transform: rotateY(0deg) rotateX(0deg) scale(1.02);
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

  /* Responsive Design */
  @media (max-width: 768px) {
    .app-spotlight-card {
      flex-direction: column;
      padding: 20px;
      gap: 30px;
    }

    .app-content, .app-visual-column {
      flex: 1;
      width: 100%;
    }
    
    .app-visual-img {
        transform: none;
    }
    .app-spotlight-card:hover .app-visual-img.active {
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
      <li>Simple UI to implement rules, no JQL required.</li>
      <li>Instant "Pass/Fail" feedback in the sidebar.</li>
      <li>Track project health via standard Jira dashboards.</li>
    </ul>
    <a href="#" class="app-cta">View Documentation</a>
  </div>
  <div class="app-visual-column">
      <div class="app-visual-tabs">
          <button class="app-visual-tab active" onclick="switchTab('user')">User Sidebar View</button>
          <button class="app-visual-tab" onclick="switchTab('admin')">Admin Configuration</button>
      </div>
      <div class="app-visual-container">
        <img src="/assets/img/QualityCheck.png" alt="Issue Quality Auditor Interface" class="app-visual-img active" id="img-user">
        <img src="/assets/img/Quality check Admin.png" alt="Issue Quality Auditor Admin Interface" class="app-visual-img" id="img-admin">
      </div>
  </div>
</div>

<script>
function switchTab(tab) {
    // Remove active class from all tabs and images
    document.querySelectorAll('.app-visual-tab').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.app-visual-img').forEach(el => el.classList.remove('active'));

    // Add active class to clicked tab and corresponding image
    if (tab === 'user') {
        document.querySelector('.app-visual-tab:first-child').classList.add('active');
        document.getElementById('img-user').classList.add('active');
    } else {
        document.querySelector('.app-visual-tab:last-child').classList.add('active');
        document.getElementById('img-admin').classList.add('active');
    }
}
</script>
