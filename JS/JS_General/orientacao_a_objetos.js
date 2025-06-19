console.clear();

const objeto = {
    saldo: 200,
    celular: 1200,
    pagamento: function() {
        let calc = this.celular - this.saldo;
        if(calc < 0){
            return "dá pra comprar,ainda sobra: " + Math.abs(calc) + " reais";
        }
        if(calc > 0){
            return "você não possui saldo no momento: falta " + calc + " reais";
        }
        if(calc == 0){
            return "compra que ta certinho!";
        }
    }
}
objeto.saldo = 2200;
console.log(objeto.pagamento());