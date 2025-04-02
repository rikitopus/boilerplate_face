<script setup>
import { useForm, Link } from '@inertiajs/vue3'

import Button from 'primevue/button'
import FormInputText from '@/components/ui/form/FormInputText.vue'
import FormPassword from '@/components/ui/form/FormPassword.vue'
import AppLink from '@/components/ui/AppLink.vue'

import { usePageStore } from '@/stores/page-store'

const pageStore = usePageStore()

pageStore.title = 'Registro'

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation')
    })
}
</script>

<template>
    <form @submit.prevent="submit" class="flex flex-col gap-6">
        <div class="grid gap-6">
            <div class="block">
                <FormInputText
                    id="name"
                    label="Nome completo"
                    v-model="form.name"
                    autocomplete="name"
                    placeholder="Nome completo"
                    :error="form.errors.name"
                    required
                />
            </div>

            <div class="block">
                <FormInputText
                    id="email"
                    type="email"
                    label="Endereço de email"
                    v-model="form.email"
                    autocomplete="email"
                    placeholder="nome@email.com"
                    :error="form.errors.email"
                    required
                />
            </div>

            <div class="block">
                <FormPassword
                    id="password"
                    label="Senha"
                    v-model="form.password"
                    autocomplete="new-password"
                    placeholder="Senha"
                    :error="form.errors.password"
                    required
                />
            </div>

            <div class="block">
                <FormPassword
                    id="password_confirmation"
                    label="Confirmação de senha"
                    v-model="form.password_confirmation"
                    autocomplete="new-password"
                    placeholder="Confirmação de senha"
                    :error="form.errors.password_confirmation"
                    required
                />
            </div>

            <Button type="submit" class="mt-2 w-full" :loading="form.processing">
                Criar conta
            </Button>
        </div>

        <div class="text-center text-sm text-muted-foreground">
            Já possui conta?
            <AppLink :href="route('login')">Entrar</AppLink>
        </div>
    </form>
</template>
