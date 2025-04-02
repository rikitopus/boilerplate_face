<script setup>
import InputError from '@/components/InputError.vue';
import { useForm, Link } from '@inertiajs/vue3';
import { LoaderCircle } from 'lucide-vue-next';

import Button from 'primevue/button'
import FormInputText from '@/components/ui/form/FormInputText.vue'
import FormPassword from '@/components/ui/form/FormPassword.vue'
import AppLink from '@/components/ui/AppLink.vue'

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
            <div class="block">
                <FormInputText
                    id="email"
                    label="Endereço de email"
                    v-model="form.email"
                    autocomplete="off"
                    placeholder="nome@email.com"
                    :error="form.errors.email"
                    required
                />
            </div>
            <Button class="mt-2 w-full" :loading="form.processing">
                Enviar email de recuperação
            </Button>
        </form>

        <div class="space-x-1 text-center text-sm text-muted-foreground">
            <span>Já possui conta?</span>
            <AppLink :href="route('login')">Entrar</AppLink>
        </div>
    </div>
</template>
