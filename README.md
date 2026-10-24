# Averra website

Marketing site for Averra, built with Next.js as a static export and deployed to GitHub Pages at [averra.metateic.io](https://averra.metateic.io).

## Local development

Components come from the shared `@metateic/ui` package, installed from `../metateic-ui`, so clone that repo beside this one first.

```bash
nvm use        # Node version from .nvmrc
npm install
npm run dev    # http://localhost:3000
```

`npm run build` writes the static site to `out/`.

## Deployment

`.github/workflows/deploy.yml` builds every pull request and deploys `main` to GitHub Pages. In repo **Settings → Pages**, the source must be **GitHub Actions** and the custom domain `averra.metateic.io`.

CI checks out `metateic/metateic-ui` beside the app at the tag in the workflow's `ref:`. To pick up a new UI release, bump that tag. If `metateic-ui` is private, add a `METATEIC_UI_TOKEN` secret: a fine-grained token with read access to that repo.
