let nomes = [
    "Clauber",
    "Daniel",
    "Pietro",
    "Lucas",
    "Bruno",
    "Ronaldo",
    "Robson",
    "Kleberiano",
    "Mike"
]
function buscarNome(){
    let itensLista = document.getElementById('campoNome').value;
    for(indice in nomes){
        let nome = nomes[indice]
            if(itensLista == nome){
                itensLista += `
                <li class="list-group-item">
                ${nome}
                </li>
                // `
            }
    }
    document.getElementById('lista').innerHTML = itensLista
}
function mostrarNomes(){
    let itensLista = "";
    for(indice in nomes){
        itensLista += `
        <ul class="list-group">
            <li class="list-group-item"> ${nomes[indice]}</li>
        </ul>`
    }
    document.getElementById('lista').innerHTML = itensLista
}