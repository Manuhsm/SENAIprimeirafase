const prompt = require("prompt-sync")()
let usuario
let senha
usuario = prompt("Qual seu nome de usuario?")
senha= prompt("Qual sua senha ?")
if(usuario == "admin" && senha ==12345){
    console.log("Acesso permitido")
}else{
    console.log("Acesso negado")
}