# PathForge

Free AI platform for creating digital products and starting online businesses with clear logical paths.

## Deploy to Cloudflare Workers

1. Install dependencies:
   ```bash
   npm install
   ```

2. Authenticate Wrangler:
   ```bash
   npx wrangler login
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Add environment variables in the Cloudflare dashboard (Workers → pathforge → Settings → Variables):
   - `OPENAI_API_KEY`
   - `OPENAI_BASE_URL`
   - `OPENAI_MODEL`

You'll get a `*.workers.dev` URL that works on Safari and any browser.

## Local development

```bash
cp .env.local.example .env.local
# Add your API key
npm run dev
```
