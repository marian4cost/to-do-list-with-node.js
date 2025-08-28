import express from 'express'
const app = express()

app.use(express.json())

const tarefas = [
    {id: 1, tarefa: "estudar programação", concluida: false},
    {id: 2, tarefa: "ler um livro", concluida: true},
    {id: 3, tarefa: "estudar teoria matemática", concluida: false}
]

app.get('/', (req, res) => {
    res.json(tarefas)
})

//criando tarefas
//atualizando tarefas
//excluindo tarefas

export default app
