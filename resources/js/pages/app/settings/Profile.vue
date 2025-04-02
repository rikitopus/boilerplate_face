<script setup>
import { Link, useForm, usePage } from '@inertiajs/vue3'

import DeleteUser from '@/components/DeleteUser.vue'
import FormInputText from '@/components/ui/form/FormInputText.vue'
import SettingsLayout from '@/layouts/settings/Layout.vue'

import Button from 'primevue/button';

import { usePageStore } from '@/stores/page-store'

const pageStore = usePageStore()

pageStore.title = 'Editar perfil'

defineProps({
    mustVerifyEmail: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: ''
    }
});

const page = usePage();
const user = page.props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
});

const submit = () => {
    form.patch(route('settings.profile.update'), {
        preserveScroll: true,
    });
};
</script>

<template>
    <SettingsLayout>
        <div class="flex flex-col space-y-6 mb-6">
            <form @submit.prevent="submit" class="space-y-6">
                <div class="grid gap-2">
                    <FormInputText
                        label="Nome"
                        id="name"
                        v-model="form.name"
                        autocomplete="name"
                        :error="form.errors.name"
                        required
                    />
                </div>

                <div class="grid gap-2">
                    <FormInputText
                        label="Email"
                        id="email"
                        type="email"
                        v-model="form.email"
                        autocomplete="username"
                        :error="form.errors.email"
                        required
                    />
                </div>

                <div v-if="mustVerifyEmail && !user.email_verified_at">
                    <p class="-mt-4 text-sm text-muted-foreground">
                        Seu email não foi verificado.
                        <Link
                            :href="route('verification.send')"
                            method="post"
                            as="button"
                            class="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                        >
                            Clique aqui para reenviar o email de verificação.
                        </Link>
                    </p>
                    <div v-if="status === 'verification-link-sent'" class="mt-2 text-sm font-medium text-green-600">
                        A new verification link has been sent to your email address.
                    </div>
                </div>

                <div class="flex items-center gap-4">
                    <Button
                        label="Salvar"
                        type="submit"
                        :loading="form.processing"
                    />
                </div>
            </form>
        </div>

        <DeleteUser />
    </SettingsLayout>
</template>
