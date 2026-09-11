#!/bin/bash
cd /Users/akshayjoshi/Downloads/obsolescence-protocol/frontend
npm run build
cd ..
rm -rf docs
cp -r frontend/dist docs
touch docs/.nojekyll
git add docs frontend/vite.config.js
git commit -m "Rebuild with correct base path for GitHub Pages"
git push origin main
echo "Deployment complete! Wait 2-3 minutes then check https://rohanrjoshii.github.io/obsolescence-protocol/"
