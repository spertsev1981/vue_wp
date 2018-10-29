<template>
  <div class="container">
    <h3>Создать пользователя:</h3>
    <hr>
    <user-form @save-user="saveUser"/>
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm'

export default {
  name: 'CreateUserPage',
  components: { 'user-form': UserForm },
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
