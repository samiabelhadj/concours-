import { useAuthStore } from '@/stores/authStore';
import { Card, CardHeader } from '@/components/ui/Card';

const roleLabels: Record<string, string> = {
  admin: 'Administrateur',
  professor: 'Professeur',
  corrector: 'Correcteur',
  supervisor: 'Superviseur',
  jury: 'Jury',
};

export function DashboardHome() {
  const user = useAuthStore((s) => s.user);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Tableau de bord</h1>
      <p className="text-slate-600 mb-8">
        Bienvenue, {user?.name}. Vous êtes connecté en tant que {roleLabels[user?.role ?? '']}.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader title="Accès rapide" subtitle="Navigation par rôle" />
          <p className="text-sm text-slate-600">
            Utilisez le menu latéral pour accéder aux fonctionnalités de votre rôle.
          </p>
        </Card>
        <Card>
          <CardHeader title="ConcoursDoctor" subtitle="Plateforme démo" />
          <p className="text-sm text-slate-600">
            Cette interface simule la gestion des concours doctoraux (sans backend).
          </p>
        </Card>
        <Card>
          <CardHeader title="Aide" subtitle="Connexion rapide" />
          <p className="text-sm text-slate-600">
            Déconnectez-vous et utilisez les boutons de connexion rapide pour changer de rôle.
          </p>
        </Card>
      </div>
    </div>
  );
}
