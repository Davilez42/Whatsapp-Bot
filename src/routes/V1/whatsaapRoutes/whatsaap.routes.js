import { Router } from "express"
import controllers from '../../../controllers/V1/index.js'
const whatsapp_routes = Router()

whatsapp_routes
    .post('/webhook_msn', controllers.whatsapp_msn_webhook)
    .get('/webhook_msn', controllers.whatsapp_verify_token)

export default whatsapp_routes