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

Then open https://restapiquoraposts.vercel.app/post in your browser.

## Endpoints (quick)

- `GET /post` – list posts
- `GET /post/new` – form to create
- `POST /post` – create post
- `GET /post/:id` – show single post
- `GET /post/:id/edit` – edit form
- `PATCH /post/:id` – update post
- `DELETE /post/:id` – delete post

## Files of interest

- `index.js` — main Express app
- `views/` — EJS templates (`index.ejs`, `new.ejs`, `show.ejs`, `edit.ejs`)
- `public/` — static assets (CSS)



