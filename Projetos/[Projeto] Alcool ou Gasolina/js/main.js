


function calculo(){
    let alcool = document.getElementById('alcool').value;
    let gasolina = document.getElementById('gasolina').value;

    if(alcool != ""){
        if(gasolina != ""){
            if(alcool / gasolina >= 0.7){
            document.getElementById('calculo').innerHTML = "gasolina é melhor!";
            }else{
            document.getElementById('calculo').innerHTML = "alcool é melhor!";
            }
        }else{
        alert("Gasolina está nulo!")
        }
    }else{
        alert("Alcool está nulo!")
    }
}