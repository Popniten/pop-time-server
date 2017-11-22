const env = {
  PORT: process.env.PORT || 8000,
}

const db = {
  HOST: process.env.DB_HOST || 'mongo:27017'
}

module.exports = {
  env,
  db
}
