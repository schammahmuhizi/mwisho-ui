<script setup>
import { storeToRefs } from 'pinia';
import InputButton from '../components/utilities/InputButton.vue';
import InputField from '../components/utilities/InputField.vue';
import { useAuthStore } from '../stores/auth';
import { ref, watch } from 'vue';

const store = useAuthStore()
const { user, errors } = storeToRefs(store)
const { register } = store
let loading = ref(false)

const submit = async () => {
    loading.value = true
    await register()
    loading.value = false
}

store.$subscribe((mutation) => {

    if(store.errors){
        if (store.errors[mutation.events.key] == 'password'){
            delete store.errors.password_confirmed
        } 
        delete store.errors[mutation.events.key]
    }
})

</script>

<template>
    <div class="h-screen w-screen relative flex items-center">
        <div class="w-[24rem] mx-auto">
            <div class="bg-white border-2 px-8 rounded-3xl pt-7 pb-7 mb-5 ">
                <h3 class="text-2xl font-semibold mb-6">Créer un compte</h3>

                <div class="flex flex-col space-y-5">
                    <InputField v-model="user.name" type="text" label="Nom & prénom" :error-message="errors?.name?.[0]" />
                    <InputField v-model="user.username" type="text" label="Nom d'utilisateur" :error-message="errors?.username?.[0]" />
                    <InputField v-model="user.email" type="email" label="Email" :error-message="errors?.email?.[0]" />
                    <InputField v-model="user.password" type="password" label="Mot de passe" :error-message="errors?.password?.[0]" eye-button="true" />
                    <InputField v-model="user.password_confirmed" type="password" label="Retaper le mot de passe" :error-message="errors?.password?.[0]" eye-button="true" />
                </div>

                <InputButton @isClicked="submit" content="Terminé" :is-loading="loading" />
            </div>
            <p class="text-center text-[15px]">Vous avez déjà un compte, <a href="" class="hover:underline text-blue-600 font-medium underline-offset-2 decoration-2 capitalize">S'identifier</a> </p>
        </div>

    </div>
</template>