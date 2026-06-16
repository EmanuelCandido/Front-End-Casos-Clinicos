import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import FormField from '../components/FormField.jsx';

export default function ProfessorLogin() {
  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="login-title">
        <div className="auth-card__brand">
          <span className="auth-card__logo">PIBIC</span>
          <div>
            <h1 id="login-title">Entrar na conta</h1>
            <p>Acesse seu painel para criar casos clínicos e acompanhar suas turmas.</p>
          </div>
        </div>

        <form className="auth-form">
          <FormField label="Email" placeholder="Ex: professor@email.com" required type="email" />
          <FormField label="Senha" placeholder="Digite sua senha" required type="password" />

          <div className="auth-form__row">
            <label className="checkbox-field">
              <input type="checkbox" />
              <span>Lembrar acesso</span>
            </label>
            <Link to="/cadastro-professor">Esqueci minha senha</Link>
          </div>

          <Button to="/dashboard" variant="primary">
            Entrar
          </Button>
        </form>

        <p className="auth-card__footer">
          Ainda não possui conta? <Link to="/cadastro-professor">Cadastrar professor</Link>
        </p>
      </section>
    </main>
  );
}
