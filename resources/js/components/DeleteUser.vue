<script setup>
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

import Button from 'primevue/button'
import FormInputText from '@/components/ui/form/FormInputText.vue'
import FormPassword from '@/components/ui/form/FormPassword.vue'
import Modal from '@/components/Modal.vue'

const confirmingUserDeletion = ref(false)

const form = useForm({
    password: '',
})

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;
}

const deleteUser = (e) => {
    e.preventDefault()

    form.delete(route('settings.profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => form.reset(),
    })
}

const closeModal = () => {
    confirmingUserDeletion.value = false

    form.clearErrors()
    form.reset()
};
</script>

<template>
    <div class="block rounded-lg border border-danger-300 bg-danger-50 p-4">
        <p class="text-sm mb-3">
            <strong class="font-bold text-lg text-danger-600">Atenção<br /></strong>
            Por favor, tenha certeza de que deseja excluir sua conta antes de continuar.
        </p>
        <Button
            @click="confirmUserDeletion"
            label="Excluir conta"
            severity="danger"
            size="sm"
            icon="pi pi-trash"
        />

        <Modal :show="confirmingUserDeletion" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Tem certeza de que deseja excluir sua conta?
                </h2>

                <p class="mt-1 text-sm text-gray-600">
                    Assim que sua conta for excluída, todos os seus recursos e dados
                    serão excluídos permanentemente. Por favor, insira sua senha para
                    confirmar que você deseja <strong>excluir permanentemente</strong> sua conta.
                </p>

                <div class="mt-6">
                    <form @submit="deleteUser" id="delete-user-form">
                        <FormPassword
                            id="password"
                            type="password"
                            label="Senha"
                            name="password"
                            v-model="form.password"
                            placeholder="Sua senha"
                            autocomplete="current-password"
                            :error="form.errors.password"
                            required
                        />
                    </form>
                </div>

                <div class="mt-6 flex justify-between">
                    <Button
                        @click="closeModal"
                        label="Cancelar"
                        severity="secondary"
                        variant="outlined"
                    />
                    <Button
                        label="Confirmar exclusão"
                        type="submit"
                        form="delete-user-form"
                        severity="danger"
                    />
                </div>
            </div>
        </Modal>
    </div>
</template>
