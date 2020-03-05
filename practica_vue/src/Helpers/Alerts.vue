<template>
    <section v-if="error">
        <div clsass = "alert alert-danger" :class="code=='auth/invalid-email'?'alert-warning:'alert-danger">
            {{message}}
    </section>
</template>
<script lang="js">
export default {
  name: 'AlertComponent',
  props: ['error','code','mesagge']
  data () {
      return {
          tipo: 'alert-success'
      }
  },
  mounted () {
      switch (this.code) {
          case 'auth/user-not/found':
            this.tipo = 'alert-danger'
            break
          case 'auth/user-not/found':
            this.tipo = 'alert-danger'
            break
      }
  }
}
</script>
