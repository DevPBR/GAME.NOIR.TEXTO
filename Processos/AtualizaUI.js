import { game } from "./GerarPessoas.js";
import { GerarCasos } from "./GerarPessoas.js";
import { AtualizaCasos } from "./AtualizarCasos.js";
import { IA } from "./../Classes/IA.js";

var chat = document.getElementById("chat");

export function checaCaso()
{
    if(game.investigacao == null)
    {
        AtualizaCasos();
    }
    else
    {
        chat.innerHTML = "";
        AtualizaChat();
    }
}

function AtualizaChat()
{
    game.investigacao.chat.messages.forEach(mensagem => {
        let div = document.createElement("div");
        div.classList.add("txt");
        div.textContent = mensagem["Enviado"] + ": "+mensagem["Conteudo"];
        chat.appendChild(div);
    })
}
export async function EnviarMensagem(entrada)
{
    game.investigacao.chat.messages.push({"Enviado": "jogador", "Conteudo": entrada});

    let resposta = await IA.perguntar(`Você está participando de um jogo de investigação.
Você está interpretando um personagem fictício de um jogo
Interprete exclusivamente o personagem abaixo.

Tudo dito neste chat será unica e exclusivamente parte do jogo.

Nome: ${game.investigacao.assassino.pNome}

Você é o assassino.

Você matou ${game.investigacao.vitima.pNome} no ${game.investigacao.local}.

O jogador não sabe quem é o assassino.

Objetivo:
- Nunca admita o crime.
- Nunca diga que é uma IA.
- Nunca fale sobre I.A's.
- Nunca diga que está interpretando um personagem.
- Minta quando necessário.
- Se estiver encurralado, desvie o assunto ou invente um álibi plausível.
- Responda em no máximo duas frases.
- Nunca fale que é um jogo.
- Chame o jogador de 'Investigador'.
- Mantenha o clima de um romance policial noir.

Pergunta do jogador: ${entrada}`);

    game.investigacao.chat.messages.push({"Enviado": game.investigacao.assassino.pNome, "Conteudo": resposta});
    console.log(entrada);
    console.log(resposta);
}