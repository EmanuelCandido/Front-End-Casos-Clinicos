import AppLayout from '../components/AppLayout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import TextAreaField from '../components/TextAreaField.jsx';
import { generatedCaseReview } from '../services/caseMock.js';

const quickActions = [
  { label: 'Gerar novamente', icon: 'refresh' },
  { label: 'Tornar o Caso mais Simples', icon: 'minus' },
  { label: 'Tornar o Caso mais Complexo', icon: 'arrowUp' },
];

export default function CreateCaseReview() {
  return (
    <AppLayout breadcrumbCurrent="Revisão">
      <section className="review-page" aria-labelledby="review-title">
        <div className="review-page__content">
          <article className="medical-record">
            <header className="medical-record__header">
              <h2 id="review-title">{generatedCaseReview.title}</h2>
              <p>{generatedCaseReview.generatedAt}</p>
            </header>

            <div className="medical-record__body">
              {generatedCaseReview.sections.map((section) => (
                <section className="medical-record__section" key={section.title}>
                  <h3>{section.title}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </article>

          <aside className="review-panel">
            <div className="review-panel__card">
              <section className="review-panel__section">
                <h3>Ações Rápidas</h3>
                <div className="review-panel__actions">
                  {quickActions.map((action) => (
                    <button className="quick-action" key={action.label} type="button">
                      <span>{action.label}</span>
                      <Icon name={action.icon} size={16} />
                    </button>
                  ))}
                </div>
              </section>

              <section className="review-panel__section">
                <TextAreaField
                  label="Solicitar Ajuste"
                  placeholder="Ex: Adicione que o paciente tem alergia a dipirona e relate um eletrocardiograma com supra de ST..."
                />
                <Button variant="primary">Enviar</Button>
              </section>

              <section className="review-panel__manual">
                <div>
                  <h3>Edição Manual</h3>
                  <p>
                    Prefere fazer os ajustes você mesmo? Edite o texto do caso diretamente no documento.
                  </p>
                </div>
                <Button icon="edit" iconPosition="right" variant="dark">
                  Habilitar Edição
                </Button>
              </section>
            </div>

            <Button icon="chevronRight" iconPosition="right" variant="primary">
              Ir para perguntas
            </Button>
          </aside>
        </div>
      </section>
    </AppLayout>
  );
}
