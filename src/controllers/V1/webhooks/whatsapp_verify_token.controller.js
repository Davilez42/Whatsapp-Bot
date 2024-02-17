
import jwt from 'jsonwebtoken'
const whatsapp_verify_token = async (req, resp) => {
    try {
        const token_received = req.query['hub.verify_token']
        const challenge = req.query['hub.challenge']
        if (!token_received || !challenge) {
            return resp.sendStatus(400)
        }
        jwt.verify(token_received, process.env.SECRET_KEY_JWT)
        resp.send(challenge)
    } catch (error) {
        console.log(error.message);
        resp.status(400).json({ message: "Ok" })
    }
}


export default whatsapp_verify_token