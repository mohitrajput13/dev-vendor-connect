
import React from 'react';
import Layout from '@/components/common/Layout';
import Button from '@/components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, User, CheckCircle, XCircle } from 'lucide-react';

const AdminApprovals: React.FC = () => {
  const pendingApprovals = [
    {
      id: '1',
      type: 'vendor',
      name: 'NewTech Solutions',
      email: 'contact@newtech.com',
      submittedDate: '2024-01-20',
      details: 'Software development company with 10+ developers'
    },
    {
      id: '2',
      type: 'developer',
      name: 'Alice Cooper',
      email: 'alice@techcorp.com',
      vendor: 'TechCorp Solutions',
      submittedDate: '2024-01-19',
      details: 'Senior React developer with 6 years experience'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Pending Approvals</h1>
          <p className="text-gray-600">Review and approve vendor and developer registrations</p>
        </div>

        <div className="space-y-4">
          {pendingApprovals.map((item) => (
            <Card key={item.id} className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {item.type === 'vendor' ? (
                      <Building2 className="h-5 w-5 text-blue-600" />
                    ) : (
                      <User className="h-5 w-5 text-green-600" />
                    )}
                    <div>
                      <CardTitle className="text-gray-800">{item.name}</CardTitle>
                      <p className="text-gray-600 text-sm">{item.email}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-orange-600 border-orange-300 bg-orange-50">
                    {item.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">{item.details}</p>
                  {item.type === 'developer' && (
                    <p className="text-sm text-gray-600">
                      Vendor: {item.vendor}
                    </p>
                  )}
                  <p className="text-sm text-gray-500">
                    Submitted: {new Date(item.submittedDate).toLocaleDateString()}
                  </p>
                  
                  <div className="flex space-x-3">
                    <Button className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Approve</span>
                    </Button>
                    <Button variant="danger" className="flex items-center space-x-2">
                      <XCircle className="h-4 w-4" />
                      <span>Reject</span>
                    </Button>
                    <Button variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminApprovals;
