import getMessageOfData from '../.../../../../tools/getMessage.js'
import userModel from '../../../database/models/user.cheme.js'
import messageProcess from '../../../procedures/messageProcess.js'

const whatsapp_msn_webhook = async (req, resp) => {
    const { entry } = req.body

    try {

        const message = getMessageOfData(entry)

        if (message?.statuses) return resp.sendStatus(200);


        const user_found = await userModel.findOne({ phone_number: message.from })


        await messageProcess(message, user_found)//logic

        return resp.sendStatus(200)
    } catch (error) {
        console.log(error);
        return resp.sendStatus(200)
    }
}




export default whatsapp_msn_webhook