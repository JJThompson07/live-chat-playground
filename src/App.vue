<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: #e3e1ff;
  color: #2c3e50;
  font-size: 16px;
}
.container {
  width: 90%;
  margin: 3rem auto;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 2px 4px 6px rgba(28,6,49,0.1);
}
.error {
  color: indianred;
  font-size: 0.85rem;
}
button {
  text-decoration: none;
  background-color: #577b9f;
  color: white;
  font-weight: bold;
  border: 0;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}
</style>
