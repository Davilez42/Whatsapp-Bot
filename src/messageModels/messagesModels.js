const messageTemplate = (number) => {
    let response = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
    }


    return ({
        text: (message) => ({
            ...response,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": message ?? 'Bienvenido al *bot de prueba*  🖐️ ! como te va?'
            }
        }),
        interactiveButtons: (header, buttons, messages) => ({
            ...response,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "Para continuar, primero debes registrarte.. Estas de acuerdo ?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "✔️ Aceptar"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "❌ Rechazar"
                            }
                        }
                    ]
                }
            }
        })
    })


}



export default messageTemplate