const carros = [
    {nome: "Gol",marca: "volkswagem"},
    {nome: "iX35",marca: "hyundai"},
    {nome: "Santa Fé",marca: "hyundai"},
    {nome: "Polo",marca: "volkswagem"}
]

// const filtrar = function(item){
//     return item.marca == "hyundai";
// }

// const verify = carros.filter(filtrar)
// console.log(verify);

// const filtrar = function(item){
//     return item.marca == "hyundai";
// }

const verify = carros.filter(item => item.marca == "hyundai")
console.log(verify);