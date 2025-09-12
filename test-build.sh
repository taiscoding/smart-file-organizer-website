#!/bin/bash
# Quick test and validation script

echo "🔧 Testing Smart File Organizer Website..."
echo "========================================="
echo ""

# Test build process
echo "📦 Testing build process..."
if npm run build; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Test if development server starts
echo "🚀 Testing development server..."
npm run dev &
DEV_PID=$!
sleep 10

# Check if server is responding
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Development server running successfully"
    kill $DEV_PID
else
    echo "❌ Development server failed to start"
    kill $DEV_PID
    exit 1
fi

echo ""
echo "🎉 All tests passed!"
echo "✅ Website is ready for deployment"
echo ""
echo "🔗 Next steps:"
echo "  1. Run: npm run dev"
echo "  2. Open: http://localhost:3000"
echo "  3. Deploy: vercel --prod"
echo ""
