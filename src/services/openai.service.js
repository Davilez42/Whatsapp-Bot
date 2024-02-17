import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: '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',
    organization: 'org-cPC60wrmFNapVHORRzjLcNhh'
})

const gpt_completion = async (message) => {
    /*     const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "gpt-3.5-turbo",
            max_tokens: 100
        })
        console.log(completion.choices[0]); */
    return await gpt_completion_test(message)
}



const gpt_completion_test = async (message) => {
    const responses_random = [
        "Es posible que tus esfuerzos den frutos si te mantienes persistente y enfocado en tus metas a largo plazo.",
        "No te desanimes. A veces, las mayores dificultades conducen a los mayores logros. Sigue adelante con determinación.",
        "Recuerda que el éxito no es definitivo y el fracaso no es fatal. Lo que cuenta es el coraje para continuar.",
        "A veces, las respuestas no son claras de inmediato. Date tiempo para reflexionar y considerar todas las posibilidades.",
        "La vida es un viaje lleno de altibajos. Aprende de tus experiencias y continúa creciendo cada día.",
        "No importa cuán difícil parezca, siempre hay una solución. Mantén la calma y busca todas las opciones posibles.",
        "Las oportunidades a menudo se disfrazan de desafíos. Acepta los desafíos con valentía y determinación.",
        "A veces, el destino tiene otros planes para nosotros. Mantén la mente abierta y estate preparado para adaptarte.",
        "No subestimes el poder de la perseverancia. Incluso en las circunstancias más difíciles, sigue adelante con fe y esperanza."
    ];
    const r = parseInt(Math.random() * responses_random.length)
    return responses_random[r]
}

export default gpt_completion
