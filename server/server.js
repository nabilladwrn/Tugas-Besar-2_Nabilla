import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

// Simpan data di memori sementara
let daftarTamu = []

// Route untuk mengambil data
app.get('/api/bukutamu', (req, res) => {
  res.json(daftarTamu)
})

// Route untuk mengirim data
app.post('/api/bukutamu', (req, res) => {
  const dataBaru = {
    id: Date.now(),
    nama: req.body.nama,
    pesan: req.body.pesan,
    tanggal: new Date().toLocaleDateString()
  }
  daftarTamu.push(dataBaru)
  res.status(201).json(dataBaru)
})

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`)
})