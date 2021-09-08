<template>
  <nav class="nav" v-if="user">
    <div class="nav__messages">
      <p>Hey there... {{ user.displayName }}</p>
      <p class="email">Currently logged in as... {{ user.email }}</p>
    </div>
    <button class="nav__logout" @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
  name: "Navbar",
  setup() {
    const { error, logout } = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
      if (!error.value) {
        console.log('user logged out')
      }
    }

    return {
      error,
      handleClick,
      user
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: solid 1px #eee;

  &__messages {
    p {
      margin: 2px auto;
      color: #444;

      &.email {
        font-size: 14px;
        color: #999;
      }
    }
  }
}

</style>
