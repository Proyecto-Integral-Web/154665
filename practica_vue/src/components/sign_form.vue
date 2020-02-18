npm --version<template>
    <section>
        <div class="col col-4 col-lg-6">
            <h3>Crear cuenta</h3>
            <input type="text" class="form-control mb-2 col-4 col-lg-6" placeholder="Username" v-model="user.nombre">

            <input type="text" class="form-control mb-2 col-4 col-lg-6" placeholder="Username" v-model="user.email">

            <input type="password" class="form/control mb-2 col-5 col-lg-4" placeholder="Password" v-model="user.password">

            <input type="password" class="form/control mb-2 col-6 col-lg-4" placeholder="Password" v-model="user.password2">
            
            <button class="btn btn-darkblue btn/block" @click="login">Registrarse</button>

            <button class="btn  btn/block" @click="goToLogin">Ya tengo cuenta</button>
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
export default{
    name: 'SUP_Form'
    }
    data () {
        return{
            user:{
                nombre:'',
                email:'',
                password:'',
                password2:'',
                emails:'',
            }
        }
    },
    mounted(){

    },
    methods:{
        login () {
            setTimeout(() => {
                this.$router.push({name: 'about'})
            }, 1000)
        },
        goToLogin () {
            this.$router.push({ name: 'login' })
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