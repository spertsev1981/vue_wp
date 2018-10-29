<template>
  <div>
    <h3>Редактировать пользователя:</h3>
    <hr>
    <user-form 
      :user-data="userData" 
      @save-user="saveUser"/>
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm'

export default {
  name: 'CreateUserPage',
  components: { 'user-form': UserForm },
  data: function() {
    return {
      userData: null
    }
  },
  mounted() {
    console.log(this.$router)
    //this.userData = this.$router
  },
  methods: {
    saveUser(user) {
      axios
        .put('http://localhost:3005/users', user)
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
