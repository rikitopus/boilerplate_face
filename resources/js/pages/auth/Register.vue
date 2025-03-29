<script setup>
import InputError from '@/components/InputError.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';
import { LoaderCircle } from 'lucide-vue-next';

import { usePageStore } from '@/stores/page-store'

const pageStore = usePageStore()

pageStore.title = 'Registro'

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <form @submit.prevent="submit" class="flex flex-col gap-6">
        <div class="grid gap-6">
            <div class="grid gap-2">
                <label for="name">Nome</label>
                <input id="name" type="text" required autofocus :tabindex="1" class="text-black" autocomplete="name" v-model="form.name" placeholder="Nome completo" />
                <InputError :message="form.errors.name" />
            </div>

            <div class="grid gap-2">
                <label for="email">Endereço de email</label>
                <input id="email" type="email" required :tabindex="2" class="text-black" autocomplete="email" v-model="form.email" placeholder="nome@email.com" />
                <InputError :message="form.errors.email" />
            </div>

            <div class="grid gap-2">
                <label for="password">Senha</label>
                <input
                    id="password"
                    type="password"
                    required
                    :tabindex="3"
                    class="text-black"
                    autocomplete="new-password"
                    v-model="form.password"
                    placeholder="Senha"
                />
                <InputError :message="form.errors.password" />
            </div>

            <div class="grid gap-2">
                <label for="password_confirmation">Confirmação de senha</label>
                <input
                    id="password_confirmation"
                    type="password"
                    required
                    :tabindex="4"
                    class="text-black"
                    autocomplete="new-password"
                    v-model="form.password_confirmation"
                    placeholder="Confirmação de senha"
                />
                <InputError :message="form.errors.password_confirmation" />
            </div>

            <button type="submit" class="mt-2 w-full" tabindex="5" :disabled="form.processing">
                <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin" />
                Criar conta
            </button>
        </div>

        <div class="text-center text-sm text-muted-foreground">
            Já possui conta?
            <Link :href="route('login')" class="underline underline-offset-4" :tabindex="6">Entrar</Link>
        </div>
    </form>
</template>
