<script setup>
import AppSidebarLinkLayout from '@/components/layout/AppSidebarLinkLayout.vue'

import AppLogo from '@/components/AppLogo.vue'

defineProps({
    navLinks: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <aside class="hidden lg:block fixed lg:left-0 -left-full h-full bg-gray-900 py-2 w-[240px] z-10">
        <AppLogo
            color="secondary"
            width="100"
            class="mx-auto my-5"
        />
        <div class="flex flex-col gap-2 px-3" >
            <AppSidebarLinkLayout
                v-for="(link, index) in navLinks"
                :key="index"
                :href="route(link.route)"
                :active="route().current(link.routeGroup)"
                :icon="link.icon"
                :label="link.label"
            />
        </div>
    </aside>
</template>
