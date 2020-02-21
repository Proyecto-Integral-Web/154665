import fireApp from './_firebase'
import router from '@/router'
export default {
  login (data) {
    fireApp.auth().signInWithEmailAndPassword(data.email,data.password).then(
      (result) => {
        console.log(user.email + " ingresó")
        router.push({ name: 'about' })
      }).catch((err) => {
        console.table(err)
      })
  },
  signUp (data) {
    if (data.nombre === '' || data.email === '' || data.password === '') {
      return console.log('Todos los campos son obligatorios.')
    }
    fireApp.auth().createUserWithEmailAndPassword(data.email, data.password).then(result => {
      let newUser = {
        displayName: data.nombre,
        email: result.user.email,
        uid: result.user.id
      }
      fireApp.auth().updateCurrentUser(newUser).catch(err => console.table(err))
    }).catch((err) => {
      console.table(err)
    })
    console.log(data)
  },
  chckUser () {
    let user = fireApp.auth().currentUser
    if (user) {
      return user
    }
    return null
  },
  logOut(){
    fireApp.auth().signOut()
    router.push({ name: 'login'})
  }
}
