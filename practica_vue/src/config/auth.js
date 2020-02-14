import fireApp from './_firebase.js'
export default {
    signUp (data) {
        if(data.nombre === '' || data.email === '' || data.password === ''){
            return alert('Todos los campos son obligatorios.')
        }
        fireApp.auth().createUserWithEmailAndPassword(data.email,data.password).then
        ((result) => {
            let newUser = {
                displayName: data.nombre,
                email: data.email,
                password: data.password
            }
            //result.user.displayName = data.nombre
            fireApp.auth().updateCurrentUser(user: newUser).catch(err => console.log(err))
        }).catch((err) => {
            console.table(err)
        })
        console.log(data)
    }
}