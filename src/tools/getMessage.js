const getMessageOfData = (entry) => {
    //console.log(entry[0].changes[0]);

    const data = entry[0]?.changes[0]?.value
    //console.log(data)
    let default_data = {
        id_account_business: entry[0]?.id,
        id_number: entry[0].changes[0].value.metadata.phone_number_id,
    }
    const { messages, statuses } = data
    //console.log(messages, statuses)
    if (statuses) {
        return { ...default_data, statuses: statuses[0] }
    }

    default_data = { ...default_data, from: messages[0].from, id: messages[0].id, type: messages[0].type }

    if (messages[0].type === 'text') {
        default_data.data = {
            text: messages[0].text.body
        }
    }

    if (messages[0].type === 'interactive') {
        default_data.data = {
            text: messages[0].interactive.button_reply
        }
    }


    return default_data

}

export default getMessageOfData