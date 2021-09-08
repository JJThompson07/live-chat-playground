<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h2>Signup to the chatroom</h2>
<!--    <label for="displayName">Username: </label>-->
    <input id="displayName" type="text" required placeholder="Display name" v-model="displayName">
<!--    <label for="email">Email: </label>-->
    <input id="email" type="email" required placeholder="Email" v-model="email">
<!--    <label for="password">Password: </label>-->
    <input id="password" type="password" required placeholder="Password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
  name: "SignupForm",
  setup(props, context) {
    // refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    const { error, signup } = useSignup()

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        context.emit('signup')
      }
    }

    return {
      displayName,
      email,
      password,
      handleSubmit,
      error
    }
  }
}
</script>

<style lang="scss">
.form {
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: stretch;

  label {
    display: block;
    margin: 1rem 0 0.5rem;
  }

  input {
    padding: 0.5rem;
    border: solid 2px #eee;
    border-radius: 1rem;
    outline: none;
    color: #444444;
    margin: 0.5rem 0;
  }

  button {
    align-self: center;
  }
}

</style>
