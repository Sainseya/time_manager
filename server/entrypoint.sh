#!/bin/sh

# Attendre que PostgreSQL soit prêt
while ! pg_isready -h db -p 5432 -U postgres; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done

echo "PostgreSQL is ready!"

# Exécuter les migrations
if mix ecto.migrate; then
  echo "Migrations executed successfully!"
else
  echo "Migrations failed!"
  exit 1
fi

# Démarrer le serveur Phoenix
exec mix phx.server
