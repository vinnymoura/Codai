const nome = "Vinícius Moura";
var cargo = "Estudante";

var nome_html= document.getElementById("nome-no-html");
var cargo_no_html = document.getElementById("cargo-no-html");

var sobre = document.getElementById("informacao-inicial")
var projetos = document.getElementById("informacao-dos-projetos");

function colocar_nome_no_html(nome) {
    nome_html.innerHTML = nome;
};



function colocar_cargo_no_html (cargo) {
    cargo_no_html.innerHTML = cargo;
};

function click_projetos() {
    projetos.style.display = "block";
    sobre.style.display = "none";
}

function click_sobre () {
    sobre.style.display = "block";
    projetos.style.display = "none"
}



colocar_nome_no_html (nome);
colocar_cargo_no_html (cargo); 