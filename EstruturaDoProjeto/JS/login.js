// Pegando os campos de email e senha
const campos = document.querySelectorAll(".dados input");

// Pegando o botão Entrar
const botaoEntrar = document.querySelector(".entrar button");

// Quando clicar no botão Entrar
botaoEntrar.addEventListener("click", function (event) {

    event.preventDefault();

    // Pegando os valores digitados
    const email = campos[0].value;
    const senha = campos[1].value;

    // Verifica se os campos estão vazios
    if (email === "" || senha === "") {
        alert("Preencha o email e a senha!");
        return;
    }

    // Se estiver tudo preenchido
    alert("Login realizado com sucesso!");

    window.location.href = "../EstruturaDoProjeto/dashboard.html";
});