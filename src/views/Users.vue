<template>
  <div>
    <h2>Пользователей (Всего: {{ totalItems }}): </h2>
    <user-list
      :columns="columns"
      :list="list"
      @remove-user="removeUser"/>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList'

export default {
  name: 'UsersPage',
  components: { 'user-list': UserList },
  data: function() {
    return {
      columns: ['firstName', 'lastName', 'company', 'age', 'email', 'balance'],
      list: [],
      showModal: false,
      user: null
    }
  },
  computed: {
    totalItems: function() {
      return this.list ? this.list.length : 0
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      axios
        .get('http://localhost:3005/users')
        .then(response => {
          this.list = response.data
          console.log('Result', 'Success')
        })
        .catch(function(error) {
          console.log('Result', 'Failure')
          console.error(error)
        })
    },
    removeUser(id) {
      axios
        .delete('http://localhost:3005/users/' + id)
        .then(response => {
          console.log('Result', response)
          this.loadData()
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
