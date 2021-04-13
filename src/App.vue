<template>
  <div id="app">
      <div>
          <router-link to="/" active-class="active">Home</router-link> |
          <router-link to="/reclamacao" active-class="active">Registrar Reclamação</router-link> |
          <router-link to="/sobre" active-class="active">Sobre</router-link>
      </div>
      <button @click="goHome">Ir para home</button>
      <hr>
      <div>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        goHome(){
            this.$router.push('/')
        }
    }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

a {
    /* display: flex; */
    justify-content: center;
    padding: 15px 40px;
    text-decoration: none;
    font-weight: 600;
    white-space: nowrap;
    color: rgb(56, 3, 248);
}
.active {
    background-color: #2392f0;
}
.active a {
    color: #FFF;
}
</style>