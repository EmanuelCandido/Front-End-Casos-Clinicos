import AppLayout from '../components/AppLayout.jsx';
import Button from '../components/Button.jsx';
import CheckboxField from '../components/CheckboxField.jsx';
import FormField from '../components/FormField.jsx';
import Icon from '../components/Icon.jsx';
import Stepper from '../components/Stepper.jsx';
import TextAreaField from '../components/TextAreaField.jsx';
import { clinicalContentForm, stepItems } from '../services/caseMock.js';

export default function CreateCaseClinicalContent() {
  return (
    <AppLayout>
      <section className="create-case-page" aria-labelledby="clinical-content-title">
        <h2 className="sr-only" id="clinical-content-title">
          Criar Caso Clínico - Conteúdo Clínico
        </h2>

        <div className="create-case-page__content create-case-page__content--large-gap">
          <Stepper currentStep={3} steps={stepItems} />

          <form className="case-form clinical-form">
            <div className="clinical-form__grid">
              <FormField
                label="Objetivo Pedagógico"
                placeholder={clinicalContentForm.pedagogicalGoalPlaceholder}
                required
              />
              <FormField
                label="Hipótese Clínica Central"
                placeholder={clinicalContentForm.centralHypothesisPlaceholder}
                required
              />
              <FormField
                full
                label="Sintomas Principais"
                placeholder={clinicalContentForm.symptomsPlaceholder}
                required
              />
              <FormField
                full
                label="Comorbidades"
                placeholder={clinicalContentForm.comorbiditiesPlaceholder}
              />
              <div className="clinical-form__textarea-wrap">
                <TextAreaField
                  label="Contexto Clínico"
                  large
                  placeholder={clinicalContentForm.clinicalContextPlaceholder}
                />
                <span className="clinical-form__resize-icon">
                  <Icon name="maximize" size={20} />
                </span>
              </div>
              <CheckboxField label="Incluir resultados de exames clínicos" />
            </div>
          </form>

          <div className="page-actions page-actions--patient">
            <Button icon="note" variant="secondary">
              Salvar Rascunho
            </Button>

            <div className="page-actions__next">
              <Button icon="arrowLeft" iconPosition="right" to="/criar-caso/perfil-paciente" variant="outline">
                Anterior
              </Button>
              <Button icon="chevronRight" iconPosition="right" to="/criar-caso/referencias-midias" variant="primary">
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
