const Funcao = function(nome,idade){
    return{
        nome,
        idade,
        exibir(){
            console.log(`nome: ${this.nome}, idade: ${this.idade}`);
        }
    }
}

const aluno1 = Funcao("Clauber Adryel", 22)
aluno1.exibir();

const aluno2 = Funcao("Clauber Vilhena", 49)
aluno2.exibir();

const aluno3 = Funcao("Andreza Danielly", 46)
aluno3.exibir();