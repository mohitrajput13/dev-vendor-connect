
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, DollarSign, Star } from 'lucide-react';

interface Developer {
  id: string;
  name: string;
  skills: string[];
  experience: number;
  rate: number;
  availability: 'available' | 'busy' | 'unavailable';
  avatar?: string;
}

interface DeveloperCardProps {
  developer: Developer;
  onClick?: () => void;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer, onClick }) => {
  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'busy': return 'bg-yellow-500';
      case 'unavailable': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card 
      className="bg-navy-800 border-navy-700 hover:bg-navy-750 transition-colors cursor-pointer card-hover"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={developer.avatar} />
            <AvatarFallback className="bg-blue-600 text-white">
              {developer.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-white">{developer.name}</h3>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${getAvailabilityColor(developer.availability)}`} />
              <span className="text-sm text-gray-400 capitalize">{developer.availability}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1">
            {developer.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs bg-navy-700 text-gray-300">
                {skill}
              </Badge>
            ))}
            {developer.skills.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-navy-700 text-gray-300">
                +{developer.skills.length - 3}
              </Badge>
            )}
          </div>
          
          <div className="flex justify-between text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {developer.experience}y exp
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              ${developer.rate}/hr
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeveloperCard;
