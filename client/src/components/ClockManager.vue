<template>
    <div>
        <h1>Clock Manager</h1>
        <p v-if="clockIn">Clocked in at: {{ startDateTime }}</p>
        <p v-else>Not clocked in</p>
        <button @click="clock">{{ clockIn ? 'Clock Out' : 'Clock In' }}</button>
    </div>
</template>

<script>
export default {
    name: 'ClockManager',
    data() {
        return {
            startDateTime: null,
            clockIn: false,
        };
    },
    methods: {
        refresh() {
            this.clockIn = !this.clockIn;
            if (this.clockIn) {
                this.startDateTime = new Date().toLocaleString();
            } else {
                this.startDateTime = null;
            }
        },
        clock() {
            this.refresh();
        },
    },
};
</script>

<style scoped>
/* Conteneur principal */
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f4f4f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Titre */
h1 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

/* Texte de statut (clocked in/out) */
p {
  font-size: 16px;
  color: #444;
  margin-bottom: 15px;
  padding: 10px 20px;
  background-color: #e9ecef;
  border-radius: 5px;
}

/* Bouton Clock In/Out */
button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
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

/* Effet pour état "Clocked In" */
p[data-clocked="true"] {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

/* Effet pour état "Not Clocked In" */
p[data-clocked="false"] {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>
