<script lang="ts">
export default {
  layout: "default",
  head: {
    title: "Homepage",
  },
};
</script>

<script setup lang="ts">
const newsList = ref([
  {
    id: 1,
    title: "Hayden strikes to deny Brighton fifth place",
    description:
      "Isaac Hayden cancelled out a Leandro Trossard penalty to earn Newcastle United a point at 10-man Brighton & Hove Albion. ",
    image: "/news/1.webp",
  },
  {
    id: 2,
    title: "Norwich announce departure of Farke",
    description:
      "The club have confirmed that Farke's backroom staff members, Eddie Riemer, Chris Domogalla and Christopher John, have also left.",
    image: "/news/2.webp",
  },
  {
    id: 3,
    title: "Vydra's late strike stops Chelsea's winning run",
    description:
      "Matej Vydra struck less than 10 minutes after coming on to earn Burnley a shock 1-1 draw against Chelsea at Stamford Bridge.",
    image: "/news/3.webp",
  },
]);
</script>

<template>
  <div class="container mt-3">
    <h1 class="mb-4">Homepage</h1>

    <h3 class="mb-3">Latest News</h3>

    <div class="row">
      <div class="col-4" v-for="news in newsList" :key="news.id">
        <NewsItem :data="news"></NewsItem>
      </div>
    </div>
  </div>
</template>
