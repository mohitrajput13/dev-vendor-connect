
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      const role = email === 'admin@test.com' ? 'admin' : 'vendor';
      navigate(`/${role}/dashboard`);
      toast({
        title: 'Login Successful',
        description: 'Welcome back!',
      });
    } catch (error) {
      toast({
        title: 'Login Failed',
        description: 'Invalid credentials. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-navy-950 border-navy-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white">
            Staff Augmentation Portal
          </CardTitle>
          <p className="text-gray-400">Sign in to your account</p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-navy-800 border-navy-700 text-white"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-navy-800 border-navy-700 text-white"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Demo credentials:
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Admin: admin@test.com / password
            </p>
            <p className="text-sm text-gray-500">
              Vendor: vendor@test.com / password
            </p>
          </div>
          
          <div className="mt-4 text-center">
            <Link to="/signup" className="text-blue-400 hover:text-blue-300">
              Don't have an account? Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
