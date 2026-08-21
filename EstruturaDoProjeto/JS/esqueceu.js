const form = document.getElementById("formCadastro");
const tipoUsuario = document.getElementById("selecaoDeusuarios");
const professor = document.getElementById("professor");
const aluno = document.getElementById("aluno");
const coordenador = document.getElementById("coordenador");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("Nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSE").value;

    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais!");
        return;
    }

    if (tipoUsuario.value === "") {
        alert("Selecione o tipo de usuário!");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = "../EstruturaDoProjeto/login.html";

});

