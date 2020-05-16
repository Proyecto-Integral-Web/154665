<template>
  <div id="app">
    <div id="nav">
      <img src="@/assets/ppt.png" class="logo">
      <!--router-link to="/home">Home</router-link --> |
      <router-link :to="{name:'login'}">Login</router-link> |
      <router-link to="/juego-1/partida-1">Juego</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e4e6e7;
  background-color: #55555c;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #e4e6e7;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
a{
  font-weight: bold;
  color: #e4e6e7;
}
.logo{
  height: 50px;
  max-height: 100%;
}
</style>
