import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

app.get('/users', async(request, response) =>{
    const users = await prisma.user.findMany()
    response.json(users)
})

const server = app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`))