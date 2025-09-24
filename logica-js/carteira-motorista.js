const prompt = require("prompt-sync")()
let cNH
let idade 
cNH= prompt("Tem cnh?")
idade = Number(prompt("Qual sua idade?"))
if(cNH == "sim" && idade >=18){
    console.log("Pode dirigir")
}else {
    console.log("Não pode dirigir!")
} 
