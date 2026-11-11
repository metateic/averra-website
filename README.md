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

## Brand

Logo, icons and colours come from the Averra application brand kit. The header logos in `public/brand/` are the kit's horizontal lockup with a transparent background and the wordmark converted to outlines (Inter Medium), so they render the same without the font installed. Icons in `app/` and `public/` are the kit's files unchanged. Colours live in the Averra theme in `@metateic/ui`.

## Demo request form

The form posts the visitor's email to the URL in `NEXT_PUBLIC_DEMO_FORM_ENDPOINT`. Any service that accepts a form POST and answers with a 2xx status works (Formspree, Loops, a serverless function). Until it is set, the form shows an error instead of pretending the request was sent.

Locally, put it in `.env.local`. For deploys, add a repository **variable** named `DEMO_FORM_ENDPOINT`.

## Analytics

Off by default. To turn it on, add repository **variables** `ANALYTICS_SRC` (the provider's script URL) and either `ANALYTICS_DOMAIN` (Plausible) or `ANALYTICS_WEBSITE_ID` (Umami).

## Deployment

`.github/workflows/deploy.yml` builds every pull request and deploys `main` to GitHub Pages. In repo **Settings → Pages**, the source must be **GitHub Actions** and the custom domain `averra.metateic.io`.

CI checks out `metateic/metateic-ui` beside the app at the tag in the workflow's `ref:`. To pick up a new UI release, bump that tag. If `metateic-ui` is private, add a `METATEIC_UI_TOKEN` secret: a fine-grained token with read access to that repo.
