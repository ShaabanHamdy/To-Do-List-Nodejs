import express from 'express'
import ConnectionDB from './DB/ConnectionDB.js'
import { config } from 'dotenv'
import cors from 'cors'
import noteRouter from './src/modules/note/note.route.js'
import userRouter from './src/modules/user/user.route.js'
import {globalErrorHandling} from './src/utils/errorHandling.js'
const app = express()
app.use(express.json({}))
app.use(cors())
config({path:"./config/secret.env"})

//==============================
const port = process.env.PORT || 5000
ConnectionDB()

app.use("/note", noteRouter)
app.use("/user", userRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.all('*', (req, res) => res.send('Routing Fail Not Found Page 404'))

app.use(globalErrorHandling)
//=========================================================================
app.listen(port, () => console.log(`Example app listening on port ${port}!`))