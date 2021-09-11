import express       from 'express'
import cors          from 'cors'
import messageRouter from './routes/message'

const port = 3003
const app  = express()

app.use(cors({origin:'*'}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/hello-heroku',messageRouter)

app.listen(port,()=>console.log(`online into port:${port}`))


