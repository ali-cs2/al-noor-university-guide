# Al-Noor University Guide

Al-Noor University Guide is a clean initial Next.js project structure for a university guide website. This setup prepares the repository for future content and the final Stitch design without adding production UI, database, authentication, admin tools, or chatbot features.

## Tech Stack

- Next.js App Router
- React
- JavaScript
- Tailwind CSS
- GitHub-ready
- Vercel-ready

## Folder Structure

```text
app/
  layout.jsx
  page.jsx
  about/page.jsx
  colleges/page.jsx
  departments/page.jsx
  faq/page.jsx
  virtual-tours/page.jsx
  important-links/page.jsx
  contact/page.jsx
components/
  Navbar.jsx
  Footer.jsx
  SectionHeader.jsx
  CollegeCard.jsx
  DepartmentCard.jsx
  FAQItem.jsx
  VirtualTourCard.jsx
  ImportantLinkCard.jsx
  ContactForm.jsx
data/
  university.json
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## GitHub Workflow

Developers should not work directly on `main`. Use this branch flow:

- `main` for stable deployment-ready code
- `dev` for integration work
- `feature/task-name` for focused feature or setup changes

Example workflow:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/task-name
```

After finishing:

```bash
git add .
git commit -m "Describe the change"
git push origin feature/task-name
```

Then open a Pull Request from `feature/task-name` to `dev`.

After `dev` is stable, merge `dev` into `main` for deployment.

## Deployment

This project is ready to deploy on Vercel after the stable `main` branch contains the intended release. Do not deploy this initial setup until the project owner is ready.
