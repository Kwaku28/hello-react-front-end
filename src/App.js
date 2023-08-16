import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;
