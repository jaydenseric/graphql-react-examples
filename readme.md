![graphql-react logo](./public/graphql-react-logo.svg)

# graphql-react examples

A [Deno](https://deno.land) [Ruck](https://ruck.tech) web app demonstrating
[`graphql-react`](https://github.com/jaydenseric/graphql-react) functionality
using various [GraphQL](https://graphql.org) APIs.

## Requirements

- [Deno CLI](https://deno.land/#installation) v2+.

## Installation

For a local development installation, create a project `scripts/.env.sh` file
containing the following environment variables, with values customized for your
local environment:

```sh
# Development or production mode; "true" or "false".
export RUCK_DEV="true"

# The localhost port to serve the Ruck app on.
export RUCK_PORT="3000"

# GitHub access token used with the GitHub GraphQL API.
export ACCESS_TOKEN_GITHUB=""
```

## Scripts

### Dev

To load the environment variables from `scripts/.env.sh`, make the public
environment variable modules, and serve the [Ruck](https://ruck.tech) app:

```sh
./scripts/dev.sh
```

### Make public environment variable modules

> [!IMPORTANT]
>
> Requires environment variables.

To make the public environment variable modules:

```sh
./scripts/makeEnvModules.sh
```

### Serve

> [!IMPORTANT]
>
> Requires environment variables.

To serve the [Ruck](https://ruck.tech) app for either development or production:

```sh
./scripts/serve.sh
```

### Format

To format the project:

```sh
deno fmt
```

### Lint

To lint the project:

```sh
deno lint
```

### Type check

> [!IMPORTANT]
>
> Beforehand, run the
> [make public environment variable modules](#make-public-environment-variable-modules)
> script.

To type check every JavaScript module in the project:

```sh
./scripts/type-check.sh
```
