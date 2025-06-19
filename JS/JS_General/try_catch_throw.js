function main( produto ){
    try{

        if(produto.nome.length > 10){
            tratarError();
        }
            console.log("caracteres: " + produto.nome.length);

    }
    catch(Error) {
        console.log("error: 167");
    }
}

function tratarError(){
    throw new Error("Erro: 167");
}

const produto = {
    nome: "adryellll"
}

main(produto);
