let gangue= ["Thor" , "Maya" , "Mel" , "Salsicha" , "Lincol"]

// if(gangue.length === 0) {
//     gangue.unshift("Taz");
// }

if(gangue.length[gangue.length - 1 ] !== "Taz"){
    gangue.pop(); 
    console.log(gangue);
}

if(gangue[0].length < 5){
    gangue.shift();
    console.log(gangue)
}
const existeComA = gangue.filter(gangue => gangue.includes("a"))
    existeComA.unshift("Tina");
    console.log(existeComA);


const copia = gangue.filter( membroGangue => membroGangue.length >=5 && membroGangue.length <=8);
    console.log(copia);

// const copia = gangue.slice(5,8);
//     copia.map();
//     console.log(copia);
    





    

