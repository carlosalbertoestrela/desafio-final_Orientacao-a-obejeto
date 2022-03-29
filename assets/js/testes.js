import { Papagaio } from "./papagaio.js";
import { Cachorro } from "./cachorro.js";
import { Gato } from "./gato.js";


// Papagaio
const papagaio = new Papagaio(2,.43,.30,["verde" , "azul", "vermelho"],"Ave", 300);
console.log(papagaio);
console.log(papagaio.falar('Fala que eu repito, meu chapa!'));
console.log(papagaio.falar());
console.log(papagaio.voar());
console.log(papagaio.andar());
console.log(papagaio.pular());
console.log(papagaio.sobre());

//Gato
const gato = new Gato(4,4.3,.7,["preto","branco"], "Felinos", 7);
console.log(gato);
console.log(gato.miar());
console.log(gato.andar());
console.log(gato.pular());
console.log(gato.ronronar());
console.log(gato.sobre());

// Cachorro
const cachorro = new Cachorro(4,12.4,1.3,["Laranja","branco"],"Caninos",89);
console.log(cachorro);
console.log(cachorro.latir());
console.log(cachorro.andar());
console.log(cachorro.pular());
console.log(cachorro.uivar());
console.log(cachorro.sobre());

document.getElementById("cachorro").innerHTML = `<br>${cachorro.sobre()}<br>${cachorro.latir()}<br>`;
document.getElementById("gato").innerHTML = `<br>${gato.sobre()}<br>${gato.miar()}<br>`;
document.getElementById("papagaio").innerHTML = `<br>${papagaio.sobre()}<br>${papagaio.falar("eu sei falar!!")}<br>`;