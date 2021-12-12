<script lang="ts">
export default {
  layout: "default",
  head: {
    title: "Team",
  },
};
</script>

<script async setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const apiUrl = "http://league-api.test/api";

const teamItem = ref([]) as any;

const { data }: { data: any } = await useFetch(
  `${apiUrl}/teams/${route.params.id}`
);

teamItem.value = data.value.data;
</script>

<template>
  <div class="container mt-3 mb-5">
    <h1 class="mb-4">Team</h1>

    <div class="info">
      <div class="card mb-5">
        <div class="card-body">
          <h4 class="title mb-2">{{ teamItem.name }}</h4>
          <div class="property">Offence: {{ teamItem.offence }}</div>
          <div class="property">Defence: {{ teamItem.defence }}</div>
          <div class="property">Motivation: {{ teamItem.motivation }}</div>
        </div>
      </div>
    </div>

    <div class="matches">
      <div class="row">
        <div class="col-6">
          <h3 class="mb-2">Home Matches</h3>

          <div v-for="homeMatche in teamItem.home_matches" :key="homeMatche.id">
            <Matche :data="homeMatche"></Matche>
          </div>
        </div>

        <div class="col-6">
          <h3 class="mb-2">Away Matches</h3>

          <div v-for="awayMatche in teamItem.away_matches" :key="awayMatche.id">
            <Matche :data="awayMatche"></Matche>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
