const array = ["João","José","Joaquim"]

// array.forEach(value => console.log(value))

// const percorrer = function(i,a,array){
//     console.log(array)
// }
// array.forEach(percorrer)

// Array.prototype.percorrer = function(nome,indice,array){
//     console.log(indice);
// }

// array.forEach(array.percorrer)


const funcao = function(a,i,array){
    console.log(a)
}

Array.prototype.percorrer = function(funcao){
    // console.log(this);
    for(let i = 0; i < this.length; i++){
        funcao(this[i],i,this)
        // funcao()
    }
}

// array.percorrer
array.percorrer(funcao)