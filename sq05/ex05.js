// Exercício 5.1

// let senha

// senha = prompt("Digite a senha:")
// if(senha == 1234){
//     alert("ACESSO PERMITIDO")
// }else{
//     alert("ACESSO NEGADO")
// }

//Exercícios 5.2

// let A,B

// A = Number(prompt("Digite o primeiro número:"))
// B = Number(prompt("Digite o segundo número:"))

// if(A>B){
//     alert("Primeiro ("+A+") é maior que o segundo ("+B+")")
// }else if(B>A){
//     alert("Segundo ("+B+") é maior que o primeiro ("+A+")")
// }else{
//     alert("São iguais!!!!!")
// }

//Exercícios 5.3

// let placa 
// placa = Number(prompt("Ùltimo número:"))
// if(placa == 0 || placa == 1 ){
//     alert("Não pode rodar na segunda")
// }else if(placa == 2 || placa == 3){
//     alert("Não pode rodar na terça")
// }else if(placa == 4 || placa == 5){
//     alert("Não pode rodar na quarta")
// }else if(placa == 6 || placa == 7){
//     alert("Não pode rodar na quinta")
// }else if(placa == 8 || placa == 9){
//     alert("Não pode rodar na sexta")
// }

//Exercícios 5.4

// let palestra 
// palestra = Number(prompt("Número da palestra:"))
// if(palestra == 1){
//     alert("Animações em Scratch, laboratório 305, 19h")
// }else if(palestra == 2 ){
//     alert("Scratch para gamers, laboratório 512, 20h")
// }else if(palestra == 3 ){
//     alert("JavaScript para leigos, laboratório 101, 19h")
// }else if(palestra == 4 ){
//     alert("Tópios avançados de JavaScript, laboratório 305, 20h")
// }else if(palestra == 5){
//     alert("Vida e carreira, auditório, 21h")
// }

//Exercício 5.5

// let

//Exercício 5.6

// let pontuacao 
// pontuacao = Number(prompt("Digite sua pontuação:"))
// if(pontuacao <=10){
//     alert("Deu ruim!")
// }
// if(pontuacao>10 && pontuacao<=100){
//     alert("Amanhã é um novo dia!!!")
// }
// if(pontuacao>100 && pontuacao<=200){
//     alert("Supimpa!!!")
// }else{
//     alert("Mitou!!!")
// }

// let pontuacao 
// pontuacao = Number(prompt("Digite sua pontuação:"))
// if(pontuacao <=10){
//     alert("Deu ruim!")
// }else if(pontuacao<=100){
//     alert("Amanhã é um novo dia!!!")
// }else if(pontuacao<=200){
//     alert("Supimpa!!!")
// }else{
//     alert("Mitou!!!")
// }

//Exercícios 5.7

let dias 
let valorDiaria
let totalBruto , totalLiquido
let desconto10 , desconto15 , multa = 150

dias= Number(prompt("Quantos dias: "))
if(dias <= 5){
    valorDiaria = 100
}else if(dias <= 10){
    valorDiaria = 90
}else{
    valorDiaria = 80
}
totalBruto = dias * valorDiaria
console.log(totalBruto)

desconto10= totalBruto * 10/100
desconto15= totalBruto * 15/100
totalLiquido= totalBruto - (desconto10 + desconto15) + multa
// totalLiquido= 100 + 10 + 15
// totalLiquido= 125
alert("Número de dias:" + dias + 
"\nValor por diária: R$" + valorDiaria +
 "\nTotal bruto: R$" + totalBruto +
"\nDesconto especial: R$" + desconto10 + 
"\nDesconto do convenio: R$" + desconto15 + 
"\nMulta: R$" + multa + 
"\n============" + 
"\nTotal a pagar: R$" + totalLiquido.toFixed(2).replace(".",","))


//Exercícios 5.8

// let idade
// idade= Number(prompt("Digite sua idade:"))
// if(idade <16){
//     alert("Não pode votar!")
// }else if(idade ==16 || idade==17){
//     alert("Voto facultativo")
// }else if(idade >=18 && idade <65){
//     alert("Voto obrigatório")
// }else if(idade >=65){
//     alert("Os veinhos não precisam votar: voto facultativo")
// }

//Exercício 5.9

