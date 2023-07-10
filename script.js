// no terminal: entrar na pasta onde esta o projeto, script.ts
// tsc script.ts --noEmitOnError  -> não crie se tiver algum erro 

var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
