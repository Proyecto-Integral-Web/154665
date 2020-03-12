<template>
  <div class="about logout">
    <h1></h1>
    <section>
        <div class="col col-sm-6 arena row">
          <h1>{{options[userOpcion]}}</h1>
        </div>
        <div class=" row col col-sm-6">
          <div class="col-6 mx-auto opciones">
            <div class="row">
              <div class="col col-sm-4 opcion p-3" v-for="(option,key) in options" :key="key" @click="select(key)">
              {{option}}</div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script lang="js">
export default {
  name: 'Arena',
  props: ['userOpcion'],
  data () {
    return {
      options: {
        p: '✊ Piedra',
        pp: '✋ Papel',
        t: '✌ Tijeras'
      }
    }
  },
  methods: {
    select (key) {
      this.$emit('opcion', key)
    }
  }
}
</script>

<style lang="scss">
.arena{
    text-size-adjust: 72px;
    background-color: grey;
}
.opciones {
  background: grey;
  .opcion {
    cursor: pointer;
    &:hover {
      background: darkgray;
    }
  }
}
</style>
