<template>
  <div class="container">
    <h3>Редактировать пользователя:</h3>
    <div v-if="!userData">
      Загрузка
    </div>
    <div v-else>
      <h3>Редактировать пользователя:</h3>
      <hr>
      <user-form
        :user-data="userData"
        @save-user="saveUser"/>
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
