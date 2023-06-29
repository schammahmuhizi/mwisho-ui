<script setup>
    import JobItem from './JobItem.vue';
</script>

<template>
    <div class="px-2">
        <h3 class="font-medium text-base mb-3 capitalize px-1">Autres offres similaires</h3>
        <div class=" border border-gray-100 transition-all hover:border-gray-300 hover:cursor-pointer hover:shadow-sm  rounded-lg px-4 py-5 items-start">
            <div class="flex items-start">
                <img src="../assets/images/wv.jpeg" width="80" height="auto" class="py-2 rounded shadow-sm border border-gray-100" alt="">
                <div class="flex-1 px-5 space-y-2">
                    <h3 class="flex-1 font-semibold text-gray-800 text-[16px] leading-tight line-clamp-2">Avis d'appel d'offres pour la fourniture des services d'hebergement</h3>

                    <h4 class="font-semibold text-[12.5px] inline-block px-2 py-0.5 rounded-md bg-slate-400 text-white">World Vision Burundi</h4>
                </div>
            </div>
            <div class="px-1">
                <p class="text-gray-500 text-sm mt-4 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, sit. Autem eum corrupti dolores veniam aliquam illo veritatis fuga porro necessitatibus tenetur. Rerum soluta consequatur fuga itaque, corrupti exercitationem, consequuntur, blanditiis illum non harum minus sunt! Distinctio, hic. Iusto eaque rerum veniam aut odio, esse accusamus itaque obcaecati beatae soluta.</p>
            
                <div class="text-black/90 flex space-x-2 pt-3 divide-x text-[13.5px] text-slate-900">
                    <span class="pr-0.5 py-1"><i class="bi bi-geo-alt-fill mr-1"></i>Bujumbura</span>
                    <span class="px-2 py-1">Date limite: 20/05/2023</span>
                </div>
            </div>
            
        </div>
    </div>
</template>