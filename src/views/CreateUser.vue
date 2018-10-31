<template>
  <div class="container">
    <div class="card">
      <h4 class="card-header">Создать пользователя:</h4>
      <div class="card-body">
        <user-form @save-user="saveUser"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'CreateUserPage',
  components: { 'user-form': () => import('@/components/UserForm') },
  methods: {
    saveUser(user) {
      if (user.registered === undefined) {
        user.registered = moment(new Date()).format('DD.MM.YYYY')
      }
      axios
        .post('http://localhost:3005/users', user)
        .then(() => this.$router.push({ name: 'user-list' }))
        .catch(error => console.error(error))
    }
  }
}
</script>

<style scoped>
</style>
