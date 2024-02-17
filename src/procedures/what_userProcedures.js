
import messageTemplate from "../messageModels/messagesModels.js"

const userProcedures = (user, number) => ({
    userRegister: (message) => {
        const stepsTemplateRegister = [
            messageTemplate(number).text('Digita tu nombre:'),
            messageTemplate(number).text(`Digita tu email :`),
        ]

        if (message.type === 'interactive' && message.data.text.id === '001') {
            return messageTemplate(number).text('Gracias Por Confirmar!\nPara continuar con el proceso de registro por favor ingrese la palabra  "*registrar*"')
        }
        if (message.type === 'text' && message.data.text === 'registrar') {
            user.index_register = 0
            user.save()
            return stepsTemplateRegister[user.index_register]
        }

        if (message.type === 'text' && Number.isInteger(user.index_register)) {
            const index_object = [{ first_name: message.data.text }, { email: message.data.text }]
            const attribute = Object.keys(index_object[user.index_register])[0]
            user[attribute] = index_object[user.index_register][attribute]
            user.index_register += 1
            if (user.index_register === index_object.length) {
                user.index_register = null;
                user.is_register = true
                user.save()
                return messageTemplate(number).text(`Muchas gracias por registrarte ${user.first_name}\nAhora puedes continuar usando el bot 🤖`)
            }
            user.save()
            return stepsTemplateRegister[user.index_register]
        }
        return messageTemplate(number).interactiveButtons()
    },
    userWelcome: () => messageTemplate(number).text(),
    userFirstInteractive: () => messageTemplate(number).text('En que te puedo ayudar el dia de hoy ?'),
    userResponseText: (text) => messageTemplate(number).text(text),
    userCommand: async (command) => {
        if (command === 'deleteaccount') {
            await user.deleteOne()
            return messageTemplate(number).text(`*${user.first_name}* Tu cuenta ha sido eliminada ❗`)
        }
        if (command === 'editaccount') {
            user.index_register = 0
            user.is_register = false
            await user.save()
            return messageTemplate(number).text(`Digita tu nombre:`)
        }
        return messageTemplate(number).text(`Command not found!`)
    }
})



export default userProcedures