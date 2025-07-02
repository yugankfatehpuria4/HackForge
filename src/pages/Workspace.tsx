import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';
import { 
  FileText, 
  Play, 
  Download, 
  Share, 
  Settings,
  MessageSquare,
  FolderOpen,
  Terminal,
  Eye,
  Code2,
  Zap,
  Sparkles
} from 'lucide-react';

const Workspace = () => {
  const [activeFile, setActiveFile] = useState('App.tsx');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const files = [
    { name: 'App.tsx', type: 'react', content: `import React from 'react';\nimport { BrowserRouter as Router, Routes, Route } from 'react-router-dom';\nimport Home from './pages/Home';\nimport Profile from './pages/Profile';\n\nfunction App() {\n  return (\n    <Router>\n      <div className="min-h-screen bg-gray-50">\n        <Routes>\n          <Route path="/" element={<Home />} />\n          <Route path="/profile" element={<Profile />} />\n        </Routes>\n      </div>\n    </Router>\n  );\n}\n\nexport default App;` },
    { name: 'server.js', type: 'node', content: `const express = require('express');\nconst cors = require('cors');\nconst mongoose = require('mongoose');\n\nconst app = express();\nconst PORT = process.env.PORT || 5000;\n\n// Middleware\napp.use(cors());\napp.use(express.json());\n\n// Routes\napp.get('/api/health', (req, res) => {\n  res.json({ status: 'OK', timestamp: new Date().toISOString() });\n});\n\napp.listen(PORT, () => {\n  console.log(\`Server running on port \${PORT}\`);\n});` },
    { name: 'package.json', type: 'json', content: `{\n  "name": "journaling-app",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "express": "^4.18.2",\n    "mongoose": "^7.0.0"\n  }\n}` },
  ];

  const currentFile = files.find(f => f.name === activeFile);

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Top Toolbar with Bolt Badge */}
      <div className="h-12 bg-surface border-b border-gray-200 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <h2 className="font-semibold text-gray-900">Journaling App</h2>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-mint-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Auto-saved</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Bolt Badge Fixed in Navbar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200"
          >
            <Zap className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Built with Bolt
            </span>
          </motion.div>

          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-surface-hover rounded-lg transition-colors">
              <Play className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-surface-hover rounded-lg transition-colors">
              <Download className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-surface-hover rounded-lg transition-colors">
              <Share className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-surface-hover rounded-lg transition-colors">
              <Settings className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Sidebar - File Explorer */}
        {sidebarOpen && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 280 }}
            className="bg-surface border-r border-gray-200 overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <FolderOpen className="h-4 w-4 mr-2" />
                  Files
                </h3>
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="p-1 hover:bg-surface-hover rounded"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-1">
                {files.map((file) => (
                  <button
                    key={file.name}
                    onClick={() => setActiveFile(file.name)}
                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeFile === file.name
                        ? 'bg-primary-50 text-primary-700 border border-primary-200'
                        : 'hover:bg-surface-hover text-gray-700'
                    }`}
                  >
                    <FileText className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{file.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Code Editor */}
          <div className="flex-1 flex flex-col">
            <div className="h-10 bg-surface border-b border-gray-200 flex items-center px-4">
              {!sidebarOpen && (
                <button 
                  onClick={() => setSidebarOpen(true)}
                  className="p-1 hover:bg-surface-hover rounded mr-2"
                >
                  <FolderOpen className="h-4 w-4" />
                </button>
              )}
              <span className="text-sm font-medium text-gray-900">{activeFile}</span>
            </div>
            
            <div className="flex-1">
              <Editor
                height="100%"
                defaultLanguage={currentFile?.type === 'react' ? 'typescript' : currentFile?.type}
                value={currentFile?.content}
                theme="light"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 2,
                }}
              />
            </div>

            {/* Terminal */}
            {terminalOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 200 }}
                className="bg-gray-900 text-green-400 font-mono text-sm overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                  <div className="flex items-center space-x-2">
                    <Terminal className="h-4 w-4" />
                    <span>Terminal</span>
                  </div>
                  <button 
                    onClick={() => setTerminalOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    ×
                  </button>
                </div>
                <div className="p-4">
                  <div className="mb-2">$ npm run dev</div>
                  <div className="text-blue-400">✓ Server running on http://localhost:3000</div>
                  <div className="text-yellow-400">✓ Database connected</div>
                  <div className="text-green-400">✓ Ready for development</div>
                  <div className="mt-2 flex items-center">
                    <span className="mr-2">$</span>
                    <div className="w-2 h-4 bg-green-400 animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Bottom Toolbar */}
            <div className="h-10 bg-surface border-t border-gray-200 flex items-center justify-between px-4">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setTerminalOpen(!terminalOpen)}
                  className={`flex items-center space-x-1 px-2 py-1 rounded text-sm transition-colors ${
                    terminalOpen ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Terminal className="h-3 w-3" />
                  <span>Terminal</span>
                </button>
                <div className="text-xs text-gray-500">Lines: 42 • Characters: 1,247</div>
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>TypeScript</span>
                </div>
                <div>UTF-8</div>
                <div>LF</div>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="w-1/3 border-l border-gray-200 bg-surface flex flex-col">
            <div className="h-10 bg-surface border-b border-gray-200 flex items-center justify-between px-4">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Preview</span>
              </div>
              <div className="text-xs text-gray-500">localhost:3000</div>
            </div>
            
            <div className="flex-1 bg-white relative">
              {/* Mock Preview Content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-50 to-mint-50">
                <div className="text-center">
                  <Code2 className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Preview</h3>
                  <p className="text-gray-600 mb-4">Your app will appear here when running</p>
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Start Dev Server
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Chat Panel with GPT Dock */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 320 }}
          className="bg-surface border-l border-gray-200 flex flex-col"
        >
          <div className="h-10 bg-surface border-b border-gray-200 flex items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">GPT-4o Assistant</span>
            </div>
            <Sparkles className="h-4 w-4 text-yellow-500" />
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-lg p-3 border border-primary-200">
                <div className="text-sm text-primary-800">
                  <strong>HackForge AI:</strong> I've generated your journaling app! The frontend includes authentication, 
                  emotion detection, and a clean UI. The backend has MongoDB schemas and secure API routes.
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 ml-8">
                <div className="text-sm text-gray-700">
                  <strong>You:</strong> Can you add a mood analytics dashboard?
                </div>
              </div>

              <div className="bg-primary-50 rounded-lg p-3 border border-primary-200">
                <div className="text-sm text-primary-800">
                  <strong>HackForge AI:</strong> Absolutely! I'll add a dashboard with mood trends, 
                  charts using Chart.js, and weekly/monthly analytics. Would you like me to implement this now?
                </div>
              </div>

              <div className="bg-mint-50 rounded-lg p-3 border border-mint-200">
                <div className="text-sm text-mint-800">
                  <strong>Quick Commands:</strong>
                  <div className="mt-2 space-y-1 text-xs">
                    <div>/fix login bug</div>
                    <div>/refactor sidebar</div>
                    <div>/add Mongo connection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type /fix, /refactor, /add..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
              />
              <button className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                <MessageSquare className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Workspace;