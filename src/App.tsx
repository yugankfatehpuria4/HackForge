import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Forge from './pages/Forge';
import Workspace from './pages/Workspace';
import Deploy from './pages/Deploy';
import Library from './pages/Library';
import Account from './pages/Account';
import CommandPalette from './components/CommandPalette';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <CommandPalette />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="pt-16"
        >
          <Routes>
            <Route path="/" element={<Forge />} />
            <Route path="/forge" element={<Forge />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/deploy" element={<Deploy />} />
            <Route path="/library" element={<Library />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App;