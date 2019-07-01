<template>
  <div>
    <ul v-for="(user,index) in users" :key="index">
      <li>{{ `User: ${user.name}` }}</li>
    </ul>
  </div>
</template>

<script>
import { userService } from '@/services/UserService'

export default {
  // props: ['users'],
  
  data () {
    return {
      users : [],
    }
  },

  created () {
    userService.getUsers()
    .then(response => {
    this.users = response.data
    }).catch(e => {
    console.log(e)
    })
  }
}
</script>

<style>

</style>
