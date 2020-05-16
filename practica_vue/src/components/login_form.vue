npm --version<template>
    <section>
        <div class="col-10 col-sm-6 mx-auto">
            <h6>Ingrese sus datos</h6>
            <Alerts-Component>
              :error="swError"
              :message="error"
              :code="codigoError"
            </Alerts-Component>
            <input type="text" class="form-control mb-2 col" placeholder="Nombre de usuario" v-model="user.email" @keypress="swError=false">

            <input type="password" class="form-control mb-2 col" placeholder="Contraseña" v-model="user.password" @keypress="swError=false">

            <button class="btn btn-dark btn-block col-10 mx-auto" @click="login">Ingresar</button>

            <button class="btn  btn-block" @click="goToSign">No tengo cuenta</button>
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
// import AlertComponent from './Helpers/Alerts'
export default {
  name: 'LoginForm',
  // components: {
  //   AlertComponent
  // },
  data () {
    return {
      swError: false,
      error: '',
      codigoError: '',
      user: {
        email: '',
        password: '',
        nombre: 'Test'
      }
    }
  },
  beforeCreate () {
  },
  created () {
  },
  mounted () {
    // this.login()
    Auth.singUp(this.user)
  },
  methods: {
    login () {
      // Esta variable es de uso local de nuestro metodo.
      /* let user = {
        email:
      } */
      // console.log('User local' + this.user.email)
      // console.log('User from data:' + this.user.email)
      // console.log(this.user.password)
      Auth.login(this.user).catch(error => {
        this.swError = true
        this.error = error.message
        this.codigoError = error.code
        // switch (codigoError) {
        //   case 'auth/user-not-found':
        //   case 'auth/wrong-password':
        //     console.log('Correo o contraseña incorrectos')
        //     document.getElementById('usE').class += 'alert-danger'
        //     break
        //   default:
        //     console.log(mensage)
        // }
      })
      setTimeout(() => {
        // this.$router.push({ name: 'about' })
      }, 500)
    },
    goToSign () {
      this.$router.push({ name: 'sgnup' })
    }
  }
}
</script>

<!--
<script lang="js">
export default {
    name: 'LoginForm'
    }
    data() {
        return{
            user:{
                email:'',
                password:''
            }
        }
    }
    mounted() {

    }
    methods:{
        login() {
            setTimeout(() => {
                this.$router.push({name: 'about'})
            }, 1000)
        }
    }
</script>
**/-->
<style lang="scss">
.btn-darkblue{
    background-color: #001133;
    border: 5px solid #0099cc;
    &:hover{
        background-color: #0099cc;
    }
}
</style>
