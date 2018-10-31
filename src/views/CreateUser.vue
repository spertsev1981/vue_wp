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

export default {
  name: 'CreateUserPage',
  components: { 'user-form': () => import('@/components/UserForm') },
  data: function() {
    return {}
  },
  methods: {
    saveUser(user) {
      axios
        .post('http://localhost:3005/users', user)
        .then(() => {
          this.$router.push({ name: 'user-list' })
        })
        .catch(function(error) {
          console.log('Result', 'Failure')
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
</style>
