<template>
  <div class="container">
    <div class="card">
      <h4 class="card-header">Создать пользователя:</h4>
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
import { format } from 'date-fns'
const emptyObj = {
  isActive: false,
  balance: '',
  picture: '',
  age: 0,
  accessLevel: '',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}
export default {
  name: 'CreateUserPage',
  components: { 'user-form': () => import('@/components/UserForm') },
  data: () => ({
    userData: null
  }),
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.userData = Object.assign({}, emptyObj)
    },
    saveUser(user) {
      user.registered = format(new Date(), 'DD.MM.YYYY')
      axios
        .post('/users', user)
        .then(() => this.$router.push({ name: 'user-list' }))
        .catch(error => console.error(error))
    }
  }
}
</script>
