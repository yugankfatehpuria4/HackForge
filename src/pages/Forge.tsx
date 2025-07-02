import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Mic, 
  Send, 
  Sparkles, 
  Zap, 
  Code2, 
  Database, 
  Cloud, 
  Shield,
  Rocket,
  Play,
  CheckCircle,
  Timer
} from 'lucide-react';

const Forge = () => {
  const [idea, setIdea] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      navigate('/workspace');
    }, 3000);
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Simulate voice input
    if (!isListening) {
      setTimeout(() => {
        setIdea('Build a journaling app with login and emotion detection');
        setIsListening(false);
      }, 2000);
    }
  };

  const exampleIdeas = [
    'Build a journaling app with login and emotion detection',
    'Create a project management tool with real-time collaboration',
    'Design a fitness tracker with AI workout recommendations',
    'Make a recipe sharing platform with ingredient substitutions',
  ];

  const features = [
    { icon: Code2, title: 'React + Next.js 14', desc: 'Complete frontend with TailwindCSS' },
    { icon: Database, title: 'MongoDB + Express', desc: 'Secure backend with TypeScript' },
    { icon: Shield, title: 'Auth Integration', desc: 'Firebase/Auth0 ready' },
    { icon: Cloud, title: 'One-Click Deploy', desc: 'Vercel/Render deployment' },
  ];

  const buildSteps = [
    { step: 'Frontend', icon: Code2, desc: 'React components & routing' },
    { step: 'Backend', icon: Database, desc: 'Express API & MongoDB' },
    { step: 'Security', icon: Shield, desc: 'Auth & validation' },
    { step: 'Deploy', icon: Rocket, desc: 'CI/CD & hosting' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-mint-50/30">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header with Bolt Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block mb-6">
            <Sparkles className="h-20 w-20 text-primary-600 mx-auto mb-4" />
            <motion.div
              className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Turn Ideas Into
            <span className="bg-gradient-to-r from-primary-600 to-mint-600 bg-clip-text text-transparent"> Apps</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Production-ready full-stack applications in 60 seconds. Just type your idea. 
            Let AI handle the rest—from React frontend to MongoDB backend to live deployment.
          </p>

          {/* Speed Indicator */}
          <div className="inline-flex items-center space-x-2 bg-mint-50 text-mint-700 px-4 py-2 rounded-full border border-mint-200 mb-8">
            <Timer className="h-4 w-4" />
            <span className="text-sm font-medium">Average build time: 47 seconds</span>
          </div>
        </motion.div>

        {/* Main Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-12"
        >
          <div className="p-8">
            <div className="relative">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="💡 Say: Build a journaling app with login and emotion detection..."
                className="w-full h-36 p-6 text-lg bg-surface-hover rounded-2xl border border-gray-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none resize-none transition-all placeholder-gray-400"
                disabled={isGenerating}
              />
              
              {/* Voice Input Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleVoiceInput}
                className={`absolute bottom-6 right-20 p-3 rounded-full transition-all shadow-lg ${
                  isListening 
                    ? 'bg-coral-500 text-white animate-pulse-glow' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                <Mic className="h-5 w-5" />
              </motion.button>

              {/* Generate Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGenerate}
                disabled={!idea.trim() || isGenerating}
                className={`absolute bottom-6 right-6 p-3 rounded-full transition-all shadow-lg ${
                  idea.trim() && !isGenerating
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-xl'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {isGenerating ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </motion.button>
            </div>

            {/* Example Ideas */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-3">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {exampleIdeas.map((example, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => setIdea(example)}
                    className="px-4 py-2 text-sm bg-primary-50 text-primary-700 rounded-full hover:bg-primary-100 transition-colors border border-primary-200"
                  >
                    {example}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Generation Progress */}
          {isGenerating && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-gradient-to-r from-primary-50 via-mint-50 to-primary-50 border-t border-gray-200"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold text-gray-800">Generating your full-stack app...</span>
                  <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">~60 seconds</span>
                </div>
                
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden mb-6">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 via-mint-500 to-primary-500 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {buildSteps.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0.3, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.5, duration: 0.3 }}
                        className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <Icon className="h-5 w-5 text-primary-600" />
                          <span className="font-medium text-gray-900">{item.step}</span>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                          >
                            <CheckCircle className="h-4 w-4 text-mint-500" />
                          </motion.div>
                        </div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-surface rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all group"
              >
                <Icon className="h-10 w-10 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Start CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-mint-50 text-mint-700 px-6 py-3 rounded-full border border-mint-200 shadow-lg">
            <Play className="h-5 w-5" />
            <span className="font-medium">From idea to deployed app in under 60 seconds</span>
            <Zap className="h-4 w-4 text-yellow-500" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Forge;