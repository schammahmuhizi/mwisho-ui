<script setup>
    defineProps({
        number: Number
    })
</script>

<template>
    <span class="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-semibold text-gray-800 bg-gray-200 rounded-full">{{ number }}</span>
</template>