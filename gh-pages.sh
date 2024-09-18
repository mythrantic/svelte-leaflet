#!/bin/bash

# Define the name of the new branch
NEW_BRANCH="gh-pages"

# Check if the branch already exists
if git rev-parse --verify $NEW_BRANCH >/dev/null 2>&1; then
  echo "Branch $NEW_BRANCH already exists, checking it out and resetting it."
  git checkout $NEW_BRANCH
else
  # Create and switch to the new branch
  echo "Creating new branch $NEW_BRANCH."
  git checkout -b $NEW_BRANCH
fi

# Fetch the latest changes from the remote
git fetch origin

# Reset the branch to match the state of origin/main
echo "Resetting branch to match the state of origin/main..."
git reset --hard origin/working

find . -mindepth 1 -not -path "./build*" -not -path "./.git*" -not -name ".env" -exec rm -rf {} + 2>/dev/null \
&& (mv build/* build/.* . 2>/dev/null || true) \
&& rmdir build 2>/dev/null


sleep 2

# for some reason i have todo it twice

find . -mindepth 1 -not -path "./build*" -not -path "./.git*" -not -name ".env" -exec rm -rf {} + 2>/dev/null \
&& (mv build/* build/.* . 2>/dev/null || true) \
&& rmdir build 2>/dev/null
# Add changes to the new branch
git add .

# Commit the changes
git commit -m "Replace all contents with build folder contents except .env"

# Optionally, push the new branch to the remote repository
git push --force origin $NEW_BRANCH