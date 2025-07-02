import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Hammer, 
  Code2, 
  Rocket, 
  Library, 
  User, 
  Command,
  Zap,
  Sparkles
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/forge', label: 'Forge', icon: Hammer },
    { path: '/workspace', label: 'Workspace', icon: Code2 },
    { path: '/deploy', label: 'Deploy', icon: Rocket },
    { path: '/library', label: 'Library', icon: Library },
    { path: '/account', label: 'Account', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary-600 group-hover:text-primary-700 transition-colors" />
              <motion.div
                className="absolute inset-0 bg-primary-500/20 rounded-full blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">HackForge</span>
              <span className="text-xs text-gray-500 -mt-1">One-Click MVP Builder</span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-surface-hover'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-100 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-3">
            {/* Command Palette Trigger */}
            <button className="hidden sm:flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-500 bg-surface-hover rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
              <Command className="h-3 w-3" />
              <span>⌘K</span>
            </button>
            
            {/* XP Badge */}
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-mint-50 rounded-lg border border-mint-200">
              <div className="w-2 h-2 bg-mint-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-mint-700">1,247 XP</span>
            </div>

            {/* Official Bolt Badge - Prominent Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all group shadow-lg hover:shadow-xl"
            >
              <div className="relative">
                <Zap className="h-5 w-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                <motion.div
                  className="absolute inset-0 bg-blue-500/30 rounded-full blur-sm"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Built with Bolt
                </span>
                <span className="text-xs text-blue-500 -mt-0.5">Official Hackathon Entry</span>
              </div>
              
              {/* Sparkle Animation */}
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="h-3 w-3 text-yellow-400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;