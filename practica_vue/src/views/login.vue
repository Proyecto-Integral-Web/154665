<template>
  <div class="login_container">
    <div class="card p-3">
      <h1>Bienvenido de nuevo</h1>
      <LoginForm></LoginForm>
    </div>
  </div>
</template>

<script lang="js">
import LoginForm from '@/components/login_form'
export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss">
.login_container{
    background-color: grey;
}
</style>
