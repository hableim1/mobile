//Array com um objeto que contém id, nome da tarefa, e concluida se a tarefa foi concluida ou não
const tarefas = [
    { id: 1739220546861, nome: "Estudar JavaScript", concluida: false }
]

//função sem parâmetros, apneas retorna o array tarefas
function listarTarefas() {
    return tarefas;
}

//recebe o parâmetro tarefa que é nome da tarefa que será adicionada
function adicionarTarefa (nomeTarefa) {
    const novaTarefa = {
        id: Date.now() .toString(), //Date.now() gera um número com base no tempo atual (timestamp) e .toString() transforma em string.
        nome: nomeTarefa, //usa o valor passado como parâmetro (nomeTarefa)
        concluida: false // começa como false pois a tarefa ainda não foi feita
    };
    tarefas.push(novaTarefa); // insere o novo objeto no final do array tarefas
}

//recebe o parãmetro isTarefa, que representa o ID da tarefa que será removida
function removerTarefa (idTarefa) {
    const posicao = tarefas.findIndex(task => task.id == idTarefa); //percorre o array e retorna o índice da tarefa cujo o id seja igual a idTarefa
    if (posicao !== -1) { //se o findIndex não achou nada, retorna -1
        tarefas.splice(posicao, 1); //se encontrou (posição !== -1), usa splice() para remover 1 item naquela posição
    }
}

//recebe dois parâmetros: o primeiro é o id que será modificado, e o segundo um objeto com as propriedades que vc quer atualizar
function modificarTarefa(idTarefa, tarefaModificada) {
    const tarefaLocalizada = tarefas.find(tarefa => tarefa.id == idTarefa); //percorre o array e retorna o objeto da tarefa com id correspondente
    if (tarefaLocalizada) { // se encontrou a tarefa, usa o Obejct.assing(...) para copiar todas as propriedades de tarefaModificada
        Object.assign(tarefaLocalizada, tarefaModificada); //para dentro do objeto original(tarefaLocalizada)
    }

}

export { listarTarefas, adicionarTarefa, removerTarefa, modificarTarefa }