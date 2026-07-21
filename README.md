# potfolio

Personal portfolio for [ivanovg.com](https://www.ivanovg.com).

## Stack

- Static HTML / CSS / JS
- Deployed on [Vercel](https://vercel.com) from this GitHub repo
- Domain: Namecheap → point DNS at Vercel when ready to replace the arcade site

## Local preview

```bash
python3 -m http.server 5500
# open http://localhost:5500
```

## Deploy flow

1. Edit files in this repo
2. `git add -A && git commit -m "..." && git push origin main`
3. Vercel auto-builds and deploys from `main`
