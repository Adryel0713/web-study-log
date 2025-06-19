function Math(n1,n2){

    let situação = true;

    if(situação){
        Soma(n1,n2);
    }
    else{
        Multiplicação(n1,n2);
    }
}

function Soma(n1,n2){
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
}
function Multiplicação(n1,n2){
    console.log(`${n1} * ${n2} = ${n1 * n2}`);
}

Math(2,3)