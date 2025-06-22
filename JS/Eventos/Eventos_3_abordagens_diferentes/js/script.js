function clicar(){
    console.log("Clicou!");
    obj.removeEventListener('click',clicar)
}
function clicar2(){
    console.log("Clicou no body");
}

// const obj = document.getElementById('botao');
// const obj = document.querySelector('[botao-acao]');
// obj.onclick = clicar;

const obj = document.querySelector('[botao-acao]');
const body = document.querySelector('body');
// obj.addEventListener('click',clicar);

// obj.addEventListener('click',function(){
//     clicar();
// })

// obj.addEventListener('click',clicar,false) // padrão é false
// body.addEventListener('click',clicar2,false) // -- primeiro o botao e depois o body

// obj.addEventListener('click',clicar,true)
// body.addEventListener('click',clicar2,true) // -- primeiro o body depois o botao

// o true muda o fluxo da execução..

obj.addEventListener('click',clicar,false)

if( obj.addEventListener ) {
    obj.addEventListener('click',clicar);
}else{
    obj.attachEvent('click',executar);
}