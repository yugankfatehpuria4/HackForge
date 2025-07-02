import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Github, 
  Globe, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  Settings,
  ExternalLink,
  Copy,
  Download,
  Zap,
  Sparkles
} from 'lucide-react';

const Deploy = () => {
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentStage, setDeploymentStage] = useState(0);
  const [isDeployed, setIsDeployed] = useState(false);

  const deployStages = [
    { name: 'GitHub Setup', status: 'completed' },
    { name: 'Environment Config', status: 'completed' },
    { name: 'Build Process', status: 'in-progress' },
    { name: 'Deployment', status: 'pending' },
    { name: 'DNS Configuration', status: 'pending' },
  ];

  const handleDeploy = () => {
    setIsDeploying(true);
    // Simulate deployment process
    setTimeout(() => {
      setIsDeploying(false);
      setIsDeployed(true);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header with Bolt Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Rocket className="h-10 w-10 text-primary-600" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Deploy Your App</h1>
                <p className="text-gray-600 mt-1">
                  One-click deployment to production with automatic CI/CD setup
                </p>
              </div>
            </div>

            {/* Bolt Badge in Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 shadow-lg"
            >
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Powered by Bolt
              </span>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Deployment Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-surface rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value="journaling-app"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Domain
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value="journaling-app"
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-l-lg focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                    />
                    <div className="px-4 py-3 bg-gray-50 border border-l-0 border-gray-200 rounded-r-lg text-gray-500 font-medium">
                      .hackforge.dev
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Repository
                  </label>
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <Github className="h-6 w-6 text-gray-600" />
                    <span className="text-gray-700 font-medium">hackforge-user/journaling-app</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Environment Variables */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-surface rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Environment Variables</h2>
                <Settings className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="space-y-3">
                {[
                  { key: 'DATABASE_URL', value: '••••••••••••••••', required: true },
                  { key: 'JWT_SECRET', value: '••••••••••••••••', required: true },
                  { key: 'OPENAI_API_KEY', value: '••••••••••••••••', required: true },
                ].map((env, index) => (
                  <div key={env.key} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-sm text-gray-900 font-medium">{env.key}</span>
                        {env.required && (
                          <span className="text-xs bg-coral-100 text-coral-700 px-2 py-0.5 rounded font-medium">Required</span>
                        )}
                      </div>
                      <span className="font-mono text-sm text-gray-500">{env.value}</span>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Deployment Status */}
            {(isDeploying || isDeployed) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-surface rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Deployment Progress</h2>
                
                <div className="space-y-4">
                  {deployStages.map((stage, index) => (
                    <div key={stage.name} className="flex items-center space-x-3">
                      {stage.status === 'completed' ? (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      ) : stage.status === 'in-progress' ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Clock className="h-6 w-6 text-primary-500" />
                        </motion.div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                      )}
                      <span className={`font-medium ${
                        stage.status === 'completed' ? 'text-green-700' :
                        stage.status === 'in-progress' ? 'text-primary-700' :
                        'text-gray-500'
                      }`}>
                        {stage.name}
                      </span>
                    </div>
                  ))}
                </div>

                {isDeployed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-6 bg-gradient-to-r from-green-50 to-mint-50 border border-green-200 rounded-xl"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <span className="text-lg font-bold text-green-800">Deployment Successful!</span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="h-5 w-5 text-yellow-500" />
                      </motion.div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-green-600" />
                      <a 
                        href="https://journaling-app.hackforge.dev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-700 hover:text-green-800 underline font-medium"
                      >
                        https://journaling-app.hackforge.dev
                      </a>
                      <button className="p-1 hover:bg-green-100 rounded">
                        <Copy className="h-4 w-4 text-green-600" />
                      </button>
                      <button className="p-1 hover:bg-green-100 rounded">
                        <ExternalLink className="h-4 w-4 text-green-600" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Deploy Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDeploy}
                disabled={isDeploying}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all ${
                  isDeploying
                    ? 'bg-gray-400 cursor-not-allowed'
                    : isDeployed
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {isDeploying ? (
                  <div className="flex items-center justify-center space-x-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Rocket className="h-5 w-5" />
                    </motion.div>
                    <span>Deploying...</span>
                  </div>
                ) : isDeployed ? (
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Deployed Successfully</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Rocket className="h-5 w-5" />
                    <span>Deploy to Production</span>
                  </div>
                )}
              </motion.button>

              {!isDeployed && (
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Estimated time: ~2 minutes
                </p>
              )}
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-surface rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-2">
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-surface-hover rounded-lg transition-colors">
                  <Download className="h-5 w-5 text-gray-600" />
                  <span className="text-sm text-gray-700">Download Source</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-surface-hover rounded-lg transition-colors">
                  <Github className="h-5 w-5 text-gray-600" />
                  <span className="text-sm text-gray-700">View Repository</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-surface-hover rounded-lg transition-colors">
                  <Settings className="h-5 w-5 text-gray-600" />
                  <span className="text-sm text-gray-700">Configure CI/CD</span>
                </button>
              </div>
            </motion.div>

            {/* Deployment Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-surface rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Deployment Stats</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Build Time</span>
                  <span className="text-sm font-medium text-gray-900">1m 34s</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Bundle Size</span>
                  <span className="text-sm font-medium text-gray-900">245 KB</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Lighthouse Score</span>
                  <span className="text-sm font-medium text-green-600">98/100</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Deploy Provider</span>
                  <span className="text-sm font-medium text-primary-600">Vercel</span>
                </div>
              </div>
            </motion.div>

            {/* Bolt Badge in Footer */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border-2 border-blue-200 text-center"
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Zap className="h-5 w-5 text-blue-600" />
                <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Built with Bolt
                </span>
              </div>
              <p className="text-xs text-blue-600">Official Hackathon Entry</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deploy;