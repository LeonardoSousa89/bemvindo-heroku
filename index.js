const express       = require('express')
const cors          = require('cors')
const messageRouter = require('./routes/message')

const port = process.env.PORT || 3003
const app  = express()

app.use(cors({origin:'*'}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/hello-heroku',messageRouter)

app.get('/',(req,res)=>{
    return res.status(200).json({msg:"welcome to heroku - app!"})
})

app.listen(port,()=>console.log(`online into port:${port}`))


