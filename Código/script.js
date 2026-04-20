// ===== ESTADO GLOBAL =====
let currentUser = null;
let currentScreen = 'home';
let favorites = [];
let history = [];
let lastAccess = null;

// ===== DADOS DAS MATÉRIAS =====
const materias = {
    matematica: {
        nome: 'Matemática',
        icon: '📐',
        assuntos: {
            fracoes: {
                nome: 'Frações',
                descricao: 'Operações com frações, simplificação e comparação',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>O que é Fração?</h2>
                    <p>Uma fração representa uma parte de um todo. É composta por numerador (parte de cima) e denominador (parte de baixo).</p>
                    <h3>Operações com Frações</h3>
                    <p><strong>Adição:</strong> 1/2 + 1/4 = 2/4 + 1/4 = 3/4</p>
                    <p><strong>Multiplicação:</strong> 2/3 × 3/4 = 6/12 = 1/2</p>
                    <p><strong>Divisão:</strong> 2/3 ÷ 1/2 = 2/3 × 2/1 = 4/3</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Qual é o resultado de 1/2 + 1/4?',
                        opcoes: ['1/6', '3/4', '2/6', '1/8'],
                        correta: 1,
                        resolucao: '1/2 + 1/4 = 2/4 + 1/4 = 3/4'
                    },
                    {
                        pergunta: 'Simplifique 12/18:',
                        opcoes: ['2/3', '6/9', '4/6', '12/18'],
                        correta: 0,
                        resolucao: 'MDC(12,18) = 6. Então 12/18 = 2/3'
                    },
                    {
                        pergunta: 'Qual é 2/3 × 3/5?',
                        opcoes: ['6/15', '2/5', '5/8', '1/3'],
                        correta: 1,
                        resolucao: '2/3 × 3/5 = 6/15 = 2/5'
                    },
                    {
                        pergunta: 'Qual é 3/4 ÷ 1/2?',
                        opcoes: ['3/8', '3/2', '2/3', '1/2'],
                        correta: 1,
                        resolucao: '3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2'
                    },
                    {
                        pergunta: 'Qual fração é maior: 3/5 ou 2/3?',
                        opcoes: ['3/5', '2/3', 'São iguais', 'Não é possível'],
                        correta: 1,
                        resolucao: '3/5 = 9/15 e 2/3 = 10/15. Como 10/15 > 9/15, então 2/3 > 3/5'
                    }
                ]
            },
            porcentagem: {
                nome: 'Porcentagem',
                descricao: 'Cálculos de porcentagem, descontos e acréscimos',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>O que é Porcentagem?</h2>
                    <p>Porcentagem é uma forma de representar uma parte de um todo em relação a 100.</p>
                    <h3>Fórmula Básica</h3>
                    <p>Porcentagem = (Parte / Todo) × 100</p>
                    <h3>Exemplos</h3>
                    <p><strong>25% de 200:</strong> (25 × 200) / 100 = 50</p>
                    <p><strong>Desconto de 20% em R$ 80:</strong> 80 - (20% de 80) = 80 - 16 = R$ 64</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Quanto é 25% de 200?',
                        opcoes: ['25', '50', '75', '100'],
                        correta: 1,
                        resolucao: '25% de 200 = (25 × 200) / 100 = 50'
                    },
                    {
                        pergunta: 'Um produto custa R$ 80 e tem 20% de desconto. Qual é o novo preço?',
                        opcoes: ['R$ 16', 'R$ 60', 'R$ 64', 'R$ 96'],
                        correta: 2,
                        resolucao: 'Desconto = 20% de 80 = 16. Novo preço = 80 - 16 = R$ 64'
                    },
                    {
                        pergunta: 'Se 30% de um número é 90, qual é o número?',
                        opcoes: ['200', '250', '300', '350'],
                        correta: 2,
                        resolucao: '30% de x = 90. x = 90 × 100 / 30 = 300'
                    },
                    {
                        pergunta: 'Uma loja aumenta o preço em 15%. Se era R$ 120, qual é o novo preço?',
                        opcoes: ['R$ 105', 'R$ 135', 'R$ 138', 'R$ 145'],
                        correta: 2,
                        resolucao: 'Acréscimo = 15% de 120 = 18. Novo preço = 120 + 18 = R$ 138'
                    },
                    {
                        pergunta: 'Qual é a porcentagem que 45 representa de 180?',
                        opcoes: ['15%', '20%', '25%', '30%'],
                        correta: 2,
                        resolucao: 'Porcentagem = (45 / 180) × 100 = 25%'
                    }
                ]
            },
            equacoes: {
                nome: 'Equações do 1º Grau',
                descricao: 'Resolver equações e encontrar o valor de x',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Equações do 1º Grau</h2>
                    <p>Uma equação do primeiro grau tem a forma: ax + b = c</p>
                    <h3>Como Resolver</h3>
                    <p>1. Isolar os termos com x de um lado</p>
                    <p>2. Isolar os termos sem x do outro lado</p>
                    <p>3. Simplificar e encontrar x</p>
                    <h3>Exemplo</h3>
                    <p><strong>2x + 3 = 7</strong></p>
                    <p>2x = 7 - 3 = 4</p>
                    <p>x = 4 ÷ 2 = 2</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Resolva: x + 5 = 12',
                        opcoes: ['x = 5', 'x = 7', 'x = 12', 'x = 17'],
                        correta: 1,
                        resolucao: 'x + 5 = 12. x = 12 - 5 = 7'
                    },
                    {
                        pergunta: 'Resolva: 3x - 4 = 11',
                        opcoes: ['x = 3', 'x = 5', 'x = 7', 'x = 15'],
                        correta: 1,
                        resolucao: '3x - 4 = 11. 3x = 15. x = 5'
                    },
                    {
                        pergunta: 'Resolva: 2x + 6 = x + 10',
                        opcoes: ['x = 2', 'x = 4', 'x = 6', 'x = 8'],
                        correta: 1,
                        resolucao: '2x + 6 = x + 10. 2x - x = 10 - 6. x = 4'
                    },
                    {
                        pergunta: 'Resolva: 5x - 3 = 2x + 9',
                        opcoes: ['x = 2', 'x = 3', 'x = 4', 'x = 6'],
                        correta: 2,
                        resolucao: '5x - 3 = 2x + 9. 5x - 2x = 9 + 3. 3x = 12. x = 4'
                    },
                    {
                        pergunta: 'Resolva: 4x + 8 = 2x + 16',
                        opcoes: ['x = 2', 'x = 4', 'x = 6', 'x = 8'],
                        correta: 1,
                        resolucao: '4x + 8 = 2x + 16. 4x - 2x = 16 - 8. 2x = 8. x = 4'
                    }
                ]
            }
        }
    },
    portugues: {
        nome: 'Português',
        icon: '📝',
        assuntos: {
            interpretacao: {
                nome: 'Interpretação de Texto',
                descricao: 'Compreensão e análise de textos',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Interpretação de Texto</h2>
                    <p>Interpretar um texto significa compreender sua mensagem principal e os detalhes importantes.</p>
                    <h3>Dicas Importantes</h3>
                    <p>1. Leia o texto com atenção</p>
                    <p>2. Identifique a ideia principal</p>
                    <p>3. Procure por palavras-chave</p>
                    <p>4. Faça inferências baseadas no contexto</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Qual é o objetivo principal de um texto informativo?',
                        opcoes: ['Entreter', 'Informar', 'Convencer', 'Emocionar'],
                        correta: 1,
                        resolucao: 'Textos informativos têm como objetivo transmitir informações e conhecimentos.'
                    },
                    {
                        pergunta: 'O que é uma ideia principal?',
                        opcoes: ['Qualquer frase do texto', 'A mensagem central', 'A primeira frase', 'A última frase'],
                        correta: 1,
                        resolucao: 'A ideia principal é a mensagem central que o texto quer transmitir.'
                    },
                    {
                        pergunta: 'Como identificar o tema de um texto?',
                        opcoes: ['Pelo tamanho', 'Pelas palavras-chave repetidas', 'Pela cor', 'Pelo autor'],
                        correta: 1,
                        resolucao: 'O tema é identificado pelas palavras-chave que se repetem ao longo do texto.'
                    },
                    {
                        pergunta: 'O que é uma inferência?',
                        opcoes: ['Uma conclusão óbvia', 'Uma conclusão baseada em pistas do texto', 'Uma opinião pessoal', 'Uma adivinhação'],
                        correta: 1,
                        resolucao: 'Inferência é uma conclusão que fazemos baseada em pistas e contexto do texto.'
                    },
                    {
                        pergunta: 'Qual é a diferença entre fato e opinião?',
                        opcoes: ['Não há diferença', 'Fato é verificável, opinião é pessoal', 'Fato é pessoal, opinião é verificável', 'Ambos são iguais'],
                        correta: 1,
                        resolucao: 'Fato é algo verificável e comprovável. Opinião é uma perspectiva pessoal.'
                    }
                ]
            },
            gramatica: {
                nome: 'Gramática',
                descricao: 'Regras e estruturas da língua portuguesa',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Gramática Portuguesa</h2>
                    <p>A gramática estuda as regras e estruturas da língua.</p>
                    <h3>Principais Tópicos</h3>
                    <p><strong>Substantivo:</strong> Palavra que nomeia pessoas, coisas, animais</p>
                    <p><strong>Verbo:</strong> Palavra que indica ação, estado ou fenômeno</p>
                    <p><strong>Adjetivo:</strong> Palavra que descreve qualidades do substantivo</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Qual é a classe gramatical de "correr"?',
                        opcoes: ['Substantivo', 'Verbo', 'Adjetivo', 'Preposição'],
                        correta: 1,
                        resolucao: '"Correr" é um verbo que indica uma ação.'
                    },
                    {
                        pergunta: 'Identifique o adjetivo: "O gato preto dormia na cama macia"',
                        opcoes: ['gato', 'preto', 'cama', 'dormia'],
                        correta: 1,
                        resolucao: '"Preto" e "macia" são adjetivos. "Preto" descreve o gato.'
                    },
                    {
                        pergunta: 'O que é um verbo transitivo?',
                        opcoes: ['Verbo que não precisa de complemento', 'Verbo que precisa de complemento', 'Verbo irregular', 'Verbo no passado'],
                        correta: 1,
                        resolucao: 'Verbo transitivo é aquele que precisa de um complemento (objeto direto ou indireto).'
                    },
                    {
                        pergunta: 'Qual é o tempo verbal de "correrei"?',
                        opcoes: ['Presente', 'Passado', 'Futuro', 'Condicional'],
                        correta: 2,
                        resolucao: '"Correrei" é futuro do indicativo (ação que vai acontecer).'
                    },
                    {
                        pergunta: 'Identifique a preposição: "Vou para casa"',
                        opcoes: ['Vou', 'para', 'casa', 'Não há preposição'],
                        correta: 1,
                        resolucao: '"Para" é uma preposição que indica direção.'
                    }
                ]
            }
        }
    },
    fisica: {
        nome: 'Física',
        icon: '⚡',
        assuntos: {
            cinematica: {
                nome: 'Cinemática',
                descricao: 'Estudo do movimento dos corpos',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Cinemática</h2>
                    <p>Cinemática é a parte da Física que estuda o movimento sem considerar as causas.</p>
                    <h3>Conceitos Principais</h3>
                    <p><strong>Velocidade:</strong> v = Δs / Δt</p>
                    <p><strong>Aceleração:</strong> a = Δv / Δt</p>
                    <p><strong>MUV:</strong> v = v₀ + at</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Um carro percorre 150 km em 3 horas. Qual é sua velocidade média?',
                        opcoes: ['30 km/h', '40 km/h', '50 km/h', '60 km/h'],
                        correta: 2,
                        resolucao: 'v = 150 / 3 = 50 km/h'
                    },
                    {
                        pergunta: 'Um móvel parte do repouso e atinge 20 m/s em 5 segundos. Qual é sua aceleração?',
                        opcoes: ['2 m/s²', '4 m/s²', '5 m/s²', '10 m/s²'],
                        correta: 1,
                        resolucao: 'a = (20 - 0) / 5 = 4 m/s²'
                    },
                    {
                        pergunta: 'Qual é a velocidade após 2 segundos se v₀ = 30 m/s e g = 10 m/s²?',
                        opcoes: ['10 m/s', '15 m/s', '20 m/s', '25 m/s'],
                        correta: 0,
                        resolucao: 'v = 30 - 10(2) = 30 - 20 = 10 m/s'
                    },
                    {
                        pergunta: 'Um carro com v₀ = 10 m/s acelera a 2 m/s² durante 5 segundos. Qual é a distância?',
                        opcoes: ['50 m', '75 m', '100 m', '125 m'],
                        correta: 1,
                        resolucao: 's = 10(5) + (2 × 25)/2 = 50 + 25 = 75 m'
                    },
                    {
                        pergunta: 'Um móvel percorre 50 m em 5 segundos partindo do repouso. Qual é sua velocidade final?',
                        opcoes: ['10 m/s', '15 m/s', '20 m/s', '25 m/s'],
                        correta: 2,
                        resolucao: 'a = 4 m/s². v = 0 + 4(5) = 20 m/s'
                    }
                ]
            },
            dinamica: {
                nome: 'Dinâmica',
                descricao: 'Estudo das forças e movimento',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Dinâmica</h2>
                    <p>Dinâmica estuda as forças que causam o movimento.</p>
                    <h3>Leis de Newton</h3>
                    <p><strong>1ª Lei:</strong> Inércia - Um corpo em repouso tende a permanecer em repouso</p>
                    <p><strong>2ª Lei:</strong> F = m × a</p>
                    <p><strong>3ª Lei:</strong> Ação e reação</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Qual é a fórmula da 2ª Lei de Newton?',
                        opcoes: ['F = m / a', 'F = m × a', 'F = a / m', 'F = m + a'],
                        correta: 1,
                        resolucao: 'A força é igual à massa vezes a aceleração: F = m × a'
                    },
                    {
                        pergunta: 'Uma força de 20 N atua em uma massa de 4 kg. Qual é a aceleração?',
                        opcoes: ['2 m/s²', '4 m/s²', '5 m/s²', '10 m/s²'],
                        correta: 2,
                        resolucao: 'F = m × a. 20 = 4 × a. a = 5 m/s²'
                    },
                    {
                        pergunta: 'O que é a força peso?',
                        opcoes: ['Força horizontal', 'Força vertical para baixo', 'Força de atrito', 'Força normal'],
                        correta: 1,
                        resolucao: 'Força peso é a força gravitacional que atua verticalmente para baixo.'
                    },
                    {
                        pergunta: 'Qual é o peso de uma massa de 10 kg? (g = 10 m/s²)',
                        opcoes: ['10 N', '50 N', '100 N', '1000 N'],
                        correta: 2,
                        resolucao: 'P = m × g = 10 × 10 = 100 N'
                    },
                    {
                        pergunta: 'O que afirma a 3ª Lei de Newton?',
                        opcoes: ['Toda ação tem uma reação igual e oposta', 'Força é massa vezes aceleração', 'Inércia é resistência ao movimento', 'Energia não se cria nem se destrói'],
                        correta: 0,
                        resolucao: 'A 3ª Lei afirma que toda ação tem uma reação igual e oposta.'
                    }
                ]
            }
        }
    },
    quimica: {
        nome: 'Química',
        icon: '🧪',
        assuntos: {
            estequiometria: {
                nome: 'Estequiometria',
                descricao: 'Cálculos com proporções químicas',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Estequiometria</h2>
                    <p>Estequiometria estuda as proporções entre reagentes e produtos.</p>
                    <h3>Conceitos</h3>
                    <p><strong>Mol:</strong> Unidade de quantidade de matéria (6,02 × 10²³)</p>
                    <p><strong>Massa Molar:</strong> Massa de 1 mol em g/mol</p>
                    <p><strong>Coeficientes:</strong> Indicam as proporções</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Na reação 2H₂ + O₂ → 2H₂O, quantos mols de H₂O são produzidos de 4 mols de H₂?',
                        opcoes: ['2 mols', '4 mols', '6 mols', '8 mols'],
                        correta: 1,
                        resolucao: '2 mols H₂ produzem 2 mols H₂O. 4 mols H₂ produzem 4 mols H₂O'
                    },
                    {
                        pergunta: 'Quantos gramas de CO₂ são produzidos na combustão de 12 g de C?',
                        opcoes: ['22 g', '32 g', '44 g', '88 g'],
                        correta: 2,
                        resolucao: '12 g C = 1 mol. 1 mol C produz 1 mol CO₂ = 44 g'
                    },
                    {
                        pergunta: 'Na reação 2Na + 2H₂O → 2NaOH + H₂, quantos mols de H₂ são produzidos de 0,5 mol de Na?',
                        opcoes: ['0,25 mol', '0,5 mol', '1 mol', '2 mols'],
                        correta: 0,
                        resolucao: '2 mols Na produzem 1 mol H₂. 0,5 mol Na produzem 0,25 mol H₂'
                    },
                    {
                        pergunta: 'Qual é a massa molar de H₂O? (H = 1, O = 16)',
                        opcoes: ['16 g/mol', '17 g/mol', '18 g/mol', '19 g/mol'],
                        correta: 2,
                        resolucao: 'H₂O = 2(1) + 16 = 18 g/mol'
                    },
                    {
                        pergunta: 'O que é o número de Avogadro?',
                        opcoes: ['6,02 × 10²³', '3,14 × 10²³', '1,5 × 10²³', '9,8 × 10²³'],
                        correta: 0,
                        resolucao: 'O número de Avogadro é 6,02 × 10²³ partículas por mol'
                    }
                ]
            },
            reacoes: {
                nome: 'Reações Químicas',
                descricao: 'Tipos de reações e balanceamento',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Reações Químicas</h2>
                    <p>Uma reação química é a transformação de substâncias em outras.</p>
                    <h3>Tipos de Reações</h3>
                    <p><strong>Síntese:</strong> A + B → AB</p>
                    <p><strong>Decomposição:</strong> AB → A + B</p>
                    <p><strong>Simples Troca:</strong> A + BC → AC + B</p>
                    <p><strong>Dupla Troca:</strong> AB + CD → AD + CB</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Qual é o tipo de reação: 2H₂ + O₂ → 2H₂O?',
                        opcoes: ['Decomposição', 'Síntese', 'Simples troca', 'Dupla troca'],
                        correta: 1,
                        resolucao: 'Síntese é quando dois ou mais reagentes formam um produto.'
                    },
                    {
                        pergunta: 'Qual é o tipo de reação: 2H₂O → 2H₂ + O₂?',
                        opcoes: ['Decomposição', 'Síntese', 'Simples troca', 'Dupla troca'],
                        correta: 0,
                        resolucao: 'Decomposição é quando um reagente se divide em dois ou mais produtos.'
                    },
                    {
                        pergunta: 'O que significa balancear uma equação?',
                        opcoes: ['Adicionar produtos', 'Igualar átomos nos dois lados', 'Remover reagentes', 'Aumentar temperatura'],
                        correta: 1,
                        resolucao: 'Balancear é igualar o número de átomos de cada elemento nos dois lados.'
                    },
                    {
                        pergunta: 'Qual é o coeficiente de O₂ na reação: _C + _O₂ → _CO₂?',
                        opcoes: ['1', '2', '3', '4'],
                        correta: 0,
                        resolucao: 'A equação balanceada é: C + O₂ → CO₂'
                    },
                    {
                        pergunta: 'Qual é o tipo de reação: Fe + CuSO₄ → FeSO₄ + Cu?',
                        opcoes: ['Decomposição', 'Síntese', 'Simples troca', 'Dupla troca'],
                        correta: 2,
                        resolucao: 'Simples troca é quando um elemento substitui outro em um composto.'
                    }
                ]
            }
        }
    },
    biologia: {
        nome: 'Biologia',
        icon: '🧬',
        assuntos: {
            genetica: {
                nome: 'Genética',
                descricao: 'Hereditariedade e genes',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Genética</h2>
                    <p>Genética estuda a hereditariedade e os genes.</p>
                    <h3>Conceitos Básicos</h3>
                    <p><strong>Gene:</strong> Unidade de hereditariedade</p>
                    <p><strong>Cromossomo:</strong> Estrutura que contém genes</p>
                    <p><strong>DNA:</strong> Molécula que armazena informações genéticas</p>
                `,
                exercicios: [
                    {
                        pergunta: 'O que é um gene?',
                        opcoes: ['Uma célula', 'Uma unidade de hereditariedade', 'Um cromossomo', 'Uma proteína'],
                        correta: 1,
                        resolucao: 'Gene é a unidade básica de hereditariedade que controla características.'
                    },
                    {
                        pergunta: 'Quantos cromossomos tem um ser humano?',
                        opcoes: ['23', '46', '48', '50'],
                        correta: 1,
                        resolucao: 'Humanos têm 46 cromossomos (23 pares).'
                    },
                    {
                        pergunta: 'O que significa alelo?',
                        opcoes: ['Um cromossomo', 'Uma forma diferente de um gene', 'Uma célula', 'Uma proteína'],
                        correta: 1,
                        resolucao: 'Alelo é uma forma alternativa de um gene no mesmo locus.'
                    },
                    {
                        pergunta: 'O que é fenótipo?',
                        opcoes: ['Composição genética', 'Características observáveis', 'Um cromossomo', 'Uma mutação'],
                        correta: 1,
                        resolucao: 'Fenótipo é o conjunto de características observáveis de um indivíduo.'
                    },
                    {
                        pergunta: 'O que é genótipo?',
                        opcoes: ['Características observáveis', 'Composição genética', 'Um cromossomo', 'Uma proteína'],
                        correta: 1,
                        resolucao: 'Genótipo é a composição genética de um indivíduo.'
                    }
                ]
            },
            ecologia: {
                nome: 'Ecologia',
                descricao: 'Relações entre organismos e ambiente',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Ecologia</h2>
                    <p>Ecologia estuda as relações entre organismos e o ambiente.</p>
                    <h3>Conceitos</h3>
                    <p><strong>Ecossistema:</strong> Comunidade + Ambiente</p>
                    <p><strong>Cadeia Alimentar:</strong> Sequência de predador-presa</p>
                    <p><strong>Nicho Ecológico:</strong> Papel do organismo no ecossistema</p>
                `,
                exercicios: [
                    {
                        pergunta: 'O que é um ecossistema?',
                        opcoes: ['Um animal', 'Uma planta', 'Comunidade + Ambiente', 'Uma célula'],
                        correta: 2,
                        resolucao: 'Ecossistema é o conjunto de organismos (comunidade) e o ambiente físico.'
                    },
                    {
                        pergunta: 'Qual é o primeiro nível trófico?',
                        opcoes: ['Herbívoros', 'Produtores', 'Carnívoros', 'Decompositores'],
                        correta: 1,
                        resolucao: 'Produtores (plantas) são o primeiro nível trófico.'
                    },
                    {
                        pergunta: 'O que é sucessão ecológica?',
                        opcoes: ['Morte de organismos', 'Mudança gradual de comunidades', 'Reprodução', 'Migração'],
                        correta: 1,
                        resolucao: 'Sucessão ecológica é a mudança gradual de comunidades ao longo do tempo.'
                    },
                    {
                        pergunta: 'O que é um nicho ecológico?',
                        opcoes: ['Um habitat', 'O papel do organismo', 'Uma população', 'Uma espécie'],
                        correta: 1,
                        resolucao: 'Nicho ecológico é o papel funcional do organismo no ecossistema.'
                    },
                    {
                        pergunta: 'Qual é a diferença entre habitat e nicho?',
                        opcoes: ['Não há diferença', 'Habitat é onde vive, nicho é o papel', 'Habitat é o papel, nicho é onde vive', 'São sinônimos'],
                        correta: 1,
                        resolucao: 'Habitat é o local onde o organismo vive. Nicho é seu papel funcional.'
                    }
                ]
            }
        }
    },
    historia: {
        nome: 'História',
        icon: '🏛️',
        assuntos: {
            brasil: {
                nome: 'História do Brasil',
                descricao: 'Descobrimento até contemporânea',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>História do Brasil</h2>
                    <p>O Brasil tem uma história rica desde o descobrimento até os dias atuais.</p>
                    <h3>Períodos Principais</h3>
                    <p><strong>Descobrimento:</strong> 1500 - Pedro Álvares Cabral</p>
                    <p><strong>Colônia:</strong> 1500-1822</p>
                    <p><strong>Império:</strong> 1822-1889</p>
                    <p><strong>República:</strong> 1889-Presente</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Em que ano o Brasil foi descoberto?',
                        opcoes: ['1400', '1500', '1600', '1700'],
                        correta: 1,
                        resolucao: 'O Brasil foi descoberto em 1500 por Pedro Álvares Cabral.'
                    },
                    {
                        pergunta: 'Quem foi o primeiro imperador do Brasil?',
                        opcoes: ['Dom João VI', 'Dom Pedro I', 'Dom Pedro II', 'Getúlio Vargas'],
                        correta: 1,
                        resolucao: 'Dom Pedro I foi o primeiro imperador do Brasil (1822-1831).'
                    },
                    {
                        pergunta: 'Em que ano o Brasil se tornou independente?',
                        opcoes: ['1789', '1808', '1822', '1889'],
                        correta: 2,
                        resolucao: 'O Brasil se tornou independente em 1822 com Dom Pedro I.'
                    },
                    {
                        pergunta: 'Quando terminou a escravidão no Brasil?',
                        opcoes: ['1850', '1871', '1888', '1900'],
                        correta: 2,
                        resolucao: 'A escravidão foi abolida em 1888 com a Lei Áurea.'
                    },
                    {
                        pergunta: 'Em que ano o Brasil se tornou uma república?',
                        opcoes: ['1850', '1870', '1889', '1900'],
                        correta: 2,
                        resolucao: 'O Brasil se tornou república em 1889 com a Proclamação da República.'
                    }
                ]
            },
            mundo: {
                nome: 'História Mundial',
                descricao: 'Eventos importantes da história mundial',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>História Mundial</h2>
                    <p>A história mundial é marcada por grandes eventos e transformações.</p>
                    <h3>Períodos</h3>
                    <p><strong>Antiguidade:</strong> Egito, Grécia, Roma</p>
                    <p><strong>Idade Média:</strong> Feudalismo</p>
                    <p><strong>Renascimento:</strong> Século XV-XVI</p>
                    <p><strong>Idade Moderna:</strong> Século XVI-XVIII</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Qual foi a maior civilização da Antiguidade?',
                        opcoes: ['Egito', 'Grécia', 'Roma', 'Pérsia'],
                        correta: 2,
                        resolucao: 'Roma foi a maior civilização da Antiguidade, formando um grande império.'
                    },
                    {
                        pergunta: 'Quando começou a Idade Média?',
                        opcoes: ['Século V', 'Século X', 'Século XV', 'Século XVIII'],
                        correta: 0,
                        resolucao: 'A Idade Média começou no século V com a queda do Império Romano.'
                    },
                    {
                        pergunta: 'O que foi o Renascimento?',
                        opcoes: ['Uma guerra', 'Um movimento cultural', 'Uma religião', 'Uma moeda'],
                        correta: 1,
                        resolucao: 'O Renascimento foi um movimento cultural dos séculos XV-XVI.'
                    },
                    {
                        pergunta: 'Quando ocorreu a Revolução Francesa?',
                        opcoes: ['1688', '1789', '1848', '1917'],
                        correta: 1,
                        resolucao: 'A Revolução Francesa ocorreu em 1789.'
                    },
                    {
                        pergunta: 'Qual foi o resultado da Revolução Francesa?',
                        opcoes: ['Fortalecimento da monarquia', 'Fim da monarquia absoluta', 'Volta do feudalismo', 'Expansão do império'],
                        correta: 1,
                        resolucao: 'A Revolução Francesa resultou no fim da monarquia absoluta.'
                    }
                ]
            }
        }
    },
    geografia: {
        nome: 'Geografia',
        icon: '🌍',
        assuntos: {
            geopolitica: {
                nome: 'Geopolítica',
                descricao: 'Política internacional e relações entre países',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Geopolítica</h2>
                    <p>Geopolítica estuda a política internacional e as relações entre países.</p>
                    <h3>Conceitos</h3>
                    <p><strong>Soberania:</strong> Poder de um Estado</p>
                    <p><strong>Geopolítica:</strong> Influência da geografia na política</p>
                    <p><strong>Blocos Econômicos:</strong> Alianças entre países</p>
                `,
                exercicios: [
                    {
                        pergunta: 'O que é soberania?',
                        opcoes: ['Uma moeda', 'Poder de um Estado', 'Uma guerra', 'Uma fronteira'],
                        correta: 1,
                        resolucao: 'Soberania é o poder de um Estado de se autogovernar.'
                    },
                    {
                        pergunta: 'Qual é o maior bloco econômico do mundo?',
                        opcoes: ['MERCOSUL', 'ASEAN', 'União Europeia', 'NAFTA'],
                        correta: 2,
                        resolucao: 'A União Europeia é o maior bloco econômico do mundo.'
                    },
                    {
                        pergunta: 'O que é uma zona de conflito?',
                        opcoes: ['Uma cidade', 'Uma região com tensões políticas', 'Um país', 'Um continente'],
                        correta: 1,
                        resolucao: 'Zona de conflito é uma região com tensões políticas ou militares.'
                    },
                    {
                        pergunta: 'Qual é a capital do Brasil?',
                        opcoes: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
                        correta: 2,
                        resolucao: 'Brasília é a capital do Brasil desde 1960.'
                    },
                    {
                        pergunta: 'Quantos países existem no mundo?',
                        opcoes: ['150', '195', '250', '300'],
                        correta: 1,
                        resolucao: 'Existem aproximadamente 195 países no mundo.'
                    }
                ]
            },
            clima: {
                nome: 'Climatologia',
                descricao: 'Clima, tempo e fenômenos atmosféricos',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Climatologia</h2>
                    <p>Climatologia estuda o clima e os fenômenos atmosféricos.</p>
                    <h3>Tipos de Clima</h3>
                    <p><strong>Tropical:</strong> Quente e úmido</p>
                    <p><strong>Temperado:</strong> Estações bem definidas</p>
                    <p><strong>Árido:</strong> Seco</p>
                    <p><strong>Polar:</strong> Muito frio</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Qual é o clima predominante no Brasil?',
                        opcoes: ['Temperado', 'Tropical', 'Árido', 'Polar'],
                        correta: 1,
                        resolucao: 'O clima predominante no Brasil é tropical e subtropical.'
                    },
                    {
                        pergunta: 'O que causa as estações do ano?',
                        opcoes: ['Distância do Sol', 'Inclinação do eixo terrestre', 'Rotação da Terra', 'Gravidade'],
                        correta: 1,
                        resolucao: 'As estações são causadas pela inclinação do eixo terrestre.'
                    },
                    {
                        pergunta: 'Qual é a diferença entre clima e tempo?',
                        opcoes: ['Não há diferença', 'Clima é longo prazo, tempo é curto prazo', 'Tempo é longo prazo, clima é curto prazo', 'São sinônimos'],
                        correta: 1,
                        resolucao: 'Clima é o padrão longo prazo. Tempo é a condição atmosférica momentânea.'
                    },
                    {
                        pergunta: 'O que é o efeito estufa?',
                        opcoes: ['Resfriamento global', 'Aquecimento causado por gases', 'Falta de chuva', 'Furacão'],
                        correta: 1,
                        resolucao: 'Efeito estufa é o aquecimento causado por gases na atmosfera.'
                    },
                    {
                        pergunta: 'Qual é o gás mais importante para o efeito estufa?',
                        opcoes: ['Oxigênio', 'Nitrogênio', 'Dióxido de carbono', 'Argônio'],
                        correta: 2,
                        resolucao: 'O dióxido de carbono (CO₂) é o principal gás do efeito estufa.'
                    }
                ]
            }
        }
    },
    redacao: {
        nome: 'Redação',
        icon: '✍️',
        assuntos: {
            enem: {
                nome: 'Redação ENEM',
                descricao: 'Técnicas para escrever redação dissertativa-argumentativa',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Redação ENEM</h2>
                    <p>A redação ENEM é dissertativa-argumentativa com tema social.</p>
                    <h3>Estrutura</h3>
                    <p><strong>Introdução:</strong> Apresentar o tema e tese</p>
                    <p><strong>Desenvolvimento:</strong> Argumentos com exemplos</p>
                    <p><strong>Conclusão:</strong> Proposta de intervenção</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Qual é o tipo de redação do ENEM?',
                        opcoes: ['Narrativa', 'Descritiva', 'Dissertativa-argumentativa', 'Poética'],
                        correta: 2,
                        resolucao: 'A redação ENEM é dissertativa-argumentativa.'
                    },
                    {
                        pergunta: 'Quantos parágrafos deve ter uma redação ENEM?',
                        opcoes: ['2', '3', '4', '5'],
                        correta: 2,
                        resolucao: 'Uma redação ENEM deve ter no mínimo 3 parágrafos (introdução, desenvolvimento, conclusão).'
                    },
                    {
                        pergunta: 'O que é uma tese?',
                        opcoes: ['Um exemplo', 'Uma opinião defendida', 'Uma pergunta', 'Uma conclusão'],
                        correta: 1,
                        resolucao: 'Tese é a opinião que você defende no texto.'
                    },
                    {
                        pergunta: 'O que deve conter a conclusão de uma redação ENEM?',
                        opcoes: ['Apenas resumo', 'Proposta de intervenção', 'Novas informações', 'Perguntas'],
                        correta: 1,
                        resolucao: 'A conclusão deve conter uma proposta de intervenção social.'
                    },
                    {
                        pergunta: 'Qual é a pontuação máxima da redação ENEM?',
                        opcoes: ['500', '600', '700', '1000'],
                        correta: 1,
                        resolucao: 'A pontuação máxima da redação ENEM é 1000 pontos (200 por competência).'
                    }
                ]
            },
            dissertacao: {
                nome: 'Dissertação',
                descricao: 'Técnicas de escrita dissertativa',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Dissertação</h2>
                    <p>A dissertação é um texto argumentativo que defende uma opinião.</p>
                    <h3>Características</h3>
                    <p>- Apresenta uma tese</p>
                    <p>- Argumenta com exemplos</p>
                    <p>- Conclui com síntese</p>
                `,
                exercicios: [
                    {
                        pergunta: 'O que é uma dissertação?',
                        opcoes: ['Uma história', 'Um texto argumentativo', 'Uma descrição', 'Uma poesia'],
                        correta: 1,
                        resolucao: 'Dissertação é um texto que argumenta e defende uma opinião.'
                    },
                    {
                        pergunta: 'Qual é a diferença entre argumentação e persuasão?',
                        opcoes: ['Não há diferença', 'Argumentação usa lógica, persuasão usa emoção', 'Persuasão usa lógica, argumentação usa emoção', 'São sinônimos'],
                        correta: 1,
                        resolucao: 'Argumentação usa lógica e fatos. Persuasão usa emoção e apelo.'
                    },
                    {
                        pergunta: 'O que é um argumento de autoridade?',
                        opcoes: ['Opinião pessoal', 'Citação de especialista', 'Exemplo comum', 'Fato estatístico'],
                        correta: 1,
                        resolucao: 'Argumento de autoridade é quando você cita um especialista.'
                    },
                    {
                        pergunta: 'Como estruturar um parágrafo argumentativo?',
                        opcoes: ['Tópico frasal + exemplos + conclusão', 'Apenas exemplos', 'Apenas conclusão', 'Sem ordem específica'],
                        correta: 0,
                        resolucao: 'Um parágrafo deve ter: tópico frasal, desenvolvimento com exemplos, conclusão.'
                    },
                    {
                        pergunta: 'O que é um contra-argumento?',
                        opcoes: ['Um erro', 'Uma opinião oposta que você refuta', 'Uma conclusão', 'Um exemplo'],
                        correta: 1,
                        resolucao: 'Contra-argumento é uma opinião oposta que você apresenta e refuta.'
                    }
                ]
            }
        }
    },
    filosofia: {
        nome: 'Filosofia',
        icon: '🤔',
        assuntos: {
            etica: {
                nome: 'Ética',
                descricao: 'Moral, valores e comportamento',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Ética</h2>
                    <p>Ética estuda a moral e os valores humanos.</p>
                    <h3>Conceitos</h3>
                    <p><strong>Ética:</strong> Estudo do bem e do mal</p>
                    <p><strong>Moral:</strong> Conjunto de regras de conduta</p>
                    <p><strong>Virtude:</strong> Qualidade moral</p>
                `,
                exercicios: [
                    {
                        pergunta: 'O que é ética?',
                        opcoes: ['Uma lei', 'Estudo do bem e do mal', 'Uma religião', 'Uma política'],
                        correta: 1,
                        resolucao: 'Ética é o ramo da filosofia que estuda o bem e o mal.'
                    },
                    {
                        pergunta: 'Qual é a diferença entre ética e moral?',
                        opcoes: ['Não há diferença', 'Ética é teoria, moral é prática', 'Moral é teoria, ética é prática', 'São opostas'],
                        correta: 1,
                        resolucao: 'Ética é a teoria. Moral é o conjunto de regras práticas de conduta.'
                    },
                    {
                        pergunta: 'O que é uma virtude?',
                        opcoes: ['Um pecado', 'Uma qualidade moral', 'Um vício', 'Uma lei'],
                        correta: 1,
                        resolucao: 'Virtude é uma qualidade moral positiva.'
                    },
                    {
                        pergunta: 'Quem foi Aristóteles?',
                        opcoes: ['Poeta', 'Filósofo grego', 'Matemático', 'Físico'],
                        correta: 1,
                        resolucao: 'Aristóteles foi um filósofo grego que estudou ética e virtudes.'
                    },
                    {
                        pergunta: 'O que é o utilitarismo?',
                        opcoes: ['Amor à pátria', 'Busca pela felicidade máxima', 'Crença em Deus', 'Rejeição da tecnologia'],
                        correta: 1,
                        resolucao: 'Utilitarismo é a filosofia que busca a maior felicidade para o maior número.'
                    }
                ]
            },
            logica: {
                nome: 'Lógica',
                descricao: 'Raciocínio e argumentação válida',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Lógica</h2>
                    <p>Lógica estuda o raciocínio correto e a argumentação válida.</p>
                    <h3>Conceitos</h3>
                    <p><strong>Silogismo:</strong> Argumento com duas premissas e conclusão</p>
                    <p><strong>Falácia:</strong> Argumento inválido</p>
                    <p><strong>Dedução:</strong> Do geral para o particular</p>
                `,
                exercicios: [
                    {
                        pergunta: 'O que é um silogismo?',
                        opcoes: ['Uma frase', 'Um argumento com duas premissas', 'Uma opinião', 'Uma lei'],
                        correta: 1,
                        resolucao: 'Silogismo é um argumento com duas premissas e uma conclusão.'
                    },
                    {
                        pergunta: 'O que é uma falácia?',
                        opcoes: ['Uma verdade', 'Um argumento inválido', 'Uma lei', 'Uma virtude'],
                        correta: 1,
                        resolucao: 'Falácia é um argumento que parece válido mas não é.'
                    },
                    {
                        pergunta: 'O que é dedução?',
                        opcoes: ['Do particular para o geral', 'Do geral para o particular', 'Uma opinião', 'Uma lei'],
                        correta: 1,
                        resolucao: 'Dedução é o raciocínio que vai do geral para o particular.'
                    },
                    {
                        pergunta: 'O que é indução?',
                        opcoes: ['Do geral para o particular', 'Do particular para o geral', 'Uma opinião', 'Uma lei'],
                        correta: 1,
                        resolucao: 'Indução é o raciocínio que vai do particular para o geral.'
                    },
                    {
                        pergunta: 'Qual é um exemplo de falácia ad hominem?',
                        opcoes: ['Atacar o argumento', 'Atacar a pessoa em vez do argumento', 'Usar fatos', 'Usar lógica'],
                        correta: 1,
                        resolucao: 'Falácia ad hominem é atacar a pessoa em vez de refutar o argumento.'
                    }
                ]
            }
        }
    },
    sociologia: {
        nome: 'Sociologia',
        icon: '👥',
        assuntos: {
            sociedade: {
                nome: 'Sociedade',
                descricao: 'Estrutura e organização social',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Sociedade</h2>
                    <p>Sociologia estuda a sociedade e as relações humanas.</p>
                    <h3>Conceitos</h3>
                    <p><strong>Sociedade:</strong> Grupo de indivíduos com cultura comum</p>
                    <p><strong>Cultura:</strong> Conhecimento, valores e costumes</p>
                    <p><strong>Instituição:</strong> Estrutura social organizada</p>
                `,
                exercicios: [
                    {
                        pergunta: 'O que é uma sociedade?',
                        opcoes: ['Um país', 'Um grupo com cultura comum', 'Uma cidade', 'Uma empresa'],
                        correta: 1,
                        resolucao: 'Sociedade é um grupo de indivíduos que compartilham cultura e normas.'
                    },
                    {
                        pergunta: 'O que é cultura?',
                        opcoes: ['Educação formal', 'Conhecimento, valores e costumes', 'Uma religião', 'Uma língua'],
                        correta: 1,
                        resolucao: 'Cultura é o conjunto de conhecimento, valores, costumes e crenças.'
                    },
                    {
                        pergunta: 'O que é uma instituição social?',
                        opcoes: ['Um prédio', 'Estrutura social organizada', 'Uma lei', 'Uma pessoa'],
                        correta: 1,
                        resolucao: 'Instituição social é uma estrutura organizada que regula comportamentos.'
                    },
                    {
                        pergunta: 'O que é estratificação social?',
                        opcoes: ['Divisão em camadas sociais', 'Igualdade', 'Democracia', 'Liberdade'],
                        correta: 0,
                        resolucao: 'Estratificação social é a divisão da sociedade em camadas ou classes.'
                    },
                    {
                        pergunta: 'O que é mobilidade social?',
                        opcoes: ['Movimento físico', 'Mudança de posição social', 'Viagem', 'Migração'],
                        correta: 1,
                        resolucao: 'Mobilidade social é a possibilidade de mudar de posição na hierarquia social.'
                    }
                ]
            },
            cultura: {
                nome: 'Cultura',
                descricao: 'Manifestações culturais e identidade',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Cultura</h2>
                    <p>Cultura é o conjunto de manifestações humanas.</p>
                    <h3>Tipos de Cultura</h3>
                    <p><strong>Cultura Erudita:</strong> Produção intelectual refinada</p>
                    <p><strong>Cultura Popular:</strong> Manifestações do povo</p>
                    <p><strong>Cultura de Massa:</strong> Produção industrial</p>
                `,
                exercicios: [
                    {
                        pergunta: 'O que é cultura erudita?',
                        opcoes: ['Cultura do povo', 'Produção intelectual refinada', 'Cultura de massa', 'Folclore'],
                        correta: 1,
                        resolucao: 'Cultura erudita é a produção intelectual e artística refinada.'
                    },
                    {
                        pergunta: 'O que é cultura popular?',
                        opcoes: ['Cultura erudita', 'Manifestações do povo', 'Cultura de massa', 'Arte moderna'],
                        correta: 1,
                        resolucao: 'Cultura popular são as manifestações culturais do povo.'
                    },
                    {
                        pergunta: 'O que é folclore?',
                        opcoes: ['Uma religião', 'Tradições e costumes populares', 'Uma lei', 'Uma arte'],
                        correta: 1,
                        resolucao: 'Folclore é o conjunto de tradições, costumes e crenças populares.'
                    },
                    {
                        pergunta: 'O que é sincretismo cultural?',
                        opcoes: ['Separação de culturas', 'Mistura de elementos culturais', 'Extinção de culturas', 'Pureza cultural'],
                        correta: 1,
                        resolucao: 'Sincretismo cultural é a mistura de elementos de diferentes culturas.'
                    },
                    {
                        pergunta: 'O que é identidade cultural?',
                        opcoes: ['Um documento', 'Características que definem um grupo', 'Uma lei', 'Uma religião'],
                        correta: 1,
                        resolucao: 'Identidade cultural é o conjunto de características que definem um grupo.'
                    }
                ]
            }
        }
    },
    ingles: {
        nome: 'Inglês',
        icon: '🌐',
        assuntos: {
            gramatica: {
                nome: 'Gramática Inglesa',
                descricao: 'Regras essenciais do inglês',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Gramática Inglesa</h2>
                    <p>Aprenda as regras básicas do inglês.</p>
                    <h3>Tempos Verbais</h3>
                    <p><strong>Present Simple:</strong> I play, you play, he plays</p>
                    <p><strong>Past Simple:</strong> I played, you played, he played</p>
                    <p><strong>Future Simple:</strong> I will play, you will play, he will play</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Qual é a forma correta: "He go" ou "He goes"?',
                        opcoes: ['He go', 'He goes', 'Ambas são corretas', 'Nenhuma está correta'],
                        correta: 1,
                        resolucao: '"He goes" está correto. No present simple, a 3ª pessoa do singular adiciona "s".'
                    },
                    {
                        pergunta: 'Qual é o passado de "go"?',
                        opcoes: ['goed', 'went', 'going', 'goes'],
                        correta: 1,
                        resolucao: 'O passado de "go" é "went" (verbo irregular).'
                    },
                    {
                        pergunta: 'Como se forma o futuro em inglês?',
                        opcoes: ['will + verbo', 'verbo + ed', 'verbo + ing', 'do + verbo'],
                        correta: 0,
                        resolucao: 'O futuro é formado com "will" + verbo no infinitivo.'
                    },
                    {
                        pergunta: 'Qual é a forma correta do plural de "child"?',
                        opcoes: ['childs', 'children', 'childes', 'child'],
                        correta: 1,
                        resolucao: 'O plural de "child" é "children" (irregular).'
                    },
                    {
                        pergunta: 'Como se forma o present continuous?',
                        opcoes: ['am/is/are + verbo + ing', 'will + verbo', 'verbo + ed', 'do + verbo'],
                        correta: 0,
                        resolucao: 'Present continuous é formado com "am/is/are" + verbo + "ing".'
                    }
                ]
            },
            vocabulario: {
                nome: 'Vocabulário',
                descricao: 'Palavras e expressões comuns',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                conteudo: `
                    <h2>Vocabulário em Inglês</h2>
                    <p>Aprenda palavras e expressões úteis.</p>
                    <h3>Tópicos Comuns</h3>
                    <p><strong>Saudações:</strong> Hello, Hi, Good morning</p>
                    <p><strong>Números:</strong> One, two, three, four, five</p>
                    <p><strong>Cores:</strong> Red, blue, green, yellow, black</p>
                `,
                exercicios: [
                    {
                        pergunta: 'Como se diz "obrigado" em inglês?',
                        opcoes: ['Please', 'Thank you', 'Sorry', 'Hello'],
                        correta: 1,
                        resolucao: '"Thank you" significa "obrigado" em inglês.'
                    },
                    {
                        pergunta: 'Qual é a cor do céu em inglês?',
                        opcoes: ['Red', 'Blue', 'Green', 'Yellow'],
                        correta: 1,
                        resolucao: '"Blue" é azul em inglês.'
                    },
                    {
                        pergunta: 'Como se diz "bom dia" em inglês?',
                        opcoes: ['Good night', 'Good morning', 'Good afternoon', 'Good evening'],
                        correta: 1,
                        resolucao: '"Good morning" significa "bom dia" em inglês.'
                    },
                    {
                        pergunta: 'Qual é o número 5 em inglês?',
                        opcoes: ['Four', 'Five', 'Six', 'Seven'],
                        correta: 1,
                        resolucao: '"Five" é 5 em inglês.'
                    },
                    {
                        pergunta: 'Como se diz "desculpe" em inglês?',
                        opcoes: ['Thank you', 'Please', 'Sorry', 'Excuse me'],
                        correta: 2,
                        resolucao: '"Sorry" ou "Excuse me" significam "desculpe" em inglês.'
                    }
                ]
            }
        }
    }
};

// ===== FUNÇÕES DE NAVEGAÇÃO =====
function navigateTo(screen, param1 = null, param2 = null) {
    // Esconder todas as telas
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    // Fechar menu mobile
    document.getElementById('navMobile').classList.remove('active');
    document.getElementById('menuToggle').classList.remove('active');
    
    // Mostrar tela solicitada
    const screenEl = document.getElementById(screen);
    if (screenEl) {
        screenEl.classList.add('active');
    }
    
    // Processar parâmetros
    if (screen === 'materia' && param1) {
        showMateria(param1);
    } else if (screen === 'assunto' && param1 && param2) {
        showAssunto(param1, param2);
    } else if (screen === 'dashboard') {
        if (!currentUser) {
            navigateTo('login');
            return;
        }
        updateDashboard();
    }
    
    // Scroll para o topo
    window.scrollTo(0, 0);
}

function showMateria(materiaKey) {
    const materia = materias[materiaKey];
    if (!materia) return;
    
    document.getElementById('materiaTitle').textContent = materia.nome;
    const content = document.getElementById('materiaContent');
    content.innerHTML = '';
    
    for (const [key, assunto] of Object.entries(materia.assuntos)) {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => navigateTo('assunto', materiaKey, key);
        card.innerHTML = `
            <div class="card-icon">${materia.icon}</div>
            <h3>${assunto.nome}</h3>
            <p>${assunto.descricao}</p>
        `;
        content.appendChild(card);
    }
}

function showAssunto(materiaKey, assuntoKey) {
    const materia = materias[materiaKey];
    const assunto = materia.assuntos[assuntoKey];
    
    if (!assunto) return;
    
    // Adicionar ao histórico
    addToHistory(materia.nome, assunto.nome, materiaKey, assuntoKey);
    
    document.getElementById('assuntoTitle').textContent = assunto.nome;
    
    const content = document.getElementById('assuntoContent');
    content.innerHTML = `
        <div class="content-header">
            <h2>${assunto.nome}</h2>
            <p class="content-meta">${materia.nome} • ${assunto.descricao}</p>
        </div>
        
        <div class="content-section">
            ${assunto.conteudo}
        </div>
        
        <div class="content-section">
            <h2>📹 Vídeo Aula</h2>
            <div class="video-container">
                <iframe src="${assunto.video}" allowfullscreen></iframe>
            </div>
        </div>
        
        <div class="content-section">
            <h2>📝 Exercícios</h2>
            <div class="exercises" id="exercisesContainer"></div>
        </div>
        
        <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-pdf" onclick="alert('PDF gerado! Baixar em breve.')">📥 Baixar PDF</button>
            <button class="btn btn-favorite" onclick="toggleFavorite('${materiaKey}', '${assuntoKey}', '${assunto.nome}')">⭐ Adicionar aos Favoritos</button>
        </div>
    `;
    
    // Renderizar exercícios
    const exercisesContainer = document.getElementById('exercisesContainer');
    assunto.exercicios.forEach((ex, index) => {
        const exerciseEl = document.createElement('div');
        exerciseEl.className = 'exercise';
        exerciseEl.innerHTML = `
            <div>
                <span class="exercise-number">${index + 1}</span>
                <div class="exercise-question">${ex.pergunta}</div>
            </div>
            <div class="exercise-options">
                ${ex.opcoes.map((opt, i) => `
                    <div class="option" onclick="checkAnswer(${index}, ${i}, ${ex.correta})">${String.fromCharCode(65 + i)}) ${opt}</div>
                `).join('')}
            </div>
            <button class="btn-toggle" onclick="toggleAnswer(${index})">✓ Ver Gabarito</button>
            <div class="answer-content" id="answer-${index}">
                <strong>Resposta Correta:</strong> ${String.fromCharCode(65 + ex.correta)}) ${ex.opcoes[ex.correta]}
            </div>
            <button class="btn-toggle" onclick="toggleResolution(${index})" style="margin-top: 0.5rem;">→ Ver Resolução</button>
            <div class="resolution-content" id="resolution-${index}">
                <strong>Resolução:</strong><br>${ex.resolucao}
            </div>
        `;
        exercisesContainer.appendChild(exerciseEl);
    });
}

// ===== FUNÇÕES DE EXERCÍCIOS =====
function checkAnswer(exerciseIndex, selectedIndex, correctIndex) {
    const option = event.target;
    if (selectedIndex === correctIndex) {
        option.classList.add('correct');
        alert('✓ Resposta Correta!');
    } else {
        option.classList.add('incorrect');
        alert('✗ Resposta Incorreta. Tente novamente!');
    }
}

function toggleAnswer(index) {
    const element = document.getElementById(`answer-${index}`);
    element.classList.toggle('show');
}

function toggleResolution(index) {
    const element = document.getElementById(`resolution-${index}`);
    element.classList.toggle('show');
}

// ===== AUTENTICAÇÃO =====
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        currentUser = { email, name: email.split('@')[0] };
        localStorage.setItem('user', JSON.stringify(currentUser));
        updateUserUI();
        navigateTo('home');
        alert('✓ Login realizado com sucesso!');
    }
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (name && email && password) {
        currentUser = { email, name };
        localStorage.setItem('user', JSON.stringify(currentUser));
        updateUserUI();
        navigateTo('home');
        alert('✓ Conta criada com sucesso!');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('user');
    updateUserUI();
    navigateTo('home');
}

function updateUserUI() {
    const userIcon = document.getElementById('userIcon');
    const userName = document.getElementById('userName');
    
    if (currentUser) {
        userIcon.textContent = '✓';
        userName.textContent = currentUser.name;
    } else {
        userIcon.textContent = '👤';
        userName.textContent = 'Entrar';
    }
}

// ===== DASHBOARD =====
function updateDashboard() {
    document.getElementById('dashboardUserName').textContent = currentUser ? currentUser.name : 'Visitante';
    
    // Atualizar progresso
    const progress = Math.min((history.length * 10), 100);
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = progress + '% completo';
    
    // Atualizar favoritos
    const favoritosList = document.getElementById('favoritosList');
    if (favorites.length > 0) {
        favoritosList.innerHTML = favorites.map(fav => `
            <a href="#" onclick="navigateTo('assunto', '${fav.materiaKey}', '${fav.assuntoKey}'); return false;">
                ⭐ ${fav.nome}
            </a>
        `).join('');
    } else {
        favoritosList.innerHTML = '<p>Nenhum favorito ainda</p>';
    }
    
    // Atualizar histórico
    const historicoList = document.getElementById('historicoList');
    if (history.length > 0) {
        historicoList.innerHTML = history.slice(-3).reverse().map(item => `
            <a href="#" onclick="navigateTo('assunto', '${item.materiaKey}', '${item.assuntoKey}'); return false;">
                📖 ${item.assuntoNome}
            </a>
        `).join('');
    } else {
        historicoList.innerHTML = '<p>Nenhum acesso ainda</p>';
    }
    
    // Botão continuar estudando
    if (lastAccess) {
        document.getElementById('btnContinuar').textContent = `Continuar: ${lastAccess.assuntoNome}`;
        document.getElementById('btnContinuar').onclick = () => {
            navigateTo('assunto', lastAccess.materiaKey, lastAccess.assuntoKey);
        };
    }
}

function continuarEstudando() {
    if (lastAccess) {
        navigateTo('assunto', lastAccess.materiaKey, lastAccess.assuntoKey);
    } else {
        alert('Nenhum conteúdo anterior. Comece a estudar!');
        navigateTo('materias');
    }
}

// ===== FAVORITOS =====
function toggleFavorite(materiaKey, assuntoKey, nome) {
    const index = favorites.findIndex(f => f.assuntoKey === assuntoKey);
    if (index > -1) {
        favorites.splice(index, 1);
        alert('✗ Removido dos favoritos');
    } else {
        favorites.push({ materiaKey, assuntoKey, nome });
        alert('✓ Adicionado aos favoritos');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// ===== HISTÓRICO =====
function addToHistory(materiaNome, assuntoNome, materiaKey, assuntoKey) {
    lastAccess = { materiaNome, assuntoNome, materiaKey, assuntoKey };
    
    const exists = history.some(h => h.assuntoKey === assuntoKey);
    if (!exists) {
        history.push(lastAccess);
    }
    
    localStorage.setItem('history', JSON.stringify(history));
}

// ===== MENU MOBILE =====
function toggleMenu() {
    const nav = document.getElementById('navMobile');
    const btn = document.getElementById('menuToggle');
    nav.classList.toggle('active');
    btn.classList.toggle('active');
}

function toggleUserMenu() {
    const menu = document.getElementById('userMenu');
    menu.classList.toggle('active');
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    // Carregar dados do localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
    
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
    }
    
    const savedHistory = localStorage.getItem('history');
    if (savedHistory) {
        history = JSON.parse(savedHistory);
    }
    
    updateUserUI();
    navigateTo('home');
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    const userMenu = document.getElementById('userMenu');
    const btnUser = document.querySelector('.btn-user');
    
    if (!btnUser.contains(e.target) && !userMenu.contains(e.target)) {
        userMenu.classList.remove('active');
    }
});
