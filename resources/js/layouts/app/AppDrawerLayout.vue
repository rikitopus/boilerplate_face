<script setup>
import AppSidebarLinkLayout from '@/components/layout/AppSidebarLinkLayout.vue'

import Drawer from 'primevue/drawer'

import AppLogo from '@/components/AppLogo.vue'

import { ref } from 'vue'

defineProps({
    navLinks: {
        type: Array,
        required: true
    }
})

const isOpen = ref(false)

const close = () => {
    isOpen.value = false
}

defineExpose({
    open: () => {
        isOpen.value = true
    }
})
</script>

<template>
    <Drawer
        v-model:visible="isOpen"
        class="!w-[90%] !bg-gray-900 !border-gray-900"
        :pt="{
            header: '!justify-end'
        }"
    >
        <AppLogo
            color="secondary"
            width="100"
            class="mx-auto mb-5"
        />

        <div class="flex flex-col gap-2 px-3" >
            <AppSidebarLinkLayout
                v-for="(link, index) in navLinks"
                :key="index"
                :href="route(link.route)"
                :active="route().current(link.routeGroup)"
                :icon="link.icon"
                :label="link.label"
                @click="close()"
            />
        </div>
    </Drawer>
</template>
