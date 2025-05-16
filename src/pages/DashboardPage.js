import React from 'react';
import Navbar from '../components/Navbar';
import './DashboardPage.css';

const articles = [
  { title: 'How to Control High Blood Pressure', status: 'Draft' },
  { title: 'What to Do if Your Child has Fever', status: 'Draft' },
  { title: 'How to Lose Weight Heathily', status: 'Draft' },
];

const DashboardPage = () => (
  <div className="dashboard-root">
    <Navbar />
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <img className="dashboard-avatar" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Jillian" />
        <div className="dashboard-greeting">
          <div className="dashboard-hi">Hi, Dr.Jillian</div>
          <div className="dashboard-welcome">Welcome back!</div>
        </div>
        <nav className="dashboard-nav">
          <div className="dashboard-nav-item active">
            Dashboard
          </div>
          <div className="dashboard-nav-item">
             Content
          </div>
          <div className="dashboard-nav-item">
            Settings
          </div>
        </nav>
      </aside>
      <main className="dashboard-main">
        <div className="dashboard-congrats">
          <div className="dashboard-congrats-title">Congrats</div>
          <div className="dashboard-congrats-desc">You're the TOP 1% performer this month!</div>
        </div>
        <div className="dashboard-stats-row">
          <div className="dashboard-stat">
            <div>Total Articles:</div>
            <div className="dashboard-stat-value">12</div>
            <div className="dashboard-stat-rank">Rank: 1</div>
          </div>
          <div className="dashboard-stat">
            <div>Total Reads:</div>
            <div className="dashboard-stat-value">3200</div>
            <div className="dashboard-stat-rank">Rank: 1</div>
          </div>
          <div className="dashboard-stat">
            <div>Bookings:</div>
            <div className="dashboard-stat-value">100</div>
            <div className="dashboard-stat-rank">Rank: 1</div>
          </div>
          <div className="dashboard-stat">
            <div>Conversion Rates:</div>
            <div className="dashboard-stat-value">0.32%</div>
            <div className="dashboard-stat-rank">Rank: 1</div>
          </div>
        </div>
        <div className="dashboard-topics-row">
          <div className="dashboard-topics">
            <div className="dashboard-topics-title">Popular Topics</div>
            <div>1. Blood Sugar<br />2. Anxiety</div>
          </div>
          <div className="dashboard-suggested">
            <div className="dashboard-topics-title">Suggested Content</div>
            <div>1. Dietary tips for Hyper Tension</div>
          </div>
          <div className="dashboard-chart">
            <div className="dashboard-chart-title">Daily bookings</div>
            <svg width="140" height="60" viewBox="0 0 140 60">
              <polyline fill="none" stroke="#5921cf" strokeWidth="3" points="0,40 20,30 40,35 60,20 80,30 100,15 120,25 140,10" />
            </svg>
          </div>
        </div>
        <div className="dashboard-actions-row">
          <button className="dashboard-action-btn">Create Articles</button>
          <button className="dashboard-action-btn">Drafty AI</button>
          <button className="dashboard-action-btn">View Performance</button>
        </div>
        <div className="dashboard-table">
          <div className="dashboard-table-header">
            <div>Title</div>
            <div>Status</div>
            <div>Action</div>
          </div>
          {articles.map((a, idx) => (
            <div className="dashboard-table-row" key={idx}>
              <div>{a.title}</div>
              <div className="dashboard-table-draft">Draft</div>
              <div className="dashboard-table-actions">
                <span className="dashboard-table-edit">Edit</span>
                <span className="dashboard-table-preview">Preview</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  </div>
);

export default DashboardPage; 