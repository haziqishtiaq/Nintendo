import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mario from './pages/Mario';
import Luigi from './pages/Luigi';
import Peach from './pages/Peach';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Routes> {/* Use Routes instead of Switch */}
      <Route path="/" element={<Home />} />
      <Route path="/mario" element={<Mario />} />
      <Route path="/luigi" element={<Luigi />} />
      <Route path="/peach" element={<Peach />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router> {/* Wrap your app with Router */}
      <App />
    </Router>
  </React.StrictMode>
);