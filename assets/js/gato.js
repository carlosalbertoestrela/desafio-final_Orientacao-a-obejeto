import { Animal } from "./animal.js";

class Gato extends Animal{
    constructor(patas=2,peso=0,tamanho=0,cores=[],classe='',vidas=0){
        super(patas,peso,tamanho,cores,classe);
        this.#vidas = vidas;
        this.#animal = "Gato";
    }
    #vidas;
    #animal;
    miar(){
        return "MIAAAAAAAU MIAAAAAU MIAAAAA P##A!!...";
    }
    ronronar(){
        return "gruunn...Gruun... gruuun....";
    }
    sobre(){
        return `O ${this.#animal} é um ser superior da classe ${this.classe}, tendo ${this.patas} patas, com peso de ${this.peso.toFixed(2)}Kg, de tamanho ${this.tamanho.toFixed(2)}m, nas cores ${this.cores} e normalmente tem ${this.#vidas} vidas. `;
    }
}

export {Gato}