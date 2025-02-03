// Seleciona os elementos do menu
const menuBtn = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav ul li a');

// Abrir e fechar o menu ao clicar no botão
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('visible');  // Expande ou recolhe o menu
    menuBtn.classList.toggle('active');   // Transforma o ícone em "X"
});

// Fechar o menu ao clicar em qualquer link dentro dele
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('visible');
        menuBtn.classList.remove('active');
    });
});

// Seleciona o elemento de fundo escuro
const overlay = document.querySelector('.overlay');

// Função para abrir o menu e ativar o fundo escuro
menuBtn.addEventListener('click', () => {
    overlay.classList.toggle('visible');
});

// Fechar o menu ao clicar no fundo escuro
overlay.addEventListener('click', () => {
    navMenu.classList.remove('visible');
    menuBtn.classList.remove('active');
    overlay.classList.remove('visible');
});

// Fechar o menu ao clicar em um link e remover o fundo escuro
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('visible');
        menuBtn.classList.remove('active');
        overlay.classList.remove('visible');
    });
});

document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !menuBtn.contains(event.target)) {
        navMenu.classList.remove('visible');
        overlay.classList.remove('visible');
        menuBtn.classList.remove('active');
    }
});

// Atualiza o ano automaticamente no Copyright
document.getElementById("year").textContent = new Date().getFullYear();

// Criando luzes de aura laterais dentro da main
["aura-left", "aura-right", "aura-bottom"].forEach(className => {
    let aura = document.createElement("div");
    aura.classList.add("aura", className);
    document.querySelector("main").appendChild(aura);
});

// Seleciona o botão e a seção "Hero"
const ctaButton = document.getElementById("cta-button");
const heroSection = document.querySelector(".hero");

// Função para verificar se a "Hero" está visível
function checkHeroVisibility() {
    const heroRect = heroSection.getBoundingClientRect();
    if (heroRect.bottom <= 0) {
        ctaButton.style.display = "block"; // Mostra o botão
    } else {
        ctaButton.style.display = "none"; // Esconde o botão
    }
}

// Detecta a rolagem e verifica a visibilidade da "Hero"
window.addEventListener("scroll", checkHeroVisibility);

// Executa a verificação no carregamento da página
checkHeroVisibility();