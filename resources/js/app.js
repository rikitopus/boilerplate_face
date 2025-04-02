import '../css/app.css';
import './bootstrap';
import BootstrapPage from './bootstrap-page'

import 'primeicons/primeicons.css'

import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from 'pinia'
import { createApp, h } from 'vue';
import { ZiggyVue } from 'ziggy-js';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

import colorPalette from './theme/color-palette';
import themePreset from './theme/theme-preset';
import ptBr from './theme/locale/pt-br';

import.meta.glob(['../assets/videos/**', '../assets/images/**'])

createInertiaApp({
    title: BootstrapPage.definePageTitle,
    resolve: BootstrapPage.resolvePage,
    setup({ el, App, props, plugin }) {
        const pinia = createPinia()

        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(pinia)
            .use(PrimeVue, {
                theme: {
                    preset: definePreset(Aura, themePreset),
                    options: {
                        prefix: 'fd',
                        darkModeSelector: '.dark',
                        cssLayer: false
                    }
                },
                locale: ptBr
            })
            .mount(el);
    },
    progress: {
        color: colorPalette.primary[500],
    },
});
