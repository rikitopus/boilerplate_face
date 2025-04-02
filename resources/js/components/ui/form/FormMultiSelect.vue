<script setup>
import MultiSelect from 'primevue/multiselect'

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
    <MultiSelect
        v-bind="$attrs"
        :inputId="id"
        class="block w-full"
        :required="required"
        :pt="{
            hiddenInput: {
                'aria-describedby': error && id ? id + '_error' : null
            }
        }"
    />
    <FormFieldError :id="error && id ? id + '_error' : null" :message="error" />
</template>
