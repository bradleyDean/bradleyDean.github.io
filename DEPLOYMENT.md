# Deployment checklist

The site auto-builds and deploys via GitHub Actions on every push to `main`
(`.github/workflows/deploy.yml`). The steps below are the one-time manual setup you perform
on GitHub and at your registrar. The repo is `bradleyDean/bradleyDean.github.io` and the
custom domain is `bradleylignoski.com`.

## 1. Push the repo

```bash
git push -u origin main
```

## 2. Enable GitHub Pages (GitHub → repo Settings → Pages)

- **Build and deployment → Source:** select **GitHub Actions** (not "Deploy from a branch").
- The included workflow handles the build and publish. After the first push, check the
  **Actions** tab and confirm the "Deploy to GitHub Pages" workflow succeeds.

## 3. Set the custom domain (GitHub → repo Settings → Pages → Custom domain)

- The `public/CNAME` file already contains `bradleylignoski.com`, so GitHub should detect it
  automatically after the first deploy. If not, enter `bradleylignoski.com` manually and save.
- Leave **Enforce HTTPS** unchecked until DNS has propagated and the certificate is issued
  (see step 5).

## 4. Configure DNS at Lexsynergy

For the apex domain `bradleylignoski.com`, add these records:

**A records** (point apex at GitHub Pages):

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**AAAA records** (IPv6, optional but recommended):

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

**(Optional) `www` subdomain** — add a CNAME record:

```
www  →  bradleyDean.github.io
```

## 5. Provision HTTPS

- After DNS propagates (minutes to ~24h), GitHub Pages auto-issues a Let's Encrypt certificate.
- Once the certificate is ready, return to **Settings → Pages** and enable **Enforce HTTPS**.

## Verifying

- `https://bradleylignoski.com` serves the site.
- `dig bradleylignoski.com +short` returns the four GitHub Pages A-record IPs.
- The **Actions** tab shows a green deploy on the latest `main` commit.

## Notes

- The Astro `site` config is set to `https://bradleylignoski.com` and `base` is left at `/`
  (correct for a root-served user/organization Pages site).
- The `CNAME` file is in `public/`, so every build re-emits it into `dist/` and the custom
  domain setting persists across deploys.
