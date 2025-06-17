// class Funcao{

// }

// const funcao = new Funcao();

// const Arigato = function(){
//     this.nome = "adryel";
//     this.idade = 22;
// }

// typeof Funcao; // Mostra o tipo

// console.log(typeof FuncaoTeste);

const Classe = function(){
    this.nome = "Clauber";
    this.idade = 21;

    let salario = 200; // Não permite que seja tocado fora daqui
    this.metodo = function(){
        console.log(`nome: ${this.nome}, idade: ${this.idade}, salario: ${salario}`);
    }
}

const externo = new Classe();
externo.idade = 22;
externo.metodo()