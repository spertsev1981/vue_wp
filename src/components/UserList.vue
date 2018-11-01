<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th
          v-for="key in columns"
          :key="key"> {{ key|fUpper }}
        </th>
        <th/>
      </tr>
      <tr/>
    </thead>
    <tbody>
      <tr
        v-for="(user) in list"
        :key="user.id">
        <td>{{ user.id }}</td>
        <td
          v-for="key in columns"
          :key="key"> {{ user[key] }}
        </td>
        <td>
          <button
            type="button"
            class="btn btn-secondary"
            style="margin-right: 0.2em"
            @click="edit(user.id)">Редактировать
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="remove(user.id)">X
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UserList',
  filters: {
    fUpper: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    remove(id) {
      this.$emit('remove-user', id)
    },
    edit(id) {
      this.$emit('edit-user', id)
    }
  }
}
</script>
