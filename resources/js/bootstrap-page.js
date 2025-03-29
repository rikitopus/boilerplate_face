import AppLayout from '@/layouts/AppLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

export default class BootstrapPage {
    static APP_NAME = import.meta.env.VITE_APP_NAME

    // Set page title
    static definePageTitle(title) {
        return title ? `${title} | ${BootstrapPage.APP_NAME}` : BootstrapPage.APP_NAME
    }

    static async resolvePage(name) {
        const page = await BootstrapPage.getRequestedPage(name)

        BootstrapPage.definePageLayout(page, name)

        return page
    }

    static getRequestedPage(name) {
        const pages = import.meta.glob('./pages/**/*.vue')

        return pages[`./pages/${name}.vue`]()
    }

    static definePageLayout(page, name) {
        const isAuthenticated = name.startsWith('app/')

        if (page.default.layout === null) {
            return
        }

        if (isAuthenticated) {
            page.default.layout = AppLayout
            return
        }

        page.default.layout = page.default.layout || AuthLayout
    }
}
