/*2. Crie uma função que receba uma lista de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:
Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado*/

interface NotaPeso {
    nota: number;
    peso: number;
}

function calcularMediaPonderada(listaNotaPesos: NotaPeso[]): Number {
    let somaNotaPeso = 0;
    let somaPeso = 0;

    for (const item of listaNotaPesos) {
        somaNotaPeso += item.nota * item.peso;
        somaPeso += item.peso;
    }
    if (somaPeso === 0) {
        throw new Error("A soma dos pesos não pode ser zero.");
    }
    const mediaPonderada = somaNotaPeso / somaPeso;
    return mediaPonderada;
}

const notasPesos: NotaPeso[] = [
    { nota: 7, peso: 2},
    { nota: 8, peso: 3},
];

const resultado = calcularMediaPonderada(notasPesos);
console.log(`Média Ponderada: ${resultado}`);