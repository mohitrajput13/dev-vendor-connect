
import React, { useState } from 'react';
import Layout from '@/components/common/Layout';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import DeveloperCard from '@/components/common/DeveloperCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const VendorDevelopers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newDeveloper, setNewDeveloper] = useState({
    name: '',
    email: '',
    skills: '',
    experience: '',
    rate: ''
  });
  const { toast } = useToast();

  const developers = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      skills: ['React', 'Node.js', 'TypeScript'],
      experience: 5,
      rate: 75,
      availability: 'available' as const,
      projects: 12
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      skills: ['Python', 'Django', 'AWS'],
      experience: 7,
      rate: 85,
      availability: 'busy' as const,
      projects: 18
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      skills: ['Vue.js', 'Laravel', 'MySQL'],
      experience: 4,
      rate: 65,
      availability: 'available' as const,
      projects: 8
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add developer logic here
    toast({
      title: 'Developer Added',
      description: `${newDeveloper.name} has been added successfully.`,
    });
    setIsModalOpen(false);
    setNewDeveloper({ name: '', email: '', skills: '', experience: '', rate: '' });
  };

  const filteredDevelopers = developers.filter(dev =>
    dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const availableCount = developers.filter(dev => dev.availability === 'available').length;
  const busyCount = developers.filter(dev => dev.availability === 'busy').length;

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">My Developers</h1>
            <p className="text-gray-600">Manage your development team</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Developer</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Developers</p>
                  <p className="text-2xl font-bold text-gray-800">{developers.length}</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Active
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Available</p>
                  <p className="text-2xl font-bold text-green-600">{availableCount}</p>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Ready
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">In Projects</p>
                  <p className="text-2xl font-bold text-blue-600">{busyCount}</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Busy
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-gray-800">Developer List</CardTitle>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search developers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64 bg-white border-gray-300"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredDevelopers.map((developer) => (
                <DeveloperCard key={developer.id} developer={developer} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Developer"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-700">Full Name</Label>
              <Input
                id="name"
                value={newDeveloper.name}
                onChange={(e) => setNewDeveloper(prev => ({ ...prev, name: e.target.value }))}
                className="bg-white border-gray-300 text-gray-800"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                value={newDeveloper.email}
                onChange={(e) => setNewDeveloper(prev => ({ ...prev, email: e.target.value }))}
                className="bg-white border-gray-300 text-gray-800"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="skills" className="text-gray-700">Skills (comma separated)</Label>
              <Input
                id="skills"
                value={newDeveloper.skills}
                onChange={(e) => setNewDeveloper(prev => ({ ...prev, skills: e.target.value }))}
                className="bg-white border-gray-300 text-gray-800"
                placeholder="React, Node.js, TypeScript"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="experience" className="text-gray-700">Experience (years)</Label>
                <Input
                  id="experience"
                  type="number"
                  value={newDeveloper.experience}
                  onChange={(e) => setNewDeveloper(prev => ({ ...prev, experience: e.target.value }))}
                  className="bg-white border-gray-300 text-gray-800"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="rate" className="text-gray-700">Hourly Rate ($)</Label>
                <Input
                  id="rate"
                  type="number"
                  value={newDeveloper.rate}
                  onChange={(e) => setNewDeveloper(prev => ({ ...prev, rate: e.target.value }))}
                  className="bg-white border-gray-300 text-gray-800"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Add Developer
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </Layout>
  );
};

export default VendorDevelopers;
