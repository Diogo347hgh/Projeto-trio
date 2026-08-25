const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.getElementById("profileMenu");

const changeAccount = document.getElementById("changeAccount");
const logout = document.getElementById("logout");

const linkBtn = document.getElementById("linkBtn");


// Menu do perfil

profileBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    profileMenu.classList.toggle("open");

});


// Fechar menu

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


// Vincular professor

linkBtn.addEventListener("click", function() {

    const teacher = document.getElementById("teacher").value;
    const turma = document.getElementById("class").value;
    const subject = document.getElementById("subject").value;

    alert(
        teacher + " foi vinculado à turma " +
        turma + " na disciplina " + subject + "."
    );

});
