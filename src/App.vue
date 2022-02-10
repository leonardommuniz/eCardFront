<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.axios.get('http://127.0.0.1:8000/api/person')
    .then((response) => {
      console.log(response.data.data);
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
