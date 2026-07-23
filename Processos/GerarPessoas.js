import nomes from "../jsons/nomes.json" with {type: 'json'}
import sobrenomes from "../jsons/sobrenomes.json" with {type: 'json'}// importa os jsons de nomes
import locais from "../jsons/locais.json" with {type: 'json'};

import { Caso } from "../Classes/casos.js";
import { Game } from "../Classes/game.js";
import { Pessoa } from "../Classes/pessoas.js"; //importa as classes

export var game = new Game();

export function GerarPessoas(quant) //gera as pessoas
{
    for(let i = 0; i < quant; i++)
    {
        let nome = nomes[Math.floor(Math.random() * nomes.length)];
        let sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
        let idade = Math.floor(Math.random() * 60) + 18;

        let pessoa = new Pessoa(nome + " " + sobrenome, idade)
        game.pessoas.push(pessoa);
    }
}
export function GerarCasos(quant)
{
   for(let i = 0; i < quant; i++)
        {
            let vitima = game.pessoas[Math.floor(Math.random() * game.pessoas.length)];
        
            if(vitima.pTipo === "testemunha" ||  vitima.pTipo === "assassino")
            {
                vitima = game.pessoas[Math.floor(Math.random() * game.pessoas.length)];
            }
        
             vitima.pTipo = "vitima";
        
            let assassino = game.pessoas[Math.floor(Math.random() * game.pessoas.length)];
        
            if(assassino.pTipo === "testemunha" || assassino.pTipo === "vitima")
            {
                assassino = game.pessoas[Math.floor(Math.random() * game.pessoas.length)];
            }
        
            assassino.pTipo = "assassino";

            let local = locais[Math.floor(Math.random() * locais.length)];
        
            game.AddCaso(i, vitima, assassino, local);
    }
}