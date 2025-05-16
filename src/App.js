import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogHomePage from './pages/BlogHomePage';
import BlogSubPage from './pages/BlogSubPage';
import SearchResultsPage from './pages/SearchResultsPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogHomePage />} />
        <Route path="/blog/:id" element={<BlogSubPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
