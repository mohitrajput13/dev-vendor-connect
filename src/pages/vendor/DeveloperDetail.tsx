import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import Button from '@/components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, Mail, Phone, Calendar, DollarSign, FileText } from 'lucide-react';

const DeveloperDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - replace with actual API call
  const developer = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1-555-0123',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL'],
    experience: 5,
    rate: 75,
    availability: 'available' as const,
    bio: 'Experienced full-stack developer with expertise in modern web technologies. Passionate about building scalable applications and mentoring junior developers.',
    projects: [
      { name: 'E-commerce Platform', duration: '6 months', role: 'Lead Developer' },
      { name: 'Healthcare App', duration: '4 months', role: 'Frontend Developer' },
      { name: 'Financial Dashboard', duration: '3 months', role: 'Full-stack Developer' }
    ],
    joinDate: '2023-06-15',
    avatar: undefined // Added missing avatar property
  };

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'busy': return 'bg-yellow-500';
      case 'unavailable': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/vendor/developers')}
            className="flex items-center space-x-2 text-white hover:bg-navy-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Developers</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="bg-navy-800 border-navy-700">
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={developer.avatar} />
                <AvatarFallback className="bg-blue-600 text-white text-2xl">
                  {developer.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-white">{developer.name}</CardTitle>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <div className={`w-3 h-3 rounded-full ${getAvailabilityColor(developer.availability)}`} />
                <span className="text-gray-400 capitalize">{developer.availability}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span>{developer.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span>{developer.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span>{developer.experience} years experience</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <DollarSign className="h-4 w-4" />
                  <span>${developer.rate}/hour</span>
                </div>
              </div>
              
              <div className="pt-4 space-y-2">
                <Button className="w-full">
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full">
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Details Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills */}
            <Card className="bg-navy-800 border-navy-700">
              <CardHeader>
                <CardTitle className="text-white">Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {developer.skills.map((skill) => (
                    <Badge key={skill} className="bg-blue-600 text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bio */}
            <Card className="bg-navy-800 border-navy-700">
              <CardHeader>
                <CardTitle className="text-white">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{developer.bio}</p>
              </CardContent>
            </Card>

            {/* Recent Projects */}
            <Card className="bg-navy-800 border-navy-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {developer.projects.map((project, index) => (
                    <div key={index} className="border-b border-navy-700 pb-3 last:border-b-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-white">{project.name}</h4>
                          <p className="text-sm text-gray-400">{project.role}</p>
                        </div>
                        <span className="text-xs text-gray-500">{project.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeveloperDetail;
