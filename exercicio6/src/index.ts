/*6. Usando o contexto do exercício 6, crie um tipo de usuário que
representa funcionários da diretoria da empresa. O tipo Diretor deve
conter as propriedades: nome, idade, salário (opcional) e nível de
comissionamento (numérico). Crie uma função que receba um
Diretor e mostre suas informações. Exemplos:
a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”*/

type Diretor = {
    nome: string;
    idade: number;
    salario?: number;
    nivelComissionamento: number;
  };
  
  function mostrarInformacoesDiretor(diretor: Diretor): string {
    const salarioTexto = diretor.salario !== undefined ? `salário R$ ${diretor.salario}` : `salário N/A`;
  
    return `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, ${salarioTexto}`;
  }
  
  // Exemplos de uso
  const diretor1: Diretor = {
    nome: "Daphne",
    idade: 23,
    nivelComissionamento: 5,
    salario: 1000,
  };
  
  const diretor2: Diretor = {
    nome: "João",
    idade: 30,
    nivelComissionamento: 3,
  };
  
  console.log(mostrarInformacoesDiretor(diretor1));
  console.log(mostrarInformacoesDiretor(diretor2));
  