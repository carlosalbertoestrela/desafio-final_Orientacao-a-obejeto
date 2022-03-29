import { Animal } from "./animal.js";

class Cachorro extends Animal{
    constructor(patas=2,peso=0,tamanho=0,cores=[],classe='',fidelidade=99){
        super(patas,peso,tamanho,cores,classe);
        this.#fidelidade = fidelidade;
        this.#animal = "Cachorro";
    }
    #fidelidade;
    #animal;
    latir(){
        return "HUUUUF... HUUUUF.. HUUUF...";
    }
    uivar(){
        return "AUUUUUUUUUUUUU!!!!!!!";
    }
    sobre(){
        return `O ${this.#animal} um animal da classe ${this.classe}, tendo ${this.patas} patas, com peso de ${this.peso.toFixed(2)}Kg, de tamanho ${this.tamanho.toFixed(2)}m, nas cores ${this.cores} e com um nível de fidelidade ao dono de ${this.#fidelidade}%. `;
    }
}

export {Cachorro}