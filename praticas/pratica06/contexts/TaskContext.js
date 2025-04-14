import { createContext, useState } from "react";

// Criação do contexto
const TaskContext = createContext();

function TaskProvider({ children }) {
  // Estado das tarefas
  const [tarefas, setTarefas] = useState([]);

  // Função para adicionar tarefa
  const adicionar = (nomeTarefa) => {
    setTarefas([
      ...tarefas,
      { id: Date.now(), nome: nomeTarefa, concluida: false },
    ]);
  };

  // Função para concluir/desconcluir tarefa
  const concluir = (idTarefa) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id == idTarefa
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  // Função para remover tarefa
  const remover = (idTarefa) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id != idTarefa));
  };

  // Retorno do provider com os dados e funções
  return (
    <TaskContext.Provider
      value={{ tarefas, adicionar, concluir, remover }}
    >
      {children}
    </TaskContext.Provider>
  );
}

// Exportação
export { TaskContext, TaskProvider };
