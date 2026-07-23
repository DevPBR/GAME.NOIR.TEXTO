import { Chat } from "./chat.js";
export class Caso
{
    constructor(id, vitima, assassino, local)
    {
        this.id = id;
        this.vitima = vitima;
        this.assassino = assassino;
        this.local = local;
        this.chat = new Chat();
    }
}