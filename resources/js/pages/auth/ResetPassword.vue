<script setup>
import InputError from '@/components/InputError.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { LoaderCircle } from 'lucide-vue-next';

import { usePageStore } from '@/stores/page-store'

const pageStore = usePageStore()

pageStore.title = 'Recuperação de senha'

const props = defineProps({
    token: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    }
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
    <form @submit.prevent="submit">
        <div class="grid gap-6">
            <div class="grid gap-2">
                <label for="email">Email</label>
                <input id="email" type="email" name="email" autocomplete="email" v-model="form.email" class="mt-1 block w-full text-black" readonly />
                <InputError :message="form.errors.email" class="mt-2" />
            </div>

            <div class="grid gap-2">
                <label for="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    autocomplete="new-password"
                    v-model="form.password"
                    class="mt-1 block w-full text-black"
                    autofocus
                    placeholder="Password"
                />
                <InputError :message="form.errors.password" />
            </div>

            <div class="grid gap-2">
                <label for="password_confirmation"> Confirm Password </label>
                <input
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    autocomplete="new-password"
                    v-model="form.password_confirmation"
                    class="mt-1 block w-full text-black"
                    placeholder="Confirm password"
                />
                <InputError :message="form.errors.password_confirmation" />
            </div>

            <button type="submit" class="mt-4 w-full" :disabled="form.processing">
                <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin" />
                Reset password
            </button>
        </div>
    </form>
</template>
