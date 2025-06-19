
// const obj = new Object();
// obj.dinheiro = 200;
// obj.preco = 1200;
// obj.calc = new function(){
//     return "você precisa: " + (this.preco - this.dinheiro);
// }

// console.log(obj.dinheiro)

////////////////////////////////////////////

class obj {

    constructor(){
        this.dinheiro = 200;
        this.preco = 1200;
    }

    calc(){
        let resultado = this.preco - this.dinheiro;
        return resultado;
    }



}

const objeto = new obj()
console.log(objeto.dinheiro)