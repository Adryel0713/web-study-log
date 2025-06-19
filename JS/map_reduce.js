// const numeros = ["Clauber","Adryel","Araujo"]

// const numMap = numeros.reduce( (acumulador,tot) => {
//     return acumulador += `<li>${tot}</li>`;
// },"");

// console.log(numMap);


const promocao = [
    {Nome: "Android",Promocao: false},
    {Nome: "Iphone",Promocao: true}
]

const produtosPromocao = promocao.map(x => x.Promocao);

const funcao = function(acumulador,atual){
    return acumulador || atual;
}
const novo = produtosPromocao.reduce(funcao)
console.log(novo);