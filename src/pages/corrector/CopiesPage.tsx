import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockApi } from '@/api/mockClient';
import { Card, Button, Badge, Table, TableHead, TableBody, TableRow, TableTh, TableTd } from '@/components/ui';
import type { Copy } from '@/types';

const statusVariant: Record<string, 'default' | 'warning' | 'success'> = {
  pending: 'default',
  in_progress: 'warning',
  corrected: 'success',
};

export function CopiesPage() {
  const navigate = useNavigate();
  const [copies, setCopies] = useState<Copy[]>([]);

  useEffect(() => {
    mockApi.getCopies().then((res) => setCopies(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Copies anonymes</h1>
      <Card padding="none">
        <Table>
          <TableHead>
            <TableRow>
              <TableTh>Code copie</TableTh>
              <TableTh>Exercice</TableTh>
              <TableTh>Statut</TableTh>
              <TableTh>Note</TableTh>
              <TableTh className="text-right">Actions</TableTh>
            </TableRow>
          </TableHead>
          <TableBody>
            {copies.map((c) => (
              <TableRow key={c.id}>
                <TableTd className="font-mono font-medium">{c.code}</TableTd>
                <TableTd>Exercice #{c.exerciseId}</TableTd>
                <TableTd><Badge variant={statusVariant[c.status]}>{c.status}</Badge></TableTd>
                <TableTd>{c.score != null ? `${c.score}/20` : '—'}</TableTd>
                <TableTd className="text-right">
                  <Button variant="primary" size="sm" onClick={() => navigate(`/corrector/copies/${c.id}`)}>Corriger</Button>
                </TableTd>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
