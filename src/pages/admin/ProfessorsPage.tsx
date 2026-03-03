import { useEffect, useState } from 'react';
import { mockApi } from '@/api/mockClient';
import { Card, Button, Table, TableHead, TableBody, TableRow, TableTh, TableTd } from '@/components/ui';

interface ProfessorRow {
  id: string;
  name: string;
  email: string;
  assignedSubjects: number;
}

export function ProfessorsPage() {
  const [professors, setProfessors] = useState<ProfessorRow[]>([]);

  useEffect(() => {
    mockApi.getUsers().then((res) => {
      const profs = res.data.filter((u: { role: string }) => u.role === 'professor');
      setProfessors(profs.map((p: { id: string; name: string; email: string }) => ({
        ...p,
        assignedSubjects: Math.floor(Math.random() * 3) + 1,
      })));
    });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Sélection des professeurs</h1>
        <Button>Attribuer des sujets</Button>
      </div>
      <Card padding="none">
        <Table>
          <TableHead>
            <TableRow>
              <TableTh>Nom</TableTh>
              <TableTh>Email</TableTh>
              <TableTh>Sujets assignés</TableTh>
              <TableTh className="text-right">Actions</TableTh>
            </TableRow>
          </TableHead>
          <TableBody>
            {professors.map((p) => (
              <TableRow key={p.id}>
                <TableTd className="font-medium">{p.name}</TableTd>
                <TableTd>{p.email}</TableTd>
                <TableTd>{p.assignedSubjects}</TableTd>
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
