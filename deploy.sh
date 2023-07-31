#!/bin/sh

# prepare gh-page deploy and generate the `dist` directory
npm run deploy:gh-pages

# Navigate into the build output directory
cd dist

# Initialize a new git repository
git init

# Set up user details
git config user.name "thureindev"
git config user.email "thurein.dev@gmail.com"

# Commit the build
git add .
git commit -m "Deploy to my-deployment repository"

# branch name is `main` on deploy repository
git branch -M main

# Add deploy repository as a remote
git remote add origin https://github.com/thureindev/cipher.git

# Force push to the deploy repository (This will overwrite existing 'main' branch)
git push -u origin main --force

# Cleanup (remove the temporary .git directory)
rm -rf .git