module.exports = {
    PORT: process.env.PORT || 9000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DB_URL || 'postgresql://postgres:postgres@localhost/postgres',
    API_KEY: process.env.API_KEY
  }