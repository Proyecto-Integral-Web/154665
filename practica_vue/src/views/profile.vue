<template>
  <div class="about logout">
    <h1>Revise su perfil</h1>
    <formProfile></formProfile>
    <logOut></logOut>
  </div>
</template>

<script lang="js">
import formProfile from '@/components/form_profile'
import logOut from '@/components/LogOut'
export default {
  name: 'logout',
  components: {
    logOut,
    formProfile
  }
}
</script>
