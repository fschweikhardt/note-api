module.exports = {
    PORT: process.env.PORT || 9000,
    NODE_ENV: process.env.NODE_ENV || 'production',
    DATABASE_URL: process.env.DATABASE_URL, //|| 'postgresql://postgres:postgres@localhost/postgres',
    API_KEY: process.env.API_KEY
  }