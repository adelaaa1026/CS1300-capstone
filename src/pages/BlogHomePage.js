import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './BlogHomePage.css';
import { Link, useNavigate } from 'react-router-dom';

const featuredArticles = [
  {
    title: 'Sesame Launches App for iOS and Android',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/blog/1',
    publishDate: '2024-03-15',
    views: 12500,
    likes: 850
  },
  {
    title: 'How Much Cardio Should You Do? Weekly Guidelines & Exercises',
    image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/blog/2',
    publishDate: '2024-03-10',
    views: 9800,
    likes: 720
  },
  {
    title: 'Bird Flu Treatment: Which Medications Work?',
    image: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/blog/3',
    publishDate: '2024-03-05',
    views: 15600,
    likes: 1100
  },
  {
    title: "Deductible vs. Out-of-Pocket Costs: What's The Difference?",
    image: 'https://images.unsplash.com/photo-1542884841-9f546e727bca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/blog/4',
    publishDate: '2024-03-01',
    views: 8900,
    likes: 650
  },
  {
    title: 'Sesame Launches Mental Health Rx, A Simpler Way To Manage Medications',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/blog/5',
    publishDate: '2024-02-28',
    views: 11200,
    likes: 920
  },
];

const recentArticles = [
  {
    title: '7 Ways Sesame Can Help You Stick to Your 2025 Weight Loss Goals',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/blog/6',
    publishDate: '2024-03-18',
    views: 4500,
    likes: 320
  },
  {
    title: 'What Does Arthritis Feel Like? Symptoms and Treatment',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/blog/7',
    publishDate: '2024-03-17',
    views: 3800,
    likes: 280
  },
  {
    title: '7 Medicines To Help You Quit Smoking',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/blog/8',
    publishDate: '2024-03-16',
    views: 5200,
    likes: 410
  },
  {
    title: 'Understanding Your Blood Pressure Numbers',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    link: '/blog/9',
    publishDate: '2024-03-15',
    views: 6800,
    likes: 520
  },
  {
    title: '10 Tips for Better Sleep Tonight',
    image: 'https://images.unsplash.com/photo-1542884841-9f546e727bca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/blog/10',
    publishDate: '2024-03-14',
    views: 7200,
    likes: 580
  },
];

const topics = [
  {
    title: 'Primary & Preventive Care',
    image: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Mental & Behavioral Health',
    image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
 
  {
    title: 'Nutrition & Diet',
    image: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  
  {
    title: 'Chronic Conditions',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
  },
  
  {
    title: 'Senior Health',
    image: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
];

const BlogHomePage = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate('/search', { state: { query: search } });
    }
  };

  return (
    <div className="blog-home">
      <Navbar />
      <header className="blog-header">
        <div className="blog-header-content">
          <h1>Welcome To Sesame Blog</h1>
          <p>Welcome to Sesame's medical info center – a trusted medical source of expert-reviewed articles, health tips, updates, and more. Stay informed and get the latest from top doctors online.</p>
          <div className="blog-search">
            <input
              type="text"
              placeholder="Search for symptoms, care questions, or general conditions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
            />
            <span className="blog-search-icon" onClick={handleSearch}>
              <svg width="20" height="20" fill="none" stroke="#5921cf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
          </div>
          <div className="blog-questions">
            <span>Need help starting? Try one of these common questions:</span>
            <ul>
              <li>How do I treat anxiety without insurance?</li>
              <li>What causes hair thinning after stress?</li>
              <li>What are some concerns with weight loss?</li>
            </ul>
          </div>
        </div>
      </header>
      <section className="featured-articles">
        <h2>Featured Articles</h2>
        <div className="featured-grid">
          {featuredArticles.map((article, idx) => (
            <Link to={article.link} className="featured-card" key={idx} style={{backgroundImage: `url(${article.image})`}}>
              <div className="featured-overlay">
                <h3>{article.title}</h3>
                <div className="article-meta">
                  <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                  <span>{article.views.toLocaleString()} views</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="recent-articles">
        <h2>Recent Articles</h2>
        <div className="recent-scroll">
          {recentArticles.map((article, idx) => (
            <Link to={article.link} className="recent-card" key={idx} style={{backgroundImage: `url(${article.image})`}}>
              <div className="recent-overlay">
                <h3>{article.title}</h3>
                <div className="article-meta">
                  <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                  <span>{article.views.toLocaleString()} views</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="topics-section">
        <h2>Articles by Topic</h2>
        <div className="topics-scroll">
          {topics.map((topic, idx) => (
            <div className="topic-card" key={idx} style={{backgroundImage: `url(${topic.image})`}}>
              <div className="topic-overlay">
                <h3>{topic.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogHomePage; 