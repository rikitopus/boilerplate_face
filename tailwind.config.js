import defaultTheme from 'tailwindcss/defaultTheme';

import colorPalette from './resources/js/theme/color-palette';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: colorPalette.white,
            black: colorPalette.black,
            primary: colorPalette.primary,
            secondary: colorPalette.secondary,
            gray: colorPalette.gray,
            success: colorPalette.success,
            danger: colorPalette.danger,
            warning: colorPalette.warning,
            info: colorPalette.info,
        },
        spacing: {
            0: '0',
            1: '0.25rem', // 4px
            2: '0.5rem', // 8px
            3: '0.75rem', // 12px
            4: '1rem', // 16px
            5: '1.5rem', // 24px
            6: '2rem', // 32px
            7: '2.5rem', // 40px
            8: '3rem', // 48px
            9: '6rem', // 96px
            10: '8rem', // 128px
        },
        fontSize: {
            xs: '0.75rem', // 12px
            sm: '0.875rem', // 14px
            base: '1rem', // 16px
            lg: '1.125rem', // 18px
            xl: '1.25rem', // 20px
            '2xl': '1.5rem', // 24px
            '3xl': '1.75rem', // 28px
            '4xl': '2rem', // 32px
            '5xl': '2.5rem', // 40px
            '6xl': '3rem', // 48px
        },
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
