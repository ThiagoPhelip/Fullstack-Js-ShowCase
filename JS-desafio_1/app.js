// Desafios

// Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
// function clickconsole() { 
//     console.log('O botão foi clicado');
// }
// Não esquecer de mudar no arquivo index.html apos o onclick o nome da funcionalidade com (), Ex: <button onclick="clickconsole()" class="button">Console</button>

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
// function clickalert() {     console.log('Eu amo JS'); }

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
// function clickprompt() {
//     let cidade = prompt('Qual a sua cidade?');
//     alert('Estive em '+ cidade +' e lembrei de você');
// }

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
// function clicksoma() {
//     let num1 = parseInt(prompt('Digite o primeiro número'));
//     let num2 = parseInt(prompt('Digite o segundo número'));
//     alert('O resultado da soma é :'+ (num1 + num2));
// }

// // Criar uma função que exibe "Olá, mundo!" no console.
// function olamundo() {
//     console.log('Olá, mundo!');
// }
// olamundo();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function nome() {
//     let nome = prompt('Qual o seu nome?');
//     console.log('Olá, '+ nome);
// } 
// nome();

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function dobro() {
//     let num = parseInt(prompt('Digite um número'));
//     alert('O dobro do número é : '+ (num * 2));
// }
// dobro();

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function media() {
//     let num1 = parseInt(prompt('Digite o primeiro número'));
//     let num2 = parseInt(prompt('Digite o segundo número'));
//     let num3 = parseInt(prompt('Digite o terceiro número'));
//     alert('A média é: '+ ((num1 + num2 + num3) / 3));
// } 
// media();

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function maior() {
//     let num1 = parseInt(prompt('Digite o primeiro número'));
//     let num2 = parseInt(prompt('Digite o segundo número'));
//     if (num1 > num2) {
//         alert('O maior número é: '+ num1);
//     } else {
//         alert('O maior número é: '+ num2);
//     }
// } 
// maior();

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
// function numero (){
//     let numero = parseInt(prompt("Digite o numero a ser multiplicado por si:"));
//     alert('O numero ' +numero+ ' multiplicado por si é: ' +(numero * numero) );
//   }
//   numero()


// Crie uma lista vazia, com o nome listaGenerica.
// let listaGenerica = [];

// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
//let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
//linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
//let listaGenerica = [];
// let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
// console.log(linguagensDeProgramacao[0]);

// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

//let listaGenerica = [];
// let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
// console.log(linguagensDeProgramacao[linguagensDeProgramacao.length - 1]);


// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.



let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio !!';


function clickconsole() { 
    console.log('O botão foi clicado');
}

function clickalert() {
    console.log('Eu amo JS');
}

function clickprompt() {
    let cidade = prompt('Qual a sua cidade?');
    alert('Estive em '+ cidade +' e lembrei de você');
}

function clicksoma() {
    let num1 = parseInt(prompt('Digite o primeiro número'));
    let num2 = parseInt(prompt('Digite o segundo número'));
    alert('O resultado da soma é :'+ (num1 + num2));
}

function olamundo() {
    console.log('Olá, mundo!');
}
olamundo();

function nome() {
    let nome = prompt('Qual o seu nome?');
    console.log('Olá, '+ nome);
} 
nome();

function dobro() {
    let num = parseInt(prompt('Digite um número'));
    alert('O dobro do número é: '+ (num * 2));
}
dobro();

function media() {
    let num1 = parseInt(prompt('Digite o primeiro número'));
    let num2 = parseInt(prompt('Digite o segundo número'));
    let num3 = parseInt(prompt('Digite o terceiro número'));
    alert('A média é: '+ ((num1 + num2 + num3) / 3));
} 
media();

function maior() {
    let num1 = parseInt(prompt('Digite o primeiro número'));
    let num2 = parseInt(prompt('Digite o segundo número'));
    if (num1 > num2) {
        alert('O maior número é: '+ num1);
    } else {
        alert('O maior número é: '+ num2);
    }
} 
maior();

function numero (){
    let numero = parseInt(prompt("Digite o numero a ser multiplicado por si:"));
    alert('O numero ' +numero+ ' multiplicado por si é: ' +(numero * numero) );
  }
  numero();


let listaGenerica = [];

let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

console.log(linguagensDeProgramacao[0]);


console.log(linguagensDeProgramacao[1]);


console.log(linguagensDeProgramacao[linguagensDeProgramacao.length - 1]);

