<!-- time_manager/assets/time_manager/src/App.vue -->
<template>
  <div id="app">
    <header>
      <h1>Time Manager Application</h1>
    </header>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import User from './components/User.vue'

export default {
  name: 'App',
  components: {
    User
  }
}
</script>

<style>
/* Add your global styles here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
