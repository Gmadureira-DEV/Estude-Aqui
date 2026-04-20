/* ============================================
   ESTUDE AQUI - MAIN SCRIPT
   Lógica de navegação, roteamento e funcionalidades
   ============================================ */

// Dados das matérias e conteúdo
const subjectsData = [
    {
        id: 'portugues',
        name: 'Português',
        icon: '📚',
        description: 'Gramática, interpretação de texto, literatura e redação',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'Gramática Essencial', videos: 5, exercises: 8 },
            { id: 2, name: 'Interpretação de Texto', videos: 4, exercises: 6 },
            { id: 3, name: 'Literatura Brasileira', videos: 6, exercises: 10 },
            { id: 4, name: 'Redação ENEM', videos: 5, exercises: 7 },
            { id: 5, name: 'Figuras de Linguagem', videos: 4, exercises: 5 }
        ]
    },
    {
        id: 'matematica',
        name: 'Matemática',
        icon: '🔢',
        description: 'Álgebra, geometria, funções, trigonometria e estatística',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'Funções', videos: 5, exercises: 8 },
            { id: 2, name: 'Geometria Plana e Espacial', videos: 6, exercises: 10 },
            { id: 3, name: 'Probabilidade e Estatística', videos: 4, exercises: 7 },
            { id: 4, name: 'Trigonometria', videos: 5, exercises: 8 },
            { id: 5, name: 'Equações e Inequações', videos: 4, exercises: 6 }
        ]
    },
    {
        id: 'historia',
        name: 'História',
        icon: '🏛️',
        description: 'História do Brasil, América e mundo. Antiguidade ao contemporâneo',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'História do Brasil', videos: 6, exercises: 9 },
            { id: 2, name: 'História da América', videos: 5, exercises: 7 },
            { id: 3, name: 'História Geral', videos: 7, exercises: 10 },
            { id: 4, name: 'Idade Média', videos: 4, exercises: 6 },
            { id: 5, name: 'Idade Moderna', videos: 5, exercises: 8 }
        ]
    },
    {
        id: 'geografia',
        name: 'Geografia',
        icon: '🌍',
        description: 'Geografia física, humana, Brasil e cartografia',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'Geografia Física', videos: 5, exercises: 8 },
            { id: 2, name: 'Geografia Humana', videos: 6, exercises: 9 },
            { id: 3, name: 'Geografia do Brasil', videos: 5, exercises: 7 },
            { id: 4, name: 'Cartografia', videos: 4, exercises: 6 },
            { id: 5, name: 'Climatologia', videos: 4, exercises: 5 }
        ]
    },
    {
        id: 'ciencias',
        name: 'Ciências',
        icon: '🔬',
        description: 'Ciências naturais: corpo humano, ecologia e experimentos',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'Corpo Humano', videos: 6, exercises: 10 },
            { id: 2, name: 'Ecologia', videos: 5, exercises: 8 },
            { id: 3, name: 'Botânica', videos: 4, exercises: 6 },
            { id: 4, name: 'Zoologia', videos: 5, exercises: 7 },
            { id: 5, name: 'Microbiologia', videos: 4, exercises: 6 }
        ]
    },
    {
        id: 'fisica',
        name: 'Física',
        icon: '⚡',
        description: 'Mecânica, termodinâmica, óptica, eletricidade e ondas',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'Mecânica', videos: 6, exercises: 10 },
            { id: 2, name: 'Termodinâmica', videos: 5, exercises: 8 },
            { id: 3, name: 'Óptica', videos: 4, exercises: 6 },
            { id: 4, name: 'Eletricidade', videos: 6, exercises: 9 },
            { id: 5, name: 'Ondas', videos: 4, exercises: 6 }
        ]
    },
    {
        id: 'quimica',
        name: 'Química',
        icon: '🧪',
        description: 'Química geral, orgânica e inorgânica, reações e substâncias',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'Química Geral', videos: 6, exercises: 10 },
            { id: 2, name: 'Química Orgânica', videos: 5, exercises: 8 },
            { id: 3, name: 'Química Inorgânica', videos: 5, exercises: 8 },
            { id: 4, name: 'Reações Químicas', videos: 4, exercises: 6 },
            { id: 5, name: 'Estequiometria', videos: 4, exercises: 7 }
        ]
    },
    {
        id: 'biologia',
        name: 'Biologia',
        icon: '🌿',
        description: 'Genética, evolução, ecologia, citologia e zoologia',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'Genética', videos: 6, exercises: 10 },
            { id: 2, name: 'Evolução', videos: 5, exercises: 8 },
            { id: 3, name: 'Ecologia', videos: 5, exercises: 8 },
            { id: 4, name: 'Citologia', videos: 4, exercises: 6 },
            { id: 5, name: 'Zoologia', videos: 5, exercises: 7 }
        ]
    },
    {
        id: 'ingles',
        name: 'Inglês',
        icon: '🇬🇧',
        description: 'Gramática, vocabulário, conversação e interpretação em inglês',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'Gramática Inglesa', videos: 6, exercises: 10 },
            { id: 2, name: 'Vocabulário', videos: 5, exercises: 8 },
            { id: 3, name: 'Conversação', videos: 4, exercises: 6 },
            { id: 4, name: 'Interpretação de Texto', videos: 5, exercises: 8 },
            { id: 5, name: 'Phrasal Verbs', videos: 4, exercises: 6 }
        ]
    },
    {
        id: 'educacao-fisica',
        name: 'Educação Física',
        icon: '⚽',
        description: 'Esportes, saúde, corpo humano e atividade física',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'Esportes', videos: 5, exercises: 7 },
            { id: 2, name: 'Saúde e Bem-estar', videos: 4, exercises: 6 },
            { id: 3, name: 'Fisiologia do Exercício', videos: 5, exercises: 8 },
            { id: 4, name: 'Nutrição', videos: 4, exercises: 6 },
            { id: 5, name: 'Atividade Física', videos: 4, exercises: 5 }
        ]
    },
    {
        id: 'artes',
        name: 'Artes',
        icon: '🎨',
        description: 'História da arte, música, teatro, dança e artes visuais',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'História da Arte', videos: 6, exercises: 9 },
            { id: 2, name: 'Música', videos: 5, exercises: 7 },
            { id: 3, name: 'Teatro', videos: 4, exercises: 6 },
            { id: 4, name: 'Dança', videos: 4, exercises: 5 },
            { id: 5, name: 'Artes Visuais', videos: 5, exercises: 8 }
        ]
    },
    {
        id: 'filosofia',
        name: 'Filosofia',
        icon: '🤔',
        description: 'Filosofia antiga, moderna, ética, política e existencialismo',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'Filosofia Antiga', videos: 5, exercises: 8 },
            { id: 2, name: 'Filosofia Moderna', videos: 5, exercises: 8 },
            { id: 3, name: 'Ética', videos: 4, exercises: 6 },
            { id: 4, name: 'Política', videos: 4, exercises: 6 },
            { id: 5, name: 'Existencialismo', videos: 4, exercises: 5 }
        ]
    },
    {
        id: 'sociologia',
        name: 'Sociologia',
        icon: '👥',
        description: 'Sociedade, cultura, política, cidadania e movimentos sociais',
        topics: 5,
        pdfs: 20,
        topicsList: [
            { id: 1, name: 'Sociedade', videos: 5, exercises: 8 },
            { id: 2, name: 'Cultura', videos: 4, exercises: 6 },
            { id: 3, name: 'Política', videos: 5, exercises: 8 },
            { id: 4, name: 'Cidadania', videos: 4, exercises: 6 },
            { id: 5, name: 'Movimentos Sociais', videos: 4, exercises: 5 }
        ]
    }
];

// Conteúdo de exemplo para tópicos
const contentData = {
    'matematica-funções': {
        title: 'Funções',
        subject: 'Matemática',
        theory: `
            <h2>Teoria e Explicação</h2>
            <h3>Funções Matemáticas</h3>
            <p>Uma função é uma relação entre dois conjuntos (domínio e contradomínio) onde cada elemento do domínio se relaciona com exatamente um elemento do contradomínio. Notação: f: A → B ou y = f(x).</p>
            
            <h3>Função do 1º Grau (Afim)</h3>
            <p>Forma geral: f(x) = ax + b, onde a ≠ 0. O gráfico é uma reta. O coeficiente 'a' determina se a função é crescente (a > 0) ou decrescente (a < 0). A zero da função é x = -b/a.</p>
            
            <h3>Função do 2º Grau (Quadrática)</h3>
            <p>Forma geral: f(x) = ax² + bx + c, onde a ≠ 0. O gráfico é uma parábola. Se a > 0, a parábola tem concavidade voltada para cima; se a < 0, para baixo. O vértice é o ponto de máximo ou mínimo, dado por: xv = -b/(2a) e yv = -Δ/(4a), onde Δ = b² - 4ac.</p>
            
            <h3>Função Exponencial</h3>
            <p>Forma geral: f(x) = a^x, onde a > 0 e a ≠ 1. Se a > 1, a função é crescente; se 0 < a < 1, é decrescente. O domínio é todos os reais e o contradomínio são os reais positivos.</p>
            
            <h3>Função Logarítmica</h3>
            <p>Forma geral: f(x) = log_a(x), onde a > 0 e a ≠ 1. É a inversa da função exponencial. Domínio: reais positivos. log_a(a) = 1 e log_a(1) = 0.</p>
        `,
        exercises: [
            {
                question: 'Dada a função f(x) = 2x - 6, qual é o zero da função?',
                options: ['x = 2', 'x = 3', 'x = -3', 'x = 6'],
                correct: 1
            },
            {
                question: 'A função f(x) = x² - 4x + 3 tem valor mínimo igual a:',
                options: ['-1', '0', '1', '3'],
                correct: 2
            },
            {
                question: 'Se f(x) = 3^x, então f(2) vale:',
                options: ['6', '8', '9', '27'],
                correct: 2
            },
            {
                question: 'Uma função é crescente quando, para x₁ < x₂, temos:',
                options: ['f(x₁) = f(x₂)', 'f(x₁) > f(x₂)', 'f(x₁) < f(x₂)', 'f(x₁) × f(x₂) > 0'],
                correct: 2
            },
            {
                question: 'O gráfico da função f(x) = -x² + 4 tem concavidade:',
                options: ['Para cima, com máximo em y = 4', 'Para baixo, com máximo em y = 4', 'Para cima, com mínimo em y = 4', 'Para baixo, sem ponto extremo'],
                correct: 1
            }
        ],
        videos: [
            { title: 'FUNÇÕES DO 1° E DO 2° GRAU - PROBLEMA DE MATEMÁTICA', channel: 'Marcos Aba Matemática', id: 'dQw4w9WgXcQ' },
            { title: 'FUNÇÕES - Aula 2 - Função 1º grau', channel: 'MatemáticaLógica - Prof. Sérgio Sarkis', id: 'dQw4w9WgXcQ' },
            { title: 'FUNÇÃO DO PRIMEIRO 1º GRAU | FUNÇÃO AFIM | EXERCÍCIOS', channel: 'Gis com Giz Matemática', id: 'dQw4w9WgXcQ' },
            { title: 'Funções do Segundo Grau (Parte 1)', channel: 'Professora Angela Matemática', id: 'dQw4w9WgXcQ' }
        ]
    }
};

// Estado da aplicação
let currentPage = 'home';
let currentSubject = null;
let currentTopic = null;

// Função para renderizar a página inicial
function renderHome() {
    const root = document.getElementById('root');
    
    root.innerHTML = `
        <header>
            <div class="header-container">
                <a href="#" class="logo" onclick="navigateTo('home'); return false;">
                    <div class="logo-icon">📚</div>
                    <span>Estude Aqui</span>
                </a>
                <nav>
                    <a href="#" onclick="navigateTo('home'); return false;">Início</a>
                    <button onclick="toggleSubjectsMenu()">Matérias</button>
                    <a href="#" onclick="navigateTo('search'); return false;">Buscar</a>
                    <a href="#" class="btn-enter" onclick="alert('Login não implementado nesta versão'); return false;">Entrar</a>
                </nav>
                <button class="menu-toggle" onclick="toggleMenu()">☰</button>
            </div>
        </header>

        <main>
            <!-- HERO SECTION -->
            <section class="hero">
                <div class="hero-container">
                    <div class="hero-badge">📚 100% Gratuito para Estudantes</div>
                    <h1>Aprenda com conteúdo de <span class="highlight">qualidade</span></h1>
                    <p>Resumos completos, exercícios resolvidos passo a passo, vídeos explicativos e apostilas em PDF. O seu companheiro de estudos definitivo.</p>
                    
                    <div class="search-box">
                        <input type="search" placeholder="Buscar por matéria, tópico ou conteúdo..." id="searchInput">
                        <button class="btn-search" onclick="performSearch()">Buscar →</button>
                    </div>
                    
                    <div class="hero-stats">
                        <div class="stat">
                            <span class="stat-icon">📚</span>
                            <strong>65+</strong> Tópicos
                        </div>
                        <div class="stat">
                            <span class="stat-icon">🎥</span>
                            <strong>300+</strong> Vídeos
                        </div>
                        <div class="stat">
                            <span class="stat-icon">✏️</span>
                            <strong>325+</strong> Exercícios
                        </div>
                        <div class="stat">
                            <span class="stat-icon">📄</span>
                            <strong>260+</strong> PDFs
                        </div>
                    </div>
                </div>
            </section>

            <!-- SUBJECTS SECTION -->
            <section class="subjects-section">
                <div class="subjects-container">
                    <h2 class="section-title">Escolha sua Matéria</h2>
                    <p class="section-subtitle">Todo o conteúdo do ensino médio organizado para você.</p>
                    
                    <div class="subjects-grid">
                        ${subjectsData.map(subject => `
                            <a href="#" class="subject-card" onclick="navigateToSubject('${subject.id}'); return false;">
                                <div class="subject-card-header">
                                    <div class="subject-icon">${subject.icon}</div>
                                    <div class="subject-badge">${subjectsData.indexOf(subject) + 1}</div>
                                </div>
                                <h3 class="subject-name">${subject.name}</h3>
                                <p class="subject-description">${subject.description}</p>
                                <div class="subject-stats">
                                    <div class="subject-stat">
                                        <span>📚</span>
                                        <span>${subject.topics} tópicos</span>
                                    </div>
                                    <div class="subject-stat">
                                        <span>📄</span>
                                        <span>${subject.pdfs} PDFs</span>
                                    </div>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- BENEFITS SECTION -->
            <section class="benefits-section">
                <div class="benefits-container">
                    <h2 class="section-title">Por que estudar com a gente?</h2>
                    <p class="section-subtitle">Nossa plataforma foi desenhada para tornar o seu estudo mais eficiente, focado e sem distrações.</p>
                    
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <div class="benefit-icon">📝</div>
                            <h3 class="benefit-title">Conteúdo Direto</h3>
                            <p class="benefit-description">Explicações detalhadas e objetivas para cada tópico, sem enrolação. Feitas para você entender a matéria de verdade.</p>
                        </div>
                        <div class="benefit-card">
                            <div class="benefit-icon">🎥</div>
                            <h3 class="benefit-title">Vídeos Selecionados</h3>
                            <p class="benefit-description">Curadoria com as melhores videoaulas do YouTube para cada assunto. Não perca tempo procurando o vídeo certo.</p>
                        </div>
                        <div class="benefit-card">
                            <div class="benefit-icon">✏️</div>
                            <h3 class="benefit-title">Resoluções Guiadas</h3>
                            <p class="benefit-description">Exercícios com gabarito e resolução passo a passo. Entenda onde errou e como acertar na próxima vez.</p>
                        </div>
                        <div class="benefit-card">
                            <div class="benefit-icon">📄</div>
                            <h3 class="benefit-title">PDFs Mágicos</h3>
                            <p class="benefit-description">Gere apostilas em PDF lindamente formatadas de qualquer aula com um único clique. Perfeito para imprimir e revisar.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Estude Aqui</h3>
                        <p>Plataforma educacional gratuita com conteúdo de qualidade para estudantes do ensino fundamental ao médio. Feito para você aprender mais e melhor.</p>
                        <div class="footer-social">
                            <a href="#" title="Facebook">f</a>
                            <a href="#" title="Instagram">📷</a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h3>EXATAS & AÇÃO</h3>
                        <ul>
                            <li><a href="#" onclick="navigateToSubject('matematica'); return false;">Matemática</a></li>
                            <li><a href="#" onclick="navigateToSubject('fisica'); return false;">Física</a></li>
                            <li><a href="#" onclick="navigateToSubject('quimica'); return false;">Química</a></li>
                            <li><a href="#" onclick="navigateToSubject('biologia'); return false;">Biologia</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>HUMANAS & LETRAS</h3>
                        <ul>
                            <li><a href="#" onclick="navigateToSubject('portugues'); return false;">Português</a></li>
                            <li><a href="#" onclick="navigateToSubject('historia'); return false;">História</a></li>
                            <li><a href="#" onclick="navigateToSubject('geografia'); return false;">Geografia</a></li>
                            <li><a href="#" onclick="navigateToSubject('ingles'); return false;">Inglês</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>NAVEGAÇÃO</h3>
                        <ul>
                            <li><a href="#" onclick="navigateTo('home'); return false;">Início</a></li>
                            <li><a href="#" onclick="navigateTo('search'); return false;">Busca</a></li>
                            <li><a href="#" onclick="alert('Dashboard não implementado'); return false;">Meu Painel</a></li>
                            <li><a href="#" onclick="alert('Login não implementado'); return false;">Entrar</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <div class="footer-copyright">© 2026 Estude Aqui. Todos os direitos reservados.</div>
                    <div class="footer-stats">
                        <span>13 matérias</span> • <span>65+ tópicos</span> • <span>300+ exercícios</span>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    currentPage = 'home';
}

// Função para renderizar página de matéria
function renderSubjectPage(subjectId) {
    const subject = subjectsData.find(s => s.id === subjectId);
    if (!subject) return;
    
    const root = document.getElementById('root');
    
    root.innerHTML = `
        <header>
            <div class="header-container">
                <a href="#" class="logo" onclick="navigateTo('home'); return false;">
                    <div class="logo-icon">📚</div>
                    <span>Estude Aqui</span>
                </a>
                <nav>
                    <a href="#" onclick="navigateTo('home'); return false;">Início</a>
                    <button onclick="toggleSubjectsMenu()">Matérias</button>
                    <a href="#" onclick="navigateTo('search'); return false;">Buscar</a>
                    <a href="#" class="btn-enter" onclick="alert('Login não implementado'); return false;">Entrar</a>
                </nav>
            </div>
        </header>

        <div class="breadcrumb">
            <a href="#" onclick="navigateTo('home'); return false;">Início</a> › 
            <span>${subject.name}</span>
        </div>

        <div class="subject-header">
            <div class="subject-header-icon">${subject.icon}</div>
            <div class="subject-header-content">
                <h1>${subject.name}</h1>
                <p>${subject.description}</p>
                <div class="subject-header-stats">
                    <div class="stat-item">📚 ${subject.topics} Tópicos</div>
                    <div class="stat-item">🎥 ${subject.topics * 5} Vídeos</div>
                    <div class="stat-item">✏️ ${subject.topics * 5} Exercícios</div>
                </div>
            </div>
        </div>

        <div class="subject-content">
            <div class="topics-list">
                <h2>Conteúdo de ${subject.name}</h2>
                ${subject.topicsList.map((topic, idx) => `
                    <div class="topic-item" onclick="navigateToContent('${subjectId}-${topic.name.toLowerCase().replace(/\\s+/g, '-')}')">
                        <div class="topic-number">${idx + 1}</div>
                        <div class="topic-info">
                            <h3>${topic.name}</h3>
                            <p>Aula & Vídeos</p>
                        </div>
                        <div style="margin-left: auto; color: #999;">→</div>
                    </div>
                `).join('')}
            </div>

            <div class="pdfs-sidebar">
                <h3>📄 Materiais em PDF</h3>
                <ul class="pdf-list">
                    <li class="pdf-item" onclick="alert('PDF gerado com sucesso!')">
                        <div class="pdf-title">Apostila de ${subject.name} - Ensino Médio Completo</div>
                        <div class="pdf-type">APOSTILA</div>
                    </li>
                    <li class="pdf-item" onclick="alert('PDF gerado com sucesso!')">
                        <div class="pdf-title">100 Questões de ${subject.name} com Gabarito</div>
                        <div class="pdf-type">EXERCÍCIOS</div>
                    </li>
                    <li class="pdf-item" onclick="alert('PDF gerado com sucesso!')">
                        <div class="pdf-title">Resumo - ${subject.name}</div>
                        <div class="pdf-type">RESUMO</div>
                    </li>
                </ul>
            </div>
        </div>

        <footer>
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Estude Aqui</h3>
                        <p>Plataforma educacional gratuita com conteúdo de qualidade.</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-copyright">© 2026 Estude Aqui. Todos os direitos reservados.</div>
                </div>
            </div>
        </footer>
    `;
    
    currentPage = 'subject';
    currentSubject = subjectId;
}

// Função para renderizar página de conteúdo
function renderContentPage(contentId) {
    const root = document.getElementById('root');
    const content = contentData['matematica-funcoes']; // Usando exemplo de conteúdo
    
    if (!content) {
        renderHome();
        return;
    }
    
    root.innerHTML = `
        <header>
            <div class="header-container">
                <a href="#" class="logo" onclick="navigateTo('home'); return false;">
                    <div class="logo-icon">📚</div>
                    <span>Estude Aqui</span>
                </a>
                <nav>
                    <a href="#" onclick="navigateTo('home'); return false;">Início</a>
                    <button onclick="toggleSubjectsMenu()">Matérias</button>
                    <a href="#" onclick="navigateTo('search'); return false;">Buscar</a>
                    <a href="#" class="btn-enter" onclick="alert('Login não implementado'); return false;">Entrar</a>
                </nav>
            </div>
        </header>

        <div class="breadcrumb">
            <a href="#" onclick="navigateTo('home'); return false;">Início</a> › 
            <a href="#" onclick="navigateToSubject('matematica'); return false;">Matemática</a> › 
            <span>${content.title}</span>
        </div>

        <div class="content-header">
            <h1 class="content-title">${content.title}</h1>
        </div>

        <div class="content-container">
            <div class="content-main">
                <div class="content-section">
                    ${content.theory}
                </div>

                <div class="content-section">
                    <h2>Videoaulas Selecionadas</h2>
                    ${content.videos.map(video => `
                        <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/${video.id}" allowfullscreen></iframe>
                        </div>
                    `).join('')}
                </div>

                <div class="content-section">
                    <h2>Pratique com Exercícios</h2>
                    <ul class="exercise-list">
                        ${content.exercises.map((exercise, idx) => `
                            <li class="exercise-item">
                                <div class="exercise-question">${idx + 1}. ${exercise.question}</div>
                                <div class="exercise-options">
                                    ${exercise.options.map((option, optIdx) => `
                                        <button class="exercise-option" onclick="selectOption(this, ${optIdx}, ${exercise.correct})">
                                            ${String.fromCharCode(65 + optIdx)}) ${option}
                                        </button>
                                    `).join('')}
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="content-section">
                    <div class="pdf-generator">
                        <h3>📄 Material em PDF</h3>
                        <p>Gere um PDF bonito com a teoria e exercícios desta aula.</p>
                        <button class="btn-generate-pdf" onclick="generatePDF('${content.title}')">
                            📥 Gerar PDF da Aula
                        </button>
                    </div>
                </div>
            </div>

            <aside class="related-topics">
                <h3>🔢 Outras aulas de Matemática</h3>
                <ul class="related-topics-list">
                    <li class="related-topic-item">
                        <a href="#" onclick="navigateToContent('matematica-funcoes'); return false;">
                            🔢 Funções
                        </a>
                    </li>
                    <li class="related-topic-item">
                        <a href="#" onclick="alert('Conteúdo em desenvolvimento'); return false;">
                            🔢 Geometria Plana e Espacial
                        </a>
                    </li>
                    <li class="related-topic-item">
                        <a href="#" onclick="alert('Conteúdo em desenvolvimento'); return false;">
                            🔢 Probabilidade e Estatística
                        </a>
                    </li>
                    <li class="related-topic-item">
                        <a href="#" onclick="alert('Conteúdo em desenvolvimento'); return false;">
                            🔢 Trigonometria
                        </a>
                    </li>
                    <li class="related-topic-item">
                        <a href="#" onclick="alert('Conteúdo em desenvolvimento'); return false;">
                            🔢 Equações e Inequações
                        </a>
                    </li>
                </ul>
            </aside>
        </div>

        <footer>
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Estude Aqui</h3>
                        <p>Plataforma educacional gratuita.</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-copyright">© 2026 Estude Aqui. Todos os direitos reservados.</div>
                </div>
            </div>
        </footer>
    `;
    
    currentPage = 'content';
}

// Função para renderizar página de busca
function renderSearchPage() {
    const root = document.getElementById('root');
    
    root.innerHTML = `
        <header>
            <div class="header-container">
                <a href="#" class="logo" onclick="navigateTo('home'); return false;">
                    <div class="logo-icon">📚</div>
                    <span>Estude Aqui</span>
                </a>
                <nav>
                    <a href="#" onclick="navigateTo('home'); return false;">Início</a>
                    <button onclick="toggleSubjectsMenu()">Matérias</button>
                    <a href="#" onclick="navigateTo('search'); return false;">Buscar</a>
                    <a href="#" class="btn-enter" onclick="alert('Login não implementado'); return false;">Entrar</a>
                </nav>
            </div>
        </header>

        <div class="search-results">
            <h2>Resultados de Busca</h2>
            <div class="results-grid">
                ${subjectsData.map(subject => `
                    <div class="result-item" onclick="navigateToSubject('${subject.id}')">
                        <div class="result-title">${subject.icon} ${subject.name}</div>
                        <div class="result-description">${subject.description}</div>
                        <div class="result-meta">${subject.topics} tópicos • ${subject.pdfs} PDFs</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <footer>
            <div class="footer-container">
                <div class="footer-bottom">
                    <div class="footer-copyright">© 2026 Estude Aqui. Todos os direitos reservados.</div>
                </div>
            </div>
        </footer>
    `;
    
    currentPage = 'search';
}

// Funções de navegação
function navigateTo(page) {
    switch(page) {
        case 'home':
            renderHome();
            break;
        case 'search':
            renderSearchPage();
            break;
        default:
            renderHome();
    }
    window.scrollTo(0, 0);
}

function navigateToSubject(subjectId) {
    renderSubjectPage(subjectId);
    window.scrollTo(0, 0);
}

function navigateToContent(contentId) {
    // Normalizar ID para buscar no contentData
    const normalizedId = contentId.replace(/ç/g, 'c').replace(/ã/g, 'a').replace(/á/g, 'a').replace(/é/g, 'e').replace(/ó/g, 'o').replace(/õ/g, 'o');
    renderContentPage(contentId);
    window.scrollTo(0, 0);
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
        navigateTo('search');
    }
}

function toggleSubjectsMenu() {
    alert('Menu de matérias: Selecione uma matéria na página inicial ou no rodapé.');
}

function toggleMenu() {
    alert('Menu móvel: Navegue usando os links disponíveis.');
}

function selectOption(element, selectedIdx, correctIdx) {
    const parent = element.parentElement;
    const options = parent.querySelectorAll('.exercise-option');
    
    options.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    
    if (selectedIdx === correctIdx) {
        alert('✅ Resposta correta!');
    } else {
        alert('❌ Resposta incorreta. Tente novamente!');
    }
}

function generatePDF(title) {
    alert(`📥 Gerando PDF de "${title}"...\n\nEm uma aplicação real, isso geraria um PDF com o conteúdo da aula.`);
}

// Inicializar a aplicação
document.addEventListener('DOMContentLoaded', function() {
    renderHome();
});
