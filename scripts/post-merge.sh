#!/bin/bash
set -e

echo "=== Post-merge setup ==="

echo "Installing dependencies..."
npm install --no-audit < /dev/null

echo "Pushing database schema..."
npm run db:push < /dev/null || npm run db:push --force < /dev/null || true

echo "=== Post-merge setup complete ==="
