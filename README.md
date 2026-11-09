# Zungu — sitio informativo

Sitio estático informativo para Zungu: IA para voz, traducción y asistencia conversacional, con sección de investigación en Mapudungun.

## Publicación

1. Edita `GITHUB_REPO_URL` en `assets/main.js` con la URL real del repositorio.
2. Abre `index.html` localmente para revisar el contenido.
3. Desde esta carpeta, ejecuta:

```powershell
gh auth login
git init -b main
git add .
git commit -m "feat: launch Zungu informational website"
gh repo create zungu-site --public --source . --remote origin --push
```

**Importante:** `gh repo create` crea un repositorio público. Usa `--private` si prefieres restringir el código.

## Azure Static Web Apps

1. Azure Portal → Create Resource → Static Web App.
2. Deployment source: `Other` (este proyecto ya incluye su workflow).
3. Copia el deployment token de la Static Web App.
4. En GitHub → repo → Settings → Secrets and variables → Actions → New repository secret, crea `AZURE_STATIC_WEB_APPS_API_TOKEN`.
5. Ejecuta en GitHub → Actions → Deploy Zungu to Azure Static Web Apps → Run workflow, o haz un commit a `main`.

El workflow hace deploy sin compilación (`skip_app_build: true`) desde la raíz.

## Estado

Sitio informativo. No ofrece procesamiento de voz online ni traducción operativa de Mapudungun. Las referencias a Mapudungun están identificadas como investigación.
