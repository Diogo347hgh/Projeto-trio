const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.getElementById("profileMenu");

const changeAccount = document.getElementById("changeAccount");
const logout = document.getElementById("logout");

const notesBtn = document.getElementById("notesBtn");
const frequencyBtn = document.getElementById("frequencyBtn");

const notesArea = document.getElementById("notesArea");
const frequencyArea = document.getElementById("frequencyArea");

const saveNotes = document.getElementById("saveNotes");
const saveFrequency = document.getElementById("saveFrequency");


// PERFIL

profileBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    profileMenu.classList.toggle("open");

});


document.addEventListener("click", function(event) {

    if (!event.target.closest(".profile")) {
        profileMenu.classList.remove("open");
    }

});


// TROCAR DE CONTA

changeAccount.addEventListener("click", function() {

    window.location.href = "login.html";

});


// SAIR

logout.addEventListener("click", function() {

    if (confirm("Deseja realmente sair?")) {
        window.location.href = "login.html";
    }

});


// ABRIR NOTAS

notesBtn.addEventListener("click", function() {

    notesArea.style.display = "block";
    frequencyArea.style.display = "none";

    notesArea.scrollIntoView({
        behavior: "smooth"
    });

});


// ABRIR FALTAS

frequencyBtn.addEventListener("click", function() {

    frequencyArea.style.display = "block";
    notesArea.style.display = "none";

    frequencyArea.scrollIntoView({
        behavior: "smooth"
    });

});


// SALVAR NOTAS

saveNotes.addEventListener("click", function() {

    alert("Notas salvas com sucesso!");

});


// SALVAR FREQUÊNCIA

saveFrequency.addEventListener("click", function() {

    alert("Frequência salva com sucesso!");

});
