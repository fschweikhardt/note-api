const knex = require('knex')
const app = require('./app')
const { PORT, DB_URL } = require('./config')

const db = knex({
  client: 'pg', 
  connection: DB_URL
})

//db.select('*').from('notes_table').then(d=> console.log(d))

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})