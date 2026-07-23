import { game } from "./GerarPessoas.js";
import { ComecarInvestigacao } from "./Investigacao.js";

export function AtualizaCasos()
{
    let chat = document.getElementById("chat");
    chat.innerHTML = ""

    game.casos.forEach(caso => { 
        let div = document.createElement("div");
        div.textContent = "> "+caso.vitima.pNome;
        div.classList.add("txt");
        div.cid = caso.id;

        chat.appendChild(div);

        div.onclick = function () {
            ComecarInvestigacao(div.cid);
        }
    })
}