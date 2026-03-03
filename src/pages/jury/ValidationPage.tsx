import { Card, CardHeader, Button } from '@/components/ui';

export function ValidationPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Validation finale</h1>
      <Card>
        <CardHeader
          title="Délibération du jury"
          subtitle="Valider le classement et clôturer le concours"
        />
        <p className="text-slate-600 mb-6">
          Une fois les corrections et le classement validés, le jury peut procéder à la validation finale.
          Les résultats seront alors figés et communiqués aux candidats.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button>Valider le classement final</Button>
          <Button variant="outline">Exporter le procès-verbal</Button>
        </div>
      </Card>
    </div>
  );
}
