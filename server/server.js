import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/api/pesan', (req, res) => {
  res.json({
    message: 'Selamat datang di Museum Nasional Indonesia!'
  })
})

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`)
})