// =======================
// Navegação entre exercícios
// =======================
const btnContador = document.getElementById("btnContador");
const btnGaleria = document.getElementById("btnGaleria");
const secoes = document.querySelectorAll(".exercicio");

btnContador.addEventListener("click", () => mostrarExercicio("contador"));
btnGaleria.addEventListener("click", () => mostrarExercicio("galeria"));

function mostrarExercicio(id) {
    secoes.forEach(secao => {
        secao.classList.remove("ativo");
        if (secao.id === id) secao.classList.add("ativo");
    });
}

// =======================
// Contador Interativo
// =======================
const inputPasso = document.getElementById("passo");
const spanValor = document.getElementById("valorContador");
const incremento = document.getElementById("incremento");
const decremento = document.getElementById("decremento");

let resultado = 0;

function getPasso() {
    return inputPasso.value ? Number(inputPasso.value) : 1;
}

function atualizarValor() {
    spanValor.textContent = resultado;
}

incremento.addEventListener("click", () => {
    resultado += getPasso();
    atualizarValor();
});

decremento.addEventListener("click", () => {
    resultado -= getPasso();
    atualizarValor();
});

// =======================
// Tema Claro / Escuro
// =======================
const btnClaro = document.getElementById("btnClaro");
const btnEscuro = document.getElementById("btnEscuro");
const body = document.body;

btnClaro.addEventListener("click", () => body.setAttribute("data-theme", "claro"));
btnEscuro.addEventListener("click", () => body.setAttribute("data-theme", "escuro"));

// =======================
// Galeria de Imagens
// =======================
const imagens = [
    "./assets/img/angular.png",
    "./assets/img/django.png",
    "./assets/img/laravel.png",
    "./assets/img/nodejs.png",
    "./assets/img/react.png",
    "./assets/img/svelte.png",
    "./assets/img/vue.png"
];

const miniaturasContainer = document.getElementById("miniaturas");
const imagemPrincipal = document.getElementById("imagem-principal");

function carregarMiniaturas() {
    imagens.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Imagem ${index + 1}`;
        img.classList.add("miniatura");
        if (index === 0) img.classList.add("ativa");
        img.addEventListener("click", () => mudarImagem(index));
        miniaturasContainer.appendChild(img);
    });
}

function mudarImagem(index) {
    imagemPrincipal.src = imagens[index];
    document.querySelectorAll(".miniatura").forEach(mini => mini.classList.remove("ativa"));
    document.querySelectorAll(".miniatura")[index].classList.add("ativa");
}

// Inicializa a galeria
carregarMiniaturas();
