import express from 'express'
import path from 'path'
import { ApolloServer } from 'apollo-server-express'
import { sequelize } from './server/models'
import { createWidgets } from './server/utils/seed'
import { resolvers } from './server/resolvers'
import { typeDefs } from './server/typeDefs'

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`))
})

server.applyMiddleware({ app })

const eraseDatabaseOnSync = process.argv[2] && process.argv[2] === '--reset'

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createWidgets()
  }
  app.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  )
})
