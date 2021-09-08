<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <div class="single__content">
          <span class="name">{{ doc.name }}</span>
          <span class="message">{{ doc.message }}</span>
          <button v-if="user.displayName == doc.name || user.displayName === 'joshT'" @click="handleClick(doc.id)">
            delete</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from 'vue'
import getUser from '../composables/getUser'
import { projectFirestore } from '../firebase/config'

export default {
  name: "ChatWindow",
  setup() {
    const { error, documents } = getCollection('messages')
    const { user } = getUser();

    console.log(user.value)

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time }
        })
      }
    })

    const messages = ref(null)

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    const handleClick = async (id) => {
      console.log('clicked: ', id)
      try {
        await projectFirestore.collection('messages').doc(id).delete()
      } catch (err) {
        console.log(err.message)
      }
    }

    return {
      error,
      documents,
      formattedDocuments,
      messages,
      handleClick,
      user
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-window {
  background: #ddd;

  .messages {
    max-height: 600px;
    overflow: auto;
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    padding: 2rem 1rem;
  }

  .single {
    background: white;
    padding: 1rem;
    display: flex;
    flex-flow: column;

    .created-at {
      color: #999;
    }

    .name {
      font-weight: bold;
    }

    .message {
      flex: 1;
    }

    &__content {
      display: flex;
      gap: 1rem;
    }
  }
}

</style>
