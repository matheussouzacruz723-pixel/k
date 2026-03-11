/**
 * ========================================
 * PERFIL PSICOLÓGICO DE APRENDIZADO
 * Atlas da Mente Humana
 * ========================================
 * Questionário para identificar áreas de interesse
 */

// ========================================
// PERGUNTAS DO PERFIL
// ========================================
const profileQuestions = [
    {
        id: 1,
        question: "Quando você enfrenta uma situação difícil, o que mais te afeta?",
        options: [
            { 
                text: "As emoções que surgem e como me sinto", 
                scores: { emocoes: 3, regulacao: 2 },
                area: "Emoções"
            },
            { 
                text: "Os pensamentos que não consigo controlar", 
                scores: { cognicao: 3, vieses: 2 },
                area: "Cognição"
            },
            { 
                text: "Como isso afeta meus relacionamentos", 
                scores: { relacoes: 3, apego: 2 },
                area: "Relações"
            },
            { 
                text: "Recordações de experiências passadas", 
                scores: { trauma: 3, dissociacao: 2 },
                area: "Trauma"
            }
        ]
    },
    {
        id: 2,
        question: "O que você mais gostaria de entender sobre si mesmo?",
        options: [
            { 
                text: "Por que reajo de certas formas emocionalmente", 
                scores: { emocoes: 3, personalidade: 2 },
                area: "Emoções"
            },
            { 
                text: "Como funciona minha mente e tomada de decisões", 
                scores: { cognicao: 3, decisoes: 2 },
                area: "Cognição"
            },
            { 
                text: "Meu padrão em relacionamentos e vínculos", 
                scores: { relacoes: 3, apego: 2 },
                area: "Relações"
            },
            { 
                text: "Como minhas experiências moldaram quem sou", 
                scores: { trauma: 3, personalidade: 2 },
                area: "Trauma"
            }
        ]
    },
    {
        id: 3,
        question: "Qual situação te causa mais desconforto?",
        options: [
            { 
                text: "Sentir emoções intensas que não sei controlar", 
                scores: { emocoes: 3, regulacao: 2 },
                area: "Emoções"
            },
            { 
                text: "Tomar decisões importantes com incerteza", 
                scores: { decisoes: 3, cognicao: 2 },
                area: "Decisões"
            },
            { 
                text: "Conflitos ou mal-entendidos com pessoas próximas", 
                scores: { relacoes: 3, comunicacao: 2 },
                area: "Relações"
            },
            { 
                text: "Situações que trazem memórias dolorosas", 
                scores: { trauma: 3, regulacao: 2 },
                area: "Trauma"
            }
        ]
    },
    {
        id: 4,
        question: "O que te motiva a aprender sobre psicologia?",
        options: [
            { 
                text: "Querer entender melhor minhas emoções e reações", 
                scores: { emocoes: 3, personalidade: 2 },
                area: "Emoções"
            },
            { 
                text: "Querer tomar melhores decisões e evitar erros", 
                scores: { cognicao: 3, decisoes: 2 },
                area: "Cognição"
            },
            { 
                text: "Melhorar meus relacionamentos e comunicação", 
                scores: { relacoes: 3, apego: 2 },
                area: "Relações"
            },
            { 
                text: "Processar experiências passadas e crescer", 
                scores: { trauma: 3, personalidade: 2 },
                area: "Trauma"
            }
        ]
    },
    {
        id: 5,
        question: "Como você prefere aprender novos conceitos?",
        options: [
            { 
                text: "Através de exemplos práticos e situações do dia a dia", 
                scores: { emocoes: 2, relacoes: 2 },
                area: "Prático"
            },
            { 
                text: "Entendendo a teoria e os mecanismos por trás", 
                scores: { cognicao: 3, decisoes: 2 },
                area: "Teórico"
            },
            { 
                text: "Explorando histórias e casos de estudo", 
                scores: { personalidade: 2, trauma: 2 },
                area: "Narrativo"
            },
            { 
                text: "Através de exercícios e auto-reflexão", 
                scores: { regulacao: 2, personalidade: 2 },
                area: "Reflexivo"
            }
        ]
    }
];

// ========================================
// RESULTADOS POSSÍVEIS
// ========================================
const profileResults = {
    emocoes: {
        title: "Explorador Emocional",
        description: "Você tem um interesse natural em entender o universo das emoções humanas. Sua jornada no Atlas deve começar pelas emoções, explorando como elas funcionam, como regulá-las e como impactam nosso dia a dia.",
        topics: [
            { title: "Ansiedade", path: "topics/ansiedade.html", desc: "Entenda os mecanismos por trás da ansiedade" },
            { title: "Medo", path: "topics/medo.html", desc: "Compreenda a resposta de medo" },
            { title: "Raiva", path: "topics/raiva.html", desc: "Entenda e gerencie a raiva" }
        ],
        color: "#ef4444"
    },
    cognicao: {
        title: "Investigador Mental",
        description: "Você é fascinado pelo funcionamento da mente. Seu caminho ideal começa pela cognição, explorando como processamos informações, formamos memórias e os vieses que influenciam nosso pensamento.",
        topics: [
            { title: "Vieses Cognitivos", path: "topics/vieses-cognitivos.html", desc: "Descubra os padrões que distorcem seu julgamento" },
            { title: "Memória", path: "topics/memoria.html", desc: "Entenda como a mente armazena informações" },
            { title: "Tomada de Decisão", path: "topics/tomada-de-decisao.html", desc: "Aprenda a decidir melhor" }
        ],
        color: "#3b82f6"
    },
    relacoes: {
        title: "Construtor de Vínculos",
        description: "Você valoriza profundamente os relacionamentos humanos. Sua jornada deve começar pelas relações, entendendo como nos conectamos, comunicamos e formamos vínculos ao longo da vida.",
        topics: [
            { title: "Teoria do Apego", path: "topics/apego.html", desc: "Entenda como os vínculos se formam" },
            { title: "Empatia", path: "topics/empatia.html", desc: "Desenvolva sua capacidade de conexão" },
            { title: "Manipulação", path: "topics/manipulacao.html", desc: "Reconheça padrões nocivos" }
        ],
        color: "#ec4899"
    },
    trauma: {
        title: "Buscador de Cura",
        description: "Você tem interesse em entender como experiências passadas nos moldam. Sua jornada deve começar pelo trauma, explorando como processar experiências e construir resiliência.",
        topics: [
            { title: "Trauma Infantil", path: "topics/trauma-infantil.html", desc: "Entenda o impacto das experiências precoces" },
            { title: "Dissociação", path: "topics/dissociacao.html", desc: "Compreenda os mecanismos de defesa" },
            { title: "Ansiedade", path: "topics/ansiedade.html", desc: "Entenda a relação com experiências passadas" }
        ],
        color: "#8b5cf6"
    },
    personalidade: {
        title: "Descobridor de Si",
        description: "Você tem curiosidade sobre o que define quem somos. Sua jornada deve começar pela personalidade, explorando os traços, padrões e dinâmicas que formam nossa identidade.",
        topics: [
            { title: "Big Five", path: "topics/bigfive.html", desc: "O modelo científico da personalidade" },
            { title: "Introversão e Extroversão", path: "topics/introversao-extroversao.html", desc: "Entenda seus traços sociais" },
            { title: "Narcisismo", path: "topics/narcisismo.html", desc: "Explore padrões de personalidade" }
        ],
        color: "#f59e0b"
    },
    decisoes: {
        title: "Tomador de Decisões",
        description: "Você quer entender como escolhemos e podemos decidir melhor. Sua jornada deve começar pela tomada de decisão, explorando os processos mentais e vieses que influenciam nossas escolhas.",
        topics: [
            { title: "Vieses Cognitivos", path: "topics/vieses-cognitivos.html", desc: "Identifique armadilhas mentais" },
            { title: "Tomada de Decisão", path: "topics/tomada-de-decisao.html", desc: "Processos por trás das escolhas" },
            { title: "Ansiedade", path: "topics/ansiedade.html", desc: "Como o medo afeta decisões" }
        ],
        color: "#06b6d4"
    }
};

// ========================================
// MÓDULO DO PERFIL
// ========================================
const Profile = {
    currentQuestion: 0,
    scores: {},
    container: null,
    
    init() {
        this.container = document.getElementById('profileContainer');
        if (!this.container) return;
        
        // Verificar se já existe resultado salvo
        const savedResult = localStorage.getItem('atlasProfileResult');
        if (savedResult) {
            this.showSavedResult(JSON.parse(savedResult));
        } else {
            this.renderQuestion();
        }
        
        this.bindEvents();
    },
    
    bindEvents() {
        // Eventos são bound após render
    },
    
    renderQuestion() {
        const question = profileQuestions[this.currentQuestion];
        
        this.container.innerHTML = `
            <div class="profile-progress">
                <span>Pergunta ${this.currentQuestion + 1} de ${profileQuestions.length}</span>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${((this.currentQuestion + 1) / profileQuestions.length) * 100}%"></div>
                </div>
            </div>
            
            <div class="profile-card">
                <div class="profile-question">
                    <span class="question-number">Pergunta ${question.id}</span>
                    <h3>${question.question}</h3>
                </div>
                
                <div class="profile-options">
                    ${question.options.map((option, index) => `
                        <button class="profile-option-btn" data-index="${index}">
                            <span class="option-number">${index + 1}</span>
                            <span class="option-text">${option.text}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="profile-disclaimer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                <p>Este perfil é apenas uma ferramenta educacional. Os resultados não representam diagnóstico psicológico ou médico.</p>
            </div>
        `;
        
        this.bindOptionEvents();
    },
    
    bindOptionEvents() {
        const options = document.querySelectorAll('.profile-option-btn');
        options.forEach(btn => {
            // Support both click and touch for mobile
            const handleSelection = () => {
                const index = parseInt(btn.dataset.index);
                this.selectOption(index);
            };
            
            btn.addEventListener('click', handleSelection);
            btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                handleSelection();
            });
        });
    },
    
    selectOption(index) {
        const question = profileQuestions[this.currentQuestion];
        const option = question.options[index];
        
        // Adicionar pontuação
        Object.keys(option.scores).forEach(area => {
            this.scores[area] = (this.scores[area] || 0) + option.scores[area];
        });
        
        // Próxima pergunta ou calcular resultado
        if (this.currentQuestion < profileQuestions.length - 1) {
            this.currentQuestion++;
            this.renderQuestion();
        } else {
            this.calculateResult();
        }
    },
    
    calculateResult() {
        // Encontrar área com maior pontuação
        let maxScore = 0;
        let mainArea = 'emocoes';
        
        // Mapeamento de áreas secundárias para principais
        const areaMapping = {
            'regulacao': 'emocoes',
            'vieses': 'cognicao',
            'comunicacao': 'relacoes',
            'dissociacao': 'trauma',
            'apego': 'relacoes'
        };
        
        // Normalizar pontuações
        const normalizedScores = {};
        Object.keys(this.scores).forEach(area => {
            const mainArea = areaMapping[area] || area;
            normalizedScores[mainArea] = (normalizedScores[mainArea] || 0) + this.scores[area];
        });
        
        // Encontrar maior pontuação
        Object.keys(normalizedScores).forEach(area => {
            if (normalizedScores[area] > maxScore) {
                maxScore = normalizedScores[area];
                mainArea = area;
            }
        });
        
        // Se empatado, usar ordem de preferência
        const areas = ['emocoes', 'cognicao', 'relacoes', 'trauma', 'personalidade', 'decisoes'];
        if (normalizedScores[areas[0]] === maxScore) mainArea = areas[0];
        else if (normalizedScores[areas[1]] === maxScore) mainArea = areas[1];
        else if (normalizedScores[areas[2]] === maxScore) mainArea = areas[2];
        else if (normalizedScores[areas[3]] === maxScore) mainArea = areas[3];
        else if (normalizedScores[areas[4]] === maxScore) mainArea = areas[4];
        
        const result = profileResults[mainArea];
        
        // Salvar em LocalStorage
        const resultData = {
            area: mainArea,
            title: result.title,
            description: result.description,
            topics: result.topics,
            color: result.color,
            date: new Date().toISOString()
        };
        
        localStorage.setItem('atlasProfileResult', JSON.stringify(resultData));
        
        this.showResult(resultData);
    },
    
    showResult(result) {
        this.container.innerHTML = `
            <div class="profile-result">
                <div class="result-header" style="background: linear-gradient(135deg, ${result.color}20, ${result.color}40);">
                    <div class="result-icon" style="background: ${result.color};">
                        ${this.getResultIcon(result.area)}
                    </div>
                    <h2>${result.title}</h2>
                </div>
                
                <div class="result-description">
                    <p>${result.description}</p>
                </div>
                
                <div class="result-topics">
                    <h3>Conteúdos Recomendados</h3>
                    <div class="topics-list">
                        ${result.topics.map(topic => `
                            <a href="${topic.path}" class="result-topic-card">
                                <div class="topic-info">
                                    <h4>${topic.title}</h4>
                                    <p>${topic.desc}</p>
                                </div>
                                <span class="topic-arrow">→</span>
                            </a>
                        `).join('')}
                    </div>
                </div>
                
                <div class="result-actions">
                    <button class="btn btn-primary" onclick="Profile.restart()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 4v6h6M23 20v-6h-6"/>
                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
                        </svg>
                        Refazer Perfil
                    </button>
                    <a href="index.html" class="btn btn-secondary">Explorar o Atlas</a>
                </div>
            </div>
        `;
    },
    
    showSavedResult(result) {
        this.container.innerHTML = `
            <div class="profile-saved">
                <div class="saved-header">
                    <span class="saved-badge">Perfil Salvo</span>
                    <h2>Seu Perfil Psicológico</h2>
                    <p class="saved-date">Realizado em ${new Date(result.date).toLocaleDateString('pt-BR')}</p>
                </div>
                
                <div class="profile-result">
                    <div class="result-header" style="background: linear-gradient(135deg, ${result.color}20, ${result.color}40);">
                        <div class="result-icon" style="background: ${result.color};">
                            ${this.getResultIcon(result.area)}
                        </div>
                        <h2>${result.title}</h2>
                    </div>
                    
                    <div class="result-description">
                        <p>${result.description}</p>
                    </div>
                    
                    <div class="result-topics">
                        <h3>Conteúdos Recomendados</h3>
                        <div class="topics-list">
                            ${result.topics.map(topic => `
                                <a href="${topic.path}" class="result-topic-card">
                                    <div class="topic-info">
                                        <h4>${topic.title}</h4>
                                        <p>${topic.desc}</p>
                                    </div>
                                    <span class="topic-arrow">→</span>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="result-actions">
                        <button class="btn btn-primary" onclick="Profile.restart()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 4v6h6M23 20v-6h-6"/>
                                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
                            </svg>
                            Refazer Perfil
                        </button>
                        <a href="index.html" class="btn btn-secondary">Explorar o Atlas</a>
                    </div>
                </div>
            </div>
        `;
    },
    
    getResultIcon(area) {
        const icons = {
            emocoes: '💭',
            cognicao: '🧠',
            relacoes: '💜',
            trauma: '🌱',
            personalidade: '👤',
            decisoes: '🎯'
        };
        return icons[area] || '🔍';
    },
    
    restart() {
        localStorage.removeItem('atlasProfileResult');
        this.currentQuestion = 0;
        this.scores = {};
        this.renderQuestion();
    }
};

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    Profile.init();
});

// Export para uso global
window.Profile = Profile;
window.profileQuestions = profileQuestions;
window.profileResults = profileResults;
