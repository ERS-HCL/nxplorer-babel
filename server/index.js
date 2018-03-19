import createServer from './createServer'
import * as dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3000
const app = createServer()
