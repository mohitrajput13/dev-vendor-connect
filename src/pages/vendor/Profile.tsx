
import React, { useState } from 'react';
import Layout from '@/components/common/Layout';
import Button from '@/components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';

const VendorProfile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    companyName: 'TechCorp Solutions',
    email: user?.email || '',
    phone: '+1-555-0123',
    address: '123 Tech Street, Silicon Valley, CA',
    description: 'Leading software development company specializing in modern web applications and cloud solutions.'
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Company Profile</h1>
          <p className="text-gray-400">Manage your company information and settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-navy-800 border-navy-700">
            <CardHeader>
              <CardTitle className="text-white">Company Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/company-logo.png" />
                  <AvatarFallback className="bg-blue-600 text-white text-lg">
                    TC
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline">Upload Logo</Button>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label className="text-white">Company Name</Label>
                  <Input
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="bg-navy-700 border-navy-600 text-white"
                    disabled={!isEditing}
                  />
                </div>
                
                <div>
                  <Label className="text-white">Email</Label>
                  <Input
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-navy-700 border-navy-600 text-white"
                    disabled={!isEditing}
                  />
                </div>
                
                <div>
                  <Label className="text-white">Phone</Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-navy-700 border-navy-600 text-white"
                    disabled={!isEditing}
                  />
                </div>
                
                <div>
                  <Label className="text-white">Address</Label>
                  <Input
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="bg-navy-700 border-navy-600 text-white"
                    disabled={!isEditing}
                  />
                </div>
                
                <div>
                  <Label className="text-white">Company Description</Label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="bg-navy-700 border-navy-600 text-white"
                    disabled={!isEditing}
                  />
                </div>
              </div>
              
              <div className="flex space-x-2 pt-4">
                {isEditing ? (
                  <>
                    <Button onClick={handleSave}>Save Changes</Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-navy-800 border-navy-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-navy-700 rounded-lg">
                    <div className="text-2xl font-bold text-white">12</div>
                    <div className="text-sm text-gray-400">Developers</div>
                  </div>
                  <div className="text-center p-3 bg-navy-700 rounded-lg">
                    <div className="text-2xl font-bold text-white">8</div>
                    <div className="text-sm text-gray-400">Available</div>
                  </div>
                  <div className="text-center p-3 bg-navy-700 rounded-lg">
                    <div className="text-2xl font-bold text-white">24</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-navy-700 rounded-lg">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-navy-800 border-navy-700">
              <CardHeader>
                <CardTitle className="text-white">Account Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Verification Status</span>
                    <span className="text-green-400">Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Member Since</span>
                    <span className="text-gray-400">January 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Plan</span>
                    <span className="text-blue-400">Premium</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VendorProfile;
