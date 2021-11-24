import fastify from "fastify"

const server = fastify({
    logger: true
})

server.get('/test', (req, rep) => {
    rep.send({ message: 'ok, it is working' })
})

server.get('/test', (req, rep) => {
    rep.send({ message: 'ok, it is working' })
})

try {
    server.listen(3333, '0.0.0.0', () => {
        console.log('Server is running!')
    })
} catch (err) {
    console.log('erro')
}
