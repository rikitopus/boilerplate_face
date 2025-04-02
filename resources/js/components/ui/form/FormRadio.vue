<script setup>
import RadioButton from 'primevue/radiobutton'

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
    <div class="flex items-center gap-2">
        <RadioButton
            v-bind="$attrs"
            :inputId="id"
            :required="required"
            :pt="{
                input: {
                    'aria-describedby': error && id ? id + '_error' : null
                }
            }"
        />
        <FormLabel
            v-if="label"
            :label="label"
            :hidden-label="hiddenLabel"
            :for="id"
            :required="required"
        />
    </div>
    <FormFieldError :id="error && id ? id + '_error' : null" :message="error" />
</template>
