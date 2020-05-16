<template>
  <div class="SignUP_container">
    <div class="card p-3 drkbcg">
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
.SignUP_container{
    background-color: grey;
}
</style>
