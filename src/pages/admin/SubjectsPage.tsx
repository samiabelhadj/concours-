import { Card, CardHeader, Button } from '@/components/ui';

export function SubjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Générateur de sujets</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader title="Paramètres" subtitle="Configurer la génération" />
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre de sujets</label>
              <input type="number" defaultValue={3} className="w-full px-4 py-2 rounded-lg border border-slate-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Discipline</label>
              <select className="w-full px-4 py-2 rounded-lg border border-slate-300">
                <option>Mathématiques</option>
                <option>Physique</option>
                <option>Informatique</option>
              </select>
            </div>
            <Button fullWidth>Générer les sujets</Button>
          </div>
        </Card>
        <Card>
          <CardHeader title="Résultat" subtitle="Sujets générés (aperçu)" />
          <p className="text-sm text-slate-500">Aucune génération en cours. Lancez une génération pour voir les sujets ici.</p>
        </Card>
      </div>
    </div>
  );
}
