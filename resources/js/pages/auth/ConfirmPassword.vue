<script setup>
import InputError from '@/components/InputError.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { LoaderCircle } from 'lucide-vue-next';

import { usePageStore } from '@/stores/page-store'

const pageStore = usePageStore()

pageStore.title = 'Confirmação de senha'

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <form @submit.prevent="submit">
        <div class="space-y-6">
            <div class="grid gap-2">
                <label htmlFor="password">Senha</label>
                <input
                    id="password"
                    type="password"
                    class="mt-1 block w-full tecx-black"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    autofocus
                />

                <InputError :message="form.errors.password" />
            </div>

            <div class="flex items-center">
                <button class="w-full" :disabled="form.processing">
                    <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin" />
                    Confirmar senha
                </button>
            </div>
        </div>
    </form>
</template>
