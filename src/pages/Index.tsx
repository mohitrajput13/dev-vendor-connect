
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import { Building2, Users, Shield, Zap } from 'lucide-react';

const Index: React.FC = () => {
  const features = [
    {
      icon: Building2,
      title: 'Multi-Vendor Management',
      description: 'Manage multiple software vendors and their developer teams in one platform'
    },
    {
      icon: Users,
      title: 'Developer Profiles',
      description: 'Comprehensive profiles with skills, experience, rates, and resume management'
    },
    {
      icon: Shield,
      title: 'Role-Based Access',
      description: 'Secure admin and vendor portals with proper access controls'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Live availability status, project tracking, and instant notifications'
    }
  ];

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Header */}
      <header className="bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                Staff Augmentation Portal
              </h1>
            </div>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline" className="text-white border-gray-600 hover:bg-navy-800">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button>
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Streamline Your
            <span className="text-blue-400"> Developer </span>
            Management
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            A comprehensive platform for managing multiple software vendors, their developer teams, 
            and project assignments with role-based access and real-time tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-gray-600 hover:bg-navy-800">
                Login to Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">
              Powerful Features
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage your development teams effectively
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 bg-navy-900 rounded-lg border border-navy-800 hover:border-navy-700 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-400 mb-8">
            Join our platform and streamline your developer management today.
          </p>
          <Link to="/signup">
            <Button size="lg">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 border-t border-navy-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Staff Augmentation Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
