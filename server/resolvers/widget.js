const widgetResolvers = {
    Query: {
        widgets: () => [
            { name: 'Premium Widget' },
            { name: 'Ultimate Widget' },
        ],
    },
}

module.exports = {
    widgetResolvers,
}
