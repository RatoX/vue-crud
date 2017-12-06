<template>
  <section class="news-list">
    <ul
      :class="listClasses"
     >
      <li
        class="news-list__item"
        v-for="( item, index ) in items"
        :key="index"
        @click="editItem(item)"
      >
        {{ item.label }}
      </li>
    </ul>
    <section
      :class="editSectionClasses"
    >
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

    isEditing() {
      return this.$route.name === 'NewsEdit';
    },

    editSectionClasses() {
      return {
        'news-list__edit-section': true,
        'news-list__edit-section_edit-mode': this.isEditing,
      };
    },

    listClasses() {
      return {
        'news-list__list': true,
        'news-list__list_edit-mode': this.isEditing,
      };
    },
  },
};
</script>

<style scoped lang="scss">

.news-list {
  display: flex;
  justify-content: center;
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
  flex: 1 0 100%;
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
}

.news-list__edit-section,
.news-list__list {
  transition: flex-basis .8s ease-in-out;
}

.news-list__list_edit-mode {
  flex: 0 1 20%;
}

.news-list__edit-section_edit-mode {
  flex: 1 0 80%;
}

.news-list__item + .news-list__item {
  border-top: 1px solid #1C182C;
}

</style>
