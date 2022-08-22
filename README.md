# Boomi Restaurant


## Getting Started

First, install dependencies:
```terminal
npm install
```

Next, start development (local) server:
```terminal
npm run dev
```

Or, start production serve:
```terminal
npm run start
```

## Create Database

To generate initial data and tables for selected database:
> Visit: {serverURL}/api/DBSync

It generates new dataset for your app

## ENV

You can change database connection settings is `.env.local` file.

Sqlite database:
```env
DB=sqlite
DB_PATH=./data/db.sqlite
DB_URL=sqlite:$DB_PATH
```

Or, PostgreSQL database:
```env
DB=postgres
DB_HOST=
DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=
DB_URL=postgres://$DB_USER:$DB_PASS@$DB_HOST:$DB_PORT/$DB_NAME
```

**Restart server everytime you change `.env` file.**