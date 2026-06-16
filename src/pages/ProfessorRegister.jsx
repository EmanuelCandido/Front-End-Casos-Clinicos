import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import FormField from '../components/FormField.jsx';

export default function ProfessorRegister() {
  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="register-title">
        <div className="auth-card__brand">
          <span className="auth-card__logo">PIBIC</span>
          <div>
            <h1 id="register-title">Cadastro do professor</h1>
            <p>Crie seu acesso para organizar casos clínicos, turmas e avaliações.</p>
          </div>
        </div>

        <form className="auth-form">
          <FormField label="Nome" placeholder="Ex: Anderson Soares" required />
          <FormField label="Email" placeholder="Ex: professor@email.com" required type="email" />
          <FormField label="Senha" placeholder="Digite sua senha" required type="password" />
          <FormField label="Curso que dá aula" placeholder="Ex: Fisioterapia" required />

          <Button variant="primary">Cadastrar professor</Button>
        </form>

        <p className="auth-card__footer">
          Já possui conta? <Link to="/login">Entrar</Link>
        </p>
      </section>
    </main>
  );
}
