<script setup>
import { ref } from 'vue'
import { PhBugBeetle } from '@phosphor-icons/vue'

import { usePageStore } from '@/stores/page-store'

import AppFooterLayout from './app/AppFooterLayout.vue'
import AppHeaderLayout from './app/AppHeaderLayout.vue'
import AppSidebarLayout from './app/AppSidebarLayout.vue'
import AppTopbarLayout from './app/AppTopbarLayout.vue'

import AppHead from '@/components/layout/AppHead.vue'

const pageStore = usePageStore()

const sidebar = ref(null)

const toggleSidebar = () => {
    if (sidebar.value) {
        sidebar.value.toggleSidebar()
    }
}

const mainNavLinks= [
    {
        label: 'Dashboard',
        icon: PhBugBeetle,
        route: 'dashboard',
        routeGroup: 'dashboard',
    },
    {
        label: 'Configurações',
        icon: PhBugBeetle,
        route:  'settings.profile.edit',
        routeGroup: 'settings.*',
    },
    {
        label: 'Componentes',
        icon: PhBugBeetle,
        route:  'components',
        routeGroup: 'components',
    }
];
</script>

<template>
    <AppHead :title="pageStore.title" />

    <AppSidebarLayout
        :current-route="route().current() || ''"
        :nav-links="mainNavLinks"
        ref="sidebar"
    />

    <div class="flex min-h-dvh flex-col bg-gray-50 lg:ml-[240px]">
        <AppTopbarLayout @nav-button-click="toggleSidebar" />

        <AppHeaderLayout :page-title="pageStore.title" />

        <main class="container mx-auto px-6">
            <slot />
        </main>

        <AppFooterLayout />
    </div>
</template>
