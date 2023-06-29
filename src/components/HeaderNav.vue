<script setup>
  import SearchBar from '../components/SearchBar.vue'
</script>
<template>
    <header class="bg-white sticky top-0 z-10 w-full flex justify-between items-center px-6 py-3 border-b border-gray-100">
      <h3 class="font-bold uppercase text-lg">App Name</h3>
      <SearchBar></SearchBar>
      <span class="rounded-full bg-slate-300 w-10 h-10 flex items-center justify-center font-semibold">P</span>
    </header>
</template>