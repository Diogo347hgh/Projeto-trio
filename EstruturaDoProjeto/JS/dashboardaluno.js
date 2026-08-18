document.addEventListener("DOMContentLoaded", function () {


    /* =================================
       MENU DO USUÁRIO
    ================================= */

    const btnOpcoes =
        document.getElementById("btnOpcoes");

    const menuUsuario =
        document.getElementById("menuUsuario");


    btnOpcoes.addEventListener("click", function (event) {

        event.stopPropagation();

        menuUsuario.classList.toggle("aberto");

    });


    /* Fecha o menu ao clicar fora */

    document.addEventListener("click", function () {

        menuUsuario.classList.remove("aberto");

    });


    /* Evita que clicar dentro feche */

    menuUsuario.addEventListener("click", function (event) {

        event.stopPropagation();

    });


    /* =================================
       SAIR
    ================================= */

    const sair =
        document.getElementById("sair");


    sair.addEventListener("click", function () {

        localStorage.removeItem("usuarioLogado");

        localStorage.removeItem("alunoLogado");

        window.location.href = "login.html";

    });


    /* =================================
       PERFIL
    ================================= */

    const perfil =
        document.getElementById("perfil");


    perfil.addEventListener("click", function () {

        alert("Área de perfil em desenvolvimento.");

    });


    /* =================================
       CONFIGURAÇÕES
    ================================= */

    const configuracoes =
        document.getElementById("configuracoes");


    configuracoes.addEventListener("click", function () {

        alert("Configurações em desenvolvimento.");

    });


    /* =================================
       DADOS DO ALUNO
       
       POR ENQUANTO SÃO EXEMPLOS.
       DEPOIS VAMOS PEGAR DO CADASTRO/BANCO.
    ================================= */

    const aluno = {

        nome: "João Silva",

        mediaGeral: 8.5,

        frequencia: 94,

        faltas: {

            programacao: 1,

            banco: 0,

            html: 1,

            javascript: 0

        },

        notas: {

            programacao: [8.5, 9.0],

            banco: [7.5, 8.5],

            html: [9.0, 9.5],

            javascript: [8.0, 8.5]

        },

        atividadesConcluidas: 8

    };


    /* =================================
       NOME DO ALUNO
    ================================= */

    const nomeUsuario =
        document.getElementById("nomeUsuario");

    const saudacao =
        document.getElementById("saudacao");

    const avatar =
        document.getElementById("avatar");


    nomeUsuario.textContent =
        aluno.nome;


    saudacao.textContent =
        `Olá, ${aluno.nome}! 👋`;


    /* Primeira letra do nome */

    avatar.textContent =
        aluno.nome.charAt(0).toUpperCase();


    /* =================================
       CARDS
    ================================= */

    document.getElementById("mediaGeral")
        .textContent =
        aluno.mediaGeral
            .toFixed(1)
            .replace(".", ",");


    document.getElementById("frequencia")
        .textContent =
        aluno.frequencia + "%";


    /* SOMAR FALTAS */

    const totalFaltas =
        Object.values(aluno.faltas)
            .reduce(
                (total, faltas) =>
                    total + faltas,
                0
            );


    document.getElementById("totalFaltas")
        .textContent =
        totalFaltas;


    document.getElementById("atividadesConcluidas")
        .textContent =
        aluno.atividadesConcluidas;


    /* =================================
       FUNÇÃO PARA CALCULAR MÉDIA
    ================================= */

    function calcularMedia(notas) {

        const soma =
            notas.reduce(
                (total, nota) =>
                    total + nota,
                0
            );

        return soma / notas.length;

    }


    /* =================================
       NOTAS
    ================================= */

    function colocarNotas(
        notas,
        id1,
        id2,
        idMedia
    ) {

        document.getElementById(id1)
            .textContent =
            notas[0]
                .toFixed(1)
                .replace(".", ",");


        document.getElementById(id2)
            .textContent =
            notas[1]
                .toFixed(1)
                .replace(".", ",");


        const media =
            calcularMedia(notas);


        document.getElementById(idMedia)
            .textContent =
            media
                .toFixed(1)
                .replace(".", ",");

    }


    colocarNotas(
        aluno.notas.programacao,
        "prog1",
        "prog2",
        "progMedia"
    );


    colocarNotas(
        aluno.notas.banco,
        "bd1",
        "bd2",
        "bdMedia"
    );


    colocarNotas(
        aluno.notas.html,
        "html1",
        "html2",
        "htmlMedia"
    );


    colocarNotas(
        aluno.notas.javascript,
        "js1",
        "js2",
        "jsMedia"
    );


    /* =================================
       FALTAS POR DISCIPLINA
    ================================= */

    document.getElementById(
        "faltaProgramacao"
    ).textContent =
        aluno.faltas.programacao;


    document.getElementById(
        "faltaBanco"
    ).textContent =
        aluno.faltas.banco;


    document.getElementById(
        "faltaHtml"
    ).textContent =
        aluno.faltas.html;


    document.getElementById(
        "faltaJavascript"
    ).textContent =
        aluno.faltas.javascript;

});