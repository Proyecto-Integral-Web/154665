<template>
  <div class="about logout">
    <h1>Su información</h1>
    <section class="col-10 col-sm-6 mx-auto">
        <input type="text" class="form-control mb-2 col" :placeholder=nombre v-model="user.name">

        <input type="text" class="form-control mb-2 col" :placeholder=correo  v-model="user.email">

        <input type="text" class="form-control mb-2 col" :placeholder=telefono v-model="user.telephone">

        <button class="btn btn-dark btn-block col-6 mx-auto" @click="update">Actualizar perfil</button>
    </section>
  </div>
</template>

<script lang="js">
import fireApp from '@/config/_firebase.js'
export default {
  name: 'formProfile',
  created () {
    let usuario = fireApp.auth().currentUser
    this.user.name = usuario.displayName
    this.user.email = usuario.email
    this.user.telephone = usuario.phoneNumber
  },
  methods: {
    update () {
      let usuario = fireApp.auth().currentUser
      usuario.updateProfile({
        displayName: this.user.name,
        email: this.user.email,
        phoneNumber: this.user.telephone
      }).then((result) => {
        console.log(result)
        return alert('Update')
      }).catch((err) => {
        console.table(err)
      })
    }
  }
}
</script>
