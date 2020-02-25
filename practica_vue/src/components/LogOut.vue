npm --version<template>
    <section>
        <div class="col-6 mx-auto">
            <h6>Ingrese sus datos</h6>
            <button class="btn btn-dark btn-block col-6 mx-auto" @click="out">Cerrar seción</button>
        </div>
    </section>
</template>

<script lang="js">
// import Auth from '@/config/auth.js'
import Auth from '@/config/auth.js'
export default {
  name: 'logOut',
  mounted () {
    // Auth.signUp(this.user)
  },
  methods: {
    out () {
      return Auth.logOut()
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
