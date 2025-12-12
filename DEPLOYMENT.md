# Deployment Guide

## Deploy to GitHub Pages

Follow these steps to deploy your Linux Command Practice app to GitHub Pages:

### Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Linux Command Practice app"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `linux-command-practice`
5. Description: "Interactive web-based terminal simulator for learning Linux commands"
6. Make it **Public** (so others can access it)
7. **Don't** initialize with README (we already have one)
8. Click "Create repository"

### Step 3: Connect and Push to GitHub

Replace `YOUR-USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR-USERNAME/linux-command-practice.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

### Step 5: Access Your Live Site

After a few minutes, your site will be live at:

```
https://YOUR-USERNAME.github.io/linux-command-practice/
```

GitHub will show you the URL in the Pages settings.

### Step 6: Update README

Update the README.md file with your actual GitHub Pages URL:

```bash
# Edit README.md and replace YOUR-USERNAME with your actual username
git add README.md
git commit -m "Update README with live demo link"
git push
```

## Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically update your site within a few minutes.

## Custom Domain (Optional)

If you want to use a custom domain:

1. Buy a domain from a registrar
2. In your repository settings → Pages → Custom domain
3. Enter your domain name
4. Configure DNS records at your registrar:
   - Add a CNAME record pointing to `YOUR-USERNAME.github.io`

## Troubleshooting

**Site not loading?**
- Wait 5-10 minutes after enabling Pages
- Check that index.html is in the root directory
- Verify the repository is public

**Changes not showing?**
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for GitHub to rebuild

**404 errors?**
- Make sure all file paths are relative (no leading /)
- Check that all referenced files exist in the repository

## Share Your App

Once deployed, share your app:
- Tweet the link with #LinuxLearning
- Share on LinkedIn
- Post in programming communities
- Add to your portfolio

Enjoy sharing your Linux learning tool with the world! 🚀
