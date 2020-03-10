<template>
  <div class="about logout">
    <h1>This is an about page</h1>
    <section>
        <div class="col col-sm-6 arena">
            <user-arena @opcion="getOpcion"></user-arena>
        </div>
        <div class="col col-sm-6 arena">

        </div>
    </section>
  </div>
</template>

<script lang="js">
import Arena from '@/components/Game/Arena'
export default {
  name: 'partida',
  components: {
    Arena
  },
  methods: {
    getOpcion (opcion) {
      alert(`Estoy en partida: ${opcion}`)
    }
  }
}
</script>

<style lang="scss">
.arena{
    text-size-adjust: 72px;
}
</style>