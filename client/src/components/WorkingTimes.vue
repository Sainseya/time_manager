<template>
  <div>
    <h1>Working Times for User {{ userId }}</h1>
    <form @submit.prevent="getWorkingTimes">
      <input v-model="userId" placeholder="User ID" required />
      <button type="submit">Get Working Times</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Offset Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="workingTime in workingTimes" :key="workingTime.id">
          <td>{{ workingTime.id }}</td>
          <td>{{ new Date(workingTime.start) }}</td>
          <td>{{ new Date(workingTime.end) }}</td>
          <td>{{ new Date(new Date(workingTime.end) - new Date(workingTime.start)) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userId: null,
        workingTimes: []
      };
    },
    methods: {
      async getWorkingTimes() {
        try {
          const response = await fetch(`http://localhost:4000/api/workingtime/${this.userId}?start=2000-01-01T00:00:00&end=3000-12-31T00:00:00`, {
            method: 'GET'
          });
          const data = await response.json();
          this.workingTimes = data.data;
        } catch (error) {
          console.error('Error fetching working times:', error);
        }
      }
    }
  };
</script>

<style scoped>
/* Conteneur principal */
div {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Titre principal */
h1 {
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Formulaire */
form {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  width: 200px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

button:active {
  transform: scale(0.98);
}

/* Tableau */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
  color: #555;
  font-weight: bold;
  font-size: 16px;
}

td {
  font-size: 14px;
  color: #333;
}

/* Alternance des couleurs pour les lignes */
tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Effet de survol sur les lignes */
tbody tr:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}
</style>
