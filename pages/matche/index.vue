<script lang="ts">
export default {
  layout: "default",
  head: {
    title: "Match Play",
  },
};
</script>

<script async setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const apiUrl = "http://league-api.test/api";

const matcheItem = ref([]) as any;

const teamId = route.query.teamId;

const matcheId = ref(null);

const { data }: { data: any } = await useFetch(
  `${apiUrl}/teams/${teamId}/next-matche`
);

matcheItem.value = data.value ? data.value.data : null;

matcheId.value = matcheItem.value ? matcheItem.value.id : null;

async function play() {
  const data = await fetch(`${apiUrl}/matches/${matcheId.value}/play`);
  const json = await data.json();

  matcheItem.value = json.data;
}

async function next() {
  const data = await fetch(`${apiUrl}/teams/${teamId}/next-matche`);
  const json = await data.json();

  matcheItem.value = json ? json.data : null;
  // if (json) {
  //   matcheItem.value.home_team = json.data.home_team;
  //   matcheItem.value.away_team = json.data.away_team;
  //   matcheItem.value.home_team = json.data.home_team_result;
  //   matcheItem.value.away_team_result = json.data.away_team_result;
  // }
}
</script>

<template>
  <div class="container mt-3">
    <h1 class="mb-4">Matche</h1>

    <div v-if="!matcheItem">No match found</div>

    <div class="row" v-if="matcheItem">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h4 class="title mb-2">{{ matcheItem.home_team.name }}</h4>
            <h5 class="score">Skor: {{ matcheItem.home_team_result }}</h5>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h4 class="title mb-2">{{ matcheItem.away_team.name }}</h4>
            <h5 class="score">Skor: {{ matcheItem.away_team_result }}</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="play d-flex justify-content-center mt-4" v-if="matcheItem">
      <button
        type="button"
        class="btn btn-success btn-lg"
        @click="play"
        v-if="!matcheItem.is_over"
      >
        Play the Match
      </button>

      <NuxtLink
        to="/table"
        v-if="matcheItem.is_over"
        class="btn btn-info btn-lg"
        >Go Back</NuxtLink
      >
    </div>
  </div>
</template>
