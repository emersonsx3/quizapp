let tema = "claro";

const botaoTema = document.querySelector(".tema button");
botaoTema.addEventListener("click", trocarTema);

const body = document.querySelector("body");

function trocarTema() {
    if(localStorage.getItem("tema")){
        tema = localStorage.getItem("tema");
    }

    if (tema === "claro") {
        body.classList.add("escuro");
        body.classList.remove("claro");
        tema = "escuro";
    } else {
        body.classList.remove("escuro");
        body.classList.add("claro");
        tema = "claro";
    }

    localStorage.setItem("tema", tema);
}

function verificarTema() {
    if (localStorage.getitem("tema")) {
        tema = localStorage.getItem("tema")
    }

    if(tema === "escuro") {
        body.classList.add("escuro")
    }
}

