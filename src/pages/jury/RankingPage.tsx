import { useEffect, useState } from 'react';
import { mockApi } from '@/api/mockClient';
import { Card, Table, TableHead, TableBody, TableRow, TableTh, TableTd, Badge } from '@/components/ui';
import type { RankingEntry } from '@/types';

export function RankingPage() {
  const [ranking, setRanking] = useState<RankingEntry[]>([]);

  useEffect(() => {
    mockApi.getRanking().then((res) => setRanking(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Classement anonyme</h1>
      <Card padding="none">
        <Table>
          <TableHead>
            <TableRow>
              <TableTh>Rang</TableTh>
              <TableTh>Code</TableTh>
              <TableTh>Note totale</TableTh>
              <TableTh>Validé</TableTh>
            </TableRow>
          </TableHead>
          <TableBody>
            {ranking.map((r) => (
              <TableRow key={r.code}>
                <TableTd className="font-bold text-primary-600">{r.rank}</TableTd>
                <TableTd className="font-mono">{r.code}</TableTd>
                <TableTd>{r.totalScore}/20</TableTd>
                <TableTd>
                  <Badge variant={r.validated ? 'success' : 'default'}>
                    {r.validated ? 'Oui' : 'En attente'}
                  </Badge>
                </TableTd>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
