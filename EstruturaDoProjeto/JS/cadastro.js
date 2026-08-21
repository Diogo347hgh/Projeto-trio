const form = document.getElementById("formCadastro");
const tipoUsuario = document.getElementById("selecaoDeusuarios");
const professor = document.getElementById("professor");
const aluno = document.getElementById("aluno");
const coordenador = document.getElementById("coordenador");

tipoUsuario.addEventListener("change", function () {
    professor.innerHTML = "";
    aluno.innerHTML = "";
    coordenador.innerHTML = "";

    if (tipoUsuario.value === "professor") {professor.innerHTML = `
            <label>Matrícula:</label><br>
            <input type="text"><br>

            <label>Disciplina:</label><br>
            <input type="text"><br>`;
    }

    if (tipoUsuario.value === "aluno") {aluno.innerHTML = `
            <label>Matrícula:</label><br>
            <input type="text"><br>

            <label>Turma:</label><br>
            <input type="text"><br>`;
    }

    if (tipoUsuario.value === "coordenador") {coordenador.innerHTML = `
            <label>Matrícula:</label><br>
            <input type="text"><br>

            <label>Área:</label><br>
            <input type="text"><br>`;
    }

});

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