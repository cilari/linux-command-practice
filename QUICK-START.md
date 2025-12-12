# Quick Start - Deploy to GitHub Pages

## Option 1: Automated Script (Easiest)

Run the deployment script:

```bash
./deploy.sh
```

Follow the prompts and instructions.

## Option 2: Manual Steps

### 1. Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: Linux Command Practice app"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `linux-command-practice`
3. Make it **Public**
4. Click "Create repository"

### 3. Push to GitHub

Replace `YOUR-USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR-USERNAME/linux-command-practice.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repo → Settings → Pages
2. Source: Branch `main`, folder `/ (root)`
3. Click Save

### 5. Access Your Site

Your site will be live at:
```
https://YOUR-USERNAME.github.io/linux-command-practice/
```

## Files Included

**Main App:**
- `index.html` - Main page
- `app.js` - Terminal simulator
- `workshops.js` - Workshop content
- `style.css` - Styling
- `quiz.html` - Quiz page

**Documentation:**
- `README.md` - Project overview
- `DEPLOYMENT.md` - Detailed deployment guide
- `KNOWLEDGE-INTEGRATION.md` - Feature documentation

**Linux Notes:**
- `linux-notes/` - Your study notes (optional to include)

## What Gets Deployed

Only the essential files are deployed:
- ✅ HTML, CSS, JS files
- ✅ README and documentation
- ❌ Backup files (excluded by .gitignore)
- ❌ IDE settings (excluded by .gitignore)

## Sharing Your App

Once live, share it:
- Add to your portfolio
- Share on social media
- Post in learning communities
- Help others learn Linux!

## Need Help?

See `DEPLOYMENT.md` for detailed instructions and troubleshooting.
