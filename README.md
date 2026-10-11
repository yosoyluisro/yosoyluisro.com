# yosoyluisro.com

Sitio oficial de YoSoyLuisRo — marca personal.

> "Explorando la tecnología que viene, entendiendo cómo cambia nuestra forma de crear."

## Stack gratuito ($0)
- DNS/CDN/SSL: Cloudflare Free (NS apuntados desde Spaceship)
- Hosting: Cloudflare Pages (este repo, rama `main`)
- Backend (cuando se necesite): Supabase Free
- Email inbound: Cloudflare Email Routing -> Gmail
- Email outbound: Brevo Free (300/día) / Resend (3,000/mes)

## Estructura
- `index.html` — landing mínima (reemplazar por build de `personal-os/` o `portafolio/`)
- `CNAME` — dominio custom para GitHub Pages / Pages (`yosoyluisro.com`)
- `public/` — assets estáticos

## Dev
```bash
# preview local
npx serve .
# o
python -m http.server 8080
```

## Deploy
- Cloudflare Pages: root `/`, build `none` (estático). Custom domain `yosoyluisro.com` + `www`.
- Alternativa: GitHub Pages desde `main` + CNAME ya incluido.

## Origen
Contenido migrable desde `D:\github\yosoyluisro-branding\personal-os\` y `\portafolio\`.
No publicar `01_PERFIL/redes-sociales.json` ni secretos.
