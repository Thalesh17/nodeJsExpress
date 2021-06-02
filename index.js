const { errorStatus, validateUser, validateUserExists} = require('./middlewares/user.middleware');
const repo = require('./repositories/user.repository');
const express = require("express")
const server = express()
const router = express.Router()
server.use(express.json({extended: true}))

router.get('/', (req, res) => {
    res.send(repo.listUser())
})

router.get('/:id',validateUserExists, (req, res) => {
    const {id} = req.params
    res.send(repo.getById(id));
})

router.post('/', validateUser, (req, res) => {
    const { name, email, password } = req.body
    const id = repo.save({name, email, password})
    res.send({ id })
})

router.put('/:id', validateUserExists, (req, res) => {
    const {id} = req.params;
    const { name, email, password } = req.body;
    const newUser = repo.put({id, name, email, password});

    res.send(newUser)
})

router.delete('/:id',validateUserExists, (req, res) => {
    const { id } = req.params;
    res.send(repo.delete(id))
})

server.use(router)

server.listen(3000, () => {
    console.log('Rodando servidor')
})

