# REST_API

Simple Express + EJS example (local development + deployment notes).

## Requirements

- Node.js (v16+ recommended)
- npm (comes with Node)

## Install

```bash
npm install
```

## Run locally

Start the server:

```bash
node index.js
# or for auto-reload during development:
npx nodemon index.js
```

Then open http://localhost:8080/post in your browser.

## Endpoints (quick)

- `GET /post` – list posts
- `GET /post/new` – form to create
- `POST /post` – create post
- `GET /post/:id` – show single post
- `GET /post/:id/edit` – edit form
- `PATCH /post/:id` – update post
- `DELETE /post/:id` – delete post

## Git / GitHub

Option A — create the repo on GitHub via the website, then push:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

Option B — create & push using the GitHub CLI (`gh`):

```bash
gh repo create <repo-name> --public --source=. --remote=origin --push
```

Notes:
- Replace `<your-username>` and `<repo-name>` with your values.

## Deploy to Vercel

Two common ways to deploy:

1) Connect your GitHub repo in the Vercel dashboard
	- Go to https://vercel.com, sign in, choose "New Project" → import your GitHub repo.
	- For most simple projects leave the detected settings, then click "Deploy".

2) Use the `vercel` CLI

```bash
npm i -g vercel
vercel   # follow interactive prompts to link or create a project
vercel --prod   # deploy production
```

Important Vercel note:
- Vercel is optimized for static sites and serverless functions. A traditional long-running Express server may need adaptation (serverless handlers or an alternative host that supports persistent Node processes). If you want, I can convert this app to a Vercel serverless-compatible setup or prepare deployment instructions for a platform like Render or Railway which run Node servers directly.

## Files of interest

- `index.js` — main Express app
- `views/` — EJS templates (`index.ejs`, `new.ejs`, `show.ejs`, `edit.ejs`)
- `public/` — static assets (CSS)

## Troubleshooting

- If `npm install` reports missing packages, run `npm install` again.
- If the server says a module is missing (e.g., `method-override`), run:

```bash
npm install method-override
```

- If port 8080 is in use, change `port` in `index.js` or stop the other process.

## Next steps I can help with

- Create the GitHub repo and push the code (I can run `gh` if you're logged in),
- Convert the app to be Vercel serverless-compatible, or prepare deployment for Render/Railway,
- Add an `npm start` script to `package.json`.

---

(Generated: updated README with GitHub and Vercel guidance)
