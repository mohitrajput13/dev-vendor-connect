
import React from 'react';
import Layout from '@/components/common/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building2, UserCheck, TrendingUp } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Vendors',
      value: '24',
      change: '+2 this month',
      icon: Building2,
      color: 'text-blue-600'
    },
    {
      title: 'Total Developers',
      value: '156',
      change: '+12 this month',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Active Projects',
      value: '8',
      change: '+3 this month',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Pending Approvals',
      value: '5',
      change: '2 vendors, 3 developers',
      icon: UserCheck,
      color: 'text-orange-600'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600">Overview of platform statistics and activities</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-800">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: 'New vendor registered', time: '2 hours ago', type: 'vendor' },
                  { action: 'Developer profile updated', time: '4 hours ago', type: 'developer' },
                  { action: 'Project completed', time: '1 day ago', type: 'project' },
                  { action: 'New developer added', time: '2 days ago', type: 'developer' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <div>
                      <p className="text-sm text-gray-800">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {activity.type}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-800">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
                  <p className="text-gray-800 font-medium">Review Pending Approvals</p>
                  <p className="text-gray-600 text-sm">5 items waiting for review</p>
                </button>
                <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
                  <p className="text-gray-800 font-medium">Add New Vendor</p>
                  <p className="text-gray-600 text-sm">Register a new vendor manually</p>
                </button>
                <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
                  <p className="text-gray-800 font-medium">Export Reports</p>
                  <p className="text-gray-600 text-sm">Download platform analytics</p>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
