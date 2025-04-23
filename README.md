# Fixie Test Repository

This repository is designed to test the Fixie GitHub App - an app that listens for failed GitHub Actions workflows, analyzes the cause, and suggests fixes.

## Setup

1. Push this repository to GitHub
2. Install the Fixie GitHub App on this repository
3. Trigger the workflow manually or by pushing changes

## What to expect

The GitHub Actions workflow in this repository will deliberately fail because:
- It tries to install a non-existent npm package (`non-existent-package`)

When the workflow fails, the Fixie app should:
1. Detect the workflow failure
2. Analyze the logs to identify the cause
3. Either comment on the PR (if the workflow is triggered by a PR) or open a new PR with a fix

## Triggering the workflow

You can trigger the workflow in several ways:
- Push changes to the main branch
- Create a pull request
- Manually trigger the workflow from the Actions tab on GitHub