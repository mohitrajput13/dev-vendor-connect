
import React from 'react';
import Layout from '@/components/common/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DeveloperCard from '@/components/common/DeveloperCard';
import { Users, UserCheck, Clock, DollarSign } from 'lucide-react';

const VendorDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Developers',
      value: '12',
      change: '+2 this month',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      title: 'Available',
      value: '8',
      change: 'Ready for projects',
      icon: UserCheck,
      color: 'text-green-400'
    },
    {
      title: 'In Projects',
      value: '4',
      change: 'Currently busy',
      icon: Clock,
      color: 'text-yellow-400'
    },
    {
      title: 'Monthly Revenue',
      value: '$24K',
      change: '+15% from last month',
      icon: DollarSign,
      color: 'text-purple-400'
    }
  ];

  const recentDevelopers = [
    {
      id: '1',
      name: 'John Doe',
      skills: ['React', 'Node.js', 'TypeScript'],
      experience: 5,
      rate: 75,
      availability: 'available' as const
    },
    {
      id: '2',
      name: 'Jane Smith',
      skills: ['Python', 'Django', 'AWS'],
      experience: 7,
      rate: 85,
      availability: 'busy' as const
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Vendor Dashboard</h1>
          <p className="text-gray-400">Manage your developers and track performance</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="bg-navy-800 border-navy-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-navy-800 border-navy-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Developers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDevelopers.map((developer) => (
                  <DeveloperCard key={developer.id} developer={developer} />
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-navy-800 border-navy-700">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-navy-700 hover:bg-navy-600 rounded-lg transition-colors">
                  <p className="text-white font-medium">Add New Developer</p>
                  <p className="text-gray-400 text-sm">Register a new team member</p>
                </button>
                <button className="w-full text-left p-3 bg-navy-700 hover:bg-navy-600 rounded-lg transition-colors">
                  <p className="text-white font-medium">Update Availability</p>
                  <p className="text-gray-400 text-sm">Manage developer status</p>
                </button>
                <button className="w-full text-left p-3 bg-navy-700 hover:bg-navy-600 rounded-lg transition-colors">
                  <p className="text-white font-medium">View Reports</p>
                  <p className="text-gray-400 text-sm">Check performance metrics</p>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default VendorDashboard;
