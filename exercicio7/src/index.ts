/*7. Crie um tipo que seja composto por um User OU por um Diretor
usando interseção de tipos. Desenvolva uma função que receba
uma lista desse novo tipo e, para cada item da lista, imprima:
a. O mesmo que o exercício 5, em caso de objeto User.
b. O mesmo que o exercício 6, em caso de objeto Diretor.*/

type User = {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number;
  };
  
  type Diretor = {
    nome: string;
    idade: number;
    salario?: number;
    nivelComissionamento: number;
  };
  
  type Usuario = User | Diretor;
  
  function imprimirInformacoes(usuario: Usuario): void {
    if ('ocupacao' in usuario) {
      const salarioTexto = usuario.salario !== undefined ? `salário R$ ${usuario.salario}` : `salário N/A`;
      console.log(`${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, ${salarioTexto}`);
    } else if ('nivelComissionamento' in usuario) {
      const salarioTexto = usuario.salario !== undefined ? `salário R$ ${usuario.salario}` : `salário N/A`;
      console.log(`Diretor(a) ${usuario.nome}, ${usuario.idade} anos, comissão nível ${usuario.nivelComissionamento}, ${salarioTexto}`);
    }
  }
  
  // Exemplos de uso
  const usuario1: Usuario = {
    nome: "Daphne",
    idade: 23,
    ocupacao: "analista de TI",
    salario: 1000,
  };
  
  const usuario2: Usuario = {
    nome: "João",
    idade: 30,
    nivelComissionamento: 3,
  };
  
  imprimirInformacoes(usuario1);
  imprimirInformacoes(usuario2);
  