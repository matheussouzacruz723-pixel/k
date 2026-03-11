/**

 * ========================================

 * ATLAS DA MENTE HUMANA - script.js

 * JavaScript Puro para Home Page

 * ========================================

 * Funcionalidades:

 * - Menu responsivo

 * - Animações suaves ao entrar na tela

 * - Scroll suave

 * - Interações nos cards

 * - Efeitos no mapa da mente

 * - Botão voltar ao topo

 * - Destaque visual ao passar o mouse nos elementos do mapa

 * - Busca

 * - Exploração de conceitos

 */



// ========================================

// CONFIGURAÇÕES

// ========================================

const CONFIG = {

    scrollOffset: 80,

    animationThreshold: 0.1,

    animationDelay: 100,

    menuBreakpoint: 768,

    mapNodeHoverScale: 1.15,

    mapLineHoverWidth: 3

};



// ========================================

// CONCEITOS PARA EXPLORAÇÃO

// ========================================

const concepts = [

    {

        title: "Ansiedade",

        icon: "😰",

        description: "A ansiedade é uma resposta emocional caracterizada por sentimentos de tensão, preocupação e medo antecipado sobre eventos futuros. É uma emoção universal que todos experimentam em algum momento da vida.",

        path: "topics/ansiedade.html",

        category: "Emoções"

    },

    {

        title: "Teoria do Apego",

        icon: "💕",

        description: "A teoria do apego, desenvolvida por John Bowlby, explica como os vínculos formados na primeira infância influenciam nossos relacionamentos ao longo da vida.",

        path: "topics/apego.html",

        category: "Relações"

    },

    {

        title: "Trauma",

        icon: "🧠",

        description: "O trauma é uma resposta emocional a eventos traumáticos que podem deixar marcas profundas na psique, afetando padrões de pensamento e comportamento.",

        path: "topics/trauma-infantil.html",

        category: "Trauma"

    },

    {

        title: "Vieses Cognitivos",

        icon: "🔄",

        description: "Os vieses cognitivos são padrões sistemáticos de desvio da racionalidade no julgamento, muitas vezes levando a decisões irracionais.",

        path: "topics/vieses-cognitivos.html",

        category: "Cognição"

    },

    {

        title: "Big Five",

        icon: "⭐",

        description: "O modelo Big Five é a teoria mais aceita sobre a estrutura da personalidade humana, descrevendo cinco traços fundamentais.",

        path: "topics/bigfive.html",

        category: "Personalidade"

    },

    {

        title: "Empatia",

        icon: "💜",

        description: "A empatia é a capacidade de compreender e compartilhar os sentimentos de outra pessoa, fundamental para conexões humanas saudáveis.",

        path: "topics/empatia.html",

        category: "Personalidade"

    },

    {

        title: "Memória",

        icon: "🧬",

        description: "A memória é o processo pelo qual informações são codificadas, armazenadas e recuperadas, fundamental para nossa identidade e aprendizado.",

        path: "topics/memoria.html",

        category: "Cognição"

    },

    {

        title: "Medo",

        icon: "😨",

        description: "O medo é uma emoção primária que nos protege de perigos, mas que pode se tornar disfuncional quando excessivo.",

        path: "topics/medo.html",

        category: "Emoções"

    },

    {

        title: "Narcisismo",

        icon: "🪞",

        description: "O narcisismo refere-se a um padrão de grandiosidade, necessidade de admiração e falta de empatia.",

        path: "topics/narcisismo.html",

        category: "Personalidade"

    },

    {

        title: "Dissociação",

        icon: "🌊",

        description: "A dissociação é um mecanismo de defesa que separa pensamentos, sentimentos ou experiências de forma consciente.",

        path: "topics/dissociacao.html",

        category: "Trauma"

    }

];



// ========================================

// INICIALIZAÇÃO

// ========================================

document.addEventListener('DOMContentLoaded', () => {

    initMenu();

    initSmoothScroll();

    initScrollAnimations();

    initBackToTop();

    initMapInteractions();

    initCardInteractions();

    initSearch();

    initExplorationModal();

    initFadeInAnimations();

    

    // Inicializar Perfil Psicológico (se estiver na página correta)

    if (typeof Profile !== 'undefined') {

        Profile.init();

    }

    

    // Inicializar Simulador Psicológico (se estiver na página correta)

    if (typeof Simulator !== 'undefined') {

        Simulator.init();

    }

});



// ========================================

// MENU RESPONSIVO

// ========================================

function initMenu() {

    const menuToggle = document.getElementById('menuToggle');

    const navLinks = document.getElementById('navLinks');

    

    if (!menuToggle || !navLinks) return;



    // Use click event for both desktop and mobile

    const toggleMenu = (e) => {

        e.preventDefault();

        menuToggle.classList.toggle('active');

        navLinks.classList.toggle('active');

        

        // Animação do hamburger

        const spans = menuToggle.querySelectorAll('span');

        if (menuToggle.classList.contains('active')) {

            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';

            spans[1].style.opacity = '0';

            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';

        } else {

            spans[0].style.transform = 'none';

            spans[1].style.opacity = '1';

            spans[2].style.transform = 'none';

        }

    };



    // Add click event listener (works for both desktop and mobile)

    menuToggle.addEventListener('click', toggleMenu);



    // Fechar menu ao clicar em um link

    const closeMenu = () => {

        menuToggle.classList.remove('active');

        navLinks.classList.remove('active');

        

        const spans = menuToggle.querySelectorAll('span');

        spans[0].style.transform = 'none';

        spans[1].style.opacity = '1';

        spans[2].style.transform = 'none';

    };



    navLinks.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', closeMenu);

    });



    // Menu fixo com transição

    const navbar = document.querySelector('.navbar');

    if (navbar) {

        let lastScroll = 0;

        

        window.addEventListener('scroll', () => {

            const currentScroll = window.pageYOffset;

            

            if (currentScroll > 100) {

                navbar.classList.add('scrolled');

            } else {

                navbar.classList.remove('scrolled');

            }

            

            lastScroll = currentScroll;

        });

    }

}



// ========================================

// SCROLL SUAVE

// ========================================

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function(e) {

            const href = this.getAttribute('href');

            

            if (href === '#') return;

            

            const target = document.querySelector(href);

            

            if (target) {

                e.preventDefault();

                

                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - CONFIG.scrollOffset;

                

                window.scrollTo({

                    top: targetPosition,

                    behavior: 'smooth'

                });

            }

        });

    });



    // Scroll suave para links internos

    document.querySelectorAll('.area-card, .trilha-card, .featured-card, .mapa-node').forEach(el => {

        el.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

    });

}



// ========================================

// ANIMAÇÕES AO ENTRAR NA TELA (Intersection Observer)

// ========================================

function initScrollAnimations() {

    const animatedElements = document.querySelectorAll(

        '.area-card, .trilha-card, .featured-card, .how-card, .content-block, .mapa-node, .section-header, .conceito-card'

    );



    if (!animatedElements.length) return;



    const observerOptions = {

        root: null,

        rootMargin: '0px',

        threshold: CONFIG.animationThreshold

    };



    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                // Adicionar delay baseado no índice

                setTimeout(() => {

                    entry.target.classList.add('animate-in');

                }, index * CONFIG.animationDelay);

                

                observer.unobserve(entry.target);

            }

        });

    }, observerOptions);



    animatedElements.forEach(el => {

        el.classList.add('animate-on-scroll');

        observer.observe(el);

    });



    // Adicionar estilos das animações

    addAnimationStyles();

}



function addAnimationStyles() {

    const style = document.createElement('style');

    style.textContent = `

        .animate-on-scroll {

            opacity: 0;

            transform: translateY(30px);

            transition: opacity 0.6s ease, transform 0.6s ease;

        }

        

        .animate-on-scroll.animate-in {

            opacity: 1;

            transform: translateY(0);

        }

        

        .area-card.animate-on-scroll,

        .trilha-card.animate-on-scroll,

        .featured-card.animate-on-scroll,

        .how-card.animate-on-scroll,

        .conceito-card.animate-on-scroll {

            transform: translateY(40px) scale(0.95);

        }

        

        .area-card.animate-in,

        .trilha-card.animate-in,

        .featured-card.animate-in,

        .how-card.animate-in,

        .conceito-card.animate-in {

            transform: translateY(0) scale(1);

        }

        

        .mapa-node.animate-on-scroll {

            transform: scale(0.5);

        }

        

        .mapa-node.animate-in {

            transform: scale(1);

        }

        

        .section-header.animate-on-scroll {

            transform: translateY(20px);

        }

        

        .section-header.animate-in {

            transform: translateY(0);

        }

        

        /* Stagger delays for grid items */

        .areas-grid .area-card:nth-child(1) { transition-delay: 0ms; }

        .areas-grid .area-card:nth-child(2) { transition-delay: 100ms; }

        .areas-grid .area-card:nth-child(3) { transition-delay: 200ms; }

        .areas-grid .area-card:nth-child(4) { transition-delay: 300ms; }

        .areas-grid .area-card:nth-child(5) { transition-delay: 400ms; }

        .areas-grid .area-card:nth-child(6) { transition-delay: 500ms; }

        

        .trilhas-grid .trilha-card:nth-child(1) { transition-delay: 0ms; }

        .trilhas-grid .trilha-card:nth-child(2) { transition-delay: 150ms; }

        .trilhas-grid .trilha-card:nth-child(3) { transition-delay: 300ms; }

        

        .featured-grid .featured-card:nth-child(1) { transition-delay: 0ms; }

        .featured-grid .featured-card:nth-child(2) { transition-delay: 100ms; }

        .featured-grid .featured-card:nth-child(3) { transition-delay: 200ms; }

        .featured-grid .featured-card:nth-child(4) { transition-delay: 300ms; }

        .featured-grid .featured-card:nth-child(5) { transition-delay: 400ms; }

        

        .how-grid .how-card:nth-child(1) { transition-delay: 0ms; }

        .how-grid .how-card:nth-child(2) { transition-delay: 100ms; }

        .how-grid .how-card:nth-child(3) { transition-delay: 200ms; }

        .how-grid .how-card:nth-child(4) { transition-delay: 300ms; }

        

        .conceitos-grid .conceito-card:nth-child(1) { transition-delay: 0ms; }

        .conceitos-grid .conceito-card:nth-child(2) { transition-delay: 100ms; }

        .conceitos-grid .conceito-card:nth-child(3) { transition-delay: 200ms; }

        .conceitos-grid .conceito-card:nth-child(4) { transition-delay: 300ms; }

        .conceitos-grid .conceito-card:nth-child(5) { transition-delay: 400ms; }

        .conceitos-grid .conceito-card:nth-child(6) { transition-delay: 500ms; }

    `;

    document.head.appendChild(style);

}



// ========================================

// BOTÃO VOLTAR AO TOPO

// ========================================

function initBackToTop() {

    const backToTopBtn = document.getElementById('backToTop');

    

    if (!backToTopBtn) return;



    // Mostrar/ocultar baseado no scroll

    window.addEventListener('scroll', () => {

        if (window.pageYOffset > 300) {

            backToTopBtn.classList.add('visible');

        } else {

            backToTopBtn.classList.remove('visible');

        }

    });



    // Clique para voltar ao topo

    backToTopBtn.addEventListener('click', () => {

        window.scrollTo({

            top: 0,

            behavior: 'smooth'

        });

    });



    // Adicionar estilos

    addBackToTopStyles();

}



function addBackToTopStyles() {

    const style = document.createElement('style');

    style.textContent = `

        .back-to-top {

            position: fixed;

            bottom: 30px;

            right: 30px;

            width: 50px;

            height: 50px;

            border-radius: 50%;

            background: var(--gradient-primary, linear-gradient(135deg, #6366f1, #8b5cf6));

            border: none;

            cursor: pointer;

            display: flex;

            align-items: center;

            justify-content: center;

            opacity: 0;

            visibility: hidden;

            transform: translateY(20px);

            transition: all 0.3s ease;

            z-index: 1000;

            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);

        }

        

        .back-to-top.visible {

            opacity: 1;

            visibility: visible;

            transform: translateY(0);

        }

        

        .back-to-top:hover {

            transform: translateY(-5px);

            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);

        }

        

        .back-to-top svg {

            width: 24px;

            height: 24px;

            color: white;

        }

    `;

    document.head.appendChild(style);

}



// ========================================

// INTERAÇÕES DO MAPA DA MENTE

// ========================================

function initMapInteractions() {

    const mapaNodes = document.querySelectorAll('.mapa-node');

    const mapaLines = document.querySelectorAll('.mapa-line');

    

    if (!mapaNodes.length) return;



    // Efeito de hover nos nós

    mapaNodes.forEach(node => {

        node.addEventListener('mouseenter', () => {

            // Aumentar escala

            node.style.transform = 'scale(1.15)';

            node.style.zIndex = '10';

            

            // Destacar linhas conectadas

            highlightConnectedLines(node, mapaLines, true);

            

            // Efeito de glow

            const circle = node.querySelector('.node-circle');

            if (circle) {

                circle.style.filter = 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.8))';

            }

        });



        node.addEventListener('mouseleave', () => {

            // Resetar escala

            node.style.transform = 'scale(1)';

            node.style.zIndex = '1';

            

            // Remover destaque das linhas

            highlightConnectedLines(node, mapaLines, false);

            

            // Remover glow

            const circle = node.querySelector('.node-circle');

            if (circle) {

                circle.style.filter = 'none';

            }

        });

    });



    // Animação de entrada dos nós

    animateMapEntrance(mapaNodes);

}



function highlightConnectedLines(node, lines, highlight) {

    const nodeText = node.querySelector('.node-text');

    if (!nodeText) return;

    

    const nodeLabel = nodeText.textContent.toLowerCase();

    

    lines.forEach(line => {

        // Verificar se a linha está conectada ao nó

        const x1 = line.getAttribute('x1');

        const y1 = line.getAttribute('y1');

        const x2 = line.getAttribute('x2');

        const y2 = line.getAttribute('y2');

        

        // Coordenadas aproximadas dos nós

        const nodeCoords = {

            'emoções': { x: 200, y: 180 },

            'cognição': { x: 600, y: 180 },

            'trauma': { x: 150, y: 350 },

            'relações': { x: 650, y: 350 },

            'personalidade': { x: 280, y: 420 },

            'decisões': { x: 520, y: 420 }

        };

        

        const coords = nodeCoords[nodeLabel];

        if (coords) {

            const isConnected = (

                (Math.abs(x1 - coords.x) < 50 && Math.abs(y1 - coords.y) < 50) ||

                (Math.abs(x2 - coords.x) < 50 && Math.abs(y2 - coords.y) < 50)

            );

            

            if (isConnected) {

                line.style.stroke = highlight ? '#6366f1' : '';

                line.style.strokeWidth = highlight ? '3' : '';

                line.style.opacity = highlight ? '1' : '';

                line.style.transition = 'all 0.3s ease';

            }

        }

    });

}



function animateMapEntrance(nodes) {

    // Adicionar classe para animação inicial

    nodes.forEach((node, index) => {

        node.style.opacity = '0';

        node.style.transform = 'scale(0.5)';

        

        setTimeout(() => {

            node.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';

            node.style.opacity = '1';

            node.style.transform = 'scale(1)';

        }, 500 + (index * 150));

    });

}



// ========================================

// INTERAÇÕES NOS CARDS

// ========================================

function initCardInteractions() {

    // Cards de área

    const areaCards = document.querySelectorAll('.area-card');

    areaCards.forEach(card => {

        card.addEventListener('mouseenter', () => {

            card.style.transform = 'translateY(-8px)';

        });

        

        card.addEventListener('mouseleave', () => {

            card.style.transform = 'translateY(0)';

        });

    });



    // Cards de trilha

    const trilhaCards = document.querySelectorAll('.trilha-card');

    trilhaCards.forEach(card => {

        card.addEventListener('mouseenter', () => {

            const icon = card.querySelector('.trilha-icon');

            if (icon) {

                icon.style.transform = 'scale(1.2) rotate(5deg)';

            }

        });

        

        card.addEventListener('mouseleave', () => {

            const icon = card.querySelector('.trilha-icon');

            if (icon) {

                icon.style.transform = 'scale(1) rotate(0)';

            }

        });

    });



    // Cards em destaque

    const featuredCards = document.querySelectorAll('.featured-card');

    featuredCards.forEach(card => {

        card.addEventListener('mouseenter', () => {

            const link = card.querySelector('.featured-link');

            if (link) {

                link.style.transform = 'translateX(5px)';

            }

        });

        

        card.addEventListener('mouseleave', () => {

            const link = card.querySelector('.featured-link');

            if (link) {

                link.style.transform = 'translateX(0)';

            }

        });

    });



    // Como funciona cards

    const howCards = document.querySelectorAll('.how-card');

    howCards.forEach((card, index) => {

        card.addEventListener('mouseenter', () => {

            const number = card.querySelector('.how-number');

            if (number) {

                number.style.transform = 'scale(1.2)';

                number.style.background = 'var(--accent-primary)';

                number.style.color = 'white';

            }

        });

        

        card.addEventListener('mouseleave', () => {

            const number = card.querySelector('.how-number');

            if (number) {

                number.style.transform = 'scale(1)';

                number.style.background = '';

                number.style.color = '';

            }

        });

    });



    // Cards de conceitos

    const conceitoCards = document.querySelectorAll('.conceito-card');

    conceitoCards.forEach(card => {

        card.addEventListener('mouseenter', () => {

            const icon = card.querySelector('.conceito-icon');

            if (icon) {

                icon.style.transform = 'scale(1.2) rotate(5deg)';

            }

        });

        

        card.addEventListener('mouseleave', () => {

            const icon = card.querySelector('.conceito-icon');

            if (icon) {

                icon.style.transform = 'scale(1) rotate(0)';

            }

        });

    });

}



// ========================================

// BUSCA

// ========================================

function initSearch() {

    const searchInput = document.getElementById('searchInput');

    const searchResults = document.getElementById('searchResults');

    

    if (!searchInput || !searchResults) return;



    // Dados de busca

    const searchData = [

        { title: 'Ansiedade', path: 'topics/ansiedade.html', category: 'Emoções' },

        { title: 'Big Five', path: 'topics/bigfive.html', category: 'Personalidade' },

        { title: 'Teoria do Apego', path: 'topics/apego.html', category: 'Relações' },

        { title: 'Trauma Infantil', path: 'topics/trauma-infantil.html', category: 'Trauma' },

        { title: 'Vieses Cognitivos', path: 'topics/vieses-cognitivos.html', category: 'Cognição' },

        { title: 'Emoções', path: 'pages/emocoes.html', category: 'Área' },

        { title: 'Personalidade', path: 'pages/personalidade.html', category: 'Área' },

        { title: 'Cognição', path: 'pages/cognicao.html', category: 'Área' },

        { title: 'Trauma', path: 'pages/trauma.html', category: 'Área' },

        { title: 'Relações Humanas', path: 'pages/relacoes.html', category: 'Área' },

        { title: 'Tomada de Decisão', path: 'pages/decisoes.html', category: 'Área' },

        { title: 'Medo', path: 'topics/medo.html', category: 'Emoções' },

        { title: 'Raiva', path: 'topics/raiva.html', category: 'Emoções' },

        { title: 'Tristeza', path: 'topics/tristeza.html', category: 'Emoções' },

        { title: 'Alegria', path: 'topics/alegria.html', category: 'Emoções' },

        { title: 'Culpa', path: 'topics/culpa.html', category: 'Emoções' },

        { title: 'Introversão e Extroversão', path: 'topics/introversao-extroversao.html', category: 'Personalidade' },

        { title: 'Narcisismo', path: 'topics/narcisismo.html', category: 'Personalidade' },

        { title: 'Empatia', path: 'topics/empatia.html', category: 'Personalidade' },

        { title: 'Memória', path: 'topics/memoria.html', category: 'Cognição' },

        { title: 'Dissociação', path: 'topics/dissociacao.html', category: 'Trauma' },

        { title: 'Manipulação', path: 'topics/manipulacao.html', category: 'Relações' },

        { title: 'Perfil Psicológico', path: 'perfil.html', category: 'Ferramentas' },

        { title: 'Simulador Psicológico', path: 'simulador.html', category: 'Ferramentas' }

    ];



    searchInput.addEventListener('input', (e) => {

        const query = e.target.value.toLowerCase().trim();

        

        if (query.length < 2) {

            searchResults.classList.remove('active');

            searchResults.innerHTML = '';

            return;

        }



        const filtered = searchData.filter(item => 

            item.title.toLowerCase().includes(query) ||

            item.category.toLowerCase().includes(query)

        );



        if (filtered.length > 0) {

            searchResults.innerHTML = filtered.map(item => `

                <a href="${item.path}" class="search-result-item">

                    <span class="result-title">${item.title}</span>

                    <span class="result-category">${item.category}</span>

                </a>

            `).join('');

            searchResults.classList.add('active');

        } else {

            searchResults.innerHTML = '<div class="search-no-results">Nenhum resultado encontrado</div>';

            searchResults.classList.add('active');

        }

    });



    // Fechar resultados ao clicar fora

    document.addEventListener('click', (e) => {

        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {

            searchResults.classList.remove('active');

        }

    });



    // Mostrar resultados ao focar no input

    searchInput.addEventListener('focus', () => {

        if (searchInput.value.trim().length >= 2) {

            searchResults.classList.add('active');

        }

    });



    // Adicionar estilos da busca

    addSearchStyles();

}



function addSearchStyles() {

    const style = document.createElement('style');

    style.textContent = `

        .search-results {

            position: absolute;

            top: 100%;

            left: 0;

            right: 0;

            background: var(--bg-card, #15151f);

            border: 1px solid var(--border-color, rgba(255,255,255,0.08));

            border-radius: var(--radius-lg, 16px);

            margin-top: 8px;

            max-height: 300px;

            overflow-y: auto;

            opacity: 0;

            visibility: hidden;

            transform: translateY(-10px);

            transition: all 0.3s ease;

            z-index: 100;

        }

        

        .search-results.active {

            opacity: 1;

            visibility: visible;

            transform: translateY(0);

        }

        

        .search-result-item {

            display: flex;

            justify-content: space-between;

            align-items: center;

            padding: 12px 16px;

            color: var(--text-primary, #f8fafc);

            text-decoration: none;

            transition: background 0.2s ease;

        }

        

        .search-result-item:hover {

            background: var(--bg-card-hover, #1c1c28);

        }

        

        .search-result-item:first-child {

            border-radius: var(--radius-lg, 16px) var(--radius-lg, 16px) 0 0;

        }

        

        .search-result-item:last-child {

            border-radius: 0 0 var(--radius-lg, 16px) var(--radius-lg, 16px);

        }

        

        .result-title {

            font-weight: 500;

        }

        

        .result-category {

            font-size: 0.75rem;

            color: var(--text-muted, #64748b);

            background: var(--bg-tertiary, #1a1a25);

            padding: 2px 8px;

            border-radius: var(--radius-full, 9999px);

        }

        

        .search-no-results {

            padding: 16px;

            text-align: center;

            color: var(--text-muted, #64748b);

        }

    `;

    document.head.appendChild(style);

}



// ========================================

// EXPLORATION MODAL

// ========================================

function initExplorationModal() {

    const explorarBtn = document.getElementById('explorarMenteBtn');

    if (!explorarBtn) return;



    let modal = document.getElementById('explorationModal');

    if (!modal) {

        modal = createExplorationModal();

        document.body.appendChild(modal);

    }



    explorarBtn.addEventListener('click', () => {

        showRandomConcept(modal);

    });



    const closeBtn = modal.querySelector('.exploration-close');

    closeBtn.addEventListener('click', () => closeModal(modal));



    modal.addEventListener('click', (e) => {

        if (e.target === modal) closeModal(modal);

    });



    document.addEventListener('keydown', (e) => {

        if (e.key === 'Escape' && modal.classList.contains('active')) {

            closeModal(modal);

        }

    });

}



function createExplorationModal() {

    const modal = document.createElement('div');

    modal.id = 'explorationModal';

    modal.className = 'exploration-modal';

    modal.innerHTML = `

        <button class="exploration-close" aria-label="Fechar">

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

                <path d="M18 6L6 18M6 6l12 12"/>

            </svg>

        </button>

        <div class="exploration-content">

            <div class="exploration-icon"></div>

            <span class="exploration-tag"></span>

            <h2 class="exploration-title"></h2>

            <p class="exploration-description"></p>

            <div class="exploration-actions">

                <a href="#" class="btn btn-primary exploration-link">

                    Ler mais

                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

                        <path d="M5 12h14M12 5l7 7-7 7"/>

                    </svg>

                </a>

                <button class="btn btn-secondary" id="outroConceptBtn">

                    Ver outro conceito

                </button>

            </div>

        </div>

    `;



    const outroBtn = modal.querySelector('#outroConceptBtn');

    outroBtn.addEventListener('click', (e) => {

        e.preventDefault();

        showRandomConcept(modal);

    });



    return modal;

}



function showRandomConcept(modal) {

    const randomIndex = Math.floor(Math.random() * concepts.length);

    const concept = concepts[randomIndex];



    const icon = modal.querySelector('.exploration-icon');

    const tag = modal.querySelector('.exploration-tag');

    const title = modal.querySelector('.exploration-title');

    const description = modal.querySelector('.exploration-description');

    const link = modal.querySelector('.exploration-link');



    icon.textContent = concept.icon;

    tag.textContent = concept.category;

    title.textContent = concept.title;

    description.textContent = concept.description;

    link.href = concept.path;



    openModal(modal);

}



function openModal(modal) {

    modal.classList.add('active');

    document.body.style.overflow = 'hidden';

}



function closeModal(modal) {

    modal.classList.remove('active');

    document.body.style.overflow = '';

}



// ========================================

// FADE-IN ANIMATIONS ON PAGE LOAD

// ========================================

function initFadeInAnimations() {

    const heroContent = document.querySelector('.hero-content');

    if (heroContent) {

        heroContent.classList.add('fade-in');

        addFadeInStyles();

    }

}



function addFadeInStyles() {

    if (document.getElementById('fadeInStyles')) return;

    

    const style = document.createElement('style');

    style.id = 'fadeInStyles';

    style.textContent = `

        .fade-in {

            animation: fadeIn 1s ease forwards;

        }

        

        @keyframes fadeIn {

            from {

                opacity: 0;

                transform: translateY(30px);

            }

            to {

                opacity: 1;

                transform: translateY(0);

            }

        }

        

        .hero-title {

            animation: fadeIn 1s ease 0.2s forwards;

            opacity: 0;

        }

        

        .hero-subtitle {

            animation: fadeIn 1s ease 0.4s forwards;

            opacity: 0;

        }

        

        .hero-buttons {

            animation: fadeIn 1s ease 0.6s forwards;

            opacity: 0;

        }

        

        .hero-stats {

            animation: fadeIn 1s ease 0.8s forwards;

            opacity: 0;

        }

        

        .hero-scroll {

            animation: fadeIn 1s ease 1s forwards, float 3s ease-in-out 2s infinite;

            opacity: 0;

        }

        

        @keyframes float {

            0%, 100% { transform: translateX(-50%) translateY(0); }

            50% { transform: translateX(-50%) translateY(-10px); }

        }

    `;

    document.head.appendChild(style);

}



// ========================================

// EXPORTAÇÃO PARA USO GLOBAL

// ========================================

window.AtlasApp = {

    CONFIG,

    initMenu,

    initSmoothScroll,

    initScrollAnimations,

    initBackToTop,

    initMapInteractions,

    initCardInteractions,

    initSearch,

    initExplorationModal,

    initFadeInAnimations,

    concepts,

    showRandomConcept

};
