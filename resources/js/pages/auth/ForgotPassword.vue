<script setup>
import InputError from '@/components/InputError.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';
import { LoaderCircle } from 'lucide-vue-next';

import { usePageStore } from '@/stores/page-store'

const pageStore = usePageStore()

pageStore.title = 'Recuperação de senha'

defineProps({
    status: {
        type: String,
        default: ''
    }
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <div v-if="status" class="mb-4 text-center text-sm font-medium text-green-600">
        {{ status }}
    </div>

    <div class="space-y-6">
        <form @submit.prevent="submit">
            <div class="grid gap-2">
                <label for="email">Endereço de email</label>
                <input id="email" type="email" name="email" class="text-black" autocomplete="off" v-model="form.email" autofocus placeholder="email@example.com" />
                <InputError :message="form.errors.email" />
            </div>

            <div class="my-6 flex items-center justify-start">
                <button class="w-full" :disabled="form.processing">
                    <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin" />
                    Enviar email de recuperação
                </button>
            </div>
        </form>

        <div class="space-x-1 text-center text-sm text-muted-foreground">
            <span>Já possui conta?</span>
            <Link :href="route('login')">Entrar</Link>
        </div>
    </div>
</template>
