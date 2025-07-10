
import React, { useState } from 'react';
import Layout from '@/components/common/Layout';
import Button from '@/components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';

const AdminProfile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1-555-0123',
    department: 'IT Administration'
  });

  const handleSave = () => {
    // Save logic here
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Admin Profile</h1>
          <p className="text-gray-400">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-navy-800 border-navy-700">
            <CardHeader>
              <CardTitle className="text-white">Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback className="bg-blue-600 text-white text-lg">
                    {user?.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline">Change Photo</Button>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label className="text-white">Full Name</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                  <Label className="text-white">Department</Label>
                  <Input
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
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
          
          <Card className="bg-navy-800 border-navy-700">
            <CardHeader>
              <CardTitle className="text-white">Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-navy-700 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Two-Factor Authentication</p>
                    <p className="text-gray-400 text-sm">Add extra security to your account</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-navy-700 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Email Notifications</p>
                    <p className="text-gray-400 text-sm">Receive updates about platform activity</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-navy-700 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Change Password</p>
                    <p className="text-gray-400 text-sm">Update your login password</p>
                  </div>
                  <Button variant="outline" size="sm">Change</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminProfile;
