<script setup>
import { Link, usePage } from '@inertiajs/vue3';

const sidebarNavItems = [
    {
        label: 'Editar perfil',
        route: 'settings.profile.edit'
    },
    {
        label: 'Editar senha',
        route: 'settings.password.edit'
    }
];

const page = usePage();

const currentPath = page.props.ziggy?.location ? new URL(page.props.ziggy.location).pathname : '';
</script>

<template>
    <div class="px-4 py-6">

        <div class="flex flex-col space-y-8 md:space-y-0 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside class="w-full max-w-xl lg:w-48">
                <nav class="flex flex-col space-x-0 space-y-1">
                    <button
                        v-for="item in sidebarNavItems"
                        :key="route(item.route)"
                        :class="['w-full justify-start', { 'bg-muted text-gray-400': route().current(item.route) }]"
                    >
                        <Link :href="route(item.route)">
                            {{ item.label }}
                        </Link>
                    </button>
                </nav>
            </aside>

            <hr class="my-6 md:hidden" />

            <div class="flex-1 md:max-w-2xl">
                <section class="max-w-xl space-y-12">
                    <slot />
                </section>
            </div>
        </div>
    </div>
</template>
