<template>
  <div class="about logout">
    <h1>This is an about page</h1>
    <section>
        <button
            class="btn btn-success mb-2"
            @click="crearPartida"
          >
          Nueva Partida
        </button>
        <button
          class="btn btn-success mb-2"
          @click="obtenerPartida"
        >
          Nueva Partida
        </button>
        <div class="col col-sm-6 arena">
            <Arena @opcion="getOpcion" :displayName="this" :user-option="partida.usuario_1"></Arena>
        </div>
        <div class="col col-sm-6 arena">

        </div>
        <button  class="btn btn"></button>
    </section>
  </div>
</template>

<script lang="js">
import Arena from '@/components/Game/Arena'
import fireApp from '../config/_firebase.js'
const partida = fireApp.firestore().collection('juego1')
var usuarioE
export default {
  name: 'partida',
  components: {
    Arena
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$bind('partida', partida.doc(to.params.no_partida))
    })
  },
  data () {
    return {
      partida: {},
      partidas: []
    }
  },
  firestore: {
    partidas: fireApp.firestore().collection('juego1')
  },
  watch: {
    '$route.params': {
      deep: true,
      immediate: true,
      handler (value) {
        this.$bind('partida', partida.doc(value.no_partida))
      }
    }
  },
  mounted:(

  )
  methods: {
    crearPartida () {
      let user = Auth.getUser()
      let uid = user.uid
      fireApp.firestore().collection('juego1').add({
        participantes: [uid]
        names: [user.displaynames]
        'Usuario_2': '',
        'Usuario_2': '',
        'ganador': ''
      })
      usuarioE = 'Usuario_1'
    },
    obtenerPartida (partida) {
      fireApp.firestore().collection('juego1').doc(partida).then(
        (result) => {
          console.log(result)
          fireApp.firestore().collection('juego1').doc('partida-2').get()
        })
      usuarioE = 'Usuario_2'
    },
    getOpcion (opcion) {
      let parti = []
      parti = this.participantes
      parti.idexOf(this.user.uid)
      if(parti.idexOf(this.user.uid))
      fireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update({
        [usuarioE]: opcion
      })
    }
  }
}
</script>

<style lang="scss">
.arena{
    text-size-adjust: 72px;
}
// bpx
</style>
