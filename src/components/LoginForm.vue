<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h2>Login to the chatroom</h2>
<!--    <label for="email">Email: </label>-->
    <input id="email" type="email" required placeholder="Email" v-model="email">
<!--    <label for="password">Password: </label>-->
    <input id="password" type="password" required placeholder="Password" v-model="password">

    <div class="error" v-if="error">{{ error }}</div>

    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
  name: "LoginForm",
  setup(props, context) {
    // refs
    const email = ref('')
    const password = ref('')
    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        context.emit('login')
      }
    }

    return {
      email,
      password,
      handleSubmit,
      error
    }
  }
}
</script>

<style lang="scss">
</style>
