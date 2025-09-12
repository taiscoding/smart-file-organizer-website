#!/bin/bash

# Smart File Organizer Website - Development Quality Gates
# Run this script before pushing to production

set -e

echo "🚀 Smart File Organizer Website - Quality Check"
echo "=============================================="

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔍 Running ESLint..."
if npm run lint; then
    echo "✅ ESLint passed"
else
    echo "❌ ESLint failed - fix linting errors before continuing"
    exit 1
fi

echo ""
echo "🔧 Running TypeScript type check..."
if npm run type-check; then
    echo "✅ TypeScript type check passed"
else
    echo "❌ TypeScript errors found - fix type errors before continuing"
    exit 1
fi

echo ""
echo "🏗️  Building project..."
if npm run build; then
    echo "✅ Build successful"
else
    echo "❌ Build failed - fix build errors before continuing"
    exit 1
fi

echo ""
echo "✨ All quality gates passed!"
echo "🌐 Ready for production deployment"
echo ""
echo "Next steps:"
echo "  1. git add ."
echo "  2. git commit -m \"fix: resolve TypeScript errors and enhance dev workflow\""
echo "  3. git push origin main"
echo ""
echo "🔗 Vercel will auto-deploy from: https://github.com/taiscoding/smart-file-organizer-website"
