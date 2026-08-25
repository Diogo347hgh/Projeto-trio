const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.getElementById("profileMenu");

const changeAccount = document.getElementById("changeAccount");
const logout = document.getElementById("logout");


// Abrir menu do perfil

profileBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    profileMenu.classList.toggle("open");
});


// Fechar menu ao clicar fora

document.addEventListener("click", function(event) {
    if (!event.target.closest(".profile")) {
        profileMenu.classList.remove("open");
    }
});


// Trocar de conta

changeAccount.addEventListener("click", function() {
    window.location.href = "login.html";
});


// Sair

logout.addEventListener("click", function() {

    if (confirm("Deseja realmente sair?")) {
        window.location.href = "login.html";
    }

});
