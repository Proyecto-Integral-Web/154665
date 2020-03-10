<template>
  <div class="about logout">
    <h1>This is an about page</h1>
    <section>
        <div class="col col-sm-6 arena"></div>
        <div class="col col-sm-6 arena"></div>

        <div class=" row col col-sm-6">
            <div class="col col-sm-4">✊ piedra</div>
            <div class="col col-sm-4">✋ papel</div>
            <div class="col col-sm-4">✌ tijera</div>
        </div>
    </section>
  </div>
</template>

<script lang="js">
import userArena from '@/components/Juego/UserArena'
export default {
    name: 'partida'
    components: {
        UserArena
    }
    data () {
        options: {
            p: '✊',
            pp: '✋',
            t: '✌',
        }
    }
}
</script>

<style lang="scss">
.arena{
    text-size-adjust: 72px;
}
</style>