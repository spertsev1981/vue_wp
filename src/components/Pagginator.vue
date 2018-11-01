<template>
  <div>
    <div>Страница {{ page }}</div>
    <div>
      <button
        :disabled="page===1"
        class="btn btn-secondary"
        @click="prevPage">
        &lt;
      </button>
      <button
        v-for="ind in pageCount"
        :disabled="page===ind"
        :key="ind"
        class="btn btn-secondary"
        style="margin:1px;"
        @click="selectPage(ind)">
        {{ ind }}
      </button>
      <button
        :disabled="page>=pageCount"
        class="btn btn-secondary"
        @click="nextPage">
        &gt;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagginator',
  props: {
    numbersOfElement: {
      type: Number,
      default: 10
    },
    totalItems: {
      type: Number,
      default: 100
    }
  },
  data: () => ({
    userData: null,
    page: 1
  }),
  computed: {
    pageCount() {
      return Math.ceil(this.totalItems / this.numbersOfElement)
    }
  },
  watch: {
    numbersOfElement() {
      this.page = 1
    },
    page(val) {
      this.$emit('select-page', val)
    }
  },
  methods: {
    nextPage() {
      this.page++
    },
    selectPage(newPage) {
      this.page = newPage
    },
    prevPage() {
      this.page--
    }
  }
}
</script>

<style scoped>
</style>
