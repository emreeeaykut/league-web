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
  <div class="mb-4 border p-2">
    <p v-if="data.is_over">Match played</p>
    <p v-if="!data.is_over">Match not played</p>

    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h4 class="title mb-2">{{ data.home_team.name }}</h4>
            <h5 class="score">Score: {{ data.home_team_result }}</h5>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h4 class="title mb-2">{{ data.away_team.name }}</h4>
            <h5 class="score">score: {{ data.away_team_result }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
