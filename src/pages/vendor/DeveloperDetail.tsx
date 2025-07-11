
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import Button from '@/components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, DollarSign, Briefcase } from 'lucide-react';

const DeveloperDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock developer data - in real app, fetch by id
  const developer = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: '2023-01-15',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'GraphQL'],
    experience: 5,
    rate: 75,
    availability: 'available' as const,
    projects: [
      { name: 'E-commerce Platform', duration: '6 months', status: 'completed' },
      { name: 'Healthcare Dashboard', duration: '4 months', status: 'in-progress' },
      { name: 'Social Media App', duration: '3 months', status: 'completed' }
    ],
    bio: 'Experienced full-stack developer with a passion for creating scalable web applications. Specialized in React and Node.js ecosystems with strong expertise in cloud technologies.',
    achievements: [
      'Led development of 15+ successful projects',
      'Certified AWS Solutions Architect',
      'Mentored 5+ junior developers',
      'Speaker at 3 tech conferences'
    ]
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => navigate('/vendor/developers')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Developers</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Developer Profile */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-blue-500 text-white text-2xl">
                    {developer.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-gray-800">{developer.name}</CardTitle>
                <Badge className={developer.availability === 'available' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-blue-100 text-blue-800 border-blue-200'}>
                  {developer.availability === 'available' ? 'Available' : 'Busy'}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{developer.email}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{developer.phone}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{developer.location}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Joined {new Date(developer.joinDate).toLocaleDateString()}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-600">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm">${developer.rate}/hour</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-600">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-sm">{developer.experience} years experience</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Developer Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills */}
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {developer.skills.map((skill, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800 border-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bio */}
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{developer.bio}</p>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">Recent Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {developer.projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800">{project.name}</h4>
                          <p className="text-sm text-gray-600">Duration: {project.duration}</p>
                        </div>
                        <Badge className={project.status === 'completed' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-blue-100 text-blue-800 border-blue-200'}>
                          {project.status === 'completed' ? 'Completed' : 'In Progress'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">Key Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {developer.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeveloperDetail;
