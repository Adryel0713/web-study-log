function Somar(n1,n2){
    n1 = isNaN(n1) ? 0 : n1; // se n1 for numero, ele vai retornar o n1,se não for ele retorna 0
    n2 = isNaN(n2) ? 0 : n2; 
    return n1 + n2;
}


Somar(2,3)
Somar(2) // mesmo pedindo 2 parametros.. ele não dá erro
