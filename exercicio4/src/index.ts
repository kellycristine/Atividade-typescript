/*4. Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto.*/

type Produto = {
    id: number;
    nome: string;
  };
  
  class GerenciadorProdutos {
    private produtos: Produto[] = [];
    private proximoId: number = 1;
  
    cadastrarProduto(nome: string): void {
      const produto: Produto = {
        id: this.proximoId++,
        nome,
      };
      this.produtos.push(produto);
      console.log(`Produto "${nome}" cadastrado com sucesso.`);
    }
  
    listarProdutos(): void {
      console.log("Lista de Produtos:");
      this.produtos.forEach((produto) => {
        console.log(`ID: ${produto.id}, Nome: ${produto.nome}`);
      });
    }
  
    excluirProduto(id: number): void {
      const index = this.produtos.findIndex((produto) => produto.id === id);
      if (index === -1) {
        console.log(`Produto com ID ${id} não encontrado.`);
        return;
      }
  
      const nome = this.produtos[index].nome;
      this.produtos.splice(index, 1);
      console.log(`Produto "${nome}" excluído com sucesso.`);
    }
  }
  
  // Exemplo
  const gerenciador = new GerenciadorProdutos();
  
  gerenciador.cadastrarProduto("Produto 1");
  gerenciador.cadastrarProduto("Produto 2");
  gerenciador.listarProdutos();
  gerenciador.excluirProduto(1);
  gerenciador.listarProdutos();
  