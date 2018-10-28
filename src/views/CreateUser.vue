<template>
  <div>
    <h3>Создать пользователя:</h3>
    <hr>
    <div class="row">
      <div class="col-md-4 mb-3"><label> First Name:</label> <input
        v-model.trim="firsName"
        class="form-control"></div>
      <div class="col-md-4 mb-3"><label>Last Name:</label> <input
        v-model.trim="lastName"
        class="form-control"></div>
      <div class="col-md-4  mb-3">
        <label for="email">Email</label>
        <input 
          v-model.trim="email" 
          type="email" 
          class="form-control" 
          placeholder="you@example.com">
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-3"><label>Company:</label> <input
        v-model.trim="company"
        class="form-control"></div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-2 mb-3"><label>Balance:</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input 
            id="username" 
            type="text" 
            class="form-control" 
            placeholder="10,000" 
            required>
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-1 mb-3"><label>Age:</label> <input
        v-model.number="age"
        placeholder="25"
        class="form-control"
      ></div>
    </div>
    <div class="row">
      <div class="col-md-2 mb-3"><label>Phone:</label> <input
        v-model.trim="phone"
        placeholder="+7 (833) 123-4567"
        class="form-control"
      ></div>
    </div>
    <div class="mb-3"><label>Address:</label> <input
      v-model.trim="address"
      class="form-control"
      placeholder="699 Turner Place, Dunbar, Kentucky, 2677"
    ></div>
    <div style="">
      <hr>
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
  name: 'CreateUserPage'
}
</script>

<style scoped>
</style>
