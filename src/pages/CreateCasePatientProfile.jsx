import { useState } from 'react';
import AppLayout from '../components/AppLayout.jsx';
import Button from '../components/Button.jsx';
import CheckboxField from '../components/CheckboxField.jsx';
import FormField from '../components/FormField.jsx';
import GenderOption from '../components/GenderOption.jsx';
import Stepper from '../components/Stepper.jsx';
import TextAreaField from '../components/TextAreaField.jsx';
import { patientProfileForm, stepItems } from '../services/caseMock.js';

export default function CreateCasePatientProfile() {
  const [biologicalSex, setBiologicalSex] = useState('');

  return (
    <AppLayout>
      <section className="create-case-page" aria-labelledby="patient-profile-title">
        <h2 className="sr-only" id="patient-profile-title">
          Criar Caso Clínico - Perfil do Paciente
        </h2>

        <div className="create-case-page__content create-case-page__content--large-gap">
          <Stepper currentStep={2} steps={stepItems} />

          <form className="case-form patient-form">
            <CheckboxField label="Permitir que a IA complemente as informações" />

            <div className="patient-form__grid">
              <FormField label="Idade" placeholder={patientProfileForm.agePlaceholder} />
              <FormField label="Profissão" placeholder={patientProfileForm.professionPlaceholder} />
              <FormField label="Peso" placeholder={patientProfileForm.weightPlaceholder} />
              <FormField label="Altura" placeholder={patientProfileForm.heightPlaceholder} />

              <div className="field">
                <span className="field__label">Sexo Biológico</span>
                <GenderOption
                  icon="man"
                  label="Masculino"
                  onSelect={() => setBiologicalSex('Masculino')}
                  selected={biologicalSex === 'Masculino'}
                />
              </div>

              <div className="field field--gender-offset">
                <GenderOption
                  icon="woman"
                  label="Feminino"
                  onSelect={() => setBiologicalSex('Feminino')}
                  selected={biologicalSex === 'Feminino'}
                />
              </div>

              <TextAreaField label="Outra informação" placeholder={patientProfileForm.otherPlaceholder} />
            </div>
          </form>

          <div className="page-actions page-actions--patient">
            <Button icon="note" variant="secondary">
              Salvar Rascunho
            </Button>

            <div className="page-actions__next">
              <Button icon="arrowLeft" iconPosition="right" to="/criar-caso/parametros" variant="outline">
                Anterior
              </Button>
              <Button icon="chevronRight" iconPosition="right" to="/criar-caso/conteudo-clinico" variant="primary">
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
