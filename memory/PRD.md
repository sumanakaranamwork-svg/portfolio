# Portfolio Website — Karanam Naga Sumana

## Original Problem Statement
"Create a stunning portfolio website."

## User Choices
- Vibe: Tech/Developer, code-inspired, monospace accents
- Theme: Light (designer's choice)
- Contact form: Yes (storing in MongoDB) — chosen as best practice for student job-search portfolio
- AI chat: No
- No extra content/corrections provided; resume PDF used as source of truth

## Architecture
- Frontend: React (CRA + Craco) on :3000 — single-page portfolio with hash anchors
- Backend: FastAPI on :8001, all routes prefixed `/api`
- DB: MongoDB via Motor (collections: `contact_messages`, `status_checks`)
- Styling: Tailwind + custom CSS variables; Cabinet Grotesk + IBM Plex Sans + JetBrains Mono
- Aesthetic: "Editorial IDE / Terminal Light Mode" — off-white #F8F9FA, vermilion #EA580C accent, neo-brutalist hard shadows

## Implemented (Dec 2025)
- Sticky navbar with section anchors + social icons
- Hero: Cabinet Grotesk display, animated terminal typewriter, stats grid, CTAs (View Projects / Download Resume)
- About: bio, role/pronouns/location/status table, education timeline, /now widget, philosophy quote
- Skills: 3-column dependency grid (Languages / Libraries / Tools) + auto-scrolling marquee
- Projects: HR Analytics, Stock Price Prediction, IPL Dashboard — magazine-style rows with images
- Leadership: data-grid layout for MANTHAN '25 win, hackathon finalist, logistics head roles
- Contact: API-request-styled form → POST /api/contact (MongoDB) + direct channels (email/LinkedIn/GitHub/phone)
- Footer with oversized name typography
- Resume download links to uploaded PDF

## Backend Endpoints
- `GET  /api/` — health
- `POST /api/contact` — save contact message (Name, Email, Subject?, Message)
- `GET  /api/contact` — list messages (for owner)
- `GET/POST /api/status` — legacy template route

## Backlog (Not yet implemented)
- P1: Real LinkedIn/GitHub URLs (currently placeholder slugs) — needs user input
- P1: Real project repo URLs and live demo links
- P1: Profile photo
- P2: Blog / writing section
- P2: Admin view for contact messages
- P2: SEO meta tags + Open Graph image
- P2: Analytics
