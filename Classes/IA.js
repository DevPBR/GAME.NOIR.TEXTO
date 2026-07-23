export class IA
{
    static async perguntar(prompt)
    {
        const resposta = await fetch(
            "http://localhost:11434/api/generate",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "qwen2.5:1.5b",
                    prompt,
                    stream: false
                })
            }
        );

        const dados = await resposta.json();

        return dados.response;
    }
}