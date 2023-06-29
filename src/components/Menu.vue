<script setup>
    import Badge from '../components/Badge.vue'
</script>

<template>
    <div class="bg-white text-lg px-5 py-3 text-center border-b border-gray-100">
        <ul class="flex divide-x font-semibold divide-gray-100 text-base">
            <li><a class="block font-medium rounded-md bg-slate-100 px-3 py-1 mx-2" href="#">Tout</a></li>
            <li><a class="block font-medium rounded-md hover:bg-slate-50 px-3 py-1 mx-2" href="#">Appel d'offres <Badge number="14"></Badge> </a></li>
            <li><a class="block font-medium rounded-md hover:bg-slate-50 px-3 py-1 mx-2" href="#">Emplois</a></li>
            <li><a class="block font-medium rounded-md hover:bg-slate-50 px-3 py-1 mx-2" href="#">Services/Tâches <Badge number="28"></Badge></a></li>
            <li><a class="block font-medium rounded-md hover:bg-slate-50 px-3 py-1 mx-2" href="#">Blog</a></li>
        </ul>
    </div>
    
</template>