# Alumni Portal

A full‑stack Nuxt 3 application for managing an university’s alumni — member profiles, events, announcements and more.
Built with **Vue 3 + Nuxt 3**, **Pinia** state, **Vuetify 3** components, **Tailwind CSS** utilities and a rich form/validation layer via **FormKit** & **Vee‑Validate**.

---
## Tech Stack

* **Core frameworks:** Nuxt 3, Vue 3, TypeScript
* **UI kit:** Vuetify
* **Styling:** Tailwind 3 + Sass
* **State:** Pinia
* **Forms & Validation:** FormKit, Vee‑Validate
* **Icons:** Font Awesome 6
* **Utilities:** @nuxtjs/color‑mode, PostCSS, Autoprefixer
* **Tooling:** Vite, Prettier

---

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/locturui/alumni.git
cd alumni

# 2. Install dependencies
npm install        

# 4. Run the dev server
pnpm dev            
```

---

## Environment Variables

| Key                | Purpose                                     | Example                   |
| ------------------ | ------------------------------------------- | ------------------------- |
| `NUXT_API_BASE`    | Base URL for backend REST / GraphQL service | `https://api.example.com` |
| `NUXT_AUTH_SECRET` | JWT / session secret                        | `super‑secret‑string`     |

Create an `.env.local` and add the required keys

---

## Roadmap

* [ ] Authentication (magic‑link & OAuth)
* [ ] Alumni directory search & filters
* [ ] Events calendar & RSVP flow
* [ ] Admin dashboard & analytics
      
---

## Credits

* [Nuxt 3](https://nuxt.com/)
* [Vuetify](https://vuetifyjs.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [FormKit](https://formkit.com/)
* [Vee‑Validate](https://vee-validate.logaretm.com/)
* [Font Awesome](https://fontawesome.com/)
