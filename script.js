//var num1 = 5;
//var num2 = 5;
//var num3 = 5;
//function alerta(){
//    let nome = prompt('Digite seu nome');
//    alert("seja bem vindo(a) " + nome);
//}
let variavel ;
let lista = ['valor inicial'];


document.getElementById('btnpedir1').addEventListener('click',function(){
    let novoValor= document.getElementById('btnpedir1').value;
    lista.push(novoValor);
    console.log(lista);//mostrar primeiro valora btn bebida
});

document.getElementById('btnpedir2').addEventListener('click',function(){
    let novoValor = document.getElementById('btnpedir2').value;
    lista.push(novoValor);
    console.log(lista);
});

document.getElementById('btnpedir3').addEventListener('click', function(){
    let novoValor = document.getElementById('btnpedir3').value;
    lista.push(novoValor);
    console.log(lista);
});

document.getElementById('btnpedir4').addEventListener('click', function(){
    let soma = lista.reduce((acumalador, valor)=> acumalador = valor, 0);
    document.getElementById('resultado').innerHTML = "soma: " + soma;
});