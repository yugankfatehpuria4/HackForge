import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Settings, 
  Trophy, 
  Star, 
  Download, 
  Eye, 
  Calendar,
  Award,
  TrendingUp,
  Code2,
  Rocket,
  Heart,
  Edit3,
  Mail,
  Github,
  Globe,
  Zap,
  Sparkles
} from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'projects', label: 'My Projects', icon: Code2 },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const userStats = [
    { label: 'Total XP', value: '12,450', icon: Star, color: 'mint' },
    { label: 'Projects Created', value: '47', icon: Code2, color: 'primary' },
    { label: 'Templates Shared', value: '23', icon: Rocket, color: 'coral' },
    { label: 'Community Likes', value: '389', icon: Heart, color: 'mint' },
  ];

  const recentProjects = [
    {
      id: 1,
      name: 'Task Management App',
      status: 'deployed',
      lastModified: '2 days ago',
      views: 234,
      likes: 12,
    },
    {
      id: 2,
      name: 'E-commerce Dashboard',
      status: 'building',
      lastModified: '5 days ago',
      views: 156,
      likes: 8,
    },
    {
      id: 3,
      name: 'Social Media Platform',
      status: 'draft',
      lastModified: '1 week ago',
      views: 89,
      likes: 5,
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'First Deploy',
      description: 'Successfully deployed your first application',
      icon: Rocket,
      earned: true,
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Community Favorite',
      description: 'One of your templates received 100+ likes',
      icon: Heart,
      earned: true,
      date: '2024-01-10',
    },
    {
      id: 3,
      title: 'Speed Builder',
      description: 'Built 10 applications in a single month',
      icon: TrendingUp,
      earned: false,
      date: null,
    },
    {
      id: 4,
      title: 'Master Contributor',
      description: 'Shared 50+ templates with the community',
      icon: Award,
      earned: false,
      date: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with Bolt Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-surface rounded-3xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-6 flex-1">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-mint-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    SC
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-mint-500 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">Sarah Chen</h1>
                    <span className="px-3 py-1 bg-mint-100 text-mint-700 rounded-full text-sm font-medium">
                      Pro Builder
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    Full-stack developer passionate about creating beautiful, functional applications. 
                    Building the future one app at a time! 🚀
                  </p>

                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Joined January 2024</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Mail className="h-4 w-4" />
                      <span>sarah.chen@email.com</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Github className="h-4 w-4" />
                      <span>github.com/sarahchen</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="h-4 w-4" />
                      <span>portfolio.sarahchen.dev</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bolt Badge beside username */}
              <div className="flex items-center space-x-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 shadow-lg"
                >
                  <Zap className="h-5 w-5 text-blue-600" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Built with Bolt
                    </span>
                    <span className="text-xs text-blue-500 -mt-0.5">Hackathon Entry</span>
                  </div>
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                </motion.div>

                <button className="p-2 hover:bg-surface-hover rounded-lg transition-colors">
                  <Edit3 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {userStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-surface rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-surface rounded-2xl p-2 shadow-lg border border-gray-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeAccountTab"
                    className="absolute inset-0 bg-primary-50 rounded-xl border border-primary-200 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="bg-surface rounded-2xl p-6 shadow-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Projects</h2>
                
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 bg-surface-hover rounded-xl border border-gray-100">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-1">{project.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'deployed' ? 'bg-green-100 text-green-700' :
                            project.status === 'building' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {project.status}
                          </span>
                          <span>{project.lastModified}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{project.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{project.likes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Level Progress */}
              <div className="bg-surface rounded-2xl p-6 shadow-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Level Progress</h2>
                
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 mb-2">
                    <Star className="h-6 w-6 text-mint-500" />
                    <span className="text-2xl font-bold text-gray-900">Level 12</span>
                  </div>
                  <p className="text-gray-600">Pro Builder</p>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress to Level 13</span>
                    <span>12,450 / 15,000 XP</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-mint-500 to-primary-500 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '83%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Next Reward</span>
                    <span className="text-sm font-medium text-gray-900">Master Builder Badge</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">XP Needed</span>
                    <span className="text-sm font-medium text-mint-600">2,550 XP</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.id}
                    className={`p-6 rounded-2xl shadow-lg border transition-all ${
                      achievement.earned
                        ? 'bg-surface border-mint-200 hover:shadow-xl'
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        achievement.earned ? 'bg-mint-100' : 'bg-gray-200'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          achievement.earned ? 'text-mint-600' : 'text-gray-400'
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-2 ${
                          achievement.earned ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm mb-3 ${
                          achievement.earned ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {achievement.description}
                        </p>
                        
                        {achievement.earned && achievement.date && (
                          <div className="flex items-center space-x-1 text-xs text-mint-600">
                            <Calendar className="h-3 w-3" />
                            <span>Earned on {new Date(achievement.date).toLocaleDateString()}</span>
                          </div>
                        )}
                        
                        {!achievement.earned && (
                          <span className="text-xs text-gray-400">Not yet earned</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Account;