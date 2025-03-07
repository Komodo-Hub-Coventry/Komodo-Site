import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '/src/test/components/MainLayout/MainLayout.jsx';
import ModulesPage from '/src/test/components/ModulesPages/ModulesPage.jsx';
import MathsPage from '/src/test/components/ModulesPages/Modules/pages/MathsPage.jsx';
import GeographyPage from '/src/test/components/ModulesPages/Modules/pages/GeographyPage';
import EnglishPage from '/src/test/components/ModulesPages/Modules/pages/EnglishPage';
import HistoryPage from '/src/test/components/ModulesPages/Modules/pages/HistoryPage';
import SciencePage from '/src/test/components/ModulesPages/Modules/pages/SciencePage';
import CSPage from '/src/test/components/ModulesPages/Modules/pages/CSPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<MainLayout><ModulesPage /></MainLayout>} />
        {/* Module Pages */}
        <Route path="/maths" element={<MainLayout><MathsPage /></MainLayout>} />
        <Route path="/geography" element={<MainLayout><GeographyPage /></MainLayout>} />
        <Route path="/english" element={<MainLayout><EnglishPage /></MainLayout>} />
        <Route path="/history" element={<MainLayout><HistoryPage /></MainLayout>} />
        <Route path="/science" element={<MainLayout><SciencePage /></MainLayout>} />
        <Route path="/computer-basics" element={<MainLayout><CSPage /></MainLayout>} />

        {/* Fallback Route */}
        <Route path="*" element={<MainLayout><ModulesPage /></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;