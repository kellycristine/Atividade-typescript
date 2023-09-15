/*5. Crie um programa para mostrar informações de usuários (User) de
uma empresa. Crie o tipo User com as seguintes propriedades:
nome, idade, ocupação e salário (opcional). Caso o salário do
usuário não seja informado, mostre o valor “N/A”. Exemplo:
a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
b. “Daphne, 23 anos, analista de TI, salário N/A”*/

type User = {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number;
  };
  
  function mostrarInformacoesUsuario(user: User): string {
    const salarioTexto = user.salario ? `salário R$ ${user.salario}` : `salário N/A`;
  
    return `${user.nome}, ${user.idade} anos, ${user.ocupacao}, ${salarioTexto}`;
  }
  
  // Exemplos
  const usuario1: User = {
    nome: "Daphne",
    idade: 23,
    ocupacao: "analista de TI",
    salario: 1000,
  };
  
  const usuario2: User = {
    nome: "João",
    idade: 30,
    ocupacao: "engenheiro",
  };
  
  console.log(mostrarInformacoesUsuario(usuario1));
  console.log(mostrarInformacoesUsuario(usuario2));
  