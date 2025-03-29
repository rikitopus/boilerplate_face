<script setup>
import { Link } from '@inertiajs/vue3'

defineEmits(['navButtonClick'])
</script>

<template>
    <div
        class="sticky top-0 z-10 w-full border-b border-gray-100 bg-gray-50/80 px-6 py-4 backdrop-blur-sm flex justify-between items-center"
    >
        <div class="block">
            <!-- Toggle sidebar -->
            <button
                class="rounded bg-danger-500 px-2 text-white lg:hidden"
                @click="$emit('navButtonClick')"
            >
                ...
            </button>
        </div>
        <div class="block">
            <Link class="text-black" method="post" :href="route('logout')" as="button">
                Sair
            </Link>
        </div>
    </div>
</template>
