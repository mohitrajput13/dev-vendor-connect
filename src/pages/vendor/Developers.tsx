
import React, { useState } from 'react';
import Layout from '@/components/common/Layout';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import DeveloperCard from '@/components/common/DeveloperCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';

const VendorDevelopers: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const developers = [
    {
      id: '1',
      name: 'John Doe',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      experience: 5,
      rate: 75,
      availability: 'available' as const
    },
    {
      id: '2',
      name: 'Jane Smith',
      skills: ['Python', 'Django', 'AWS', 'Docker'],
      experience: 7,
      rate: 85,
      availability: 'busy' as const
    }
  ];

  const filteredDevelopers = developers.filter(dev =>
    dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">My Developers</h1>
            <p className="text-gray-400">Manage your development team</p>
          </div>
          <Button onClick={() => setShowAddModal(true)}>
            Add Developer
          </Button>
        </div>

        <Input
          placeholder="Search developers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-navy-800 border-navy-700 text-white max-w-md"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevelopers.map((developer) => (
            <DeveloperCard
              key={developer.id}
              developer={developer}
              onClick={() => navigate(`/vendor/developers/${developer.id}`)}
            />
          ))}
        </div>

        <Modal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          title="Add New Developer"
        >
          <form className="space-y-4">
            <div>
              <Label className="text-white">Full Name</Label>
              <Input className="bg-navy-800 border-navy-700 text-white" />
            </div>
            <div>
              <Label className="text-white">Email</Label>
              <Input type="email" className="bg-navy-800 border-navy-700 text-white" />
            </div>
            <div>
              <Label className="text-white">Skills (comma separated)</Label>
              <Input 
                placeholder="React, Node.js, TypeScript"
                className="bg-navy-800 border-navy-700 text-white" 
              />
            </div>
            <div>
              <Label className="text-white">Years of Experience</Label>
              <Input type="number" className="bg-navy-800 border-navy-700 text-white" />
            </div>
            <div>
              <Label className="text-white">Hourly Rate ($)</Label>
              <Input type="number" className="bg-navy-800 border-navy-700 text-white" />
            </div>
            <div>
              <Label className="text-white">Bio</Label>
              <Textarea className="bg-navy-800 border-navy-700 text-white" />
            </div>
            <div className="flex space-x-2 pt-4">
              <Button type="submit" className="flex-1">
                Add Developer
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowAddModal(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </Layout>
  );
};

export default VendorDevelopers;
