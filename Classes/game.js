import { Caso } from "./casos.js";
export class Game
{
    constructor()
    {
        this.pessoas = [];
        this.casos = [];
        this.investigacao = null;
    }
    AddCaso(id, vitima, assassino, local)
    {
        let existe = this.casos.find(r => r.id === id);
        if(existe)
        {
            console.log("id já existe: "+ id);
        }
        else
        {
            this.casos.push(new Caso(id, vitima, assassino, local));
        }
    }
}