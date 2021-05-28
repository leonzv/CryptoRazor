export const portfolio = {
    balance: "12,724.33",
    changes: "+2.36%",
};

export const trendingCurrencies = [
    {
        id: 1,
        currency: "Bitcoin",
        code: "BTC",
        image: require("../assets/images/bitcoin.png"),
        amount: "29,455.74",
        changes: "+7.24%",
        type: "I",      // I - Increased, D - Decreased
        description: "Bitcoin é uma criptomoeda inventada em 2008 por uma pessoa desconhecida ou grupo de pessoas que usa o nome Satoshi Nakamoto. A moeda começou a ser usada em 2009, quando sua implementação foi lançada como software de código aberto.",
        chartData: [
            { x: 1, y: 2.5 },
            { x: 1.5, y: 2 },
            { x: 2, y: 2.3 },
            { x: 2.5, y: 1.4 },
            { x: 3, y: 1.5 },
            { x: 3.5, y: 2.3 },
            { x: 4, y: 2.8 }
        ],
        wallet: {
            value: "170435.86",
            crypto: "5.1"
        },
        transactionHistory: [
            {
                id: 1,
                description: "Vendeu Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "S",      // S - Vendeu, B - Comprou
                date: "14:20 12 Apr"
            },
            {
                id: 2,
                description: "Comprou Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 3,
                description: "Vendeu Bitcoin",
                amount: -2.0034,
                currency: "BTC",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 4,
                description: "Comprou Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 5,
                description: "Comprou Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },

            {
                id: 6,
                description: "Comprou Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 7,
                description: "Comprou Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 8,
                description: "Comprou Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 9,
                description: "Comprou Bitcoin",
                amount: 2.0034,
                currency: "BTC",
                type: "B",
                date: "14:20 12 Apr"
            },
        ]
    },
    {
        id: 2,
        currency: "Ethereum",
        code: "ETH",
        image: require("../assets/images/ethereum.png"),
        amount: "919.03",
        changes: "-0.73%",
        type: "D",
        description: "Ethereum é uma blockchain descentralizada e de código aberto com funcionalidade de contrato inteligente. Ether é a criptomoeda nativa da plataforma. É a segunda maior criptomoeda por capitalização de mercado, depois do Bitcoin. Ethereum é a blockchain mais ativamente usada.",
        chartData: [
            { x: 1, y: 2 },
            { x: 1.5, y: 2.3 },
            { x: 2, y: 2 },
            { x: 2.5, y: 2.2 },
            { x: 3, y: 1.5 },
            { x: 3.5, y: 2.1 },
            { x: 4, y: 2.5 }
        ],
        wallet: {
            value: "18409.24",
            crypto: "13.7"
        },
        transactionHistory: [
            {
                id: 1,
                description: "Vendeu Ethereum",
                amount: -2.0034,
                currency: "ETH",
                type: "S",      // S - Vendeu, B - Comprou
                date: "14:20 12 Apr"
            },
            {
                id: 2,
                description: "Comprou Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 3,
                description: "Vendeu Ethereum",
                amount: -2.0034,
                currency: "ETH",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 4,
                description: "Comprou Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 5,
                description: "Comprou Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },

            {
                id: 6,
                description: "Comprou Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 7,
                description: "Comprou Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 8,
                description: "Comprou Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 9,
                description: "Comprou Ethereum",
                amount: 2.0034,
                currency: "ETH",
                type: "B",
                date: "14:20 12 Apr"
            },
        ]
    },
    {
        id: 3,
        currency: "Litecoin",
        code: "LTC",
        image: require("../assets/images/litecoin.png"),
        amount: "118.33",
        changes: "+1.73%",
        type: "I",
        description: "Litecoin é uma criptomoeda ponto a ponto e um projeto de software de código aberto lançado sob a licença MIT / X11. Litecoin foi o primeiro spinoff do bitcoin ou altcoin, começando em outubro de 2011. Em detalhes técnicos, Litecoin é quase idêntico ao Bitcoin.",
        chartData: [
            { x: 1, y: 2.6 },
            { x: 1.5, y: 2.2 },
            { x: 2, y: 2 },
            { x: 2.5, y: 2.2 },
            { x: 3, y: 1.6 },
            { x: 3.5, y: 2.1 },
            { x: 4, y: 2.5 }
        ],
        wallet: {
            value: "13139.23",
            crypto: "100.2"
        },
        transactionHistory: [
            {
                id: 1,
                description: "Vendeu Litecoin",
                amount: -2.0034,
                currency: "LTC",
                type: "S",      // S - Vendeu, B - Comprou
                date: "14:20 12 Apr"
            },
            {
                id: 2,
                description: "Comprou Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 3,
                description: "Vendeu Litecoin",
                amount: -2.0034,
                currency: "LTC",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 4,
                description: "Comprou Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 5,
                description: "Comprou Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 6,
                description: "Comprou Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 7,
                description: "Comprou Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 8,
                description: "Comprou Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 9,
                description: "Comprou Litecoin",
                amount: 2.0034,
                currency: "LTC",
                type: "B",
                date: "14:20 12 Apr"
            },
        ]
    },
    {
        id: 4,
        currency: "Ripple",
        code: "XRP",
        image: require("../assets/images/ripple.png"),
        amount: "0.24",
        changes: "-0.51%",
        type: "D",
        description: "Ripple é um sistema de liquidação bruta em tempo real, troca de moeda e rede de remessas criado pela Ripple Labs Inc., uma empresa de tecnologia com sede nos Estados Unidos.",
        chartData: [
            { x: 1, y: 2.3 },
            { x: 1.5, y: 2.3 },
            { x: 2, y: 2.5 },
            { x: 2.5, y: 2.1 },
            { x: 3, y: 2.2 },
            { x: 3.5, y: 1.8 },
            { x: 4, y: 2.5 }
        ],
        wallet: {
            value: "2000.0",
            crypto: "6000.0"
        },
        transactionHistory: [
            {
                id: 1,
                description: "Vendeu Ripple",
                amount: -2.0034,
                currency: "XRP",
                type: "S",      // S - Vendeu, B - Comprou
                date: "14:20 12 Apr"
            },
            {
                id: 2,
                description: "Comprou Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 3,
                description: "Vendeu Ripple",
                amount: -2.0034,
                currency: "XRP",
                type: "S",
                date: "14:20 12 Apr"
            },
            {
                id: 4,
                description: "Comprou Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 5,
                description: "Comprou Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 6,
                description: "Comprou Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 7,
                description: "Comprou Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 8,
                description: "Comprou Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
            {
                id: 9,
                description: "Comprou Ripple",
                amount: 2.0034,
                currency: "XRP",
                type: "B",
                date: "14:20 12 Apr"
            },
        ]
    },
]

export const transactionHistory = [
    {
        id: 1,
        description: "Vendeu Ethereum",
        amount: -2.0034,
        currency: "ETH",
        type: "S",      // S - Vendeu, B - Comprou
        date: "14:20 12 Apr"
    },
    {
        id: 2,
        description: "Comprou Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 3,
        description: "Vendeu Ethereum",
        amount: -2.0034,
        currency: "ETH",
        type: "S",
        date: "14:20 12 Apr"
    },
    {
        id: 4,
        description: "Comprou Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 5,
        description: "Comprou Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },

    {
        id: 6,
        description: "Comprou Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 7,
        description: "Comprou Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 8,
        description: "Comprou Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 9,
        description: "Comprou Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
];

const chartOptions = [
    {
        id: 1,
        label: "1 Hora"
    },
    {
        id: 2,
        label: "3 Dias"
    },
    {
        id: 3,
        label: "1 Semana"
    },
    {
        id: 4,
        label: "1 Mês"
    },
    {
        id: 5,
        label: "3 Mêses"
    }
]

const dummyData = { portfolio, trendingCurrencies, transactionHistory, chartOptions };

export default dummyData;