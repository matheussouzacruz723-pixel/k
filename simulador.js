/**
 * ========================================
 * SIMULADOR PSICOLÓGICO
 * Atlas da Mente Humana
 * ========================================
 * Cenários interativos para aprender psicologia
 */

// ========================================
// BANCO DE CENÁRIOS
// ========================================
const scenarios = [
    {
        id: 1,
        title: "A Reunião de Trabalho",
        situation: "Você está em uma reunião de trabalho e seu chefe critica uma ideia sua diante de todos. Você nota que alguns colegas assentem com a crítica.",
        context: "Este cenário explora reações emocionais em situações sociais de exposição.",
        options: [
            {
                id: "a",
                text: "Ficar em silêncio e ruminar o pensamento durante toda a reunião",
                feedback: "Esta é uma resposta comum de quem prioriza a harmonia externa, mas pode gerar ansiedade prolongada. O silêncio não permite processar o que aconteceu e pode levar à personalização.",
                concept: "Personalização",
                conceptDesc: "Tendência de atribuir a si mesmo responsabilidade excessiva por eventos negativos, mesmo quando há outros fatores envolvidos.",
                relatedTopic: "topics/ansiedade.html"
            },
            {
                id: "b",
                text: "Pedir educadamente esclarecimentos sobre a crítica para entender o ponto de vista",
                feedback: "Excelente escolha! Buscar compreensão demonstra comunicação assertiva e evita mal-entendidos. É uma forma saudável de lidar com feedback.",
                concept: "Comunicação Assertiva",
                conceptDesc: "Capacidade de expressar pensamentos e sentimentos de forma clara, respeitosa e direta, sem agressividade ou passividade.",
                relatedTopic: "topics/apego.html"
            },
            {
                id: "c",
                text: "Defender sua ideia imediatamente e argumentar contra a crítica",
                feedback: "A defesa é compreensível, mas pode parecer agressiva. Em alguns contextos, um momento de pausa para refletir pode ser mais eficaz.",
                concept: "Regulação Emocional",
                conceptDesc: "Capacidade de modular respostas emocionais para lidar com situações de forma adaptativa.",
                relatedTopic: "topics/ansiedade.html"
            }
        ]
    },
    {
        id: 2,
        title: "O Amigo que Não Responde",
        situation: "Você enviou uma mensagem importante para um amigo há 3 dias e ele não respondeu. Você está começando a se sentir ignorado.",
        context: "Este cenário aborda como interpretamos o silêncio dos outros.",
        options: [
            {
                id: "a",
                text: "Assumir que ele está ocupado e esperar mais um pouco",
                feedback: "Esta é uma abordagem equilibrada que considera o contexto do outro. Demonstra empatia e evita conclusões precipitadas.",
                concept: "Teoria do Apego",
                conceptDesc: "Os estilos de apego desenvolvidos na infância influenciam como interpretamos e respondemos a comportamentos dos outros em relacionamentos adultos.",
                relatedTopic: "topics/apego.html"
            },
            {
                id: "b",
                text: "Pensar que ele não se importa com você e começar a se afastar",
                feedback: "Esta é a personalização em ação! O silêncio do outro frequentemente diz mais sobre ele do que sobre você. Pode indicar apego ansioso.",
                concept: "Personalização",
                conceptDesc: "Tender a interpretar o comportamento dos outros como relacionado a você, sem evidências suficientes.",
                relatedTopic: "topics/ansiedade.html"
            },
            {
                id: "c",
                text: "Enviar outra mensagem perguntando se está tudo bem",
                feedback: "Comunicar-se diretamente é saudável! Perguntas abertas evitam mal-entendidos e fortalecem o vínculo.",
                concept: "Comunicação Assertiva",
                conceptDesc: "Expressar necessidades e preocupações de forma clara e respeitosa.",
                relatedTopic: "topics/apego.html"
            }
        ]
    },
    {
        id: 3,
        title: "O Erro no Projeto",
        situation: "Você cometeu um erro em um projeto importante no trabalho. O erro foi pequeno, mas você está se sentindo um fracasso.",
        context: "Este cenário explora a autocrítica e o perfeccionismo.",
        options: [
            {
                id: "a",
                text: "Focar no erro e pensar que você não é competente o suficiente",
                feedback: "Isso é pensamento em preto e branco - uma distorção cognitiva. Erros pontuais não definem sua competência geral.",
                concept: "Autocrítica",
                conceptDesc: "Tendência de avaliar-se de forma excessivamente negativa, frequentemente usando padrões impossíveis.",
                relatedTopic: "topics/ansiedade.html"
            },
            {
                id: "b",
                text: "Reconhecer o erro, aprender com ele e seguir em frente",
                feedback: "Esta é a abordagem mais saudável! Reconhecer erros sem se definir por eles é sinal de resiliência e crescimento.",
                concept: "Regulação Emocional",
                conceptDesc: "Capacidade de aceitar emoções difíceis sem ser dominado por elas e usar isso para crescer.",
                relatedTopic: "topics/ansiedade.html"
            },
            {
                id: "c",
                text: "Culpar circunstâncias externas para minimizar o erro",
                feedback: "Evitar responsabilidade pode proteger momentaneamente a autoimagem, mas impede o aprendizado e o crescimento.",
                concept: "Vieses Cognitivos",
                conceptDesc: "Padrões de pensamento que distorcem nossa percepção da realidade de formas previsíveis.",
                relatedTopic: "topics/vieses-cognitivos.html"
            }
        ]
    },
    {
        id: 4,
        title: "A Comparação nas Redes Sociais",
        situation: "Você está no Instagram e vê um colega de trabalho em uma viagem incrível, enquanto você está no escritório trabalhando até tarde.",
        context: "Este cenário aborda comparações sociais e seus efeitos emocionais.",
        options: [
            {
                id: "a",
                text: "Sentir-se inferior e questionar suas escolhas profissionais",
                feedback: "Comparar-se com os outros é natural, mas pode gerar sofrimento. Lembre-se: você vê o destaque, não o processo.",
                concept: "Vieses Cognitivos",
                conceptDesc: "O viés de seleção nos leva a comparar nosso interior com o exterior dos outros.",
                relatedTopic: "topics/vieses-cognitivos.html"
            },
            {
                id: "b",
                text: "Fechar o aplicativo e lembrar que redes sociais são uma seleção",
                feedback: "Boa estratégia de regulação emocional! Reconhecer a natureza curated das redes sociais é um passo importante.",
                concept: "Regulação Emocional",
                conceptDesc: "Capacidade de identificar e modular respostas emocionais para proteger o bem-estar mental.",
                relatedTopic: "topics/ansiedade.html"
            },
            {
                id: "c",
                text: "Sentir motivação para trabalhar mais e alcançar seus objetivos",
                feedback: "A motivação é positiva, mas é importante garantir que vem de um lugar de crescimento, não de comparação dolorida.",
                concept: "Perfeccionismo",
                conceptDesc: "Padrão de pensamento caracterizado por padrões excessivamente elevados e autocrítica severa.",
                relatedTopic: "topics/ansiedade.html"
            }
        ]
    },
    {
        id: 5,
        title: "O Conflito com o Parceiro",
        situation: "Você e seu parceiro(a) tiveram uma discussão sobre tarefas de casa. Você sente que sempre faz mais do que sua parte.",
        context: "Este cenário explora dinâmicas de relacionamento e comunicação.",
        options: [
            {
                id: "a",
                text: "Guardar para si mesmo para evitar mais conflito",
                feedback: "Suprimir sentimentos pode levar a ressentimento acumulado. A comunicação aberta é essencial em relacionamentos.",
                concept: "Comunicação Assertiva",
                conceptDesc: "Expressar necessidades e preocupações de forma clara, respeitosa e direta.",
                relatedTopic: "topics/apego.html"
            },
            {
                id: "b",
                text: "Explicar como você se sente usando 'eu' statements (eu sinto, eu preciso)",
                feedback: "Excelente abordagem! Usar 'eu' em vez de 'você sempre' evita defensividade e foca nos seus sentimentos.",
                concept: "Comunicação Assertiva",
                conceptDesc: "Técnica de comunicação que expressa sentimentos sem accusar o outro.",
                relatedTopic: "topics/apego.html"
            },
            {
                id: "c",
                text: "Aumentar o tom de voz para fazer seu ponto ser ouvido",
                feedback: "Escalonar o conflito raramente leva a soluções. Pode indicar dificuldade em regular emoções em situações de tensão.",
                concept: "Regulação Emocional",
                conceptDesc: "Capacidade de manter a calma e pensar claramente mesmo em momentos de tensão.",
                relatedTopic: "topics/ansiedade.html"
            }
        ]
    },
    {
        id: 6,
        title: "A Decisão Importante",
        situation: "Você recebeu duas ofertas de emprego: uma com maior salário, mas em uma área que você não gosta; outra com menor salário, mas na área que você ama.",
        context: "Este cenário explora tomada de decisão e valores pessoais.",
        options: [
            {
                id: "a",
                text: "Escolher pelo dinheiro, pois segurança financeira é mais importante",
                feedback: "Esta é uma escolha válida. Pesquisas mostram que dinheiro pode comprar felicidade até certo ponto, mas não é tudo.",
                concept: "Vieses Cognitivos",
                conceptDesc: "O viés de status quo pode nos fazer escolher opções 'seguras' por medo do desconhecido.",
                relatedTopic: "topics/vieses-cognitivos.html"
            },
            {
                id: "b",
                text: "Escolher pelo propósito, pois satisfação no trabalho impacta o bem-estar diário",
                feedback: "Esta escolha prioriza bem-estar a longo prazo. Pesquisas mostram que propósito contribui significativamente para felicidade.",
                concept: "Regulação Emocional",
                conceptDesc: "Considerar como diferentes escolhas afetam seu bem-estar emocional a longo prazo.",
                relatedTopic: "topics/ansiedade.html"
            },
            {
                id: "c",
                text: "Ficar paralisado sem conseguir decidir",
                feedback: "A indecisão prolongada pode ser uma forma de ansiedade de decisão. Tentar listar prós e contras pode ajudar.",
                concept: "Ansiedade",
                conceptDesc: "Dificuldade em tomar decisões pode estar relacionada a medo de errar ou de consequências negativas.",
                relatedTopic: "topics/ansiedade.html"
            }
        ]
    }
];

// ========================================
// MÓDULO DO SIMULADOR
// ========================================
const Simulator = {
    currentScenario: 0,
    selectedOption: null,
    container: null,
    
    init() {
        this.container = document.getElementById('simulatorContainer');
        if (!this.container) return;
        
        this.renderScenario();
        this.bindEvents();
    },
    
    renderScenario() {
        const scenario = scenarios[this.currentScenario];
        
        this.container.innerHTML = `
            <div class="simulator-progress">
                <span>Cenário ${this.currentScenario + 1} de ${scenarios.length}</span>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${((this.currentScenario + 1) / scenarios.length) * 100}%"></div>
                </div>
            </div>
            
            <div class="simulator-card">
                <div class="simulator-header">
                    <span class="simulator-badge">Situação do Dia</span>
                    <h3 class="simulator-title">${scenario.title}</h3>
                </div>
                
                <div class="simulator-situation">
                    <p>${scenario.situation}</p>
                    <p class="simulator-context"><em>${scenario.context}</em></p>
                </div>
                
                <div class="simulator-options" id="simulatorOptions">
                    ${scenario.options.map((option, index) => `
                        <button class="option-btn" data-option-id="${option.id}" data-index="${index}">
                            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                            <span class="option-text">${option.text}</span>
                        </button>
                    `).join('')}
                </div>
                
                <div class="simulator-feedback hidden" id="simulatorFeedback">
                    <div class="feedback-header">
                        <span class="feedback-icon">💡</span>
                        <span class="feedback-label">Explicação Psicológica</span>
                    </div>
                    <p class="feedback-text"></p>
                    
                    <div class="concept-box">
                        <h4></h4>
                        <p></p>
                    </div>
                    
                    <div class="feedback-actions">
                        <a href="#" class="btn btn-secondary">
                            Ver conteúdo relacionado
                        </a>
                        <button class="btn btn-primary" id="nextScenario">
                            Próximo cenário
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        this.bindOptionEvents();
    },
    
    bindEvents() {
        // Eventos são bound após render
    },
    
    bindOptionEvents() {
        const options = document.querySelectorAll('.option-btn');
        options.forEach(btn => {
            // Support both click and touch for mobile
            const handleSelection = () => {
                const optionId = btn.dataset.optionId;
                const scenario = scenarios[this.currentScenario];
                this.selectedOption = scenario.options.find(o => o.id === optionId);
                this.showFeedback();
            };
            
            btn.addEventListener('click', handleSelection);
            btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                handleSelection();
            });
        });
        
        const nextBtn = document.getElementById('nextScenario');
        if (nextBtn) {
            const handleNext = () => this.nextScenario();
            nextBtn.addEventListener('click', handleNext);
            nextBtn.addEventListener('touchend', (e) => {
                e.preventDefault();
                handleNext();
            });
        }
    },
    
    showFeedback() {
        const options = document.querySelectorAll('.option-btn');
        options.forEach(btn => btn.classList.add('disabled'));
        
        const feedback = document.getElementById('simulatorFeedback');
        const feedbackText = feedback.querySelector('.feedback-text');
        const conceptBox = feedback.querySelector('.concept-box');
        const conceptTitle = conceptBox.querySelector('h4');
        const conceptDesc = conceptBox.querySelector('p');
        const relatedLink = feedback.querySelector('.feedback-actions a');
        
        // Atualizar conteúdo do feedback com a opção selecionada
        feedbackText.textContent = this.selectedOption.feedback;
        conceptTitle.textContent = this.selectedOption.concept;
        conceptDesc.textContent = this.selectedOption.conceptDesc;
        relatedLink.href = this.selectedOption.relatedTopic;
        
        feedback.classList.remove('hidden');
        
        // Scroll para o feedback em mobile
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    },
    
    nextScenario() {
        if (this.currentScenario < scenarios.length - 1) {
            this.currentScenario++;
            this.selectedOption = null;
            this.renderScenario();
            window.scrollTo({ top: this.container.offsetTop - 100, behavior: 'smooth' });
        } else {
            this.showCompletion();
        }
    },
    
    showCompletion() {
        this.container.innerHTML = `
            <div class="simulator-completion">
                <div class="completion-icon">🎉</div>
                <h3>Parabéns!</h3>
                <p>Você completou todos os cenários do Simulador Psicológico.</p>
                <p class="completion-message">Continue explorando os conceitos para aprofundar seu conhecimento em psicologia.</p>
                <div class="completion-actions">
                    <a href="index.html" class="btn btn-primary">Voltar ao Início</a>
                    <button class="btn btn-secondary" onclick="location.reload()">Refazer Simulador</button>
                </div>
            </div>
        `;
    },
    
    // Método para adicionar novos cenários facilmente
    addScenario(scenario) {
        scenarios.push({
            id: scenarios.length + 1,
            ...scenario
        });
    }
};

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    Simulator.init();
});

// Export para uso global
window.Simulator = Simulator;
window.scenarios = scenarios;
