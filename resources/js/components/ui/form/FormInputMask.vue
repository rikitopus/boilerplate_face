<script setup>
import InputMask from 'primevue/inputmask'

import FormLabel from './parts/FormLabel.vue'
import FormFieldError from './parts/FormFieldError.vue'

const props = defineProps({
    label: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: false
    },
    required: {
        type: Boolean,
        required: false,
        default: false
    },
    hiddenLabel: {
        type: Boolean,
        required: false,
        default: false
    },
    error: {
        type: String,
        required: false
    }
})

defineOptions({
    inheritAttrs: false
})
</script>

<template>
    <FormLabel
        v-if="label"
        class="inline-block w-full"
        :label="label"
        :hidden-label="hiddenLabel"
        :for="id"
        :required="required"
    />
    <InputMask
        v-bind="$attrs"
        :id="id"
        class="block w-full"
        :required="required"
        :aria-describedby="error && id ? id + '_error' : null"
    />
    <FormFieldError :id="error && id ? id + '_error' : null" :message="error" />
</template>
