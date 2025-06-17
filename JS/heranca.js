class Animal{
    constructor(comer,beberAgua,correr){
        this.comer = comer;
        this.beberAgua = beberAgua;
        this.correr = correr;
    }
    comendo(){
        console.log("comendo..");
    }
    correndo(){
        console.log("correndo..");
    }
    seAlimentar(){
        console.log("Se alimentando..");
    }
}
class Passaro extends Animal{
    constructor(comer,beberAgua,correr,voar){
        super(comer,beberAgua,correr);
        this.voar = voar;
    }
    voando(){
        console.log("Passaro voando..");
    }
}
class Galinha extends Passaro{
    constructor(comer,beberAgua,correr,voar){
        super(comer,beberAgua,correr,voar);
    }
    voando(){
        console.log("Galinha não voa");
    }
}
// const animal = new Animal("comendo","bebendo agua","correndo");
// console.log(animal.beberAgua)

// const passaro = new Passaro("comendo","bebendo agua","correndo","voando")
// passaro.voando()
// console.log(passaro.voando)

const galinha = new Galinha("comendo","bebendo agua","correndo","não voa")
galinha.voando()