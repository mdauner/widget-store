const widgetResolvers = {
    Query: {
        widgets: () => [
            {
                name: 'Premium Widget',

                variants: [
                    {
                        color: 'GREEN',
                        size: 'SMALL',
                        numAvailable: 3,
                        price: 12.5,
                    },
                ],
            },
            {
                name: 'Ultimate Widget',
                variants: [
                    {
                        color: 'GREEN',
                        size: 'MEDIUM',
                        numAvailable: 3,
                        price: 12.5,
                    },
                ],
            },
        ],
    },
}

module.exports = {
    widgetResolvers,
}
