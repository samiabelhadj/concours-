import { useEffect, useState } from 'react';
import { mockApi } from '@/api/mockClient';
import { Card, Button, Table, TableHead, TableBody, TableRow, TableTh, TableTd } from '@/components/ui';
import type { Room } from '@/types';

export function RoomsPage() {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    mockApi.getRooms().then((res) => setRooms(res.data));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Salles</h1>
        <Button>Ajouter une salle</Button>
      </div>
      <Card padding="none">
        <Table>
          <TableHead>
            <TableRow>
              <TableTh>Nom</TableTh>
              <TableTh>Bâtiment</TableTh>
              <TableTh>Capacité</TableTh>
              <TableTh className="text-right">Actions</TableTh>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((r) => (
              <TableRow key={r.id}>
                <TableTd className="font-medium">{r.name}</TableTd>
                <TableTd>{r.building}</TableTd>
                <TableTd>{r.capacity} places</TableTd>
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
