<script setup>
import { ref } from 'vue'

import FormInputText from '@/components/ui/form/FormInputText.vue'
import FormAutoComplete from '@/components/ui/form/FormAutoComplete.vue'
import FormInputMask from '@/components/ui/form/FormInputMask.vue'
import FormPassword from '../../components/ui/form/FormPassword.vue'
import FormCheckbox from '../../components/ui/form/FormCheckbox.vue'
import FormRadio from '../../components/ui/form/FormRadio.vue'
import FormSwitch from '../../components/ui/form/FormSwitch.vue'
import FormSelect from '../../components/ui/form/FormSelect.vue'
import FormCascadeSelect from '../../components/ui/form/FormCascadeSelect.vue'
import FormMultiSelect from '../../components/ui/form/FormMultiSelect.vue'
import FormColorPicker from '../../components/ui/form/FormColorPicker.vue'
import FormDatePicker from '../../components/ui/form/FormDatePicker.vue'
import FormInputNumber from '../../components/ui/form/FormInputNumber.vue'
import FormTextarea from '../../components/ui/form/FormTextarea.vue'

import { usePageStore } from '@/stores/page-store'

import Button from 'primevue/button'

const form = ref({
    inputtext: '',
    autocomplete: null,
    inputmask: '',
    password: '',
    checkbox: false,
    radio: '',
    switch: false,
    cascadeselect: null,
    select: null,
    multiselect: null,
    colorpicker: null,
    datepicker: null,
    inputnumber: null,
    textarea: ''
})

const options = ref({
    select: [
        { label: 'Apple', code: 'apple' },
        { label: 'Avocado', code: 'avocado' },
        { label: 'Banana', code: 'banana' },
        { label: 'Blackberry', code: 'blackberry' },
        { label: 'Blueberry', code: 'blueberry' },
        { label: 'Cherry', code: 'cherry' },
        { label: 'Grapes', code: 'grapes' },
        { label: 'Kiwi', code: 'kiwi' },
        { label: 'Lemon', code: 'lemon' },
        { label: 'Mango', code: 'mango' },
        { label: 'Orange', code: 'orange' },
        { label: 'Peach', code: 'peach' },
        { label: 'Pineapple', code: 'pineapple' }
    ],
    cascadeSelect: [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        { cname: 'Sydney', code: 'A-SY' },
                        { cname: 'Newcastle', code: 'A-NE' },
                        { cname: 'Wollongong', code: 'A-WO' }
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        { cname: 'Brisbane', code: 'A-BR' },
                        { cname: 'Townsville', code: 'A-TO' }
                    ]
                }
            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        { cname: 'Montreal', code: 'C-MO' },
                        { cname: 'Quebec City', code: 'C-QU' }
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        { cname: 'Ottawa', code: 'C-OT' },
                        { cname: 'Toronto', code: 'C-TO' }
                    ]
                }
            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        { cname: 'Los Angeles', code: 'US-LA' },
                        { cname: 'San Diego', code: 'US-SD' },
                        { cname: 'San Francisco', code: 'US-SF' }
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        { cname: 'Jacksonville', code: 'US-JA' },
                        { cname: 'Miami', code: 'US-MI' },
                        { cname: 'Tampa', code: 'US-TA' },
                        { cname: 'Orlando', code: 'US-OR' }
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        { cname: 'Austin', code: 'US-AU' },
                        { cname: 'Dallas', code: 'US-DA' },
                        { cname: 'Houston', code: 'US-HO' }
                    ]
                }
            ]
        }
    ]
})

const countries = ref([
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' }
]);

const filteredCountries = ref();

const autocompleteSearch = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
}

const pageStore = usePageStore()

pageStore.title = 'Componentes'
</script>

<template>
    <div class="flex-col flex gap-5">
        <div class="flex gap-2">
            <Button label="Primary" severity="primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Contrast" severity="contrast" />
            <Button label="Gray" severity="gray" />
            <Button label="Success" severity="success" />
            <Button label="Danger" severity="danger" />
            <Button label="Warn" severity="warn" />
            <Button label="Info" severity="info" />
            <Button label="Help" severity="help" />
        </div>
        <div class="flex gap-2">
            <Button label="Primary" severity="primary" variant="text" />
            <Button label="Secondary" severity="secondary" variant="text" />
            <Button label="Contrast" severity="contrast" variant="text" />
            <Button label="Gray" severity="gray" variant="text" />
            <Button label="Success" severity="success" variant="text" />
            <Button label="Danger" severity="danger" variant="text" />
            <Button label="Warn" severity="warn" variant="text" />
            <Button label="Info" severity="info" variant="text" />
            <Button label="Help" severity="help" variant="text" />
        </div>
        <div class="flex gap-2">
            <Button label="Primary" severity="primary" outlined />
            <Button label="Secondary" severity="secondary" outlined />
            <Button label="Contrast" severity="contrast" outlined />
            <Button label="Gray" severity="gray" outlined />
            <Button label="Success" severity="success" outlined />
            <Button label="Danger" severity="danger" outlined />
            <Button label="Warn" severity="warn" outlined />
            <Button label="Info" severity="info" outlined />
            <Button label="Help" severity="help" outlined />
        </div>
        <div class="flex gap-2 items-center">
            <Button label="Small" size="small" />
            <Button label="Medium" />
            <Button label="Large" size="large" />
        </div>
        <div class="grid grid-cols-4 gap-2">
            <div class="block col-span-4">
                <h2>Campos de formulários</h2>
            </div>
            <div class="block">
                <FormInputText
                    id="inputtext"
                    label="Input Text"
                    v-model="form.inputtext"
                    error="Erro no inputtext"
                    required
                />
                {{ form.inputtext }}
            </div>
            <div class="block">
                <FormAutoComplete
                    id="autocomplete"
                    label="Autocomplete"
                    v-model="form.autocomplete"
                    optionLabel="name"
                    :suggestions="filteredCountries"
                    @complete="autocompleteSearch"
                    error="Erro no autocomplete"
                    required
                />
                {{ form.autocomplete }}
            </div>
            <div class="block">
                <FormInputMask
                    id="inputmask"
                    label="Input Mask"
                    v-model="form.inputmask"
                    mask="99-999999"
                    placeholder="99-999999"
                    error="Erro no inputmask"
                    required
                />
                {{ form.inputmask }}
            </div>
            <div class="block">
                <FormPassword
                    id="password"
                    label="Password"
                    v-model="form.password"
                    error="Erro no password"
                    required
                />
                {{ form.password }}
            </div>
            <div class="block">
                <FormCheckbox
                    id="checkbox"
                    label="Checkbox"
                    v-model="form.checkbox"
                    binary
                    required
                    error="Erro no checkbox"
                />
                {{ form.checkbox }}
            </div>
            <div class="block">
                <FormRadio
                    id="radio"
                    label="Radio"
                    value="Radio"
                    v-model="form.radio"
                    name="radio"
                    required
                    error="Erro no radio"
                />
                {{ form.radio }}
            </div>
            <div class="block">
                <FormSwitch
                    id="switch"
                    label="Switch"
                    v-model="form.switch"
                    required
                    error="Erro no switch"
                />
                {{ form.switch }}
            </div>
            <div class="block">
                <FormSelect
                    id="select"
                    label="Select"
                    v-model="form.select"
                    :options="options.select"
                    optionLabel="label"
                    required
                    editable
                    error="Erro no select"
                />
                {{ form.select }}
            </div>
            <div class="block">
                <FormCascadeSelect
                    id="cascadeselect"
                    label="Cascade Select"
                    v-model="form.cascadeselect"
                    :options="options.cascadeSelect"
                    optionLabel="cname"
                    optionGroupLabel="name"
                    :optionGroupChildren="['states', 'cities']"
                    required
                    error="Erro no cascadeselect"
                />
                {{ form.cascadeselect }}
            </div>
            <div class="block">
                <FormMultiSelect
                    id="multiselect"
                    label="Multiselect"
                    v-model="form.multiselect"
                    :options="options.select"
                    optionLabel="label"
                    required
                    error="Erro no multiselect"
                />
                {{ form.multiselect }}
            </div>
            <div class="block">
                <FormColorPicker
                    id="colorpicker"
                    label="Colorpicker"
                    v-model="form.colorpicker"
                    required
                    error="Erro no colorpicker"
                />
                {{ form.colorpicker }}
            </div>
            <div class="block">
                <FormDatePicker
                    id="datepicker"
                    label="Datepicker"
                    v-model="form.datepicker"
                    required
                    error="Erro no datepicker"
                />
                {{ form.datepicker }}
            </div>
            <div class="block">
                <FormInputNumber
                    id="inputnumber"
                    label="Input Number"
                    v-model="form.inputnumber"
                    required
                    error="Erro no inputnumber"
                    showButtons
                />
                {{ form.inputnumber }}
            </div>
            <div class="block">
                <FormTextarea
                    id="textarea"
                    label="Textarea"
                    v-model="form.textarea"
                    required
                    error="Erro no textarea"
                />
                {{ form.textarea }}
            </div>
        </div>
    </div>
</template>
