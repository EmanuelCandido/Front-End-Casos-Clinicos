import AppLayout from '../components/AppLayout.jsx';
import Button from '../components/Button.jsx';
import FormField from '../components/FormField.jsx';
import SelectField from '../components/SelectField.jsx';
import Stepper from '../components/Stepper.jsx';
import TipCard from '../components/TipCard.jsx';
import { createCaseForm, selectOptions, stepItems } from '../services/caseMock.js';

export default function CreateCaseParameters() {
  return (
    <AppLayout>
      <section className="create-case-page" aria-labelledby="create-case-title">
        <h2 className="sr-only" id="create-case-title">
          Criar Caso Clínico - Parâmetros
        </h2>

        <div className="create-case-page__content">
          <Stepper currentStep={1} steps={stepItems} />

          <form className="case-form">
            <div className="case-form__grid">
              <FormField label="Título" placeholder="Ex: Choque Cardiogênico pós IAM" required />
              <SelectField label="Especialidade" required value={createCaseForm.specialty} />
              <FormField label="Disciplina" placeholder="Ex: Semiologia Médica" required />
              <SelectField
                label="Dificuldade"
                options={selectOptions.difficulties}
                required
                value={createCaseForm.difficulty}
              />
            </div>
          </form>

          <TipCard />

          <div className="page-actions">
            <Button icon="note" variant="secondary">
              Salvar Rascunho
            </Button>

            <div className="page-actions__next">
              <Button disabled icon="arrowLeft" iconPosition="right" variant="ghost">
                Anterior
              </Button>
              <Button icon="chevronRight" iconPosition="right" to="/criar-caso/perfil-paciente" variant="primary">
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
