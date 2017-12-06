<template>
  <section class="news-list">
    <ul class="news-list__list">
      <li
        class="news-list__item"
        v-for="( item, index ) in items"
        :key="index"
        @click="editItem(item)"
      >
        {{ item.label }}
      </li>
    </ul>
    <section class="news-list__edit-section">
      <transition>
        <router-view>
        </router-view>
      </transition>
    </section>
  </section>
</template>

<script>
export default {
  name: 'NewsList',

  methods: {
    editItem(item) {
      this.$router.push(`/news/${item.id}`);
    },
  },

  computed: {
    items() {
      return this.$store.getters.news;
    },
  },
};
</script>

<style scoped lang="scss">

.news-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  min-width: 320px;
  padding: 20px;
  width: 100vw;
  height: 100vh;
}

.news-list__list {
  width: 100%;
  max-width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.news-list__item {
  cursor: pointer;
  transition: background-color .2s ease-in-out;
  background-color: #C5B9F6;
  padding: 20px 0;
}

.news-list__item:hover {
  background-color: #A896F1;
}

.news-list__edit-section {
  margin-left: 20px;
  flex: 1 0 80%;
}

.news-list__item + .news-list__item {
  border-top: 1px solid #1C182C;
}

</style>
