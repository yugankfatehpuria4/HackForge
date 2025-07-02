import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHotkeys } from 'react-hotkeys-hook';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Hammer, 
  Code2, 
  Rocket, 
  Library, 
  User,
  Plus,
  Download,
  Settings
} from 'lucide-react';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useHotkeys('cmd+k, ctrl+k', (e) => {
    e.preventDefault();
    setIsOpen(true);
  });

  useHotkeys('escape', () => {
    setIsOpen(false);
    setQuery('');
  });

  const commands = [
    { id: 'forge', label: 'Go to Forge', icon: Hammer, action: () => navigate('/forge') },
    { id: 'workspace', label: 'Open Workspace', icon: Code2, action: () => navigate('/workspace') },
    { id: 'deploy', label: 'Deploy Project', icon: Rocket, action: () => navigate('/deploy') },
    { id: 'library', label: 'Browse Library', icon: Library, action: () => navigate('/library') },
    { id: 'account', label: 'View Account', icon: User, action: () => navigate('/account') },
    { id: 'new', label: 'New Project', icon: Plus, action: () => navigate('/forge') },
    { id: 'download', label: 'Download Project', icon: Download, action: () => console.log('Download') },
    { id: 'settings', label: 'Settings', icon: Settings, action: () => console.log('Settings') },
  ];

  const filteredCommands = commands.filter(command =>
    command.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleCommand = (command: typeof commands[0]) => {
    command.action();
    setIsOpen(false);
    setQuery('');
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          
          {/* Command Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
            className="relative w-full max-w-lg bg-surface rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center px-4 py-3 border-b border-gray-100">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500"
                autoFocus
              />
            </div>

            {/* Commands List */}
            <div className="max-h-80 overflow-y-auto py-2">
              {filteredCommands.map((command, index) => {
                const Icon = command.icon;
                return (
                  <motion.button
                    key={command.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleCommand(command)}
                    className="w-full flex items-center px-4 py-3 text-left hover:bg-surface-hover transition-colors group"
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-primary-600 mr-3 transition-colors" />
                    <span className="text-gray-900 group-hover:text-primary-700 transition-colors">
                      {command.label}
                    </span>
                  </motion.button>
                );
              })}
              
              {filteredCommands.length === 0 && (
                <div className="px-4 py-8 text-center text-gray-500">
                  No commands found
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
              <span>Navigate with ↑↓ arrows</span>
              <span>Press ESC to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;