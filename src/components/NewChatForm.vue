<template>
  <form @submit.prevent="handleSubmit">
    <textarea
        v-model="message"
        placeholder="Type a message and hit enter to send..."
        @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <button :disabled="!message.length" :class="{'submit': message.length}">Submit</button>
  </form>
  <div class="error" v-if="error">{{ error.value }}</div>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import useCollection from '../composables/useCollection'

export default {
  name: "NewChatForm",
  setup() {
    const message = ref('')
    const { user } = getUser()
    const { addDoc, error } = useCollection('messages')

    console.log(user.value)

    const handleSubmit = async () => {
      const chat = {
        message: message.value,
        name: user.value.displayName,
        createdAt: timestamp()
      }

      await addDoc(chat)
      if (!error.value) {
        console.log(chat)
        message.value = ''
      }
    }

    return {
      message,
      handleSubmit,
      error
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  align-items: flex-end;
  textarea {
    flex: 1;
    padding: 0.5rem;
    border-radius: 0.5rem;
    outline: none;
  }
  button {
    background-color: #aaaaaa;
    &.submit {
      background-color: #42b983;
      &:hover,
      &:focus {
        background-color: lighten(#42b983, 10%);
      }
    }
  }
}
</style>
