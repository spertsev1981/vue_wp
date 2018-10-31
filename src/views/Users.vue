<template>
  <div
    class="container"
    style="max-width: 100% !important;">
    <div class="card">
      <h4 class="card-header">Пользователи (Пользователей в базе: {{ totalItems }}): </h4>
      <div class="card-body">
        <select
          v-model="numberOfElements"
          class="custom-select d-block col-md-1">
          <option
            v-for="option in numberOfElementsList"
            :value="option"
            :key="option">
            {{ option }}
          </option>
        </select>
        Выбрано элементов на страницу: {{ numberOfElements }}
        <user-list
          :columns="columns"
          :list="list"
          @edit-user="editUser"
          @remove-user="removeUser"/>
        <pagginator
          :numbers-of-element="numberOfElements"
          :total-items="totalItems" 
          @select-page = "selectPage"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersPage',
  components: {
    'user-list': () => import('@/components/UserList'),
    pagginator: () => import('@/components/Pagginator')
  },
  data: function() {
    return {
      columns: [
        'firstName',
        'lastName',
        'company',
        'registered',
        'phone',
        'email',
        'balance',
        'isActive'
      ],
      list: [],
      numberOfElementsList: [5, 10, 20],
      numberOfElements: 10,
      totalItems: 0,
      skipCount: 0
    }
  },
  watch: {
    numberOfElements() {
      this.loadData()
    },
    skipCount() {
      this.loadData()
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      axios
        .get('http://localhost:3005/users?&_sort=id&_order=desc')
        .then(response => {
          this.totalItems = response.data.length
          let endElement = this.skipCount + this.numberOfElements
          this.list = response.data.slice(this.skipCount, endElement)
        })
        .catch(error => console.error(error))
    },
    editUser(id) {
      this.$router.push('/edit-user/' + id)
    },
    removeUser(id) {
      axios
        .delete('http://localhost:3005/users/' + id)
        .then(() => this.loadData())
        .catch(error => console.error(error))
    },
    selectPage(newPage) {
      this.skipCount = newPage * this.numberOfElements - this.numberOfElements
    }
  }
}
</script>

<style scoped>
</style>
