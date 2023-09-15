/*3. Crie um programa que simule uma carteira de dinheiro. Este
programa vai precisar ter uma carteira contendo saldo, transações
de entrada e saídas. Ou seja, será um objeto com estas
propriedades. Depois crie uma função para lançar uma entrada e
uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
um erro ou avisar.*/

class Carteira {
    private saldo: number;
    private transacoes: { descricao: string; valor: number }[] = [];

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    getSaldo(): number {
        return this.saldo;
    }

    registrarEntrada(descricao: string, valor: number): void {
        this.saldo += valor;
        this.transacoes.push({ descricao, valor});
    }

    registrarSaida(descricao: string, valor: number): void{
        if (valor > this.saldo){
            throw new Error("Saldo insuficiente para realizar a saída.");
        }
        this.saldo -= valor;
        this.transacoes.push({ descricao, valor});
    }

    listarTransacoes(): void {
        console.log("Transações:");
        this.transacoes.forEach((transacao, index) =>{
            console.log(`${index + 1}. ${transacao.descricao}: R$ ${transacao.valor}`);
        });
    }
}

const minhaCarteira = new Carteira(100);

try{
    minhaCarteira.registrarEntrada("Sálario", 1500);
    minhaCarteira.registrarSaida("Compras", 200);
    minhaCarteira.registrarSaida("Aluguel", 600);
} catch (error) {
    console.error(error.message);
  }

minhaCarteira.listarTransacoes();
console.log(`Saldo atual: R$ ${minhaCarteira.getSaldo()}`);
