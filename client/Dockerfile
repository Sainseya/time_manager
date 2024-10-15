FROM node:latest

# Installer les dépendances
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers
COPY . .

# Exposer le port
EXPOSE 3000

# Commande par défaut
CMD ["npm", "run", "dev"]
