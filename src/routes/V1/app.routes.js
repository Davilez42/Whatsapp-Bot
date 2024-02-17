import { Router } from "express";
import whatsapp_routes from "./whatsaapRoutes/whatsaap.routes.js";




//ROUTES
const api_routes = Router()
const whatsapp_bot_app = Router()


api_routes.use('/whatsapp', whatsapp_routes)


whatsapp_bot_app.use('/api/v1/', api_routes)
export default whatsapp_bot_app