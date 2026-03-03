import { Card, CardHeader, Badge } from '@/components/ui';

const versions = [
  { id: '1', version: 3, date: '2025-03-01', status: 'published', comment: 'Version finale' },
  { id: '2', version: 2, date: '2025-02-25', status: 'archived', comment: 'Corrections mineures' },
  { id: '1', version: 1, date: '2025-02-15', status: 'archived', comment: 'Création' },
];

export function VersionHistoryPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Historique des versions</h1>
      <Card>
        <CardHeader title="Algèbre linéaire - Partie 1" subtitle="Timeline des versions" />
        <div className="relative">
          {versions.map((v, i) => (
            <div key={v.version} className="flex gap-4 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
                  v{v.version}
                </div>
                {i < versions.length - 1 && <div className="w-0.5 flex-1 min-h-[2rem] bg-slate-200 my-1" />}
              </div>
              <div className="flex-1 pt-1">
                <p className="font-medium text-slate-900">{v.date}</p>
                <p className="text-sm text-slate-600">{v.comment}</p>
                <Badge variant={v.status === 'published' ? 'success' : 'default'} className="mt-2">{v.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
