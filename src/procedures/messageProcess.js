import sendMessageWhatsapp from "../services/whatsaap.Service.js";
import userProcedures from "./what_userProcedures.js";
import gpt_completion from "../services/openai.service.js";
import userModel from "../database/models/user.cheme.js";

const messageProcess = async (message, user) => {
    //Flujo de proceso de mensaje
    const { from, id_number, data, type, id } = message;

    const strategiesResponses = userProcedures(user, from)

    if (!data) {
        return await sendMessageWhatsapp(strategiesResponses.userResponseText('El tipo de mensaje aun no es valido'), id_number)
    }

    if (!user) {
        await userModel.create({ phone_number: from })
        return await sendMessageWhatsapp(strategiesResponses.userWelcome(), id_number)
    }

    if (!user.is_register) {
        return await sendMessageWhatsapp(strategiesResponses.userRegister(message), id_number)
    }
    //COMMANDS
    if (data.text[0] === '/') {
        return await sendMessageWhatsapp(await strategiesResponses.userCommand(data.text.slice(1)), id_number)
    }

    const response = await gpt_completion(data.text)
    await sendMessageWhatsapp(strategiesResponses.userResponseText(response), id_number)

    user.messages.push({ role: 'user', id, message: data.text, type_: type });
    user.messages.push({ role: 'system', id, message: response, type_: type })
    await user.save()

}

export default messageProcess