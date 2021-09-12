const express = require('express')
const db      = require('../database/knex')

const msgRoute = express.Router()

msgRoute.route('/').get(async(req,res)=>{
        await db.select(['id, msg'])
                .table('welcome')
                .then(msg  => res.status(200).json(msg))
                .catch(err => res.status(500).json(err))
})

module.exports = msgRoute  