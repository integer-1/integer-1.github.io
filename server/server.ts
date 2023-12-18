import { join } from 'node:path'
import * as Path from 'node:path'
import * as URL from 'node:url'
import express from 'express'
import cors from 'cors'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))
server.use(cors())


export default server
