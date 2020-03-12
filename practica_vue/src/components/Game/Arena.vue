<template>
  <div class="about logout">
    <h1>This is an about page</h1>
    <section>
        <div class="col col-sm-6 arena"></div>
        <div class="col col-sm-6 arena"></div>

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
  props:
  data () {
    return {
      options: {
        p: '✊',
        pp: '✋',
        t: '✌'
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
</style>