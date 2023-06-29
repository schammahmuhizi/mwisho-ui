<script setup>
import { ref } from 'vue';
    const props = defineProps({
        'type': String,
        'label': String,
        'errorMessage': String, 
        'eyeButton': Boolean,
        'modelValue': String
    });

    const inputType = ref(props.type);

    const toogleVisibility = () => {
        inputType.value = (inputType.value === 'password') ? 'text' : 'password';
    } 
</script>

<template>
    <div class="relative z-0">
        <div class="flex items-center relative">
            <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :type="inputType" @focus="errorMessage = ''" :class="[ errorMessage ? 'bg-red-50 border-red-500 text-red-600' : 'text-gray-500' ]" class="block pb-2 pt-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 transition ease-linear appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <button @click="toogleVisibility" v-if="eyeButton" class="absolute  active:scale-90 transition ease-in-out right-0 bottom-0 text-xl px-1 py-1 text-black/90">
                <i v-if="inputType === 'password'" class="bi bi-eye"></i>
                <i v-else="inputType === 'text'" class="bi bi-eye-slash transition ease-linear"></i>
            </button>
        </div>
        
        <label class="-z-10 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{ label }}</label>
        <Transition>
            <p v-if="errorMessage" class="text-red-600 text-[13px] mt-2">{{ errorMessage }}</p>
        </Transition>
    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>