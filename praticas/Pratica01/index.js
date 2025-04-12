// Importa o pacote readline-sync
import readline from "readline-sync";

// Importa todas as funções do arquivo tarefas.js
import {
  listarTarefas,
  adicionarTarefa,
  removerTarefa,
  modificarTarefa
} from "./tarefas.js";

function exibirMenu() {
  // Imprime as opções do menu
  console.log("\nMENU PRINCIPAL");
  console.log("1 - Adicionar tarefas");
  console.log("2 - Listar tarefas");
  console.log("3 - Remover tarefa");
  console.log("4 - Modificar tarefa");
  console.log("5 - Sair");
}

function escolherOpcao(opcao) {
  // Testa a opção com switch
  switch (opcao) {
    // Adicionar tarefa
    case "1": {
      const nome = readline.question("Entre com o nome da tarefa: ");
      adicionarTarefa(nome);
      break;
    }

    // Listar tarefas
    case "2": {
      const tarefas = listarTarefas();
      console.log("\nMinhas tarefas:");
      tarefas.forEach((tarefa) => {
        console.log(`ID: ${tarefa.id} - Nome: ${tarefa.nome} - Concluída: ${tarefa.concluida}`);
      });
      break;
    }

    // Remover tarefa
    case "3": {
      const id = readline.question("Entre com o id da tarefa: ");
      removerTarefa(id);
      break;
    }

    // Modificar tarefa
    case "4": {
      const id = readline.question("Entre com o id da tarefa: ");
      const nome = readline.question("Entre com o novo nome da tarefa: ");
      const concluida = readline.question("A tarefa está concluída? (true/false): ");
      modificarTarefa(id, { nome, concluida: concluida === "true" }); // transforma para boolean
      break;
    }

    // Sair do programa
    case "5":
      process.exit(0);
      break;

    // Opção inválida
    default:
      console.log("Opção inválida. Tente novamente!");
  }
}

function main() {
  while (true) {
    // Exibe o menu
    exibirMenu();

    // Lê a opção escolhida
    const opcao = readline.question("Escolha uma opção: ");

    // Executa a opção escolhida
    escolherOpcao(opcao);
  }
}

// Inicia o programa
main();
