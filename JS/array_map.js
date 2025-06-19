// const Pessoas = ["Amanda","João","Junior","Lucas"]
// console.log(Pessoas);

// let Transform = function(item,indice,arr){
//     // return "Olá " + item;
//     return {nome: item}
// }

// const novoArray = Pessoas.map(Transform);

// console.log(novoArray);

const ProdutosDolar = [
    {
        produto: "notebook",
        preco: 1200,
        moeda: "$"
    },
    {
        produto: "celular",
        preco: 80,
        moeda: "$"
    }
]

const novo = ProdutosDolar.map(function(item){
        let preco =  item.preco * 3
    return {
        produto: "notebook", preco: preco, moeda: "R$"
    }
});

// ProdutosDolar.map(item => {
//         let preco =  item.preco * 3

//     return {
//         produto: "notebook", preco: preco, moeda: "R$"
//     }
// });

console.log(novo);