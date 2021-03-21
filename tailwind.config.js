
module.exports = {
    corePlugins: {
        container: false,
    },
    purge: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gap:{
                // 100% / 24 / 24 * 10
                '10-24': "calc(100% / 153)"
            },
            gridColumnStart: {
                '13': '13',
                '14': '14',
                '15': '15',
                '16': '16',
                '17': '17',
                '18': '18',
            },
            gridTemplateColumns: {
                '24': 'repeat(24, minmax(0, 1fr))',
            },
            container:{
                center: true,
                padding:{
                    DEFAULT: ".9375rem",
                    lg: "11%",
                },

            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        ({ addComponents, theme }) => {
            addComponents({
                ".container": {
                    marginInline: "auto",
                    paddingInline: ".9375rem",
                    "@screen lg": {
                        maxWidth: "78%",
                    },
                },
            });
        },
    ],
}