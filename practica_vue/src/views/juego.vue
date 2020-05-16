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
        <div>
          <Partidas></Partidas>
        </div>
        <div class="col col-sm-6 arena">
            <Arena @opcion="getOpcion" :displayName="this" :user-option="partida.usuario_1"></Arena>
            <button v-if="!partida.names[1]" class="btn btn-outline-primary" @click="retar">👾</button>
            <Arena
            :displayName="!partida.names[1]?'Esperando Retador':partida.names[1]"
            :userOpcion="partida.usuario_1!=''?partida.usuario_2:''"
            @opcion="partida.participantes[1] === user.uid?getOpcion:''"
          ></Arena>
        </div>
        <div class="col col-sm-6 arena">

        </div>
        <button  class="btn btn"></button>
    </section>
  </div>
</template>

<script lang="js">
import Arena from '@/components/Game/Arena'
// import Partidas from '@/components/Game/partidas'
import fireApp from '../config/_firebase.js'
import Auth from '@/config/auth'
const partida = fireApp.firestore().collection('juego1')
// var usuarioE
export default {
  name: 'partida',
  components: {
    Arena
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.user = Auth.getUser()
      vm.$bind('partida', partida.doc(to.params.no_partida))
    })
  },
  data () {
    return {
      partida: {},
      partidas: [],
      user: {}
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
        this.user = Auth.getUser()
        this.$bind('partida', partida.doc(value.no_partida))
      }
    }
  },
  mounted () {
    this.user = Auth.getUser()
  },
  methods: {
    crearPartida () {
      this.user = Auth.getUser()
      let uid = this.user.uid
      fireApp.firestore().collection('juego-1').add({
        participantes: [uid],
        names: [this.user.displayName == null ? 'Usuario 1' : this.user.displayName],
        usuario_1: '',
        usuario_2: '',
        ganador: ''
      })
      // usuarioE = 'Usuario_1'
    },
    obtenerPartida (partida) {
      fireApp.firestore().collection('juego1').doc(partida).then(
        (result) => {
          console.log(result)
          fireApp.firestore().collection('juego1').doc('partida-2').get()
        })
    },
    retar () {
      this.user = Auth.getUser()
      // eslint-disable-next-line no-unused-vars
      let uid = this.user.uid
      // *Escribe en la base de datos.
      this.partida.names.push(this.user.displayName == null ? 'Usuario' : this.user.displayName)
      this.partida.participantes.push(this.user.uid)
      fireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(this.partida)
    },
    getOpcion (opcion) {
      let participantes = this.partida.participantes
      console.log(participantes.indexOf(this.user.uid))
      let data = {}
      if (participantes.indexOf(this.user.uid) === 0) {
        data = {
          'usuario_1': opcion
        }
      } else {
        data = {
          'usuario_2': opcion
        }
      }
      fireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(data)
    }
    // getOpcion (opcion) {
    //   let parti = []
    //   parti = this.participantes
    //   parti.idexOf(this.user.uid)
    //   if(parti.idexOf(this.user.uid))
    //   fireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update({
    //     [usuarioE]: opcion
    //   })
    // }
  }
}
</script>

<style lang="scss">
.drkbcg{
  background-color: grey;
}
.arena{
    text-size-adjust: 72px;
}
// bpx
</style>
