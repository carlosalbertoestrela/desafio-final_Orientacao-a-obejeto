import { Animal } from "./animal.js";

class Papagaio extends Animal{
    constructor(patas=2,peso=0,tamanho=0,cores=[],classe='',auturaDeVoo=0){
        super(patas,peso,tamanho,cores,classe);
        this.#auturaDeVoo = auturaDeVoo;
        this.#animal = "Papagaio";
    }
    #auturaDeVoo;
    #animal;

    voar(){
        return "Voando...";
    }
    falar(frase=''){
        return `Graaa!... ${(frase)? frase:'não entendi'}... Graaa!`;
    }
    sobre(){
        return `O ${this.#animal} é um animal da classe ${this.classe}, tendo ${this.patas} patas, com peso de ${this.peso.toFixed(2)}Kg, de tamanho ${this.tamanho.toFixed(2)}m, nas cores ${this.cores} e pode voar a uma autitude de ${this.#auturaDeVoo}pés. `;
    }
}

export {Papagaio}