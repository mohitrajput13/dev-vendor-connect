
import React, { useState } from 'react';
import Layout from '@/components/common/Layout';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building2, Users, Mail, Phone, MoreVertical } from 'lucide-react';

const AdminVendors: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const vendors = [
    {
      id: '1',
      name: 'TechCorp Solutions',
      email: 'contact@techcorp.com',
      phone: '+1-555-0123',
      developers: 15,
      status: 'active',
      joinDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'DevStream Inc.',
      email: 'hello@devstream.com',
      phone: '+1-555-0456',
      developers: 8,
      status: 'pending',
      joinDate: '2024-02-20'
    },
    {
      id: '3',
      name: 'CodeMasters Ltd.',
      email: 'info@codemasters.com',
      phone: '+1-555-0789',
      developers: 22,
      status: 'active',
      joinDate: '2023-11-10'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'inactive': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Vendor Management</h1>
            <p className="text-gray-600">Manage all registered vendors and their status</p>
          </div>
          <Button onClick={() => setShowAddModal(true)}>
            Add New Vendor
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search vendors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white border-gray-300 text-gray-800 max-w-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <Card key={vendor.id} className="bg-white border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg text-gray-800">{vendor.name}</CardTitle>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={`${getStatusColor(vendor.status)} border`}>
                    {vendor.status}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    Joined {new Date(vendor.joinDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>{vendor.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{vendor.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{vendor.developers} developers</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" variant="secondary" className="flex-1">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Modal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          title="Add New Vendor"
        >
          <form className="space-y-4">
            <div>
              <Label className="text-gray-700">Company Name</Label>
              <Input className="bg-white border-gray-300 text-gray-800" />
            </div>
            <div>
              <Label className="text-gray-700">Email</Label>
              <Input type="email" className="bg-white border-gray-300 text-gray-800" />
            </div>
            <div>
              <Label className="text-gray-700">Phone</Label>
              <Input className="bg-white border-gray-300 text-gray-800" />
            </div>
            <div className="flex space-x-2 pt-4">
              <Button type="submit" className="flex-1">
                Add Vendor
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

export default AdminVendors;
