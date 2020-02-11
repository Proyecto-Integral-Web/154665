<template>
  <div class="login container">
    <div class="card p-3">
      <h1>Bienvenido</h1>
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
</style>
