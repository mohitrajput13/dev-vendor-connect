
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-400">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Go Home</span>
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-white border-gray-600 hover:bg-navy-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
