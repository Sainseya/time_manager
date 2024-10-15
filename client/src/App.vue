<template>
  <div id="app" class="flex h-screen">
    <nav class="fixed top-0 left-0 bottom-0 flex flex-col h-full py-6 px-4 bg-gray-700 overflow-auto">
      <!-- Logo en haut -->
      <div id="logo" class="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-gray-800">
        <img src="@/assets/logo.png" alt="logo" class="w-12 h-12 rounded-xl" />
      </div>

      <!-- Menu centré -->
      <div id="menu" class="flex flex-col flex-grow items-center justify-center mt-8">
        <div @click="setActiveComponent(['User'])" class="flex items-center justify-center w-12 h-12 rounded-xl text-gray-400 hover:text-blue-500 hover:bg-gray-800 cursor-pointer">
          <House />
        </div>
        <div @click="setActiveComponent(['WorkingTimes', 'WorkingTime'])" class="flex items-center justify-center w-12 h-12 rounded-xl text-gray-400 hover:text-blue-500 hover:bg-gray-800 cursor-pointer">
          <Calendar />
        </div>
        <div @click="setActiveComponent(['ClockManager'])" class="flex items-center justify-center w-12 h-12 rounded-xl text-gray-400 hover:text-blue-500 hover:bg-gray-800 cursor-pointer">
          <Clock />
        </div>
        <div @click="setActiveComponent(['ChartManager', 'TableChart'])" class="flex items-center justify-center w-12 h-12 rounded-xl text-gray-400 hover:text-blue-500 hover:bg-gray-800 cursor-pointer">
          <ChartColumn />
        </div>
      </div>

      <!-- Profil en bas -->
      <div @click="setActiveComponent(['User'])" id="profile" class="flex items-center justify-center mt-auto w-12 h-12 rounded-xl text-gray-400 hover:text-blue-500 hover:bg-gray-800 cursor-pointer">
        <CircleUserRound />
      </div>
    </nav>

    <main class="w-full h-full ml-16 p-4">
      <!-- Affichage dynamique du composant actif avec key pour forcer la mise à jour -->
      <div v-for="(component, index) in activeComponent" :key="index">
        <component :is="component" />
      </div>
      <component :is="activeComponent" :key="activeComponent.name" />
    </main>
  </div>
</template>

<script>
import { markRaw } from 'vue'; // Importation de markRaw
import User from './components/User.vue';
import WorkingTime from './components/WorkingTime.vue';
import WorkingTimes from './components/WorkingTimes.vue';
import ChartManager from './components/ChartManager.vue';
import TableChart from './components/TableChart.vue';
import ClockManager from './components/ClockManager.vue';
import { House, Calendar, Clock, ChartColumn, CircleUserRound } from 'lucide-vue-next';

export default {
  name: 'App',
  components: {
    // Utilisation de markRaw pour éviter que ces composants soient rendus réactifs
    User: markRaw(User),
    WorkingTime: markRaw(WorkingTime),
    WorkingTimes: markRaw(WorkingTimes),
    ChartManager: markRaw(ChartManager),
    TableChart: markRaw(TableChart),
    ClockManager: markRaw(ClockManager),
    House,
    Calendar,
    Clock,
    ChartColumn,
    CircleUserRound
  },
  data() {
    return {
      activeComponent: [markRaw(User)], // Activer un composant non réactif au démarrage
      userId: 1
    };
  },
  methods: {
    setActiveComponent(component) {
      if (component) {
        // Composant marqué comme raw pour éviter la réactivité
        this.activeComponent = component.map(comp => markRaw(comp));
      } else {
        console.error("Composant non trouvé ou invalide.");
      }
    }
  }
}
</script>
