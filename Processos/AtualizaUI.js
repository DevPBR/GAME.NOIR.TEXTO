import { game } from "./GerarPessoas.js";
import { GerarCasos } from "./GerarPessoas.js";
import { AtualizaCasos } from "./AtualizarCasos.js";

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