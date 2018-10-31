<template>
  <div>
    <div class="row">
      <div class="col-md-4 mb-3"><label> First Name:</label> <input
        v-model.trim="user.firstName"
        class="form-control"></div>
      <div class="col-md-4 mb-3"><label>Last Name:</label> <input
        v-model.trim="user.lastName"
        class="form-control"></div>
      <div class="col-md-2  mb-3">
        <label>Access Level:</label>
        <select
          v-model="user.accessLevel"
          class="custom-select d-block w-100">
          <option
            v-for="option in accessLevelList"
            :value="option.value"
            :key="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
    <div class="row col-md-2  checkbox">
      <label>
        Is Active: <input
          v-model="user.isActive"
          type="checkbox"></label>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-4 mb-3"><label>Company:</label> <input
        v-model.trim="user.company"
        class="form-control"></div>
      <div class="col-md-2 mb-3"><label>Balance:</label>
        <div class="input-group">
          <input
            v-model="user.balance"
            type="text"
            class="form-control"
            placeholder="$10,000">
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-4  mb-3">
        <label>Email</label>
        <input
          v-model.trim="user.email"
          type="email"
          class="form-control"
          placeholder="you@example.com">
      </div>
      <div class="col-md-2 mb-3"><label>Phone:</label> <input
        v-model.trim="user.phone"
        placeholder="+7 (833) 123-4567"
        class="form-control"
      ></div>
    </div>
    <div class="row">
      <div class="col-md-1 mb-3"><label>Age:</label> <input
        v-model.number="user.age"
        placeholder="25"
        class="form-control"
      ></div>
    </div>
    <div class="mb-3"><label>Address:</label> <input
      v-model.trim="user.address"
      class="form-control"
      placeholder="699 Turner Place, Dunbar, Kentucky, 2677"
    ></div>
    <div class="mb-3"><label>About:</label>
      <textarea
        v-model="user.about"
        placeholder="Введите несколько строк"
        class="form-control"/>
    </div>
    <hr>
    <div style="margin-bottom: 0.5em;">
      <button
        class="btn btn-secondary btn-block"
        type="button"
        @click="save">Сохранить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    userData: {
      type: Object,
      default: null
    }
  },
  data: function() {
    return {
      user: {},
      accessLevelList: [
        { text: 'Guest', value: 'guest' },
        { text: 'User', value: 'user' },
        { text: 'Admin', value: 'admin' }
      ]
    }
  },
  mounted() {
    if (this.userData !== null) {
      this.user = this.userData
    }
  },
  methods: {
    save() {
      this.$emit('save-user', this.user)
    }
  }
}
</script>

<style scoped>
</style>
