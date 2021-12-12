<script lang="ts">
export default {
  layout: "default",
  head: {
    title: "Matche",
  },
};
</script>

<script async setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const apiUrl = "http://league-api.test/api";

const matcheItem = ref([]) as any;

const { data }: { data: any } = await useFetch(
  `${apiUrl}/matches/${route.params.id}`
);

matcheItem.value = data.value.data;
</script>

<template>
  <div class="container mt-3">
    <h1 class="mb-4">Matche</h1>

    <Matche :data="matcheItem"></Matche>
  </div>
</template>
