import { checaCaso, EnviarMensagem } from "./Processos/AtualizaUI.js";
import { game, GerarCasos, GerarPessoas } from "./Processos/GerarPessoas.js";


GerarPessoas(30);
GerarCasos(5);
setInterval(checaCaso, 1000);
console.log(game);

let entry = document.getElementById("entry");

entry.addEventListener("change", (event) => {
    EnviarMensagem(entry.value);
})
