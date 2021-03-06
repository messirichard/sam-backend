require('dotenv').config()

module.exports = {
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "entities": ["dist/entity/**/*.js"],
    "subscribers": [
        "src/subscriber/*.js"
    ],
    "entitySchemas": [
        "schema/*.json"
    ],
    "migrations": [
        "src/migration/*.js"
    ],
    "cli": {
        "entitiesDir": "entity",
        "migrationsDir": "migration",
        "subscribersDir": "subscriber"
    },
    "logging": true,
    "synchronize": false
}