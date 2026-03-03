import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { Button } from '@/components/ui';
import type { Role } from '@/types';

const roles: { value: Role; label: string }[] = [
  { value: 'admin', label: 'Administrateur' },
  { value: 'professor', label: 'Professeur' },
  { value: 'corrector', label: 'Correcteur' },
  { value: 'supervisor', label: 'Superviseur' },
  { value: 'jury', label: 'Jury' },
];

export function Login() {
  const [email, setEmail] = useState('admin@concours.doctor');
  const [password, setPassword] = useState('••••••••');
  const [selectedRole, setSelectedRole] = useState<Role>('admin');
  const login = useAuthStore((s) => s.login);
  const loginAsRole = useAuthStore((s) => s.loginAsRole);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, selectedRole);
    navigate('/');
  };

  const handleQuickRole = (role: Role) => {
    loginAsRole(role);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-primary-50/30 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-700">ConcoursDoctor</h1>
          <p className="text-slate-600 mt-1">Plateforme de gestion des concours doctoraux</p>
        </div>
        <div className="bg-white rounded-2xl shadow-soft border border-slate-200 p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Connexion</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                placeholder="vous@exemple.fr"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Se connecter en tant que</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value as Role)}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              >
                {roles.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </div>
            <Button type="submit" fullWidth size="lg">
              Se connecter
            </Button>
          </form>
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500 mb-3">Connexion rapide (démo)</p>
            <div className="flex flex-wrap gap-2">
              {roles.map((r) => (
                <Button key={r.value} variant="outline" size="sm" type="button" onClick={() => handleQuickRole(r.value)}>
                  {r.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
