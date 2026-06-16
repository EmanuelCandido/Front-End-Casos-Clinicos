import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout.jsx';
import Button from '../components/Button.jsx';
import Stepper from '../components/Stepper.jsx';
import UploadDropzone from '../components/UploadDropzone.jsx';
import { referencesMediaUploads, stepItems } from '../services/caseMock.js';

export default function CreateCaseReferencesMedia() {
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const handleGenerateCase = () => {
    setIsGenerating(true);
    window.setTimeout(() => {
      navigate('/criar-caso/revisao');
    }, 1400);
  };

  return (
    <AppLayout>
      <section className="create-case-page" aria-labelledby="references-media-title">
        <h2 className="sr-only" id="references-media-title">
          Criar Caso Clínico - Referências e Mídias
        </h2>

        <div className="create-case-page__content create-case-page__content--large-gap">
          <Stepper currentStep={4} steps={stepItems} />

          <div className="references-form">
            {referencesMediaUploads.map((upload) => (
              <UploadDropzone
                description={upload.description}
                key={upload.title}
                title={upload.title}
              />
            ))}
          </div>

          <div className="page-actions page-actions--patient">
            <Button icon="note" variant="secondary">
              Salvar Rascunho
            </Button>

            <div className="page-actions__next">
              <Button icon="arrowLeft" iconPosition="right" to="/criar-caso/conteudo-clinico" variant="outline">
                Anterior
              </Button>
              <Button
                icon="sparkle"
                iconPosition="right"
                loading={isGenerating}
                onClick={handleGenerateCase}
                variant="primary"
              >
                Gerar Caso
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
