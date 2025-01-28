#! /bin/sh
# Loads the environment variables, makes the public environment variable
# modules, and serves the Ruck app.

# Load the environment variables.
. scripts/.env.sh &&

# Make the public environment variable modules.
./scripts/makeEnvModules.sh &&

# Serve the Ruck app.
./scripts/serve.sh
