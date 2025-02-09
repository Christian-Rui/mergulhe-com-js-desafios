/* 
Desafios 

Desafio aula 4:

    1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

    2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

    3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

    4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

    5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

    6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

    7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

    8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

    9. Use um loop while para imprimir os números de 1 a 10 no console.

    10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

    11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

    12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

    13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

*/

import { contador, verificarPromptNumerico, verificarSeExisteValor, verificarSinal } from "./functions.js";

// 1
console.log("Boas vindas!");

// 2 e 3
let nomeDev = "Christian";
console.log(`Olá, ${nomeDev}`);

alert(`Olá, ${nomeDev}`);

// 4
let linguagemDeProgramacao = prompt("Qual a linguagem de programação que você mais gosta?");

if(verificarSeExisteValor(linguagemDeProgramacao)){
    console.log(linguagemDeProgramacao);
}

// 5
let valor1 = 1;
let valor2 = 2;

let resultado;

function somar(valores){
    let soma = valores[0];
    for(let i = 1; i < valores.length; i++){     
        soma += valores[i];
    }
    return soma;
}

resultado = somar([valor1, valor2]);

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// 6

function subtrair(valores){
    let subtracao = valores[0];
    for(let i = 1; i < valores.length; i++){     
        subtracao -= valores[i];
    }
    return subtracao;
}

resultado = subtrair([valor1, valor2]);

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// 7
let idade = prompt("Insira a sua idade");
let textoMaioridade = "";

if(verificarPromptNumerico(idade)){
    if(idade >= 18){
        textoMaioridade = "maior";
    }
    else {
        textoMaioridade = "menor";
    }
    console.log(`Você tem ${idade} anos, e é ${textoMaioridade} de idade!`);
}

// 8
let numero = prompt("Digite um valor");

if(verificarPromptNumerico(numero)){
    console.log(verificarSinal(numero));
}

// 9
console.log(contador(1, 10));