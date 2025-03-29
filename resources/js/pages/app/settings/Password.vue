<script setup>
import InputError from '@/components/InputError.vue'
import SettingsLayout from '@/layouts/settings/Layout.vue'
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

import AppButton from '@/components/ui/button/AppButton.vue'
import AppInput from '@/components/ui/form/AppInput.vue'

import { usePageStore } from '@/stores/page-store'

const pageStore = usePageStore()

pageStore.title = 'Editar senha'

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: ''
})

const updatePassword = () => {
    form.put(route('settings.password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: (errors) => {
            if (errors.password) {
                form.reset('password', 'password_confirmation');
                if (passwordInput.value instanceof HTMLInputElement) {
                    passwordInput.value.focus();
                }
            }

            if (errors.current_password) {
                form.reset('current_password');
                if (currentPasswordInput.value instanceof HTMLInputElement) {
                    currentPasswordInput.value.focus();
                }
            }
        }
    })
}
</script>

<template>
    <SettingsLayout>
        <div class="space-y-6">

            <form @submit.prevent="updatePassword" class="space-y-6">
                <div class="grid gap-2">
                    <AppInput
                        id="current_password"
                        label="Senha atual"
                        v-model="form.current_password"
                        type="password"
                        autocomplete="current-password"
                        placeholder="Senha atual"
                        :error="form.errors.current_password"
                        required
                    />
                </div>

                <div class="grid gap-2">
                    <AppInput
                        id="password"
                        label="Nova senha"
                        v-model="form.password"
                        type="password"
                        autocomplete="new-password"
                        placeholder="Nova senha"
                        :error="form.errors.password"
                        required
                    />
                </div>

                <div class="grid gap-2">
                    <AppInput
                        id="password_confirmation"
                        label="Confirmar nova senha"
                        v-model="form.password_confirmation"
                        type="password"
                        autocomplete="new-password"
                        placeholder="Nova senha"
                        :error="form.errors.password_confirmation"
                        required
                    />
                </div>

                <div class="flex items-center gap-4">
                    <AppButton
                        label="Salvar nova senha"
                        type="submit"
                        :disabled="form.processing"
                    />
                </div>
            </form>
        </div>
    </SettingsLayout>
</template>
