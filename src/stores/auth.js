import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import Api from '../services/Api'

export const useAuthStore = defineStore('auth', () => {
  const authUser = ref(null)
  const user = ref({
    'name': 'Hello',
    'email': 'schammah@gmail.com',
    'username': 'muhizi',
    'password': '1234',
    'password_confirmed': '1234',
  })
  const errors = ref(null)

  // watch(
  //   user.value,
  //   (data) => {
  //     // persist the whole state to the local storage whenever it changes
  //     console.log(data)
  //   },
  //   { deep: true }
  // )

  async function register(){
    return await Api.post('/register', 
    {
      name: user.value.name,
      username: user.value.username,
      email: user.value.email,
      password: user.value.password,
      password_confirmed: user.value.password_confirmed
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      errors.value = err.response.data.errors
    })
  }

  return { authUser, user, errors, register }
})
