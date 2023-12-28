const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {

  response.json({

    nome: " Edilaine de Oliveira",
    imagem: "C:\Users\edilaine.oliveira\Pictures\IMG_20230529_162916373.jpg",
    minibio:"Futura Dev, programadora e mãe"

  })  
}
function mostraPorta() {
    console.log ("servidor vriado e rodando na porta", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)