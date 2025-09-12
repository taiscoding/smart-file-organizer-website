#!/bin/bash
# Comprehensive Website Verification Script

echo "🔍 Comprehensive Website Verification"
echo "===================================="
echo ""

# Check if all required files exist
echo "📁 Checking file structure..."
FILES=(
    "src/app/layout.tsx"
    "src/app/page.tsx" 
    "src/components/HomePage.tsx"
    "src/components/Navigation.tsx"
    "src/components/Footer.tsx"
    "src/app/globals.css"
    "content/blog/psychology-of-digital-clutter.md"
    "content/blog/medical-professionals-file-organization.md"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ Missing: $file"
    fi
done

echo ""
echo "📦 Testing build process..."
if npm run build 2>/dev/null; then
    echo "✅ Build successful"
else
    echo "❌ Build failed - checking for errors..."
    npm run build
fi

echo ""
echo "🚀 Testing development server..."
# Kill any existing dev servers
pkill -f "next dev" 2>/dev/null

# Start dev server in background
npm run dev &
DEV_PID=$!
echo "Started dev server with PID: $DEV_PID"

# Wait for server to start
echo "⏳ Waiting for server to start..."
sleep 15

# Test if server responds
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Development server responding"
    
    # Test specific routes
    echo ""
    echo "🔗 Testing routes..."
    
    if curl -s http://localhost:3000 | grep -q "Transform Digital Chaos"; then
        echo "✅ Homepage loading with correct content"
    else
        echo "❌ Homepage content issue"
    fi
    
    if curl -s http://localhost:3000/blog | grep -q "Insights on Digital Organization"; then
        echo "✅ Blog page loading correctly"
    else
        echo "⚠️  Blog page may have issues"
    fi
    
    if curl -s http://localhost:3000/how-it-works | grep -q "How Smart File Organizer Works"; then
        echo "✅ How It Works page loading correctly"
    else
        echo "⚠️  How It Works page may have issues"
    fi
    
else
    echo "❌ Development server not responding"
fi

# Clean up
kill $DEV_PID 2>/dev/null
echo ""
echo "🎯 Website Verification Complete!"
echo ""
echo "📱 Visual Elements to Check:"
echo "  • Hero section with gradient background"
echo "  • GitHub stats bar (stars, downloads, users)"
echo "  • Two-column before/after comparison"
echo "  • Feature cards with icons"
echo "  • Use case sections with stats"
echo "  • Research citations section"
echo "  • Call-to-action buttons"
echo "  • Mobile-responsive navigation"
echo ""
echo "🌐 Open http://localhost:3000 to view the site"
echo "🚀 Deploy with: vercel --prod"
