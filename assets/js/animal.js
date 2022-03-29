class Animal {
    constructor(patas=2,peso=0,tamanho=0,cores=[],classe=''){
        this.#patas = patas;
        this.#peso = peso;
        this.#tamanho = tamanho;
        this.#cores = cores;
        this.#classe = classe;
    }
    #patas;
    #peso;
    #tamanho;
    #cores;
    #classe;

    get peso(){
        return this.#peso;
    }
    get tamanho(){
        return this.#tamanho;
    }
    get patas(){
        return this.#patas;
    }
    get cores(){
        return this.#cores;
    }
    get classe(){
        return this.#classe;
    }

    andar(){
        return "Deu um passo";
    }
    pular(){
        return "pulou";
    }

    sobre(){
        return `É um animal da classe ${this.#classe} tendo ${this.#patas} patas, com peso de ${this.#peso.toFixed(2)}Kg, de tamanho ${this.#tamanho.toFixed(2)}m, nas cores ${this.#cores}`;
    }

}


export {Animal};