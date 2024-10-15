<template>
  <div>
    <h1>Working Time Manager</h1>
    <div v-if="isCreating">
      <h2>Create Working Time</h2>
      <form @submit.prevent="createWorkingTime">
        <!-- Form fields for creating working time -->
        <input v-model="this.workingTimeData.userId" placeholder="User ID" required />
        <input type="datetime-local" v-model="this.workingTimeData.start" placeholder="Start Time" required />
        <input type="datetime-local" v-model="this.workingTimeData.end" placeholder="End Time" required />
        <button type="submit">Create</button>
      </form>
    </div>
    <div v-else>
      <h2>Modify/Delete Working Time</h2>
      <form @submit.prevent="updateWorkingTime">
        <!-- Form fields for updating working time -->
        <input type="datetime-local" v-model="updateWorkingTimeData.start" placeholder="Start Time" required />
        <input type="datetime-local" v-model="updateWorkingTimeData.end" placeholder="End Time" required />
        <button type="submit">Update</button>
      </form>
      <button @click="deleteWorkingTime">Delete</button>
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue';

export default {
  props: {
    workingTimeData: {
      type: Object,
      required: false,
    },
  },
  data() {
    console.log('WorkingTime Data:', this.workingTimeData.start, this.workingTimeData.end);
    return {
      workingTimeData: markRaw(this.workingTimeData),
      updateWorkingTimeData: {
        start: '',
        end: ''
      },
      isCreating: true,
    };
  },
  methods: {
    async createWorkingTime() {
      console.log('Creating WorkingTime:', this.workingTimeData);
      try {
        const response = await fetch(`http://localhost:4000/api/workingtime/${this.workingTimeData.userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ working_time : {
            start: this.workingTimeData.start,
            end: this.workingTimeData.end
          }}),
        });
        const data = await response.json();
        this.workingTimeData = data.data
        this.updateWorkingTimeData = {
          start: data.data.start,
          end: data.data.end
        };
        this.isCreating = false;
        console.log('WorkingTime created:', data);
      } catch (error) {
        console.error('Error creating WorkingTime:', error);
      }
    },
    async updateWorkingTime() {
      // Logic for updating working time
      try {
        const response = await fetch(`http://localhost:4000/api/workingtime/${this.workingTimeData.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ working_times : this.updateWorkingTimeData }),
        });
        const data = await response.json();
        this.workingTimeData = {
            start: this.updateWorkingTimeData.start,
            end: this.updateWorkingTimeData.end
          };
        console.log('WorkingTime updated:', data);
      } catch (error) {
        console.error('Error updateing WorkingTime:', error);
      }
    },
    async deleteWorkingTime() {
      try {
        const response = await fetch(`http://localhost:4000/api/workingtime/${this.workingTimeData.id}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        this.workingTimeData = {};
        this.updateWorkingTimeData = {
          start: '',
          end: ''
        };
        this.isCreating = false
        console.log('WorkingTime deleted:', data);
      } catch (error) {
        console.error('Error deleting WorkingTime:', error);
      }
    },
  },
};
</script>

<style scoped>
  /* Conteneur général */
  div {
    max-width: 600px;
    margin: 30px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    font-size: 26px;
    color: #333;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 20px;
    color: #555;
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  input {
    width: 90%;
    max-width: 400px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.1s ease;
  }

  button:hover {
    background-color: #2c7a6b;
    transform: scale(1.05);
  }

  button:active {
    background-color: #1e4d46;
    transform: scale(0.98);
  }

  button:focus {
    outline: none;
  }

  /* Style du bouton supprimer */
  button:last-of-type {
    background-color: #ff6666;
  }

  button:last-of-type:hover {
    background-color: #cc0000;
  }

  button:last-of-type:active {
    background-color: #990000;
  }
</style>
