
let resultado = document.getElementById('divResultado')
console.log(resultado);

// let nome = prompt("Digite seu nome: ")
// resultado.innerHTML = "Olá, " + nome

let cont = 0
while(cont<10){
    // console.log(cont);
    resultado.innerHTML += cont + " patinho foi passear...<br>"
    cont++
}

// while(cont>0){
//     resultado.innerHTML += cont + " patinhos voltaram de lá<br>"
//     cont--
// }

let numero = 10
let quadrado = numero ** 2