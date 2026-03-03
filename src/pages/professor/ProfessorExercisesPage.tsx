import { useEffect, useState } from 'react';
import { useAuthStore } from '@/stores/authStore';
import { mockApi } from '@/api/mockClient';
import { Card, Button, Badge, Table, TableHead, TableBody, TableRow, TableTh, TableTd, Modal } from '@/components/ui';
import type { Exercise } from '@/types';

const statusVariant: Record<string, 'default' | 'success' | 'warning'> = {
  draft: 'default',
  published: 'success',
  archived: 'warning',
};

export function ProfessorExercisesPage() {
  const user = useAuthStore((s) => s.user);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [uploadOpen, setUploadOpen] = useState(false);

  useEffect(() => {
    mockApi.getExercises().then((res) => {
      const mine = res.data.filter((ex: Exercise) => ex.professorId === user?.id);
      setExercises(mine);
    });
  }, [user?.id]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Mes exercices</h1>
        <Button onClick={() => setUploadOpen(true)}>Uploader un exercice</Button>
      </div>
      <Card padding="none">
        <Table>
          <TableHead>
            <TableRow>
              <TableTh>Titre</TableTh>
              <TableTh>Discipline</TableTh>
              <TableTh>Statut</TableTh>
              <TableTh>Version</TableTh>
              <TableTh>Date</TableTh>
              <TableTh className="text-right">Actions</TableTh>
            </TableRow>
          </TableHead>
          <TableBody>
            {exercises.map((ex) => (
              <TableRow key={ex.id}>
                <TableTd className="font-medium">{ex.title}</TableTd>
                <TableTd>{ex.subject}</TableTd>
                <TableTd><Badge variant={statusVariant[ex.status]}>{ex.status}</Badge></TableTd>
                <TableTd>v{ex.version}</TableTd>
                <TableTd>{ex.createdAt}</TableTd>
                <TableTd className="text-right">
                  <Button variant="ghost" size="sm">Historique</Button>
                </TableTd>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Modal isOpen={uploadOpen} onClose={() => setUploadOpen(false)} title="Uploader un exercice" size="lg">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Titre</label>
            <input type="text" placeholder="Ex: Algèbre linéaire - Partie 1" className="w-full px-4 py-2 rounded-lg border border-slate-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Discipline</label>
            <select className="w-full px-4 py-2 rounded-lg border border-slate-300">
              <option>Mathématiques</option>
              <option>Physique</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Fichier PDF</label>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center text-slate-500">
              Glissez un fichier ici ou cliquez pour parcourir
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setUploadOpen(false)}>Annuler</Button>
            <Button onClick={() => setUploadOpen(false)}>Envoyer</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
