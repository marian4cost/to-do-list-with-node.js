import express from 'express'
const app = express()

app.use(express.json())

const tarefas = [
    {id: 1, tarefa: "estudar programação", concluida: false},
    {id: 2, tarefa: "ler um livro", concluida: true},
    {id: 3, tarefa: "estudar matemática", concluida: false}
]

// função para pegar o index através do id
function buscarIndex(id){
    return tarefas.findIndex(tarefa => tarefa.id == id)
}

app.get('/', (req, res) => {
    res.json(tarefas)
})

//criando tarefas
app.post('/tarefas', (req, res) => {
    tarefas.push(req.body)
    res.status(201).json(tarefas)
})

//atualizando tarefas
app.put('/tarefas/:id', (req, res) => {
    let index = buscarIndex(req.params.id)
    tarefas[index].tarefa = req.body.tarefa
    tarefas[index].concluida = req.body.concluida
    res.send(tarefas)
})

//excluindo tarefas

export default app
