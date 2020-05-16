npm --version<template>
    <section>
        <div class="col-10 col-sm-6 mx-auto drkbcg">
            <h6>Llene el formulario de registro</h6>
            <input type="text" class="form-control mb-2 col " placeholder="Nombre de usuario" v-model="user.nombre">

            <input type="text" class="form-control mb-2 col " placeholder="Email" v-model="user.email">

            <input type="password" class="form-control mb-2 col " placeholder="Contraseña" v-model="user.password">

            <input type="password" class="form-control mb-2 col " placeholder="Confirmar contraseña" v-model="user.password2">

            <button class="btn btn-dark btn-block col-10 mx-auto" @click="login">Registrarse</button>

            <button class="btn btn-dark btn-block col-10 mx-auto" @click="juego">Jugar</button>

            <button class="btn  btn-block" @click="goToLogin">Ya tengo cuenta</button>
            <div clas="form-group">
                <div class="row">
                    <div class="col">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'SupForm',
  data () {
    return {
      user: {
        nombre: '',
        email: '',
        password: '',
        password2: ''
      }
    }
  },
  mounted () {
    // Auth.signUp(this.user)
  },
  methods: {
    login () {
      let user = {
        email: 'EstoEsLocal'
      }
      if (user.password === user.password2) {
        Auth.signUp(this.user)
        setTimeout(() => {
          this.$router.push({ name: 'perfil' })
        }, 500)
      } else {
        console.console.log('Se requiere que las contraseñas coincidan')
      }
    },
    goToLogin () {
      this.$router.push({ name: 'login' })
    },
    juego () {
      this.$router.push({ name: 'partida' })
    }
  }
}
</script>
<style lang="scss">
.btn-darkblue{
    background-color: #001133;
    border: 1px solid #0099cc;
    &:hover{
        background-color: #0099cc;
    }
}
</style>
