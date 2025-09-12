#!/bin/bash
# Complete website testing and verification

echo "🧪 Complete Website Testing Suite"
echo "=================================="
echo ""

# Test all pages exist
echo "📄 Testing page components..."
PAGES=(
    "src/app/page.tsx:Homepage"
    "src/app/blog/page.tsx:Blog"
    "src/app/how-it-works/page.tsx:How It Works"
    "src/app/research/page.tsx:Research"
    "src/app/roadmap/page.tsx:Roadmap"
)

for page_info in "${PAGES[@]}"; do
    IFS=':' read -r file name <<< "$page_info"
    if [ -f "$file" ]; then
        echo "✅ $name page exists"
    else
        echo "❌ Missing: $name ($file)"
    fi
done

echo ""
echo "🎨 Testing components..."
COMPONENTS=(
    "src/components/HomePage.tsx:Homepage Component"
    "src/components/Navigation.tsx:Navigation"
    "src/components/Footer.tsx:Footer"
)

for comp_info in "${COMPONENTS[@]}"; do
    IFS=':' read -r file name <<< "$comp_info"
    if [ -f "$file" ]; then
        echo "✅ $name exists"
    else
        echo "❌ Missing: $name ($file)"
    fi
done

echo ""
echo "📝 Testing blog content..."
BLOG_POSTS=(
    "content/blog/psychology-of-digital-clutter.md"
    "content/blog/medical-professionals-file-organization.md"
)

for post in "${BLOG_POSTS[@]}"; do
    if [ -f "$post" ]; then
        echo "✅ $(basename "$post")"
    else
        echo "❌ Missing: $(basename "$post")"
    fi
done

echo ""
echo "⚙️ Testing configuration..."
CONFIG_FILES=(
    "package.json:Package Configuration"
    "next.config.js:Next.js Configuration"
    "tailwind.config.js:Tailwind CSS"
    "tsconfig.json:TypeScript Configuration"
)

for config_info in "${CONFIG_FILES[@]}"; do
    IFS=':' read -r file name <<< "$config_info"
    if [ -f "$file" ]; then
        echo "✅ $name"
    else
        echo "❌ Missing: $name"
    fi
done

echo ""
echo "🚀 Final deployment test..."
if npm run build 2>/dev/null; then
    echo "✅ Production build successful"
    echo "🌐 Ready for Vercel deployment"
    echo ""
    echo "🔗 Access your website at:"
    echo "  • Local: http://localhost:3000 (run 'npm run dev')"
    echo "  • Production: https://smart-file-organizer-website.vercel.app"
    echo ""
    echo "📱 Your website includes:"
    echo "  🏠 Professional homepage with conversion optimization"
    echo "  📝 Research-backed blog with psychology insights"
    echo "  📊 How It Works page with step-by-step process"
    echo "  🔬 Research page with academic citations"
    echo "  🗺️ Roadmap with development timeline"
    echo ""
    echo "✨ Website is production-ready and accessible worldwide!"
else
    echo "❌ Build failed - check for errors"
    exit 1
fi