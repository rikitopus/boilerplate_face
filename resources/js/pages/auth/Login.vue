<script setup>
import { useForm } from '@inertiajs/vue3'

import Button from 'primevue/button'
import FormInputText from '@/components/ui/form/FormInputText.vue'
import FormPassword from '@/components/ui/form/FormPassword.vue'
import FormCheckbox from '@/components/ui/form/FormCheckbox.vue'
import AppLink from '@/components/ui/AppLink.vue'

import { usePageStore } from '@/stores/page-store'

const pageStore = usePageStore()

pageStore.title = 'Entrar'

defineProps({
    status: {
        type: String
    },
    canResetPassword: {
        type: Boolean
    }
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <div v-if="status" class="mb-4 text-center text-sm font-medium text-green-600">
        {{ status }}
    </div>

    <form @submit.prevent="submit" class="flex flex-col gap-6">
        <div class="grid gap-6">
            <div class="block">
                <FormInputText
                    id="email"
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
                    type="password"
                    label="Senha"
                    v-model="form.password"
                    autocomplete="current-password"
                    placeholder="Senha"
                    :feedback="false"
                    :error="form.errors.password"
                    required
                />

                <AppLink v-if="canResetPassword" :href="route('password.request')" class="text-sm">
                    Esqueceu sua senha?
                </AppLink>
            </div>

            <FormCheckbox
                id="remember"
                label="Lembrar"
                v-model="form.remember"
                binary
            />

            <Button
                type="submit"
                label="Entrar"
                class="w-full"
                :disabled="form.processing"
                :loading="form.processing"
            />
        </div>

        <div class="text-center text-sm text-muted-foreground">
            Não possui conta?
            <AppLink :href="route('register')">Criar conta</AppLink>
        </div>
    </form>
</template>
