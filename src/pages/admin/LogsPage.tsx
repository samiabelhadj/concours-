import { useEffect, useState } from 'react';
import { mockApi } from '@/api/mockClient';
import { Card, Table, TableHead, TableBody, TableRow, TableTh, TableTd } from '@/components/ui';
import type { LogEntry } from '@/types';

export function LogsPage() {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    mockApi.getLogs().then((res) => setLogs(res.data));
  }, []);

  const formatDate = (s: string) => new Date(s).toLocaleString('fr-FR');

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Journaux d'activité</h1>
      <Card padding="none">
        <Table>
          <TableHead>
            <TableRow>
              <TableTh>Date</TableTh>
              <TableTh>Action</TableTh>
              <TableTh>Utilisateur</TableTh>
              <TableTh>Détails</TableTh>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableTd className="text-slate-500">{formatDate(log.timestamp)}</TableTd>
                <TableTd className="font-medium">{log.action}</TableTd>
                <TableTd>{log.user}</TableTd>
                <TableTd className="text-slate-600">{log.details ?? '—'}</TableTd>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
