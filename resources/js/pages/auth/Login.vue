<script setup>
import InputError from '@/components/InputError.vue';
import { useForm, Link } from '@inertiajs/vue3';
import { LoaderCircle } from 'lucide-vue-next';

import AppButton from '@/components/ui/button/AppButton.vue';
import AppInput from '@/components/ui/form/AppInput.vue';

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
                <AppInput
                    id="email"
                    label="Endereço de email"
                    :tabindex="1"
                    v-model="form.email"
                    autocomplete="email"
                    placeholder="nome@email.com"
                    :error="form.errors.email"
                    required
                />
                <!-- <label for="email">Endereço de email</label>
                <input
                    id="email"
                    type="email"
                    required
                    autofocus
                    :tabindex="1"
                    autocomplete="email"
                    class="text-black"
                    v-model="form.email"
                    placeholder="email@example.com"
                />
                <InputError :message="form.errors.email" /> -->
            </div>

            <div class="block">
                <AppInput
                    id="password"
                    type="password"
                    label="Senha"
                    :tabindex="2"
                    v-model="form.password"
                    autocomplete="current-password"
                    placeholder="Senha"
                    :error="form.errors.password"
                    required
                />

                <Link v-if="canResetPassword" :href="route('password.request')" class="text-sm" :tabindex="5">
                    Esqueceu sua senha?
                </Link>

                <!-- <div class="flex items-center justify-between">
                    <label for="password">Senha</label>
                    <Link v-if="canResetPassword" :href="route('password.request')" class="text-sm" :tabindex="5">
                        Esqueceu sua senha?
                    </Link>
                </div>
                <input
                    id="password"
                    type="password"
                    required
                    :tabindex="2"
                    class="text-black"
                    autocomplete="current-password"
                    v-model="form.password"
                    placeholder="Password"
                />
                <InputError :message="form.errors.password" /> -->
            </div>

            <div class="flex items-center justify-between" :tabindex="3">
                <label for="remember" class="flex items-center space-x-3">
                    <input type="checkbox" id="remember" class="text-black" v-model="form.remember" :tabindex="4" />
                    <span>Lembrar</span>
                </label>
            </div>

            <AppButton
                type="submit"
                label="Entrar"
                class="w-full"
                :tabindex="4"
                :disabled="form.processing"
                :loading="form.processing"
            />
        </div>

        <div class="text-center text-sm text-muted-foreground">
            Não possui conta?
            <Link :href="route('register')" :tabindex="5">Criar conta</Link>
        </div>
    </form>
</template>
