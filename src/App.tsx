import React, { Suspense } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './adapters/primaries/userInterface/Home.component';

const App: React.FC = () => (
  <Suspense fallback="loading">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </Suspense>
);

export default App;
