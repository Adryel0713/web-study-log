// let nome;
// let idade;

// const classe = {
//     nome, // resumo para this.nome = nome
//     idade,
//     // exibir(){ // resumo para exibir : function() {}
//     //     console.log(`Olá, ${this.nome}, eu tenho ${this.idade}`)
//     // }
// };
// const variavel = classe;

// variavel.nome = "clauber";
// variavel.idade = 22;

// variavel.exibir = function(){
//     console.log(`Olá, ${this.nome}, eu tenho ${this.idade}`)
// }; // fora da const classe

// variavel.exibir()

class Produto{
    constructor(){
        this.nome = null;
        this.idade = null;
    }
}

const produto = Produto
const teste = produto //vai pela localização na memoria, é o mesmo objeto
produto.nome = "Adryel";
console.log(teste.nome);
