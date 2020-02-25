<template>
  <div class="about logout">
    <h1>Su información</h1>
    <section class="col-10 col-sm-6 mx-auto">
        <input type="text" class="form-control mb-2 col" :placeholder=nombre v-model="user.displayname">

        <input type="text" class="form-control mb-2 col" :placeholder=correo>

        <input type="text" class="form-control mb-2 col" :placeholder=telefono>

        <input type="text" class="form-control mb-2 col" :placeholder=nombre>
    </section>
  </div>
</template>

<script lang="js">
// import Auth from '@/config/auth.js'
export default {
  methods: {
    info () {
      // var Usuario = Auth.usuarioInfo()
    }
  }
}
/*
  nuva ruta
  mostrar informacion en imput
  firebase deploy
*/
</script>
