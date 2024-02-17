import express from 'express'
const app = express()
import cors from 'cors'
import whatsapp_bot_app from './routes/V1/app.routes.js'
import fileUpload from 'express-fileupload'


app.use(cors({
    origin: ['*']
}))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, resp) => resp.send('Api Whatsapp Bot'))
app.use(fileUpload({
    tempFileDir: true,
    tempFileDir: '/tmp/'
}))
app.use(whatsapp_bot_app)
export default app