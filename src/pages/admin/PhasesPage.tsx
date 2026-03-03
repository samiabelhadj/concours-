import { useEffect, useState } from 'react';
import { mockApi } from '@/api/mockClient';
import { Card, CardHeader, Badge } from '@/components/ui';
import type { Phase } from '@/types';

const statusVariant: Record<string, 'default' | 'success' | 'warning'> = {
  pending: 'default',
  active: 'warning',
  completed: 'success',
};

export function PhasesPage() {
  const [phases, setPhases] = useState<Phase[]>([]);

  useEffect(() => {
    mockApi.getPhases().then((res) => setPhases(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Gestion des phases</h1>
      <Card>
        <CardHeader title="Étapes du concours" subtitle="Cliquez sur une phase pour la modifier" />
        <div className="flex flex-wrap gap-4">
          {phases.map((phase, index) => (
            <div key={phase.id} className="flex items-center gap-3">
              {index > 0 && <div className="w-8 h-0.5 bg-slate-200" />}
              <div className="flex flex-col items-center gap-2 min-w-[120px]">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                  {phase.order}
                </div>
                <span className="text-sm font-medium text-slate-900">{phase.name}</span>
                <Badge variant={statusVariant[phase.status]}>{phase.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
