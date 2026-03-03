import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { DashboardLayout } from '@/layout/DashboardLayout';
import { Login } from '@/pages/Login';
import { DashboardHome } from '@/pages/DashboardHome';
import { UsersPage } from '@/pages/admin/UsersPage';
import { PhasesPage } from '@/pages/admin/PhasesPage';
import { ProfessorsPage } from '@/pages/admin/ProfessorsPage';
import { ExercisesPage } from '@/pages/admin/ExercisesPage';
import { SubjectsPage } from '@/pages/admin/SubjectsPage';
import { RoomsPage } from '@/pages/admin/RoomsPage';
import { LogsPage } from '@/pages/admin/LogsPage';
import { ProfessorExercisesPage } from '@/pages/professor/ProfessorExercisesPage';
import { VersionHistoryPage } from '@/pages/professor/VersionHistoryPage';
import { CopiesPage } from '@/pages/corrector/CopiesPage';
import { CorrectionFormPage } from '@/pages/corrector/CorrectionFormPage';
import { AttendancePage } from '@/pages/supervisor/AttendancePage';
import { RankingPage } from '@/pages/jury/RankingPage';
import { ValidationPage } from '@/pages/jury/ValidationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="admin/users" element={<UsersPage />} />
          <Route path="admin/phases" element={<PhasesPage />} />
          <Route path="admin/professors" element={<ProfessorsPage />} />
          <Route path="admin/exercises" element={<ExercisesPage />} />
          <Route path="admin/subjects" element={<SubjectsPage />} />
          <Route path="admin/rooms" element={<RoomsPage />} />
          <Route path="admin/logs" element={<LogsPage />} />
          <Route path="professor/exercises" element={<ProfessorExercisesPage />} />
          <Route path="professor/exercises/history" element={<VersionHistoryPage />} />
          <Route path="corrector/copies" element={<CopiesPage />} />
          <Route path="corrector/copies/:id" element={<CorrectionFormPage />} />
          <Route path="supervisor/attendance" element={<AttendancePage />} />
          <Route path="jury/ranking" element={<RankingPage />} />
          <Route path="jury/validation" element={<ValidationPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
