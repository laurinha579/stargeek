const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const nome = document.getElementById("inome");
const email = document.getElementById("iemail");
const senha = document.getElementById("isenha");
const confirmar = document.getElementById("iconf")

formulario.onsubmit = (evento) =>{
    if (nome.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite seu nome! </p>";
        mensagem.focus();
        return null;
    }

    if (email.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite seu email </p>"
        email.focus();
        return null;
    }

    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push({
        nome : nome.value,
        email : email.value,
        senha : senha.value
    })

    localStorage.setItem("dados", JSON.stringify(dados));
    evento.preventDefault();
    mensagem.innerHTML = "<p> Parabéns Cadastro feito com sucesso </p>";

    setTimeout(()=>{
        window.location.assign("login.html");
    }, 3000);

}