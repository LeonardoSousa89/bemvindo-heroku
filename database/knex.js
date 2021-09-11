//const dev   = process.env.NODE_ENV     || 'development'
//const prod  = process.env.DATABASE_URL || 'production'

const db    = require('../knexfile')//[prod]
const knex  = require('knex')(db) 

module.exports = knex  