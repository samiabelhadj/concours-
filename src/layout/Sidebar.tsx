import { NavLink } from 'react-router-dom';
import { navConfig } from '@/config/navConfig';
import { getNavIcon } from '@/components/NavIcons';
import { useAuthStore } from '@/stores/authStore';

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const user = useAuthStore((s) => s.user);
  const role = user?.role ?? 'admin';
  const items = navConfig.filter((item) => item.roles.includes(role));

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-slate-200 flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <h1 className="text-xl font-bold text-primary-700">ConcoursDoctor</h1>
        <p className="text-xs text-slate-500 mt-0.5">Tableau de bord</p>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => onClose?.()}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`
            }
          >
            <span className="text-slate-400 [.active_&]:text-primary-600">{getNavIcon(item.icon)}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
