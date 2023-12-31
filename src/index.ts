import server from './server.tsx'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
