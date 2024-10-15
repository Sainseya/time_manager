FROM elixir:latest

# Installer Hex + Rebar
RUN mix local.hex --force && \
    mix local.rebar --force

# Installer postgresql-client
RUN apt-get update && apt-get install -y postgresql-client

# Installer les dépendances
WORKDIR /app
COPY . /app
RUN mix deps.get

# Compiler le projet
RUN mix compile

# Exposer le port
EXPOSE 4000

# Copier le script d'entrée
COPY entrypoint.sh /entrypoint.sh

# Définir le script d'entrée
ENTRYPOINT ["/entrypoint.sh"]
