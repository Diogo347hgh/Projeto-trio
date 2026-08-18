const sair = document.getElementById("sair");

sair.addEventListener("click", function () {

    localStorage.removeItem("usuarioLogado");

    window.location.href = "login.html";

});