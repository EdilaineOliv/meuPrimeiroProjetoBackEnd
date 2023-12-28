const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres =[

    {
        nome:"Gracielle Pereira",
        iamgem:"https://media.licdn.com/dms/image/D4D03AQGe4rDRqcXUug/profile-displayphoto-shrink_800_800/0/1696256390250?e=1707955200&v=beta&t=VP_Fg8BDJCPmYO7c_r0sX0KBzajEHhBPCCsZLtgZdyo",
        minibio:"Analista de Desenvolvimento de Sistemas Jr | C# | .NET | Javascript | Desenvolvedor Back end | API Rest | NODE.JS | MongoDB | Testes unitários | Git | GitHub | Express | SQL",
    },

    {
        nome:"Erika Barbosa",
        imagem:"https://media.licdn.com/dms/image/C4E03AQHxue6ELqvePw/profile-displayphoto-shrink_800_800/0/1605648138543?e=1707955200&v=beta&t=6l0qRc4vPjWV1L4SWX4VLO-4ZGJgBI27pJ7-kPGyMiE",
        minibio: " Analista de Service Desk na Accenture"
    },

    {
        nome:"Ana Quintino",
        imagem: "https://media.licdn.com/dms/image/C4D03AQH3oGby56bT2g/profile-displayphoto-shrink_100_100/0/1633172398090?e=1707955200&v=beta&t=KFe9OB6Tu2OvqQMLHDOIeIIRyobh1lF2FVwcwn30qi4",
        minibio: "CEO na Lunna Oráculos e Terapias"
    }
]
function mostraMulheres (request, response) {
     response.json(mulheres)

}
function mostraPorta() {
    console.log ("servidor vriado e rodando na porta", porta)
}
app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)