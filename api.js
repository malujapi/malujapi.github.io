// Dependencias
const express = require('express')
const app = express()

// Enlaces
const links = [
  'https://link1.com',
  'https://link2.com'
]

// Rutas 
app.get('/api/links', (req, res) => {
  res.json({links})  
})

// Hosting
app.listen(3000)
