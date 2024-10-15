<template>
  <div>
    <h1>User Management</h1>
    <div>
      <h2>Get All Users</h2>
      <form @submit.prevent="getAllUsers">
        <button type="submit">Get All Users</button>
      </form>
    </div>
    <div>
      <h2>Get User</h2>
      <form @submit.prevent="getUser">
        <input v-model="getUserId" placeholder="User ID" required />
        <button type="submit">Get</button>
      </form>
      <div v-if="user">
        <h3>User Details</h3>
        <p>Name: {{ user.username }}</p>
        <p>Email: {{ user.email }}</p>
      </div>
    </div>
    <div>
      <h2>Create User</h2>
      <form @submit.prevent="createUser">
        <input v-model="newUser.username" placeholder="Username" required />
        <input v-model="newUser.email" placeholder="Email" required />
        <button type="submit">Create</button>
      </form>
    </div>
    <div>
      <h2>Update User</h2>
      <form @submit.prevent="updateUser">
        <input v-model="updateUserId" placeholder="User ID" required />
        <input v-model="updatedUser.email" placeholder="New Email" required />
        <button type="submit">Update</button>
      </form>
    </div>
    <div>
      <h2>Delete User</h2>
      <form @submit.prevent="deleteUser">
        <input v-model="deleteUserId" placeholder="User ID" required />
        <button type="submit">Delete</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserVue',
  data() {
    return {
      newUser: {
        name: '',
        email: ''
      },
      updateUserId: '',
      updatedUser: {
        email: ''
      },
      getUserId: '',
      deleteUserId: '',
      user: null
    }
  },
  methods: {
    async createUser() {
      try {
        const response = await fetch('http://localhost:4000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user: this.newUser })
        })
        const data = await response.json()
        console.log('User created:', data)
      } catch (error) {
        console.error('Error creating user:', error)
      }
    },
    async updateUser() {
      try {
        const response = await fetch(`http://localhost:4000/api/users/${this.updateUserId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user: this.updatedUser })
        })
        const data = await response.json()
        console.log('User updated:', data)
      } catch (error) {
        console.error('Error updating user:', error)
      }
    },
    async getUser() {
      try {
        const response = await fetch(`http://localhost:4000/api/users/${this.getUserId}`)
        const data = await response.json()
        console.log('Get user:', data)
        this.user = data.data
      } catch (error) {
        console.error('Error getting user:', error)
      }
    },
    async getAllUsers() {
      try {
        const response = await fetch(`http://localhost:4000/api/users`)
        const data = await response.json()
        console.log('Get user:', data)
      } catch (error) {
        console.error('Error getting user:', error)
      }
    },
    async deleteUser() {
      try {
        const response = await fetch(`http://localhost:4000/api/users/${this.deleteUserId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        console.log('User deleted:', data)
      } catch (error) {
        console.error('Error deleting user:', error)
      }
    }
  }
}
</script>

<style scoped>
/* Conteneur principal */
div {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Titre principal */
h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

/* Sous-titres */
h2 {
  font-size: 24px;
  color: #444;
  margin-bottom: 15px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
}

/* Formulaire */
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

/* Champs de saisie */
input {
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #007bff;
}

/* Bouton */
button {
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.1s ease;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

button:active {
  transform: scale(0.98);
}

/* Détails utilisateur */
h3 {
  font-size: 20px;
  color: #333;
  margin-top: 15px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #555;
}

/* Messages d'erreur ou succès (facultatif) */
.success-message {
  color: #28a745;
  font-size: 16px;
}

.error-message {
  color: #dc3545;
  font-size: 16px;
}
</style>
