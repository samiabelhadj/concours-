import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, Button } from '@/components/ui';

export function CorrectionFormPage() {
  const [score, setScore] = useState('');
  const [comment, setComment] = useState('');

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <Link to="/corrector/copies" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          ← Retour aux copies
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Correction — COP-002</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader title="Contenu de la copie" subtitle="Document anonyme" />
          <div className="min-h-[300px] rounded-lg bg-slate-100 border border-slate-200 p-6 text-slate-600">
            Aperçu du contenu de la copie (simulation). Les champs de notation sont à droite.
          </div>
        </Card>
        <Card>
          <CardHeader title="Notation" />
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Note / 20</label>
              <input
                type="number"
                min={0}
                max={20}
                step={0.5}
                value={score}
                onChange={(e) => setScore(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300"
                placeholder="0–20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Commentaire (optionnel)</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-slate-300"
                placeholder="Remarques pour le jury..."
              />
            </div>
            <Button fullWidth>Enregistrer la correction</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
