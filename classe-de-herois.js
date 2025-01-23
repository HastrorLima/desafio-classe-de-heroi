//Desafio 3 de Lógica de Programação da DIO
//Dev: Hastror Lima
//Data: 22/01/2025

class classeGenerica{
    constructor(){
        this.herois = []
    }
    adicionarHeroi(nome, idade, tipo){
        this.herois.push({nome, idade, tipo})
    }
    atacar(){
        for(let heroi of this.herois){
            let ataque = " "
            if (heroi.tipo === "mago"){
                ataque = "magia"
            }
            else if (heroi.tipo === "guerreiro"){
                ataque = "espada"
            }
            else if (heroi.tipo === "monge"){
                ataque = "artes marciais"
            }
            else if (heroi.tipo === "ninja"){
                ataque = "shuriken"
            }
            console.log(`O ${heroi.tipo} atacou usando ${ataque}`)
        }
    }
}

let heroi = new classeGenerica()

heroi.adicionarHeroi("Welk", 20, "mago")
heroi.adicionarHeroi("Lucas", 25, "guerreiro")
heroi.adicionarHeroi("Renato", 39, "monge")
heroi.adicionarHeroi("Fernando", 32, "ninja")

heroi.atacar()