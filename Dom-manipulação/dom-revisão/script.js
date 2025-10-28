// let usuario
// function cadastrarUsuario(){
//     // console.log("até aqui deu");
//     usuario = document.getElementById("inputUsuario").value 

//     document.getElementById("inputUsuario").value =''

//     document.getElementById("resultado").innerHTML = "Usuario cadastrado com sucesso: " + usuario
// }

// let x=500
// let y=35.0
// let media
// function totalDeCombustivel(){
//     media= x/y
//      document.getElementById

// }

function totalDeCombustivel(){
    let distancia = Number(document.getElementById('inputDistancia').value)
    let combustivel = Number(document.getElementById('inputCombustivel').value)

    let consumo = distancia / combustivel
    console.log(consumo);

    // document.getElementById('resultadoConsumo').innerHTML = "O consumo de " + consumo + "km/L"
    document.getElementById('resultadoConsumo').innerHTML = `O consumo foi de ${consumo} Km/l`
    
}

