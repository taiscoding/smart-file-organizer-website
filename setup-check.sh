#!/bin/bash
# Website Setup Verification Script

echo "🌟 Smart File Organizer Website Setup Complete!"
echo "=============================================="
echo ""

# Check if dependencies are installed
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
else
    echo "⏳ Installing dependencies..."
    npm install
fi

# Check if development server is running
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Development server running at http://localhost:3000"
else
    echo "🚀 Starting development server..."
    npm run dev &
fi

# Check git setup
if [ -d ".git" ]; then
    echo "✅ Git repository initialized"
    if git remote -v | grep -q "origin"; then
        echo "✅ GitHub repository connected"
    else
        echo "⚠️  GitHub repository needs to be connected"
    fi
else
    echo "⚠️  Git not initialized"
fi

# Check Vercel setup
if command -v vercel &> /dev/null; then
    echo "✅ Vercel CLI installed"
else
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo ""
echo "🎯 Your Website Features:"
echo "  📱 Professional homepage with conversion optimization"
echo "  📝 Research-backed blog with psychology insights"
echo "  🧠 Content targeted at medical professionals & researchers"
echo "  📊 SEO optimized with proper meta tags"
echo "  🚀 Ready for deployment to Vercel"
echo ""
echo "🔗 Quick Links:"
echo "  Local: http://localhost:3000"
echo "  GitHub: https://github.com/taiscoding/smart-file-organizer-website"
echo "  Deploy: vercel --prod"
echo ""
echo "✨ Ready to transform your GitHub project into a professional product!"
