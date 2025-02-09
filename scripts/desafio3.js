/* 
Desafios 

Desafio aula 3:

    1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

    2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

    3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

    4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

*/

import { verificarSeExisteValor, contador } from "./functions.js";

// 1 e 2

alert(contador(1, 10));
alert(contador(10, 0))

// 3 e 4

function definirContagem(sentidoDaContagem) {
    let texto = sentidoDaContagem > 0 ? "progressiva" : "regressiva";

    let contagem = prompt(`Digite um valor para a contagem ${texto}`);

    if (verificarSeExisteValor(contagem)) {
        if (sentidoDaContagem > 0) {
            alert(contador(0, Number(contagem)));
        }
        else {
            alert(contador(Number(contagem), 0));
        }

    }
}

definirContagem(-1);
definirContagem(1);