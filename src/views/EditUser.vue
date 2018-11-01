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
import axios from '@/axios.js'
export default {
  name: 'EditUserPage',
  components: { 'user-form': () => import('@/components/UserForm') },
  data: () => ({
    userData: null
  }),
  computed: {
    id() {
      return Number(this.$route.params.id)
    },
    url() {
      return '/users/' + this.id
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      axios
        .get(this.url)
        .then(response => (this.userData = response.data))
        .catch(error => console.log(error))
    },
    saveUser(user) {
      axios
        .patch(this.url, user)
        .then(() => this.$router.push({ name: 'user-list' }))
        .catch(error => console.log(error))
    }
  }
}
</script>
