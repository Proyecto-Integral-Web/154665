npm --version<template>
    <section>
        <div class="col col-6 col-lg-4">
            <h3>Soy log in</h3>
            <input type="text" class="form-control mb-2" placeholder="Username" v-model="user.email">

            <input type="text" class="form/control mb-2" placeholder="Password" v-model="user.password">

            <button class="btn btn-darkblue btn/block" @click="login">Sign in</button>
            <button class="btn  btn/block"></button>
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

export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  beforeCreate () {
    console.log(`Estoy en beforecreated ${this.user}`)
  },
  created () {
    console.log(`Estoy en created ${this.user}`)
  },
  mounted () {
    console.log(`Estoy en mounted ${this.user}`)
    console.log(`Estoy en ${this.$route.name}`)
    // this.login()
    // Auth.singUp(this.user)
  },
  methods: {
    login () {
      // Esta variable es de uso local de nuestro metodo.
      let user = {
        email: 'esto es local'
      }
      console.log('soy el login')
      console.log('User local' + user.email)
      console.log('User from data:' + this.user.email)
      console.log(this.user.password)
      setTimeout(() => {
        // Luego de iniciar sesión nos envia a la pagina about
        this.$router.push({ name: 'about' })
      }, 1000)
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
