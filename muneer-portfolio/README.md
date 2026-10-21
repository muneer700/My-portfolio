# Muneer's Portfolio (React + Vite)

## 1. Run it on your computer

Install Node.js (LTS) from https://nodejs.org, then in this folder:

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).

## 2. Make it yours

| What | Where |
| --- | --- |
| Your photo | Save it as `public/photo.jpg` (it appears automatically) |
| Email, GitHub, LinkedIn | `src/data.js` -> `contacts` |
| Project links and text | `src/data.js` -> `projects` |
| Skills | `src/data.js` -> `skills` |
| Accent color | `src/index.css` -> `--accent` at the top |
| About text, hero text | `src/components/About.jsx`, `src/components/Hero.jsx` |

## 3. Check the production build

```bash
npm run build
npm run preview
```

## 4. Put it on GitHub

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Create the empty repository on github.com first (no README, no .gitignore).

## 5. Deploy (pick one)

### Vercel (easiest)
1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New > Project** and import your repository.
3. Keep the defaults (Framework: Vite, build command `npm run build`, output `dist`) and click **Deploy**.

### Netlify
1. Go to https://netlify.com and sign in with GitHub.
2. **Add new site > Import an existing project**, choose the repository.
3. Build command `npm run build`, publish directory `dist`, then **Deploy**.

Every time you run `git push`, the site updates by itself.

## Project structure

```
index.html            page shell + Google Fonts
src/main.jsx          starts React
src/App.jsx           puts the sections in order
src/data.js           all editable content
src/index.css         all styles and animations
src/components/       Navbar, Hero, About, Skills, Projects, Contact, Footer, icons
public/               static files (put photo.jpg here)
```
