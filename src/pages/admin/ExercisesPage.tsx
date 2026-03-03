import { useEffect, useState } from 'react';
import { mockApi } from '@/api/mockClient';
import { Card, Button, Badge, Table, TableHead, TableBody, TableRow, TableTh, TableTd } from '@/components/ui';
import type { Exercise } from '@/types';

const statusVariant: Record<string, 'default' | 'success' | 'warning'> = {
  draft: 'default',
  published: 'success',
  archived: 'warning',
};

export function ExercisesPage() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    mockApi.getExercises().then((res) => setExercises(res.data));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Vue d'ensemble des exercices</h1>
        <Button>Filtrer</Button>
      </div>
      <Card padding="none">
        <Table>
          <TableHead>
            <TableRow>
              <TableTh>Titre</TableTh>
              <TableTh>Discipline</TableTh>
              <TableTh>Professeur</TableTh>
              <TableTh>Statut</TableTh>
              <TableTh>Version</TableTh>
              <TableTh className="text-right">Actions</TableTh>
            </TableRow>
          </TableHead>
          <TableBody>
            {exercises.map((ex) => (
              <TableRow key={ex.id}>
                <TableTd className="font-medium">{ex.title}</TableTd>
                <TableTd>{ex.subject}</TableTd>
                <TableTd>{ex.professorName}</TableTd>
                <TableTd><Badge variant={statusVariant[ex.status]}>{ex.status}</Badge></TableTd>
                <TableTd>v{ex.version}</TableTd>
                <TableTd className="text-right">
                  <Button variant="ghost" size="sm">Voir</Button>
                </TableTd>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
