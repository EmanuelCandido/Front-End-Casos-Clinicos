import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout.jsx';
import Button from '../components/Button.jsx';
import Stepper from '../components/Stepper.jsx';
import UploadDropzone from '../components/UploadDropzone.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useCaseDraft } from '../context/CaseDraftContext.jsx';
import {
  buildCasePayload,
  buildClinicalContentPayload,
  buildPatientPayload,
  validateDraftForApi,
} from '../services/caseMappers.js';
import { referencesMediaUploads, stepItems } from '../services/caseMock.js';
import {
  createCase,
  createClinicalContent,
  createPatient,
  getCompleteCase,
} from '../services/pibicApi.js';

export default function CreateCaseReferencesMedia() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [feedback, setFeedback] = useState('');
  const { auth } = useAuth();
  const { draft, resetDraft, setSavedCase, updateDraftSection } = useCaseDraft();
  const navigate = useNavigate();

  const handleFileChange = (group) => (event) => {
    updateDraftSection('files', {
      [group]: Array.from(event.target.files || []).map((file) => file.name),
    });
  };

  const handleGenerateCase = async () => {
    const validationMessage = validateDraftForApi(draft, auth);

    if (validationMessage) {
      setFeedback(validationMessage);
      return;
    }

    setFeedback('');
    setIsGenerating(true);

    try {
      const caseResponse = await createCase(buildCasePayload(draft, auth));
      const idCaso = caseResponse.idCaso;
      const [patientResponse, clinicalContentResponse] = await Promise.all([
        createPatient(buildPatientPayload(draft, idCaso)),
        createClinicalContent(buildClinicalContentPayload(draft, idCaso)),
      ]);
      const completeResponse = await getCompleteCase(idCaso);

      setSavedCase({
        case: caseResponse,
        patient: patientResponse,
        clinicalContent: clinicalContentResponse,
        complete: completeResponse,
        savedAt: new Date().toISOString(),
      });
      resetDraft();

      navigate('/criar-caso/revisao');
    } catch (requestError) {
      setFeedback(requestError.message || 'Não foi possível salvar o caso na API.');
    } finally {
      setIsGenerating(false);
    }
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
            {referencesMediaUploads.map((upload, index) => (
              <UploadDropzone
                accept={index === 0 ? 'image/png,image/jpeg' : '.pdf,.doc,.docx,.ppt,.pptx'}
                description={upload.description}
                files={index === 0 ? draft.files.clinicalImages : draft.files.documents}
                key={upload.title}
                multiple
                name={index === 0 ? 'clinicalImages' : 'documents'}
                onChange={handleFileChange(index === 0 ? 'clinicalImages' : 'documents')}
                title={upload.title}
              />
            ))}
          </div>

          {feedback && <p className="form-feedback form-feedback--error">{feedback}</p>}

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
                loadingText="Salvando..."
                onClick={handleGenerateCase}
                variant="primary"
              >
                Salvar Caso
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
