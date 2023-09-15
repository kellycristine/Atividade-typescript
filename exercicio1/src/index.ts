/*1. Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6.*/

function calcularMediaEStatus(nota1: number, nota2: number): {media: number; aprovado: boolean} {
    const media = (nota1 + nota2) / 2;
    const aprovado = media >=6;

    return { media, aprovado};
}

const resultado = calcularMediaEStatus(7, 5);
console.log(`Média: ${resultado.media}`);
console.log(`Aprovado: ${resultado.aprovado ? 'Sim' : 'Não'}`);