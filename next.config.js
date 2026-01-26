module.exports = {
    async rewrites() {
        return [
            {
                // Only rewrite if the path does NOT contain a dot (.)
                source: '/:slug((?!.*\\.).*)',
                destination: '/:slug.html',
            },
        ]
    },
} 