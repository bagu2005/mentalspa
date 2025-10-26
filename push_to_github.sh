#!/bin/bash

echo "🚀 Pushing Mental Spa to GitHub..."
echo "Repository: git@github.com:bagu2005/mentalspa.git"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the project directory"
    exit 1
fi

# Check git status
echo "📋 Current git status:"
git status --short

echo ""
echo "🔄 Attempting to push to GitHub..."

# Try SSH first
echo "Trying SSH method..."
git remote set-url origin git@github.com:bagu2005/mentalspa.git
if git push origin main; then
    echo "✅ Successfully pushed to GitHub via SSH!"
    exit 0
fi

# Try HTTPS
echo "Trying HTTPS method..."
git remote set-url origin https://github.com/bagu2005/mentalspa.git
if git push origin main; then
    echo "✅ Successfully pushed to GitHub via HTTPS!"
    exit 0
fi

echo "❌ Failed to push automatically."
echo ""
echo "🔧 Manual steps:"
echo "1. Go to https://github.com/bagu2005/mentalspa"
echo "2. Make sure the repository exists"
echo "3. Set up SSH keys or use Personal Access Token"
echo "4. Run: git push origin main"
echo ""
echo "📁 Your code is ready in: $(pwd)"
echo "📝 All changes are committed and ready to push!"
