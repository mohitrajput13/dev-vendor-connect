
import React, { useState } from 'react';
import Layout from '@/components/common/Layout';
import DeveloperCard from '@/components/common/DeveloperCard';
import { Input } from '@/components/ui/input';

const AdminDevelopers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const developers = [
    {
      id: '1',
      name: 'John Doe',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      experience: 5,
      rate: 75,
      availability: 'available' as const,
      vendor: 'TechCorp Solutions'
    },
    {
      id: '2',
      name: 'Jane Smith',
      skills: ['Python', 'Django', 'AWS', 'Docker'],
      experience: 7,
      rate: 85,
      availability: 'busy' as const,
      vendor: 'DevStream Inc.'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      skills: ['Vue.js', 'Laravel', 'MySQL'],
      experience: 4,
      rate: 65,
      availability: 'available' as const,
      vendor: 'CodeMasters Ltd.'
    }
  ];

  const filteredDevelopers = developers.filter(dev =>
    dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">All Developers</h1>
          <p className="text-gray-400">View and manage developers across all vendors</p>
        </div>

        <Input
          placeholder="Search developers by name or skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-navy-800 border-navy-700 text-white max-w-md"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevelopers.map((developer) => (
            <div key={developer.id} className="space-y-2">
              <DeveloperCard developer={developer} />
              <p className="text-xs text-gray-500 text-center">
                Vendor: {developer.vendor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminDevelopers;
