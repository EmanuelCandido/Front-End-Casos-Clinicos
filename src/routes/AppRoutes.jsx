import { Navigate, Route, Routes } from 'react-router-dom';
import CreateCaseClinicalContent from '../pages/CreateCaseClinicalContent.jsx';
import CreateCaseParameters from '../pages/CreateCaseParameters.jsx';
import CreateCasePatientProfile from '../pages/CreateCasePatientProfile.jsx';
import CreateCaseReferencesMedia from '../pages/CreateCaseReferencesMedia.jsx';
import CreateCaseReview from '../pages/CreateCaseReview.jsx';
import PlaceholderPage from '../pages/PlaceholderPage.jsx';
import ProfessorDashboard from '../pages/ProfessorDashboard.jsx';
import ProfessorLogin from '../pages/ProfessorLogin.jsx';
import ProfessorRegister from '../pages/ProfessorRegister.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProfessorRegister />} />
      <Route path="/dashboard" element={<ProfessorDashboard />} />
      <Route path="/login" element={<ProfessorLogin />} />
      <Route path="/cadastro-professor" element={<ProfessorRegister />} />
      <Route path="/criar-caso/parametros" element={<CreateCaseParameters />} />
      <Route path="/criar-caso/perfil-paciente" element={<CreateCasePatientProfile />} />
      <Route path="/criar-caso/conteudo-clinico" element={<CreateCaseClinicalContent />} />
      <Route path="/criar-caso/referencias-midias" element={<CreateCaseReferencesMedia />} />
      <Route path="/criar-caso/revisao" element={<CreateCaseReview />} />
      <Route path="/meus-casos" element={<PlaceholderPage title="Meus casos" />} />
      <Route path="/turmas" element={<PlaceholderPage title="Turmas" />} />
      <Route path="/desempenho" element={<PlaceholderPage title="Desempenho" />} />
      <Route path="/configuracoes" element={<PlaceholderPage title="Configurações" />} />
      <Route path="/ajuda" element={<PlaceholderPage title="Ajuda" />} />
      <Route path="*" element={<Navigate to="/criar-caso/parametros" replace />} />
    </Routes>
  );
}
