# vite-workers-repro

```
git clone git@github.com:Rich-Harris/vite-workers-repro.git
cd vite-workers-repro
pnpm install # or npm install
npm run build
```

## Expected

The `dist` folder should look like this:

```
dist/
  entries/
    index.js
  workers/
    worker.js
```

## Actual

Instead, it looks like this:

```
dist/
  assets/
    worker.72208c3e.js
  entries/
    index.js
```
