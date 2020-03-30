const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const methodOverride = require('method-override');

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
// Para usar o metodo delete
app.use(methodOverride('_method'));

const db = require("../db")

nunjucks.configure('views', {
  express: app,
  noCache: true,
})

app.get("/", (req, res) => {
  db.all(`SELECT * FROM ideas`, (err, rows) => {
    if (err) {
      return res.send(`Erro no banco de dados: ${err.message}`)
    }

    const reversedIdeas = [...rows].reverse()
    const lastIdeas = []

    for (let idea of reversedIdeas) {
      if (lastIdeas.length < 3) {
        lastIdeas.push(idea)
      }
    }
    return res.render("index.html", { ideas: lastIdeas })
  })
})

app.post('/', async (req, res) => {
  const { image, title, category, description, link } = req.body

  // Inserir dados na tabela
  const query = `INSERT INTO ideas(
    image,
    title,
    category,
    description,
    link
  ) VALUES (?, ?, ?, ?, ?);` // para cada ? ele vai substituir pelo o valor do array

  const values = [ image, title, category, description, link ]

  await db.run(query, values, (err) => {
    if (err) {
      return res.send(`Erro no banco de dados: ${err.message}`)
    }
  })

  res.redirect('/ideias')
})

app.delete('/delete/:id', async(req, res) => {
  const { id } = req.params

  await db.run(`DELETE FROM ideas WHERE id = ?`, [id], (err) => {
    if (err) {
      return res.send(`Erro no banco de dados: ${err.message}`)
    }
  })

  res.redirect('/ideias')
})

app.get("/ideias", (req, res) => {
  db.all(`SELECT * FROM ideas`, (err, rows) => {
    if (err) {
      return res.send(`Erro no banco de dados: ${err.message}`)
    }

    const reversedIdeas = [...rows].reverse()
    return res.render("ideias.html", { ideas: reversedIdeas })
  })
})

app.listen(3000)
