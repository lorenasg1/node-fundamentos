import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  console.log(req.headers)

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com'
    })

    return res.end('Criação de usuário')
  }

  return res.end('hello ignite')
})

server.listen(3333)
