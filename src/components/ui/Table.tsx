import { type ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
  className?: string;
}

export function Table({ children, className = '' }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className={`min-w-full divide-y divide-slate-200 ${className}`}>{children}</table>
    </div>
  );
}

export function TableHead({ children }: { children: ReactNode }) {
  return <thead className="bg-slate-50">{children}</thead>;
}

export function TableBody({ children }: { children: ReactNode }) {
  return <tbody className="bg-white divide-y divide-slate-200">{children}</tbody>;
}

export function TableRow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <tr className={`hover:bg-slate-50/80 transition-colors ${className}`}>{children}</tr>;
}

export function TableTh({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider ${className}`}>
      {children}
    </th>
  );
}

export function TableTd({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <td className={`px-6 py-4 text-sm text-slate-900 whitespace-nowrap ${className}`}>{children}</td>;
}
