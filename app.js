const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const conection = require("./database/database")
const Pergunta = require("./database/Pergunta")

conection
    .authenticate()
    .then(() => {
        console.log("Conexao ok")
    })
    .catch((erro) => {
        console.log(erro)
    }) 

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/", (req,res) => {
    Pergunta.findAll({raw:true, order:[
        ['id','DESC']
    ]}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        }) 
    })
      
})
app.get("/perguntar", (req,res) => {
    res.render("perguntar")   
})

app.post("/salvarpergunta", (req,res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })    
})

app.listen(3000,() => {
    console.log("servidor ok")
})