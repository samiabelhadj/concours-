import { useEffect, useState } from 'react';
import { mockApi } from '@/api/mockClient';
import { Card, Button, Badge, Table, TableHead, TableBody, TableRow, TableTh, TableTd } from '@/components/ui';
import type { User } from '@/types';

const roleBadge: Record<string, 'default' | 'info' | 'success'> = {
  admin: 'info',
  professor: 'default',
  corrector: 'success',
  supervisor: 'default',
  jury: 'default',
};

export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    mockApi.getUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Utilisateurs</h1>
        <Button>Ajouter un utilisateur</Button>
      </div>
      <Card padding="none">
        <Table>
          <TableHead>
            <TableRow>
              <TableTh>Nom</TableTh>
              <TableTh>Email</TableTh>
              <TableTh>Rôle</TableTh>
              <TableTh className="text-right">Actions</TableTh>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id}>
                <TableTd className="font-medium">{u.name}</TableTd>
                <TableTd>{u.email}</TableTd>
                <TableTd><Badge variant={roleBadge[u.role]}>{u.role}</Badge></TableTd>
                <TableTd className="text-right">
                  <Button variant="ghost" size="sm">Modifier</Button>
                </TableTd>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
