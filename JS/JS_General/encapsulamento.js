class Banco{
    constructor(){
        this._saldo = 0;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(saldo){
        this._saldo = saldo;
    }
    sacar(saque){
        if(saque <= 0){
            return "digite um valor certo para o saque";
        }
        if(this._saldo >=  saque){
            this._saldo -= saque;
            return "saque realizado!";
        }
        return "você está tentando sacar mais do que possui";
    }
}

