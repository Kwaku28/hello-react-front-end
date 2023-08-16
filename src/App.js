import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting';

// const App = () => (
//   <Router>
//     <Routes>
//       <Route exact path="/" element={<Greeting />} />
//     </Routes>
//   </Router>
// );

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;
