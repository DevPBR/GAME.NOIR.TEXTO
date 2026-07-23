import { game } from "./GerarPessoas.js";
import { Chat } from "../Classes/chat.js";

export function ComecarInvestigacao(id)
{
    let caso = game.casos.find(r => r.id === id);    

    game.investigacao = caso;
}