<template>
  <div class="welcome container">
    <p>Welcome</p>
    <LoginForm v-if="showLogin" @login="enterChat" />
    <p v-if="showLogin">No account yet? <span class="signup" @click="showLogin = false">Signup</span> instead.</p>
    <SignupForm v-if="!showLogin" @signup="enterChat" />
    <p v-if="!showLogin">Have an account? <span class="signup" @click="showLogin = true">Login</span>.</p>
  </div>
</template>

<script>
// @ is an alias to /src

import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Welcome',
  components: { LoginForm, SignupForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }

    return {
      showLogin,
      enterChat
    }
  }
}
</script>

<style lang="scss">
.welcome {
  text-align: center;
  padding: 1rem 0;
}
.signup {
  color: #42b983;
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
  &:hover {
    color: #577b9f;
  }
}
</style>
