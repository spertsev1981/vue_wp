<template>
  <div class="container">
    <div class="card">
      <h4 class="card-header">Редактировать пользователя:</h4>
      <div 
        v-if="!userData" 
        class="card-body">
        Загрузка
      </div>
      <div 
        v-else 
        class="card-body">
        <user-form
          :user-data="userData"
          @save-user="saveUser"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateUserPage',
  components: { 'user-form': () => import('@/components/UserForm') },
  data: () => ({
    userData: null
  }),
  computed: {
    id() {
      return this.$router.history.current.params.id
    },
    url() {
      return 'http://localhost:3005/users/' + this.id
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      axios
        .get(this.url)
        .then(response => {
          this.userData = response.data
          console.log('Result', 'Success')
        })
        .catch(function(error) {
          console.log('Result', 'Failure')
          console.error(error)
        })
    },
    saveUser(user) {
      axios
        .patch(this.url, user)
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
