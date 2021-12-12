<script lang="ts">
export default {
  layout: "default",
  head: {
    title: "Table",
  },
};
</script>

<script async setup lang="ts">
import { ref } from "vue";

// const apiUrl = process.env.apiURL;
const apiUrl = "http://league-api.test/api";

const pointsList = ref([]) as any;

const { data }: { data: any } = await useFetch(`${apiUrl}/points`);

pointsList.value = data.value.data;
</script>

<template>
  <div class="container mt-3">
    <h1 class="mb-4">Table</h1>

    <div class="table-area table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Position</th>
            <th>Club</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Points</th>
            <th>Next</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(points, index) in pointsList" :key="points.id">
            <PointsItem :data="points" :index="index"></PointsItem>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
