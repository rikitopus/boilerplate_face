<script setup>
import { ref } from 'vue'

import { usePageStore } from '@/stores/page-store'

import AppFooterLayout from './app/AppFooterLayout.vue'
import AppHeaderLayout from './app/AppHeaderLayout.vue'
import AppSidebarLayout from './app/AppSidebarLayout.vue'
import AppDrawerLayout from './app/AppDrawerLayout.vue'
import AppTopbarLayout from './app/AppTopbarLayout.vue'

import AppHead from '@/components/layout/AppHead.vue'

const pageStore = usePageStore()

const drawer = ref(null)

const openDrawer = () => {
    if (drawer.value) {
        drawer.value.open()
    }
}

const mainNavLinks= [
    {
        label: 'Dashboard',
        icon: 'pi-chart-bar',
        route: 'dashboard',
        routeGroup: 'dashboard',
    },
    {
        label: 'Configurações',
        icon: 'pi-cog',
        route:  'settings.profile.edit',
        routeGroup: 'settings.*',
    },
    {
        label: 'Componentes',
        icon: 'pi-microchip',
        route:  'components',
        routeGroup: 'components',
    }
];
</script>

<template>
    <AppHead :title="pageStore.title" />

    <AppSidebarLayout
        :v-bind="route().current()"
        :nav-links="mainNavLinks"
    />

    <AppDrawerLayout
        :v-bind="route().current()"
        :nav-links="mainNavLinks"
        ref="drawer"
    />

    <div class="flex min-h-dvh flex-col bg-gray-50 lg:ml-[240px] relative z-0">
        <AppTopbarLayout @nav-button-click="openDrawer" />

        <AppHeaderLayout :page-title="pageStore.title" />

        <main class="container mx-auto px-6">
            <slot />
        </main>

        <AppFooterLayout />
    </div>
</template>
