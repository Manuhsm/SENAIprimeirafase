// const nomes = ["João" , "Maria" , "Ricardo" , "Joana"]
// for(let nome of nomes){
//     console.log(nome)
// }

// function renderizaArray (items){
//     for(let item of items){
//         console.log(item)
//     }
// }

// let dados = [20.00,50,60,70]
// let animais = ["cachorro" , "gato" , "vaca" , "galinha"]

// renderizaArray(dados)

// const numeros = [3,5,8,10]

// const valoresDobrados = numeros.map((valor) => valor * 2)
// console.log(numeros);
// console.log(valoresDobrados)

const usuarios = [ 
    {nome:"João",idade:32},
    {nome:"Maria",idade:15},
    {nome:"Pedro",idade:21},
]    
// const nomesUsuarios = usuarios.map(usuarios => usuarios.nome)
// console.log(nomesUsuarios)

const idadeUsuarios = usuarios.map(usuarios => usuarios.idade)
console.log(idadeUsuarios);

