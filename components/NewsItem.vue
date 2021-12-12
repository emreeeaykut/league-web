<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    default: null,
    required: false,
  },
});
</script>

<template>
  <div class="news-item">
    <div class="image">
      <img :src="data.image" :alt="data.title" class="img-fluid" />
    </div>
    <div class="title">{{ data.title }}</div>
    <small class="description">{{ data.description }}</small>
  </div>
</template>

<style lang="scss">
.news-item {
  position: relative;

  .image {
    overflow: hidden;

    img {
      border-radius: 0.2rem;
      transition: 0.5s all ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .title {
    margin-top: 0.8rem;
  }

  .description {
    display: block;
    margin-top: 0.5rem;
  }
}
</style>
