// Primeira aula 

// var nome = "Victor Costa";
// var idade = 21;
// var n1 = 9;
// var n2 = 11;
// var frase = "Japão é o melhor time do mundo!"
// alert(nome + " tem " + idade + " anos")
// alert(idade + idade2);
// console.log(nome);
// console.log(n1 + n2);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());
// alert(frase.replace("Japão", "Brasil"));

// Segunda aula

// var frutas = [{
//     nome: "maça",
//     cor: "vermelha"
// }, {
//     nome: "uva",
//     cor: "roxa"
// }]
// console.log(frutas);
// console.log(frutas[1]);
// alert(frutas[0].nome)

// var fruta = {
//     nome: "maça",
//     cor: "vermelha"
// }
// console.log(fruta);
// console.log(fruta.nome);
// alert(fruta.cor);

// var lista = ["maça", "pêra", "laranja"]
// console.log(lista);
// console.log(lista[0]);
// lista.push("uva")
// console.log(lista);
// lista.pop();
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse())
// console.log(lista.toString())
// console.log(lista.toString()[0])
// console.log(lista.join(" - "))
// alert(lista[1]);

// Terceira aula

// var idade = prompt("Qual sua idade ?");

// var idade = 18;

// if(idade >= 18) {
//     alert("Maior de idade!");
// }else{
//     alert("Menor de idade!");
// }

// var count = 0;
// while(count <= 5) {
//     console.log(count);
//     count = count++;
// }

// var count;
// for(count = 0; count <= 5; count++){
//     alert(count);
// }

// var d = new Date();
// alert(d);
// alert(d.getDay());
// alert(d.getMonth()+1);
// alert(d.getHours());
// alert(d.getMinutes());

// Quarta aula

// function soma(n1, n2){
//     return n1 + n2;
// }
// alert(soma(5, 10));

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }
// alert(setReplace("Vai Japão", "Japão", "Brasil"));

// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         return validar = true;
//     }else{
//         return validar = false;
//     }
// }
// var idade = prompt("Informe sua idade:");
// console.log(validaIdade(idade));

// Quinta aula

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
    // document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar");
}

function redirecionar(){
    // window.open("https://www.google.com");
    window.location.href = "https://www.google.com";
}

// function trocar(){
//     document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
//     // alert("trocar texto");
// }

// function voltar(){
//     document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
// }

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
    // alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!");
}

function functionOnChange(elemento){
    console.log(elemento.value);
}