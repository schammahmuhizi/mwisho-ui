<script>

    import { computed, onMounted, ref, watchEffect } from 'vue';

    export default {
        setup(props, context){
            const a = ref(4);

            onMounted(() => {
                console.log(a.value);
            })

            return {a}
        }
    }

</script>

<template>
    <div class="flex justify-center space-x-2">
        <div class="bg-slate-50/50 border  rounded-md divide-x px-5 flex items-center">
            <div class="space-x-3 flex-1">
                <i class="bi bi-search"></i>
                <input ref="a" type="text" name="" class="bg-transparent focus:outline-none" placeholder="Recherche par 'mot-clé'" id="">
            </div>
            <div  class="px-4 space-x-2 w-1/3 flex items-center">
                <i class="bi bi-geo-alt"></i>
                <input type="text" placeholder="Ville" class="bg-transparent focus:outline-none">
            </div>
        </div>
        
        <button class="bg-black font-semibold text-white px-3 py-3 rounded-lg leading-tight"><i class="bi bi-search"></i></button>
    </div>
</template>