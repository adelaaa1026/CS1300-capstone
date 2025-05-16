import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './BlogHomePage.css';

const mockResults = [
  {
    title: 'What Does Arthritis Feel Like? Symptoms and Treatment',
    snippet: 'Arthritis is a chronic condition that causes inflammation in the joints, often leading to pain, stiffness, swelling, and fatigue...',
    link: '/blog/7',
    publishDate: '2024-03-17',
    views: 3800,
    likes: 280,
    relevance: 0.95
  },
  {
    title: '7 Ways Sesame Can Help You Stick to Your 2025 Weight Loss Goals',
    snippet: 'Discover how Sesame can help you achieve your weight loss goals with expert advice and practical tips...',
    link: '/blog/6',
    publishDate: '2024-03-18',
    views: 4500,
    likes: 320,
    relevance: 0.85
  },
  {
    title: '7 Medicines To Help You Quit Smoking',
    snippet: 'Explore the most effective medicines to help you quit smoking and improve your health...',
    link: '/blog/8',
    publishDate: '2024-03-16',
    views: 5200,
    likes: 410,
    relevance: 0.75
  },
  {
    title: 'How Much Cardio Should You Do? Weekly Guidelines & Exercises',
    snippet: 'Learn about the recommended amount of cardio and the best exercises for your health...',
    link: '/blog/2',
    publishDate: '2024-03-10',
    views: 9800,
    likes: 720,
    relevance: 0.65
  },
  {
    title: 'Bird Flu Treatment: Which Medications Work?',
    snippet: 'Find out which medications are effective for treating bird flu and how to stay protected...',
    link: '/blog/3',
    publishDate: '2024-03-05',
    views: 15600,
    likes: 1100,
    relevance: 0.55
  },
  {
    title: "Deductible vs. Out-of-Pocket Costs: What's The Difference?",
    snippet: 'Understand the difference between deductibles and out-of-pocket costs in your health plan...',
    link: '/blog/4',
    publishDate: '2024-03-01',
    views: 8900,
    likes: 650,
    relevance: 0.45
  },
  {
    title: 'Sesame Launches Mental Health Rx, A Simpler Way To Manage Medications',
    snippet: 'Sesame introduces a new way to manage your mental health medications easily and affordably...',
    link: '/blog/5',
    publishDate: '2024-02-28',
    views: 11200,
    likes: 920,
    relevance: 0.35
  },
  {
    title: 'Sesame Launches App for iOS and Android',
    snippet: 'Download the new Sesame app to access health resources and book appointments on the go...',
    link: '/blog/1',
    publishDate: '2024-03-15',
    views: 12500,
    likes: 850,
    relevance: 0.25
  },
  {
    title: 'What Does Arthritis Feel Like? Symptoms and Treatment',
    snippet: 'Arthritis is a chronic condition that causes inflammation in the joints, often leading to pain, stiffness, swelling, and fatigue...',
    link: '/blog/7',
    publishDate: '2024-03-17',
    views: 3800,
    likes: 280,
    relevance: 0.95
  },
  {
    title: 'Manage Osteoarthritis With These 8 Self-Care Strategies',
    snippet: 'Practical self-care strategies to help you manage osteoarthritis and improve your quality of life...',
    link: '/blog/9',
    publishDate: '2024-03-18',
    views: 4500,
    likes: 320,
    relevance: 0.85
  },
  {
    title: 'The Good Knee Guide: Protect Your Joints',
    snippet: 'Tips and advice for keeping your knees healthy and pain-free at any age...',
    link: '/blog/10',
    publishDate: '2024-03-16',
    views: 5200,
    likes: 410,
    relevance: 0.75
  },
  {
    title: '5 Common Arthritis Myths, Debunked by Science',
    snippet: "Don't let myths about arthritis mislead you. Here's what science really says...",
    link: '/blog/11',
    publishDate: '2024-03-10',
    views: 9800,
    likes: 720,
    relevance: 0.65
  },
  {
    title: "7 People With Rheumatoid Arthritis Explain How They're Thriving",
    snippet: 'Real stories from people living well with rheumatoid arthritis...',
    link: '/blog/12',
    publishDate: '2024-03-05',
    views: 15600,
    likes: 1100,
    relevance: 0.55
  },
];

const SearchResultsPage = () => {
  const location = useLocation();
  const initialQuery = location.state?.query || '';
  const [search, setSearch] = useState(initialQuery);
  const [sortBy, setSortBy] = useState('relevance'); // 'relevance', 'popularity', or 'recent'

  const sortResults = (results) => {
    return [...results].sort((a, b) => {
      switch (sortBy) {
        case 'relevance':
          return b.relevance - a.relevance;
        case 'popularity':
          return (b.views + b.likes) - (a.views + a.likes);
        case 'recent':
          return new Date(b.publishDate) - new Date(a.publishDate);
        default:
          return 0;
      }
    });
  };

  const sortedResults = sortResults(mockResults);

  return (
    <div className="blog-home search-results-page">
      <Navbar />
      <header className="blog-header">
        <div className="blog-header-content">
          <div className="blog-search">
            <input
              type="text"
              placeholder="Search for symptoms, care questions, or general conditions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <span className="blog-search-icon">
              <svg width="20" height="20" fill="none" stroke="#5921cf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
          </div>
        </div>
      </header>
      <section className="search-results">
        <div className="section-header">
          <h2>Search Results</h2>
          <div className="sort-controls">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="relevance">Most Relevant</option>
              <option value="popularity">Most Popular</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>
        </div>
        <div className="results-list">
          {sortedResults.map((result, idx) => (
            <a href={result.link} className="result-card" key={idx}>
              <h3>{result.title}</h3>
              <p>{result.snippet}</p>
              <div className="result-meta">
                <span>{new Date(result.publishDate).toLocaleDateString()}</span>
                <span>{result.views.toLocaleString()} views</span>
                <span>{result.likes.toLocaleString()} likes</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SearchResultsPage; 