const sqlite3 = require("sqlite3").verbose() // verbose são as mensagem que vai ser enviada no terminal

const db = new sqlite3.Database('./ws.db')

db.serialize(() => {
  // Criar a tabela
  db.run(`CREATE TABLE IF NOT EXISTS ideas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    title TEXT,
    category TEXT,
    description TEXT,
    link TEXT
  );`)

  // Inserir dados na tabela
  // const query = `INSERT INTO ideas(
  //   image,
  //   title,
  //   category,
  //   description,
  //   link
  // ) VALUES (?, ?, ?, ?, ?);` // para cada ? ele vai substituir pelo o valor do array

  // const values = [
  //   "https://image.flaticon.com/icons/svg/2729/2729007.svg",
  //   "Curso de Programação",
  //   "Estudo",
  //   `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minus quo delectus quos quod ipsa
  //   temporibus expedita repudiandae accusamus voluptatibus adipisci quasi tempore accusantium dolorem sint,
  //   dicta iste earum consequatur!`,
  //   "https://www.udemy.com/"
  // ]

  // db.run(query, values, (err) => err ? console.log(err) : console.log(this))

  // Deletar um dado da tabela
  //db.run(`DELETE FROM ideas WHERE id = ?`, [1], (err) => err ? console.log(err) : console.log('DELETEI', this))

  // Consultar dados na tabela
  //db.all(`SELECT * FROM ideas`, (err, rows) => err ? console.log(err) : console.log(rows))
})

module.exports = db
