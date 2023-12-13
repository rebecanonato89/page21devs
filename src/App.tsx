import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy loading dos componentes de página
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Service = lazy(() => import('./pages/Service'));
const Work = lazy(() => import('./pages/Work'));

const App = () => {
  return (
    <Router> {/* Use BrowserRouter como Router */}
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
