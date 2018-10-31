<template>
  <div>
    <div>Страница {{ currentPage }}</div>
    <div>
      <button
        :disabled="currentPage===1"
        class="btn btn-secondary"
        @click="prevPage">
        &lt;
      </button>
      <button
        v-for="ind in pageCount"
        :disabled="currentPage===ind"
        :key="ind"
        class="btn btn-secondary"
        style="margin:1px;"
        @click="selectPage(ind)">
        {{ ind }}
      </button>
      <button
        :disabled="currentPage>=pageCount"
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
    currentPage: 1
  }),
  computed: {
    pageCount() {
      return Math.ceil(this.totalItems / this.numbersOfElement)
    }
  },
  watch: {
    currentPage(val) {
      this.$emit('select-page', val)
    }
  },
  methods: {
    nextPage() {
      this.currentPage++
    },
    selectPage(newPage) {
      this.currentPage = newPage
    },
    prevPage() {
      this.currentPage--
    }
  }
}
</script>

<style scoped>
</style>
