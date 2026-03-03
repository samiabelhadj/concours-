import { useEffect, useState } from 'react';
import { mockApi } from '@/api/mockClient';
import { Card, Button, Badge } from '@/components/ui';
import type { AttendanceRecord } from '@/types';

export function AttendancePage() {
  const [records, setRecords] = useState<AttendanceRecord[]>([]);

  useEffect(() => {
    mockApi.getAttendance().then((res) => setRecords(res.data));
  }, []);

  const togglePresence = (id: string) => {
    setRecords((prev) =>
      prev.map((r) => (r.id === id ? { ...r, present: !r.present, markedAt: new Date().toISOString() } : r))
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Marquage des présences</h1>
      <p className="text-slate-600 mb-6 max-w-xl">
        Interface adaptée mobile. Cochez présent / absent pour chaque candidat.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {records.map((r) => (
          <Card key={r.id} className="flex flex-row items-center justify-between">
            <div>
              <p className="font-mono font-medium text-slate-900">{r.candidateCode}</p>
              <p className="text-xs text-slate-500">Salle #{r.roomId}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={r.present ? 'success' : 'default'}>{r.present ? 'Présent' : 'Absent'}</Badge>
              <Button
                size="sm"
                variant={r.present ? 'secondary' : 'primary'}
                onClick={() => togglePresence(r.id)}
              >
                {r.present ? 'Absent' : 'Présent'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
