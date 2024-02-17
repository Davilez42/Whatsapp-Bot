import request from "postman-request"
const sendMessageWhatsapp = async (template, id_bot) => {
    return new Promise((resolve, reject) => {
        request(
            {
                method: 'POST',
                url: `https://graph.facebook.com/v17.0/${id_bot}/messages`,
                auth: {
                    'bearer': process.env.TOKEN_API_WHATSAPP
                },
                body: template,
                json: true
            },

            (err, httpResponse, body) => {
                if (err) {
                    reject(err)
                }
                resolve(body)
            })
    })

}

export default sendMessageWhatsapp