var numAtualResposta = document.getElementById("numatual");
var numAtual = 0

function increment() {
    
    numAtual = numAtual + 1
    numAtualResposta.innerHTML = numAtual
    if (numAtual>= 0 ){
    numAtualResposta.style.color = "black"
    }
}
function decrement() {
    numAtual = numAtual - 1
    numAtualResposta.innerHTML = numAtual
    if (numAtual < 0){
        document.getElementById("numatual").style.color = "red"
    } else{
    }
}
