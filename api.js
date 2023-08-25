// Dependencias
const express = require('express')
const app = express()

// Enlaces dummy
const links = [
  'https://link1.com',
  'https://link2.com'
] 

// Rutas
app.get('/api/links', (req, res) => {
  res.json({
    links  
  })
})

// Iniciar servidor
app.listen(3000, () => {
  console.log('API iniciada')
})
