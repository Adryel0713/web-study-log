const Veiculo = {
    nome: "Clauber",
    preco: 2000.0,
    exibir(){
        console.log(`Nome: ${this.nome}, Preço: ${this.preco}`);
    }
}

// const veiculo = Veiculo
// veiculo.exibir()

const Ferrari = {
    nome: "Ferrari",
    preco: 200.0,
    __proto__: Veiculo //é tipo herança
}

const ferrari = Ferrari
ferrari.exibir()