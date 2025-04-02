<script setup>
import ProgressSpinner from 'primevue/progressspinner'
</script>

<template>
    <ProgressSpinner
        animationDuration="1s"
        pt:root="relative inline-block before:block before:pt-[100%]"
        pt:spin="animate-spin animate-1s h-full origin-center w-full absolute top-0 bottom-0 start-0 end-0 m-auto "
        pt:circle="stroke-current stroke-4 [stroke-dasharray:89,200] [stroke-dashoffset:0] [stroke-linecap:round]"
    />
</template>
