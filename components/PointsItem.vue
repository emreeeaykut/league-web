<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    default: null,
    required: false,
  },
  index: {
    type: Number,
    default: null,
    required: false,
  },
});
</script>

<template>
  <td>{{ index + 1 }}</td>
  <td>
    <NuxtLink :to="'/team/' + data.team.id">{{ data.team.name }}</NuxtLink>
  </td>
  <td>{{ data.played }}</td>
  <td>{{ data.won }}</td>
  <td>{{ data.drawn }}</td>
  <td>{{ data.lost }}</td>
  <td>{{ data.gf }}</td>
  <td>{{ data.ga }}</td>
  <td>{{ data.gd }}</td>
  <td>{{ data.points }}</td>
  <td><NuxtLink :to="'/matche?teamId=' + data.team.id">Next</NuxtLink></td>
</template>
