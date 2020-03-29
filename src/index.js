const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

app.use(express.static('public'))

const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de Programação",
    category: "Estudo",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minus quo delectus quos quod ipsa
    temporibus expedita repudiandae accusamus voluptatibus adipisci quasi tempore accusantium dolorem sint,
    dicta iste earum consequatur!`,
    url: "https://www.udemy.com/"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title: "Exercícios",
    category: "Saúde",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minus quo delectus quos quod ipsa
    temporibus expedita repudiandae accusamus voluptatibus adipisci quasi tempore accusantium dolorem sint,
    dicta iste earum consequatur!`,
    url: "https://www.udemy.com/"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    title: "Meditação",
    category: "Mentalidade",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minus quo delectus quos quod ipsa
    temporibus expedita repudiandae accusamus voluptatibus adipisci quasi tempore accusantium dolorem sint,
    dicta iste earum consequatur!`,
    url: "https://www.udemy.com/"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de Programação",
    category: "Estudo",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minus quo delectus quos quod ipsa
    temporibus expedita repudiandae accusamus voluptatibus adipisci quasi tempore accusantium dolorem sint,
    dicta iste earum consequatur!`,
    url: "https://www.udemy.com/"
  }
]

nunjucks.configure('views', {
  express: app,
  noCache: true,
})

app.get("/", async (req, res) => {
  const reversedIdeas = [...ideas].reverse()
  const lastIdeas = []

   for(let idea of reversedIdeas) {
    if(lastIdeas.length < 3) {
      lastIdeas.push(idea)
    }
  }

  return res.render("index.html", { ideas: lastIdeas })
})

app.get("/ideias", (req, res) => {
  const reversedIdeas = [...ideas].reverse()
  return res.render("ideias.html", { ideas: reversedIdeas })
})

app.listen(3000)
