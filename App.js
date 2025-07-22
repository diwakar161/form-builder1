import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormBuilder from './components/FormBuilder';
import FormList from './components/FormList';
import FormRenderer from './components/FormRenderer';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">📃 All Forms</Link> | <Link to="/create">🛠️ Create Form</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FormList />} />
        <Route path="/create" element={<FormBuilder />} />
        <Route path="/form/:id" element={<FormRenderer />} />
      </Routes>
    </Router>
  );
}

export default App;
