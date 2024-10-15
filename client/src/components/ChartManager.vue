<template>
    <div>
      <h2>Chart Manager</h2>
      <input v-model="userId" placeholder="Enter User ID" />
      <button @click="fetchData">Fetch Data</button>
      <!-- Passe "data" au lieu de "chartData" -->
      <BarChart v-if="chartData.labels.length" :data="chartData" :options="chartOptions" />
      <p v-else>No data available for this user.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { Bar } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  
  // Enregistre les composants Chart.js utilisés
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  // Variables réactives
  const userId = ref('');
  const chartData = ref({
    labels: [],
    datasets: [
      {
        label: 'Working Time (Hours)',
        backgroundColor: '#f87979',
        data: []
      }
    ]
  });
  
  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Hours Worked'
        }
      }
    }
  });
  
  // Fonction pour récupérer les données
  const fetchData = async () => {
    if (!userId.value) {
      alert('Please enter a User ID');
      return;
    }
  
    try {
      const response = await fetch(
        `http://localhost:4000/api/workingtime/${userId.value}?start=2000-01-01T00:00:00&end=3000-12-31T00:00:00`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
  
      // Formatage des données pour le graphique
      chartData.value.labels = data.data.map(item => new Date(item.start).toLocaleDateString());
      chartData.value.datasets[0].data = data.data.map(item => {
        const duration = new Date(item.end).getTime() - new Date(item.start).getTime();
        return Math.round(duration / (1000 * 60 * 60)); // Conversion en heures
      });
  
      console.log('Data fetched:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  </script>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ChartManager',
    components: {
      BarChart: Bar
    }
  });
  </script>
  
  <style scoped>
  /* Conteneur principal */
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #f4f4f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Titre */
  h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  /* Champ de saisie d'ID utilisateur */
  input {
    padding: 10px;
    font-size: 16px;
    width: 80%;
    max-width: 300px;
    border: 2px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  input:focus {
    border-color: #007bff;
  }
  
  /* Bouton Fetch Data */
  button {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 20px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  /* Style pour le graphique (assurez-vous qu'il occupe l'espace disponible) */
  canvas {
    width: 100% !important;
    height: 400px !important;
  }
  
  /* Style pour le message d'absence de données */
  p {
    font-size: 16px;
    color: #888;
    margin-top: 20px;
  }
  </style>
  
  