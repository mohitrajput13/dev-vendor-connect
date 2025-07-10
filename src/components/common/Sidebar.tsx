
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Settings,
  Building2,
  CheckSquare,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface SidebarProps {
  role: 'admin' | 'vendor';
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const location = useLocation();
  const { logout } = useAuth();

  const adminNavItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Building2, label: 'Vendors', path: '/admin/vendors' },
    { icon: Users, label: 'Developers', path: '/admin/developers' },
    { icon: CheckSquare, label: 'Approvals', path: '/admin/approvals' },
    { icon: Settings, label: 'Profile', path: '/admin/profile' },
  ];

  const vendorNavItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/vendor/dashboard' },
    { icon: Users, label: 'Developers', path: '/vendor/developers' },
    { icon: Settings, label: 'Profile', path: '/vendor/profile' },
  ];

  const navItems = role === 'admin' ? adminNavItems : vendorNavItems;

  return (
    <div className="w-64 bg-navy-950 border-r border-navy-800 min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white">
          {role === 'admin' ? 'Admin Portal' : 'Vendor Portal'}
        </h2>
      </div>
      
      <nav className="px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'nav-item mb-2',
                isActive && 'active'
              )}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
        
        <button
          onClick={logout}
          className="nav-item mb-2 w-full text-left mt-8"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
