const form = document.getElementById("formContato");

//event.preventDefault(); //conflito com formspree

if(form){
form.addEventListener("submit", function(event){

let nome = document.getElementById("nome").value.trim();
let email = document.getElementById("email").value.trim();
let mensagem = document.getElementById("mensagem").value.trim();

let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(nome === "" || email === "" || mensagem === ""){
    alert("Por favor, preencha todos os campos");
    return;
}

if(!emailValido.test(email)){
    alert("Digite um email válido");
    return;
}

alert("Mensagem enviada com sucesso!");
form.reset();

});
}

/**const botaoTema = document.getElementById("tema-btn");
botaoTema.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
});

if(document.body.classList.contains("dark-mode")){
    botaoTema.textContent = "☀️ Modo Claro";
    botaoTema.textContent = "🌙 Modo Escuro";
}**/


const botaoTema = document.getElementById("tema-btn");

const temaSalvo = localStorage.getItem("tema"); /**para o navegador manter o tema atual enquanto navega pelas paginas */

if(temaSalvo === "light"){
    document.body.classList.add("dark-mode");
    botaoTema.textContent = "🌙Tema Dark";
} else{
    botaoTema.textContent = "☀️Tema Light"
}

/*clique no botão*/
botaoTema.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        botaoTema.textContent = "🌙 Tema Dark";
        localStorage.setItem("tema", "light");
    } else {
        botaoTema.textContent = "☀️ Tema Light";
        localStorage.setItem("tema", "dark");
    }

});
console.log("JS carregou"); /*para verificação do script no navegador*/ 