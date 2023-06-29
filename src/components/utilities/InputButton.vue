<script setup>
    const props = defineProps({
        content: { type: String, equired: true },
        loadingContent: { type: String, default: 'Creating...' },
        isLoading: { type: Boolean, default: false },
    })
</script>

<template>
    <button @click="$emit('isClicked')" :disabled="isLoading" :class="[ isLoading ? 'pointer-events-none' : 'hover:scale-105 active:scale-100' ]" class="w-full rounded-full bg-black text-white capitalize text-lg font-semibold py-2.5 mt-7 disabled:animate-pulse disabled:opacity-25 transition-all ease-linear">
        {{ isLoading ? loadingContent : content }}
    </button>
</template>