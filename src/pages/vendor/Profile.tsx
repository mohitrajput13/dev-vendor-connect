
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
          <h1 className="text-2xl font-bold text-gray-800">Company Profile</h1>
          <p className="text-gray-600">Manage your company information and settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-800">Company Information</CardTitle>
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
                  <Label className="text-gray-700">Company Name</Label>
                  <Input
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="bg-white border-gray-300 text-gray-800"
                    disabled={!isEditing}
                  />
                </div>
                
                <div>
                  <Label className="text-gray-700">Email</Label>
                  <Input
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white border-gray-300 text-gray-800"
                    disabled={!isEditing}
                  />
                </div>
                
                <div>
                  <Label className="text-gray-700">Phone</Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-white border-gray-300 text-gray-800"
                    disabled={!isEditing}
                  />
                </div>
                
                <div>
                  <Label className="text-gray-700">Address</Label>
                  <Input
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="bg-white border-gray-300 text-gray-800"
                    disabled={!isEditing}
                  />
                </div>
                
                <div>
                  <Label className="text-gray-700">Company Description</Label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="bg-white border-gray-300 text-gray-800"
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
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-gray-800">12</div>
                    <div className="text-sm text-gray-600">Developers</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-gray-800">8</div>
                    <div className="text-sm text-gray-600">Available</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-gray-800">24</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-gray-800">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Account Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Verification Status</span>
                    <span className="text-green-600">Verified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Member Since</span>
                    <span className="text-gray-600">January 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Plan</span>
                    <span className="text-blue-600">Premium</span>
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
