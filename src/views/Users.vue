<template>
  <div
    class="container"
    style="max-width: 100% !important;">
    <div class="card">
      <h4 class="card-header">Пользователи (Всего пользователей: {{ totalItems }}): </h4>
      <div class="card-body">
        <div class="row">
          <select
            v-model="numberOfElements"
            class="custom-select col-md-1 mb-2">
            <option
              v-for="option in numberOfElementsList"
              :value="option"
              :key="option">
              {{ option }}
            </option>
          </select>
          <div class="col-md-2  mb-2"><input
            v-model.trim="searchTerm"
            placeholder="Поиск"
            class="form-control"></div>
        </div>
        Выбрано элементов на страницу: {{ numberOfElements }}
        <user-list
          :columns="columns"
          :list="list"
          @edit-user="editUser"
          @remove-user="removeUser"/>
        <pagginator
          :numbers-of-element="numberOfElements"
          :total-items="totalItems"
          @select-page="selectPage"/>
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
      page: 1,
      searchTerm: ''
    }
  },
  watch: {
    numberOfElements() {
      this.page = 1
      this.loadData()
    },
    page() {
      this.loadData()
    },
    searchTerm() {
      this.loadData()
      this.refreshTotalItems()
    }
  },
  mounted() {
    this.loadData()
    this.refreshTotalItems()
  },
  methods: {
    loadData() {
      axios
        .get(
          'http://localhost:3005/users?&_sort=id&_order=desc&_page=' +
            this.page +
            '&_limit=' +
            this.numberOfElements +
            (this.searchTerm && this.searchTerm.length > 2 ? '&q=' + this.searchTerm : '')
        )
        .then(response => {
          this.list = response.data
        })
        .catch(error => console.error(error))
    },
    refreshTotalItems() {
      axios
        .get(
          'http://localhost:3005/users' +
            (this.searchTerm && this.searchTerm.length > 2 ? '?q=' + this.searchTerm : '')
        )
        .then(response => {
          this.totalItems = response.data.length
        })
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
      this.page = newPage
    }
  }
}
</script>

<style scoped>
</style>
