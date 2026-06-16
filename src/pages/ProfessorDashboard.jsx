import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { currentUser, professorDashboard } from '../services/caseMock.js';

export default function ProfessorDashboard() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-main">
        <header className="dashboard-topbar">
          <h1>
            Bem vindo, <strong>Anderson!</strong>
          </h1>

          <label className="dashboard-search">
            <Icon name="search" size={16} />
            <input placeholder="Buscar casos, turmas, alunos..." type="search" />
          </label>

          <div className="dashboard-topbar__actions">
            <Button icon="case" to="/criar-caso/parametros" variant="primary">
              Criar novo caso
            </Button>

            <button className="profile" type="button">
              <img alt="" className="profile__avatar" src={currentUser.avatar} />
              <span className="profile__copy">
                <strong>{currentUser.name}</strong>
                <small>{currentUser.course}</small>
              </span>
              <Icon name="chevronDown" size={10} />
            </button>
          </div>
        </header>

        <section className="dashboard-page" aria-label="Dashboard do professor">
          <div className="dashboard-metrics">
            {professorDashboard.metrics.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <span className={`metric-card__icon metric-card__icon--${metric.tone}`}>
                  <Icon name={metric.icon} size={24} />
                </span>
                <div>
                  <h2>{metric.label}</h2>
                  <strong>{metric.value}</strong>
                </div>
              </article>
            ))}
          </div>

          <section className="dashboard-panel performance-panel">
            <header className="dashboard-panel__header">
              <div className="dashboard-panel__title">
                <span className="dashboard-panel__icon">
                  <Icon name="chart" size={20} />
                </span>
                <div>
                  <h2>Desempenho das turmas</h2>
                  <p>Acompanhe e analise os resultados das turmas e alunos.</p>
                </div>
              </div>
              <Link to="/desempenho">Ver desempenho completo</Link>
            </header>

            <div className="bar-chart" aria-label="Taxa de acerto por turma">
              <span className="bar-chart__axis">Taxa de Acerto</span>
              <div className="bar-chart__plot">
                {[100, 75, 50, 25, 0].map((tick) => (
                  <span className="bar-chart__grid" key={tick}>
                    <span>{tick}%</span>
                  </span>
                ))}
                <div className="bar-chart__bars">
                  {professorDashboard.classPerformance.map((item) => (
                    <div className="bar-chart__bar-item" key={item.label}>
                      <span className="bar-chart__bar" style={{ height: `${item.value}%` }} />
                      <small>{item.label}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="dashboard-panel recent-cases">
            <header className="recent-cases__header">
              <h2>Lista de Casos Recentes</h2>
              <p>Último mês</p>
            </header>

            <div className="cases-table">
              <div className="cases-table__row cases-table__row--head">
                <span>Título</span>
                <span>Data</span>
                <span>Status</span>
              </div>
              {professorDashboard.recentCases.map((caseItem, index) => (
                <div className="cases-table__row" key={`${caseItem.title}-${index}`}>
                  <span>{caseItem.title}</span>
                  <span>{caseItem.date}</span>
                  <span className={`status-pill status-pill--${caseItem.status === 'Ativo' ? 'active' : 'done'}`}>
                    {caseItem.status}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
