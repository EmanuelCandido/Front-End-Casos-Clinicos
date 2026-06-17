# Front-End-Casos-Clinicos

Front React/Vite conectado à API do PIBIC.

## Rodar localmente

```powershell
npm install
npm run dev
```

Por padrão, o front chama a API em `http://localhost:8080`.
Para trocar a URL, crie um `.env` local:

```env
VITE_API_BASE_URL=http://localhost:8080
```

## Teste com a API

1. Suba a API PIBIC em `localhost:8080`.
2. Entre no front com o usuário padrão do backend: `professor` / `professor123`.
3. Preencha as etapas de criação do caso.
4. Na etapa final, clique em `Salvar Caso`.

O front salva em `/casos`, `/pacientes` e `/conteudos`, depois carrega `/casos/{id}/completo` para a revisão.
