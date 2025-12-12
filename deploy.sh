#!/bin/bash

# Linux Command Practice - GitHub Deployment Script
# This script helps you deploy your app to GitHub Pages

echo "🚀 Linux Command Practice - GitHub Deployment"
echo "=============================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

# Check if already a git repository
if [ -d .git ]; then
    echo "✅ Git repository already initialized"
else
    echo "📦 Initializing git repository..."
    git init
    echo "✅ Git repository initialized"
fi

# Get GitHub username
echo ""
echo "Please enter your GitHub username:"
read -r GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username cannot be empty"
    exit 1
fi

# Update README with actual username
echo ""
echo "📝 Updating README with your GitHub username..."
sed -i.bak "s/YOUR-USERNAME/$GITHUB_USERNAME/g" README.md
rm -f README.md.bak
echo "✅ README updated"

# Add all files
echo ""
echo "📦 Adding files to git..."
git add .
echo "✅ Files added"

# Commit
echo ""
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Linux Command Practice app with 13 workshops"
echo "✅ Commit created"

# Check if remote exists
if git remote | grep -q origin; then
    echo ""
    echo "⚠️  Remote 'origin' already exists. Skipping remote add."
else
    # Add remote
    echo ""
    echo "🔗 Adding GitHub remote..."
    git remote add origin "https://github.com/$GITHUB_USERNAME/linux-command-practice.git"
    echo "✅ Remote added"
fi

# Instructions
echo ""
echo "=============================================="
echo "✅ Setup Complete!"
echo "=============================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Create a new repository on GitHub:"
echo "   - Go to: https://github.com/new"
echo "   - Name: linux-command-practice"
echo "   - Make it PUBLIC"
echo "   - Don't initialize with README"
echo ""
echo "2. Push your code:"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to: https://github.com/$GITHUB_USERNAME/linux-command-practice/settings/pages"
echo "   - Source: Deploy from branch 'main' / (root)"
echo "   - Click Save"
echo ""
echo "4. Your site will be live at:"
echo "   https://$GITHUB_USERNAME.github.io/linux-command-practice/"
echo ""
echo "=============================================="
echo "🎉 Happy sharing!"
echo "=============================================="
