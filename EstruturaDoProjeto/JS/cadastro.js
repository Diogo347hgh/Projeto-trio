const form = document.getElementById("formCadastro");

const tipoUsuario = document.getElementById("selecaoDeusuarios");

const aluno = document.getElementById("aluno");
const professor = document.getElementById("professor");
const coordenador = document.getElementById("coordenador");

// Quando mudar o tipo de usuário
tipoUsuario.addEventListener("change", function () {

    // Limpa os campos anteriores
    aluno.innerHTML = "";
    professor.innerHTML = "";
    coordenador.innerHTML = "";

    // Se for aluno
    if (tipoUsuario.value === "aluno") {

        aluno.innerHTML = `
            <label for="matricula">Matrícula:</label><br>
            <input type="text" id="matricula"><br><br>

            <label for="curso">Curso:</label><br>
            <input type="text" id="curso"><br><br>

            <label for="turma">Turma:</label><br>
            <input type="text" id="turma"><br><br>

            <label for="unidade">Unidade:</label><br>
            <input type="text" id="unidade"><br><br>

            <label for="turno">Turno:</label><br>
            <select id="turno">
                <option value="">Selecione</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
            </select><br><br>
        `;
    }

    // Se for professor
    if (tipoUsuario.value === "professor") {

        professor.innerHTML = `
            <label for="matriculaFuncional">Matrícula funcional:</label><br>
            <input type="text" id="matriculaFuncional"><br><br>

            <label for="unidadeProfessor">Unidade:</label><br>
            <input type="text" id="unidadeProfessor"><br><br>
        `;
    }

    // Se for coordenador
    if (tipoUsuario.value === "coordenador") {

        coordenador.innerHTML = `
            <label for="matriculaCoordenador">Matrícula funcional:</label><br>
            <input type="text" id="matriculaCoordenador"><br><br>

            <label for="area">Área de coordenação:</label><br>
            <input type="text" id="area"><br><br>

            <label for="unidadeCoordenador">Unidade:</label><br>
            <input type="text" id="unidadeCoordenador"><br><br>
        `;
    }
});


// Quando enviar o formulário
form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Pega os valores dos campos principais
    const nome = document.getElementById("Nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSE").value;

    // Verifica se os campos estão vazios
    if (
        nome === "" ||
        email === "" ||
        senha === "" ||
        confirmarSenha === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    // Verifica se as senhas são iguais
    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais!");
        return;
    }

    // Verifica se escolheu um tipo de usuário
    if (tipoUsuario.value === "") {
        alert("Selecione o tipo de usuário!");
        return;
    }

    // Verifica os campos do aluno
    if (tipoUsuario.value === "aluno") {

        const matricula = document.getElementById("matricula").value;
        const curso = document.getElementById("curso").value;
        const turma = document.getElementById("turma").value;
        const unidade = document.getElementById("unidade").value;
        const turno = document.getElementById("turno").value;

        if (
            matricula === "" ||
            curso === "" ||
            turma === "" ||
            unidade === "" ||
            turno === ""
        ) {
            alert("Preencha todas as informações do aluno!");
            return;
        }
    }

    // Verifica os campos do professor
    if (tipoUsuario.value === "professor") {

        const matriculaFuncional =
            document.getElementById("matriculaFuncional").value;

        const unidadeProfessor =
            document.getElementById("unidadeProfessor").value;

        if (
            matriculaFuncional === "" ||
            unidadeProfessor === ""
        ) {
            alert("Preencha todas as informações do professor!");
            return;
        }
    }

    // Verifica os campos do coordenador
    if (tipoUsuario.value === "coordenador") {

        const matriculaCoordenador =
            document.getElementById("matriculaCoordenador").value;

        const area =
            document.getElementById("area").value;

        const unidadeCoordenador =
            document.getElementById("unidadeCoordenador").value;

        if (
            matriculaCoordenador === "" ||
            area === "" ||
            unidadeCoordenador === ""
        ) {
            alert("Preencha todas as informações do coordenador!");
            return;
        }
    }

    // Cadastro concluído
    alert("Cadastro realizado com sucesso!");

    // Vai para a página de login
    window.location.href = "../EstruturaDoProjeto/login.html";
});