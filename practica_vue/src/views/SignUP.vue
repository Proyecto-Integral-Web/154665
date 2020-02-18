<template>
  <div class="SignUP container">
    <div class="card p-3">
      <h1>Crear cuenta</h1>
      <SupForm></SupForm>
    </div>
  </div>
</template>

<script lang="js">
import SupForm from '@/components/sign_form'
export default {
  name: 'SignUP',
  components: {
    SupForm
  }
}
</script>

<style lang="scss">
</style>
