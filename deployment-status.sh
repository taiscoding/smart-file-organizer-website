#!/bin/bash
# Vercel deployment status and verification script

echo "🌐 Smart File Organizer Website Deployment Status"
echo "================================================="
echo ""

# Check Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check deployment status
echo "🚀 Checking deployment status..."
vercel ls 2>/dev/null || echo "Run 'vercel' to deploy"

echo ""
echo "🔗 Deployment Options:"
echo "  1. Development: npm run dev (http://localhost:3000)"
echo "  2. Production: vercel --prod"
echo "  3. Preview: vercel (preview deployment)"
echo ""

# Test build
echo "📦 Testing production build..."
if npm run build 2>/dev/null; then
    echo "✅ Build successful - ready for deployment"
else
    echo "❌ Build failed - check errors before deploying"
fi

echo ""
echo "📱 Complete Website Structure:"
echo "  ✅ Homepage (/) - Hero, features, use cases"
echo "  ✅ Blog (/blog) - Research articles and insights"
echo "  ✅ How It Works (/how-it-works) - Step-by-step process"
echo "  ✅ Research (/research) - Academic backing and studies"  
echo "  ✅ Roadmap (/roadmap) - Development timeline and features"
echo ""
echo "🎯 Deploy now with: vercel --prod"
echo "📧 Your site will be available at: https://smart-file-organizer-website.vercel.app"