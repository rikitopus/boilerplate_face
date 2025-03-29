<script setup>
import AppSidebarLinkLayout from '@/components/layout/AppSidebarLinkLayout.vue'
import AppLogo from '@/components/AppLogo.vue'

import { ref } from 'vue'

defineProps({
    currentRoute: {
        type: String,
        required: true
    },
    navLinks: {
        type: Array,
        required: true
    }
})

const isOpen = ref(false)

const openSidebar = () => {
    isOpen.value = true
    console.log('abriu')
}
const closeSidebar = () => {
    isOpen.value = false
    console.log('fechou')
}

defineExpose({
    toggleSidebar: () => {
        if (isOpen.value) {
            closeSidebar()
        } else {
            openSidebar()
        }
    }
})
</script>

<template>
    <aside
        :class="[
            'fixed lg:left-0 block h-full bg-gray-900 py-2 sm:transition-all duration-200 ease-in-out w-[90%] lg:w-[240px] z-100',
            {
                'left-0': isOpen,
                '-left-full': !isOpen,
            }
        ]"
    >
        <AppLogo
            color="secondary"
            width="100"
            class="mx-auto my-5"
        />
        <div class="flex flex-col gap-2 px-3">
            <AppSidebarLinkLayout
                v-for="(link, index) in navLinks"
                :key="index"
                :href="route(link.route)"
                :active="route().current(link.routeGroup)"
                :icon="link.icon"
                :label="link.label"
            />
        </div>
        <button
            class="rounded bg-danger-500 px-2 text-white lg:hidden absolute top-4 right-4"
            @click="closeSidebar"
        >
            x
        </button>
    </aside>
</template>
