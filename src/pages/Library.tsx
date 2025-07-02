import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Download, 
  Eye, 
  Code2, 
  Heart,
  Bookmark,
  TrendingUp,
  Award,
  Users,
  Calendar,
  Zap,
  Sparkles
} from 'lucide-react';

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Templates', count: 247 },
    { id: 'webapp', name: 'Web Apps', count: 89 },
    { id: 'mobile', name: 'Mobile Apps', count: 45 },
    { id: 'dashboard', name: 'Dashboards', count: 34 },
    { id: 'ecommerce', name: 'E-commerce', count: 28 },
    { id: 'social', name: 'Social', count: 51 },
  ];

  const templates = [
    {
      id: 1,
      name: 'Task Management Dashboard',
      description: 'Complete project management tool with Kanban boards, time tracking, and team collaboration features.',
      author: 'Sarah Chen',
      authorXP: 12450,
      stars: 234,
      downloads: 1205,
      views: 3421,
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      category: 'webapp',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdAt: '2024-01-15',
      premium: false,
    },
    {
      id: 2,
      name: 'E-commerce Store',
      description: 'Full-featured online store with payment processing, inventory management, and admin dashboard.',
      author: 'Mike Rodriguez',
      authorXP: 8920,
      stars: 189,
      downloads: 892,
      views: 2156,
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'TailwindCSS'],
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdAt: '2024-01-12',
      premium: true,
    },
    {
      id: 3,
      name: 'Social Media Platform',
      description: 'Modern social platform with real-time chat, posts, stories, and user engagement features.',
      author: 'Alex Kim',
      authorXP: 15670,
      stars: 312,
      downloads: 1567,
      views: 4231,
      tags: ['React', 'Firebase', 'WebRTC', 'MaterialUI'],
      category: 'social',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdAt: '2024-01-10',
      premium: false,
    },
    {
      id: 4,
      name: 'Analytics Dashboard',
      description: 'Beautiful analytics dashboard with charts, KPIs, and real-time data visualization.',
      author: 'Emma Thompson',
      authorXP: 9340,
      stars: 156,
      downloads: 743,
      views: 1890,
      tags: ['Vue.js', 'Chart.js', 'Express', 'Redis'],
      category: 'dashboard',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdAt: '2024-01-08',
      premium: false,
    },
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Bolt Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Template Library</h1>
              <p className="text-gray-600">Discover and remix production-ready templates from the community</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Bolt Badge in Top Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 shadow-lg"
              >
                <Zap className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Powered by Bolt
                </span>
                <Sparkles className="h-4 w-4 text-yellow-500" />
              </motion.div>

              <div className="flex items-center space-x-2 bg-mint-50 px-3 py-2 rounded-lg border border-mint-200">
                <Award className="h-4 w-4 text-mint-600" />
                <span className="text-sm font-medium text-mint-700">Top Contributor</span>
              </div>
              
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                Upload Template
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-3 border border-gray-200 rounded-lg focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: 'Total Templates', value: '247', icon: Code2, color: 'primary' },
            { label: 'Total Downloads', value: '12.4K', icon: Download, color: 'mint' },
            { label: 'Active Contributors', value: '89', icon: Users, color: 'coral' },
            { label: 'This Month', value: '+23', icon: TrendingUp, color: 'primary' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-surface rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <Icon className={`h-8 w-8 text-${stat.color}-600`} />
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-surface rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Template Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {template.premium && (
                  <div className="absolute top-3 right-3 bg-coral-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Premium
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <button className="flex-1 bg-white/90 hover:bg-white text-gray-900 py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                      <Eye className="h-4 w-4 inline mr-1" />
                      Preview
                    </button>
                    <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                      <Download className="h-4 w-4 inline mr-1" />
                      Use
                    </button>
                  </div>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg group-hover:text-primary-700 transition-colors">
                    {template.name}
                  </h3>
                  <button className="p-1 hover:bg-surface-hover rounded">
                    <Bookmark className="h-4 w-4 text-gray-400 hover:text-coral-500 transition-colors" />
                  </button>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {template.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {template.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full border border-primary-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {template.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-full border border-gray-200">
                      +{template.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Author and Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-mint-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {template.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{template.author}</p>
                      <p className="text-xs text-gray-500">{template.authorXP.toLocaleString()} XP</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    <Calendar className="h-3 w-3 inline mr-1" />
                    {new Date(template.createdAt).toLocaleDateString()}
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{template.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{template.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{template.views}</span>
                  </div>
                  <button className="flex items-center space-x-1 hover:text-coral-500 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>Like</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 bg-surface hover:bg-surface-hover border border-gray-200 rounded-lg font-medium text-gray-700 transition-colors">
            Load More Templates
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Library;