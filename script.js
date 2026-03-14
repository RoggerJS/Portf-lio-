document.getElementById("formContato").addEventListener("submit", function(event){

//event.preventDefault(); //conflito com formspree

let nome = document.getElementById("nome").value.trim();
let email = document.getElementById("email").value.trim();
let mensagem = document.getElementById("mensagem").value.trim();

let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(nome === "" || email === "" || mensagem === ""){
    alert("Por favor, preencha todos os campos");
    return;
}
if(!emailValido.test(email)){
    alert("digite um email válido");
    return;
}
alert ("Mensagem enviada com sucesso!");

document.getElementById("formContato").reset();
});


