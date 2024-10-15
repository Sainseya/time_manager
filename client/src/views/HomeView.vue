<!-- time_manager/assets/time_manager/src/views/HomeView.vue -->
<script setup lang="ts">
import User from '../components/User.vue';
import WorkingTime from '../components/WorkingTime.vue';
import WorkingTimes from '../components/WorkingTimes.vue';
import ClockManager from '../components/ClockManager.vue';
import ChartManager from '../components/ChartManager.vue';
</script>

<template>
  <main>
    <User />
    <WorkingTime />
    <WorkingTimes />
    <ClockManager />
    <ChartManager />
  </main>
</template> 