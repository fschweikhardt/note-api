module.exports = {
    PORT: process.env.PORT || 9000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DB_URL, //|| 'postgresql://postgres:postgres@localhost/postgres',
    API_TOKEN: process.env.API_TOKEN //|| "123456789"
  }