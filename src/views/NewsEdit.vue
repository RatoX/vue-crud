<template>
  <section class="news-edit">
    <form>
      <label for="name">Edit me</label>
      <input type="text" v-model="label">
      <button @click="cancel">Cancel</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'NewsEdit',

  props: ['id'],

  methods: {
    cancel() {
      this.$router.push('/news/');
    },
  },

  computed: {
    label() {
      const id = parseInt(this.id, 10);
      const news = this.$store.getters.newsById(id);
      return news ? news.label : '';
    },
  },
};
</script>

<style scoped lang="scss">

</style>
