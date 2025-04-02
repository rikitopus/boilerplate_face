<script setup>
import { Link } from '@inertiajs/vue3'

import Button from 'primevue/button';

defineEmits(['navButtonClick'])
</script>

<template>
    <div
        class="sticky top-0 z-10 w-full border-b border-gray-100 bg-gray-50/80 px-6 py-4 backdrop-blur-sm flex justify-between items-center"
    >
        <div class="w-full">
            <Button
                class="lg:!hidden"
                size="small"
                severity="secondary"
                outlined
                icon="pi pi-bars"
                aria-label="Navegação"
                @click="$emit('navButtonClick')"
            />
        </div>
        <div class="block">
            <Link class="text-black" method="post" :href="route('logout')" as="button">
                Sair
            </Link>
        </div>
    </div>
</template>
