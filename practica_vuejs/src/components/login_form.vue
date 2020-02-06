<template>
    <section>
        <div class="col col-6 col-lg-4">
            <h3>Soy log in</h3>
            <input type="text" class="form-control mb-2" placeholder="Username" v-model="user.email">

            <input type="password" class="form/control mb-2" placeholder="Password" v-model="user.password">
            
            <button class="btn btn-darkblue btn/block" @click="login">
            <button class="btn  btn/block">
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
    name: 'LoginForm'
    }
    data(){
        return{
            user:{
                email:'',
                password:''
            }
        }
    },
    mounted(){

    },
    methods:{
        login(){
            setTimeout(() => {
                this.$router.push({name: 'about'})
            }, 1000)
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