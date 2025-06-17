let price;
let nome;

const objeto = {
    nome: "teste",
    price: 200
}

Object.freeze( objeto )

const editar = objeto;
editar.price = 20000;


console.log(editar.price);