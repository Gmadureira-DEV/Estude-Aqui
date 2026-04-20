export interface Video {
  id: string;
  title: string;
  youtubeId: string;
}

export interface Exercise {
  id: string;
  question: string;
  options: { a: string; b: string; c: string; d: string };
  answer: "a" | "b" | "c" | "d";
  resolution: string;
}

export interface PDF {
  id: string;
  title: string;
  type: "resumo" | "exercicios" | "apostila";
  description: string;
  downloadUrl: string;
}

export interface Topic {
  id: string;
  title: string;
  slug: string;
  explanation: string;
  videos: Video[];
  exercises: Exercise[];
}

export interface Subject {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  topics: Topic[];
  pdfs: PDF[];
}

export const subjects: Subject[] = [
  {
    id: "portugues",
    name: "Português",
    slug: "portugues",
    description: "Gramática, interpretação de texto, literatura e redação",
    icon: "📚",
    color: "#1E40AF",
    bgColor: "#EFF6FF",
    topics: [
      {
        id: "classes-gramaticais",
        title: "Classes Gramaticais",
        slug: "portugues-classes-gramaticais",
        explanation: `<h2>Classes Gramaticais da Língua Portuguesa</h2>
<p>As classes gramaticais são categorias nas quais se enquadram as palavras de acordo com sua função e significado no contexto da língua. Na língua portuguesa, existem 10 classes gramaticais que se dividem em variáveis e invariáveis.</p>
<h3>Classes Variáveis</h3>
<p><strong>Substantivo:</strong> Nomeia seres, objetos, sentimentos, lugares, fenômenos. Exemplos: casa, amor, Brasil, tristeza, chuva. Varia em gênero (masculino/feminino) e número (singular/plural).</p>
<p><strong>Adjetivo:</strong> Caracteriza ou qualifica o substantivo. Exemplos: bonito, inteligente, grande, brasileiro. Concorda em gênero e número com o substantivo.</p>
<p><strong>Verbo:</strong> Expressa ação, estado ou fenômeno da natureza. É a classe que mais varia, podendo ser conjugada em pessoa, número, tempo, modo e voz. Exemplos: correr, ser, chover.</p>
<p><strong>Artigo:</strong> Antecede o substantivo e indica se é definido ou indefinido. Definidos: o, a, os, as. Indefinidos: um, uma, uns, umas.</p>
<p><strong>Numeral:</strong> Indica quantidade, ordem, múltiplo ou fração. Exemplos: dois, primeiro, dobro, metade.</p>
<p><strong>Pronome:</strong> Substitui ou acompanha o substantivo. Dividem-se em pessoais, possessivos, demonstrativos, indefinidos, interrogativos e relativos.</p>
<h3>Classes Invariáveis</h3>
<p><strong>Advérbio:</strong> Modifica o verbo, adjetivo ou outro advérbio, indicando circunstâncias como tempo, lugar, modo, intensidade. Exemplos: rapidamente, aqui, ontem, muito.</p>
<p><strong>Preposição:</strong> Liga palavras, estabelecendo relação de dependência. Exemplos: de, para, em, com, por, sobre.</p>
<p><strong>Conjunção:</strong> Liga orações ou termos de mesma função. Exemplos: e, mas, porém, porque, quando, se.</p>
<p><strong>Interjeição:</strong> Expressa emoções ou sentimentos. Exemplos: Ah!, Uau!, Boa!, Silêncio!</p>`,
        videos: [{ id: "v1", title: "Classes Gramaticais - Aula Completa", youtubeId: "YFkE5hKrdpI" }, { id: "v2", title: "Substantivos - Classificação e Exercícios", youtubeId: "BJhe06AjOcw" }, { id: "v3", title: "Verbos - Todos os Tipos e Modos", youtubeId: "ohblr5iboO8" }, { id: "v4", title: "Adjetivos, Advérbios e Pronomes", youtubeId: "hQZH-rYH0Fg" }, { id: "v5", title: "Classes Gramaticais no ENEM - Exercícios", youtubeId: "LucB-PuPqGA" }],
        exercises: [
          {
            id: "e1",
            question: "Qual das alternativas contém apenas SUBSTANTIVOS?",
            options: { a: "correr, bonito, casa", b: "mesa, livro, felicidade", c: "alto, rápido, forte", d: "comer, beber, dormir" },
            answer: "b",
            resolution: "A alternativa B contém apenas substantivos: 'mesa' e 'livro' (objetos) e 'felicidade' (sentimento abstrato). Na alternativa A, 'correr' é verbo e 'bonito' é adjetivo. Na C, todas as palavras são adjetivos. Na D, todas são verbos no infinitivo.",
          },
          {
            id: "e2",
            question: "Em 'O menino inteligente leu o livro rapidamente', qual é a classe gramatical de 'rapidamente'?",
            options: { a: "Adjetivo", b: "Substantivo", c: "Advérbio", d: "Preposição" },
            answer: "c",
            resolution: "'Rapidamente' é um advérbio de modo, pois modifica o verbo 'leu', indicando a maneira como a ação foi realizada. Advérbios terminados em '-mente' geralmente indicam modo.",
          },
          {
            id: "e3",
            question: "A preposição 'de' está presente em qual exemplo com função de indicar posse?",
            options: { a: "Vou de ônibus", b: "O livro de Maria", c: "Saí de casa", d: "Gosto de sorvete" },
            answer: "b",
            resolution: "Em 'O livro de Maria', a preposição 'de' indica posse (o livro pertence a Maria). Nas demais alternativas, 'de' indica meio de transporte (A), lugar de partida (C) e objeto de sentimento (D).",
          },
          {
            id: "e4",
            question: "Qual alternativa apresenta uma CONJUNÇÃO adversativa?",
            options: { a: "Estudo porque quero aprender", b: "Trabalhei e descansou", c: "Estudei muito, mas não passei", d: "Quando chover, ficarei em casa" },
            answer: "c",
            resolution: "A conjunção 'mas' é adversativa, pois conecta orações com sentido de oposição ou contraste. 'Porque' é conjunção causal (A), 'e' é aditiva (B) e 'quando' é temporal (D).",
          },
          {
            id: "e5",
            question: "Identifique o ARTIGO definido na frase: 'Uma criança encontrou o brinquedo perdido'.",
            options: { a: "Uma", b: "criança", c: "o", d: "perdido" },
            answer: "c",
            resolution: "O artigo 'o' é definido porque se refere a um substantivo específico e determinado ('brinquedo'). 'Uma' é artigo indefinido. 'Criança' é substantivo e 'perdido' é adjetivo.",
          },
        ],
      },
      {
        id: "interpretacao-texto",
        title: "Interpretação de Texto",
        slug: "portugues-interpretacao-texto",
        explanation: `<h2>Interpretação e Compreensão de Texto</h2>
<p>A interpretação de texto é a habilidade de extrair o significado de um texto, compreendendo não apenas o que está explicitamente escrito (denotação), mas também o que está implícito (conotação), as intenções do autor e o contexto histórico-cultural.</p>
<h3>Tipos de Leitura</h3>
<p><strong>Leitura Literal:</strong> Compreende o que está diretamente escrito no texto, sem interpretações subjetivas. É a leitura das informações explícitas.</p>
<p><strong>Leitura Inferencial:</strong> Vai além do texto escrito, deduzindo informações que estão implícitas. O leitor usa pistas do texto e seu conhecimento de mundo para completar o sentido.</p>
<p><strong>Leitura Crítica:</strong> O leitor avalia, questiona e analisa o texto, posicionando-se criticamente sobre as ideias apresentadas.</p>
<h3>Elementos do Texto</h3>
<p><strong>Ideia Principal e Secundárias:</strong> Todo texto possui uma ideia central e ideias que a desenvolvem e complementam. Identificar a ideia principal é essencial para a compreensão global do texto.</p>
<p><strong>Coesão e Coerência:</strong> A coesão refere-se aos mecanismos linguísticos que ligam as partes do texto (pronomes, conjunções, artigos). A coerência diz respeito à lógica e harmonia entre as ideias.</p>
<p><strong>Inferências:</strong> São conclusões que o leitor tira a partir de informações implícitas. Para fazer inferências, é preciso relacionar o texto com conhecimentos prévios.</p>`,
        videos: [{ id: "v1", title: "Interpretação de Texto - Estratégias", youtubeId: "O0TTbXCTg-I" }, { id: "v2", title: "Como Interpretar Textos no ENEM", youtubeId: "X6g5caxEAvE" }, { id: "v3", title: "Inferência e Subentendido - Aula", youtubeId: "rf1lg2foSG4" }, { id: "v4", title: "Textos Argumentativos - Interpretação", youtubeId: "XsN0e_xPyNI" }, { id: "v5", title: "Resolução de Questões de Interpretação ENEM", youtubeId: "XgiubkEAqdo" }],
        exercises: [
          {
            id: "e1",
            question: "O que é uma inferência em um texto?",
            options: { a: "Uma informação explicitamente escrita", b: "Uma conclusão deduzida a partir de pistas do texto", c: "Um erro de gramática do autor", d: "O título do texto" },
            answer: "b",
            resolution: "Inferência é uma conclusão que o leitor tira com base em informações implícitas do texto, relacionando-as com seu conhecimento de mundo. Não está escrita diretamente, mas pode ser deduzida logicamente.",
          },
          {
            id: "e2",
            question: "Qual recurso textual garante a COESÃO de um texto?",
            options: { a: "A ausência de pontuação", b: "O uso de pronomes e conjunções para conectar ideias", c: "A repetição excessiva de palavras", d: "O uso de muitos parágrafos" },
            answer: "b",
            resolution: "A coesão textual é garantida por mecanismos de referência e conexão entre as partes do texto, como pronomes (que retomam termos anteriores), conjunções (que estabelecem relações lógicas) e artigos.",
          },
          {
            id: "e3",
            question: "Qual é a diferença entre denotação e conotação?",
            options: { a: "Denotação é o sentido figurado; conotação é o literal", b: "Ambas significam a mesma coisa", c: "Denotação é o sentido literal; conotação é o figurado", d: "Denotação se aplica apenas a poesias" },
            answer: "c",
            resolution: "Denotação é o sentido literal, objetivo e dicionarizado de uma palavra. Conotação é o sentido figurado, subjetivo, que varia conforme o contexto. Exemplo: 'pedra' em sentido denotativo é um mineral; em sentido conotativo pode significar algo muito difícil.",
          },
          {
            id: "e4",
            question: "Ao ler o título de um texto, qual operação de leitura é realizada?",
            options: { a: "Leitura crítica completa", b: "Antecipação e levantamento de hipóteses", c: "Conclusão definitiva sobre o conteúdo", d: "Nenhuma operação importante" },
            answer: "b",
            resolution: "Antes de ler o texto, o título nos leva a formular hipóteses sobre o conteúdo, ativando nosso conhecimento prévio. Essa estratégia de antecipação facilita a compreensão posterior do texto.",
          },
          {
            id: "e5",
            question: "O que é a ideia principal de um texto?",
            options: { a: "A última frase do último parágrafo", b: "A informação mais importante que o autor quer transmitir", c: "Todas as palavras difíceis do texto", d: "O nome do autor" },
            answer: "b",
            resolution: "A ideia principal é o tema central, a mensagem mais importante que o autor pretende comunicar. Ela perpassa todo o texto e pode estar explicitamente em um parágrafo ou ser deduzida pelo conjunto das ideias apresentadas.",
          },
        ],
      },
      {
        id: "ortografia",
        title: "Ortografia e Acentuação",
        slug: "portugues-ortografia",
        explanation: `<h2>Ortografia e Acentuação na Língua Portuguesa</h2>
<p>A ortografia trata da forma correta de escrever as palavras. Após o Acordo Ortográfico de 2009, algumas regras foram unificadas entre os países lusófonos. A acentuação gráfica segue regras específicas que dependem da posição da sílaba tônica e das características da palavra.</p>
<h3>Regras de Acentuação</h3>
<p><strong>Oxítonas:</strong> Palavras cuja sílaba tônica é a última. São acentuadas quando terminam em: a(s), e(s), o(s), em, ens. Exemplos: café, maré, avó, também, parabéns.</p>
<p><strong>Paroxítonas:</strong> Sílaba tônica na penúltima posição. São acentuadas quando NÃO terminam em a(s), e(s), o(s), em, ens. Exemplos: fácil, tórax, hífen, vírus.</p>
<p><strong>Proparoxítonas:</strong> Sílaba tônica na antepenúltima posição. Todas são acentuadas. Exemplos: médico, público, árvore, lâmpada.</p>
<h3>Uso do Hífen</h3>
<p>Após o acordo ortográfico, o hífen passou por mudanças. Usa-se hífen: quando o prefixo termina com a mesma letra do início da segunda palavra (anti-inflamatório), com prefixos como ex-, vice-, sem-, além-, aquém- e outros casos específicos.</p>
<p><strong>Dígrafo e ditongo:</strong> Dígrafos são dois grafemas que representam um único fonema (ch, lh, nh, rr, ss, qu, gu). Ditongos são a junção de vogal + semivogal ou semivogal + vogal na mesma sílaba.</p>`,
        videos: [{ id: "v1", title: "Ortografia - Regras Completas", youtubeId: "msMgdQRtU30" }, { id: "v2", title: "Acentuação Gráfica - Tudo Sobre", youtubeId: "BpDHOqagBRo" }, { id: "v3", title: "Acordo Ortográfico de 2009 - Mudanças", youtubeId: "Ytw1SjnqEJ8" }, { id: "v4", title: "Crase - Quando Usar e Quando Não Usar", youtubeId: "Fog96LT5Ngo" }, { id: "v5", title: "Exercícios de Ortografia e Acentuação", youtubeId: "Sy_LUnePfRE" }],
        exercises: [
          {
            id: "e1",
            question: "Qual palavra é uma PROPAROXÍTONA?",
            options: { a: "Café", b: "Fácil", c: "Médico", d: "Também" },
            answer: "c",
            resolution: "'Médico' é proparoxítona porque a sílaba tônica é 'Mé' (antepenúltima). Todas as proparoxítonas são acentuadas. 'Café' é oxítona, 'Fácil' é paroxítona e 'Também' é oxítona.",
          },
          {
            id: "e2",
            question: "Qual das palavras abaixo está INCORRETAMENTE acentuada?",
            options: { a: "Táxi", b: "Líder", c: "Juiz", d: "Álbum" },
            answer: "c",
            resolution: "'Juiz' é paroxítona terminada em ditongo e não precisa de acento conforme as regras vigentes após o Acordo Ortográfico. As demais estão corretamente acentuadas como paroxítonas com terminações especiais.",
          },
          {
            id: "e3",
            question: "Em qual alternativa o uso do hífen está CORRETO?",
            options: { a: "Anti-social", b: "Microondas", c: "Ex-presidente", d: "Ultrasom" },
            answer: "c",
            resolution: "'Ex-presidente' usa hífen corretamente porque o prefixo 'ex-' sempre exige hífen. 'Anti-social' deveria ser 'antissocial', 'microondas' está correto sem hífen e 'ultrasom' deveria ser 'ultrassom'.",
          },
          {
            id: "e4",
            question: "Qual sequência contém apenas palavras OXÍTONAS?",
            options: { a: "Café, avó, também", b: "Árvore, médico, fácil", c: "Mesa, casa, livro", d: "Hífen, vírus, tórax" },
            answer: "a",
            resolution: "Café (sílaba tônica 'fé' - última), avó ('vó' - última) e também ('bém' - última) são todas oxítonas. As demais alternativas contêm proparoxítonas (B) e paroxítonas (C e D).",
          },
          {
            id: "e5",
            question: "O dígrafo é:",
            options: { a: "Uma vogal com acento", b: "Dois grafemas representando um único fonema", c: "Uma sílaba com duas vogais", d: "Uma consoante dobrada" },
            answer: "b",
            resolution: "Dígrafo é a combinação de dois grafemas (letras) que representam apenas um fonema (som). Exemplos: ch (em 'chave'), lh (em 'filho'), nh (em 'ninho'), rr (em 'carro'), ss (em 'passo').",
          },
        ],
      },
      {
        id: "literatura-brasileira",
        title: "Literatura Brasileira",
        slug: "portugues-literatura-brasileira",
        explanation: `<h2>Literatura Brasileira - Períodos Literários</h2>
<p>A literatura brasileira se desenvolveu ao longo de séculos, influenciada inicialmente pela literatura portuguesa e gradualmente conquistando características próprias. Divide-se em grandes eras: Era Colonial, Era Romântica, Era Realista e Era Modernista.</p>
<h3>Era Colonial (1500-1822)</h3>
<p><strong>Quinhentismo (1500-1601):</strong> Textos informativos sobre a nova terra, sem preocupação estética. Obra mais importante: Carta de Pero Vaz de Caminha, descrevendo o Brasil para o rei de Portugal.</p>
<p><strong>Barroco (1601-1768):</strong> Marcado pelo conflito entre o espiritual e o carnal, razão e emoção. Figuras de linguagem excessivas (antítese, hipérbole). Principal autor: Padre Antônio Vieira (prosa) e Gregório de Matos (poesia).</p>
<p><strong>Arcadismo (1768-1836):</strong> Retorno à simplicidade, influência greco-latina. Temática bucólica e pastoril. Autores: Cláudio Manuel da Costa, Tomás Antônio Gonzaga (Marília de Dirceu).</p>
<h3>Era Nacional</h3>
<p><strong>Romantismo (1836-1881):</strong> Valorização do nacional, do índio como herói, sentimentalismo exacerbado. Autores: José de Alencar (Iracema, O Guarani), Gonçalves Dias (poesia indianista), Álvares de Azevedo (ultra-romantismo).</p>
<p><strong>Realismo/Naturalismo (1881-1902):</strong> Crítica social, análise psicológica, objetividade. Machado de Assis é o principal nome (Dom Casmurro, Memórias Póstumas de Brás Cubas). Aluísio Azevedo representa o Naturalismo (O Cortiço).</p>
<p><strong>Modernismo (1922-1945):</strong> Ruptura com o passado, liberdade formal, valorização da cultura brasileira. A Semana de Arte Moderna de 1922 marcou o início. Autores: Oswald de Andrade, Mário de Andrade, Manuel Bandeira.</p>`,
        videos: [{ id: "v1", title: "Modernismo Brasileiro - Literatura", youtubeId: "lBuCmSgzzUo" }, { id: "v2", title: "Realismo e Naturalismo - Resumo", youtubeId: "qOzGwtw0SRE" }, { id: "v3", title: "Romantismo Brasileiro - Fases", youtubeId: "EidWKUcxEi4" }, { id: "v4", title: "Literatura Brasileira Contemporânea", youtubeId: "B5oVgLGKO9Y" }, { id: "v5", title: "Períodos Literários para o ENEM", youtubeId: "D0fUS0-anss" }],
        exercises: [
          {
            id: "e1",
            question: "Qual é considerado o marco inicial da Literatura Brasileira?",
            options: { a: "O Guarani, de José de Alencar", b: "A Carta de Pero Vaz de Caminha", c: "Dom Casmurro, de Machado de Assis", d: "Iracema, de José de Alencar" },
            answer: "b",
            resolution: "A Carta de Pero Vaz de Caminha (1500), escrita ao rei Dom Manuel I de Portugal, é considerada o primeiro documento literário do Brasil, descrevendo a terra e seus habitantes pela perspectiva dos descobridores.",
          },
          {
            id: "e2",
            question: "O movimento literário que valorizou o índio como herói nacional foi:",
            options: { a: "Barroco", b: "Arcadismo", c: "Romantismo", d: "Realismo" },
            answer: "c",
            resolution: "O Romantismo brasileiro (1836-1881) criou o indianismo, corrente que valorizava o índio como símbolo da identidade nacional. José de Alencar e Gonçalves Dias foram seus principais representantes.",
          },
          {
            id: "e3",
            question: "Machado de Assis pertence ao período literário:",
            options: { a: "Romantismo", b: "Realismo", c: "Modernismo", d: "Barroco" },
            answer: "b",
            resolution: "Machado de Assis (1839-1908) é o maior nome do Realismo brasileiro. Obras como 'Memórias Póstumas de Brás Cubas' (1881) e 'Dom Casmurro' (1899) marcam esse período com análise psicológica apurada e ironia.",
          },
          {
            id: "e4",
            question: "A Semana de Arte Moderna de 1922 marcou o início de qual movimento?",
            options: { a: "Parnasianismo", b: "Simbolismo", c: "Modernismo", d: "Naturalismo" },
            answer: "c",
            resolution: "A Semana de Arte Moderna, realizada em São Paulo em fevereiro de 1922, é o marco inicial do Modernismo brasileiro, movimento que propôs a ruptura com as formas tradicionais e a valorização da identidade cultural brasileira.",
          },
          {
            id: "e5",
            question: "Qual característica NÃO pertence ao Barroco?",
            options: { a: "Antíteses e paradoxos", b: "Conflito entre razão e fé", c: "Simplicidade e clareza", d: "Exagero nas figuras de linguagem" },
            answer: "c",
            resolution: "A simplicidade e clareza são características do Arcadismo, não do Barroco. O Barroco é marcado pela complexidade, pelo uso excessivo de figuras de linguagem, antíteses, hipérboles e pelo conflito espiritual entre o sagrado e o profano.",
          },
        ],
      },
      {
        id: "redacao",
        title: "Redação e Argumentação",
        slug: "portugues-redacao",
        explanation: `<h2>Redação e Argumentação</h2>
<p>A redação é a habilidade de expressar ideias de forma escrita, clara e coerente. No contexto do ENEM e vestibulares, a redação dissertativo-argumentativa é a modalidade mais cobrada, exigindo que o candidato apresente um ponto de vista e o defenda com argumentos sólidos.</p>
<h3>Estrutura da Dissertação Argumentativa</h3>
<p><strong>Introdução:</strong> Deve apresentar o tema, contextualizar o leitor e terminar com a tese (posicionamento do autor). Uma boa introdução captura a atenção e anuncia o que será desenvolvido.</p>
<p><strong>Desenvolvimento:</strong> Composto por dois ou mais parágrafos, cada um com um argumento diferente. Cada parágrafo deve ter: tópico frasal (argumento), desenvolvimento e exemplificação. Use conectivos para garantir coesão.</p>
<p><strong>Conclusão:</strong> Retoma a tese de forma ampliada, sem repetir o que foi dito. Deve apresentar uma proposta de intervenção detalhada, especialmente no ENEM, indicando agente, ação, meio, finalidade e respeito aos direitos humanos.</p>
<h3>Tipos de Argumento</h3>
<p><strong>Argumento de autoridade:</strong> Citação de especialistas, pesquisas ou dados estatísticos.</p>
<p><strong>Argumento por exemplificação:</strong> Uso de exemplos concretos para ilustrar o ponto de vista.</p>
<p><strong>Argumento de causa e consequência:</strong> Demonstra a relação entre um fenômeno e seus efeitos.</p>
<p><strong>Argumento histórico:</strong> Uso de fatos históricos para embasar a argumentação.</p>`,
        videos: [{ id: "v1", title: "Redação Nota 1000 no ENEM - Estrutura", youtubeId: "Y86ZJPVhmZo" }, { id: "v2", title: "Como Fazer uma Boa Introdução", youtubeId: "2uWYhLroT_g" }, { id: "v3", title: "Argumentação e Desenvolvimento - Redação", youtubeId: "bn69nrnSrqI" }, { id: "v4", title: "Proposta de Intervenção Completa", youtubeId: "hpC30Nkwus8" }, { id: "v5", title: "Redação ENEM - Erros Mais Comuns", youtubeId: "zic5qOWt3x4" }],
        exercises: [
          {
            id: "e1",
            question: "Qual é a função da TESE em uma dissertação argumentativa?",
            options: { a: "Apresentar dados estatísticos", b: "Expressar o ponto de vista do autor sobre o tema", c: "Concluir o texto com uma proposta", d: "Contextualizar o tema de forma neutra" },
            answer: "b",
            resolution: "A tese é o posicionamento do autor, seu ponto de vista sobre o tema em questão. Geralmente aparece ao final da introdução e todo o desenvolvimento do texto irá argumentar para sustentá-la.",
          },
          {
            id: "e2",
            question: "Qual conectivo indica uma relação de OPOSIÇÃO ou contraste?",
            options: { a: "Portanto", b: "Além disso", c: "Entretanto", d: "Visto que" },
            answer: "c",
            resolution: "'Entretanto' é uma conjunção adversativa que indica oposição ou contraste entre ideias. 'Portanto' indica conclusão, 'além disso' indica adição e 'visto que' indica causa.",
          },
          {
            id: "e3",
            question: "O parágrafo de desenvolvimento deve OBRIGATORIAMENTE conter:",
            options: { a: "Apenas exemplos sem argumentos", b: "Tópico frasal, desenvolvimento e exemplificação", c: "Somente dados numéricos", d: "A proposta de intervenção" },
            answer: "b",
            resolution: "Um bom parágrafo de desenvolvimento é composto por: tópico frasal (argumento principal do parágrafo), desenvolvimento (explicação e aprofundamento) e exemplificação (exemplos concretos que ilustram o argumento).",
          },
          {
            id: "e4",
            question: "O argumento de autoridade consiste em:",
            options: { a: "Dar ordens ao leitor", b: "Citar especialistas, pesquisadores ou dados de fontes confiáveis", c: "Usar exemplos do cotidiano", d: "Apresentar dados fictícios" },
            answer: "b",
            resolution: "O argumento de autoridade utiliza citações de especialistas reconhecidos, pesquisas científicas, dados estatísticos de fontes confiáveis ou obras clássicas para embasar a argumentação, conferindo credibilidade ao texto.",
          },
          {
            id: "e5",
            question: "Na redação do ENEM, a proposta de intervenção deve respeitar:",
            options: { a: "Apenas a legislação brasileira", b: "Somente os valores religiosos", c: "Os direitos humanos e ser detalhada com agente, ação e finalidade", d: "Não há exigências específicas" },
            answer: "c",
            resolution: "A proposta de intervenção do ENEM deve ser detalhada (incluindo agente, ação, meio/modo, finalidade) e respeitosa aos direitos humanos. Propostas que violem direitos ou sejam vagas recebem pontuação menor na competência 5.",
          },
        ],
      },
    ],
    pdfs: [
      { id: "p1", title: "Apostila Completa de Gramática Portuguesa", type: "apostila", description: "Gramática completa do ensino médio", downloadUrl: "#pdf-gramatica-completa" },
      { id: "p2", title: "50 Exercícios de Interpretação de Texto", type: "exercicios", description: "Exercícios com gabarito comentado", downloadUrl: "#pdf-interpretacao-50" },
      { id: "p3", title: "Resumo - Classes Gramaticais", type: "resumo", description: "Mapa mental de todas as classes", downloadUrl: "#pdf-classes-resumo" },
      { id: "p4", title: "Lista: Acentuação Gráfica", type: "exercicios", description: "100 questões de acentuação", downloadUrl: "#pdf-acentuacao-lista" },
      { id: "p5", title: "Literatura Brasileira - Linha do Tempo", type: "resumo", description: "Todos os períodos literários", downloadUrl: "#pdf-literatura-timeline" },
      { id: "p6", title: "Redação Nota 1000 - Modelos", type: "apostila", description: "Redações comentadas com nota máxima", downloadUrl: "#pdf-redacao-modelos" },
      { id: "p7", title: "Pronomes - Classificação e Exercícios", type: "exercicios", description: "Teoria e 40 exercícios de pronomes", downloadUrl: "#pdf-pronomes" },
      { id: "p8", title: "Ortografia: Acordo Ortográfico 2009", type: "resumo", description: "Principais mudanças e regras", downloadUrl: "#pdf-acordo-ortografico" },
      { id: "p9", title: "Sinônimos e Antônimos - Vocabulário", type: "apostila", description: "Vocabulário para enriquecer textos", downloadUrl: "#pdf-sinonimos" },
      { id: "p10", title: "Verbos - Conjugação Completa", type: "apostila", description: "Todos os tempos e modos verbais", downloadUrl: "#pdf-verbos-conjugacao" },
      { id: "p11", title: "Figuras de Linguagem - Guia Completo", type: "resumo", description: "Metáfora, metonímia, ironia e mais", downloadUrl: "#pdf-figuras-linguagem" },
      { id: "p12", title: "Análise Sintática - Exercícios", type: "exercicios", description: "Sujeito, predicado, complementos", downloadUrl: "#pdf-sintaxe-exercicios" },
      { id: "p13", title: "Semântica e Pragmática", type: "apostila", description: "Significado e uso das palavras", downloadUrl: "#pdf-semantica" },
      { id: "p14", title: "Machado de Assis - Obras Comentadas", type: "apostila", description: "Dom Casmurro e outras obras", downloadUrl: "#pdf-machado" },
      { id: "p15", title: "Conectivos e Coesão Textual", type: "resumo", description: "Lista completa de conectivos", downloadUrl: "#pdf-conectivos" },
      { id: "p16", title: "Tipos de Texto - Guia Prático", type: "apostila", description: "Narrativo, descritivo, argumentativo...", downloadUrl: "#pdf-tipos-texto" },
      { id: "p17", title: "Poesia Brasileira - Antologia", type: "apostila", description: "Poemas com análise e interpretação", downloadUrl: "#pdf-poesia" },
      { id: "p18", title: "Crase - Regras e Exercícios", type: "exercicios", description: "Quando usar e quando não usar a crase", downloadUrl: "#pdf-crase" },
      { id: "p19", title: "Concordância Verbal e Nominal", type: "resumo", description: "Regras e casos especiais", downloadUrl: "#pdf-concordancia" },
      { id: "p20", title: "Simulado ENEM - Língua Portuguesa", type: "exercicios", description: "45 questões no estilo ENEM com gabarito", downloadUrl: "#pdf-simulado-portugues" },
    ],
  },
  {
    id: "matematica",
    name: "Matemática",
    slug: "matematica",
    description: "Álgebra, geometria, funções, trigonometria e estatística",
    icon: "🔢",
    color: "#7C3AED",
    bgColor: "#F5F3FF",
    topics: [
      {
        id: "funcoes",
        title: "Funções",
        slug: "matematica-funcoes",
        explanation: `<h2>Funções Matemáticas</h2>
<p>Uma função é uma relação entre dois conjuntos (domínio e contradomínio) onde cada elemento do domínio se relaciona com exatamente um elemento do contradomínio. Notação: f: A → B ou y = f(x).</p>
<h3>Função do 1º Grau (Afim)</h3>
<p>Forma geral: f(x) = ax + b, onde a ≠ 0. O gráfico é uma reta. O coeficiente 'a' determina se a função é crescente (a > 0) ou decrescente (a < 0). A zero da função é x = -b/a.</p>
<h3>Função do 2º Grau (Quadrática)</h3>
<p>Forma geral: f(x) = ax² + bx + c, onde a ≠ 0. O gráfico é uma parábola. Se a > 0, a parábola tem concavidade voltada para cima; se a < 0, para baixo. O vértice é o ponto de máximo ou mínimo, dado por: xv = -b/(2a) e yv = -Δ/(4a), onde Δ = b² - 4ac.</p>
<h3>Função Exponencial</h3>
<p>Forma geral: f(x) = a^x, onde a > 0 e a ≠ 1. Se a > 1, a função é crescente; se 0 < a < 1, é decrescente. O domínio é todos os reais e o contradomínio são os reais positivos.</p>
<h3>Função Logarítmica</h3>
<p>Forma geral: f(x) = log_a(x), onde a > 0 e a ≠ 1. É a inversa da função exponencial. Domínio: reais positivos. log_a(a) = 1 e log_a(1) = 0.</p>`,
        videos: [{ id: "v1", title: "Funções - Do Zero ao ENEM", youtubeId: "6p_yCjLwywk" }, { id: "v2", title: "Função do 1° Grau - Completo", youtubeId: "aeyMDwcOjGg" }, { id: "v3", title: "Função Quadrática - Parábola e Vértice", youtubeId: "eTf2g3Sx8cE" }, { id: "v4", title: "Função Exponencial e Logarítmica", youtubeId: "rB_7UIdRSfM" }, { id: "v5", title: "Exercícios Resolvidos de Funções ENEM", youtubeId: "CYCB-YtduHU" }],
        exercises: [
          {
            id: "e1",
            question: "Dada a função f(x) = 2x - 6, qual é o zero da função?",
            options: { a: "x = 2", b: "x = 3", c: "x = -3", d: "x = 6" },
            answer: "b",
            resolution: "O zero da função é quando f(x) = 0. Então: 2x - 6 = 0 → 2x = 6 → x = 3. Verificação: f(3) = 2(3) - 6 = 6 - 6 = 0 ✓",
          },
          {
            id: "e2",
            question: "A função f(x) = x² - 4x + 3 tem valor mínimo igual a:",
            options: { a: "-1", b: "0", c: "1", d: "3" },
            answer: "a",
            resolution: "Como a = 1 > 0, a parábola tem concavidade para cima, logo tem ponto de mínimo. xv = -b/(2a) = 4/2 = 2. yv = f(2) = 4 - 8 + 3 = -1. Portanto, o valor mínimo é -1.",
          },
          {
            id: "e3",
            question: "Se f(x) = 3^x, então f(2) vale:",
            options: { a: "6", b: "8", c: "9", d: "27" },
            answer: "c",
            resolution: "f(2) = 3² = 3 × 3 = 9. Na função exponencial f(x) = a^x, substitui-se x pelo valor dado e calcula-se a potência.",
          },
          {
            id: "e4",
            question: "Uma função é crescente quando, para x₁ < x₂, temos:",
            options: { a: "f(x₁) = f(x₂)", b: "f(x₁) > f(x₂)", c: "f(x₁) < f(x₂)", d: "f(x₁) × f(x₂) > 0" },
            answer: "c",
            resolution: "Uma função é crescente quando valores maiores de x produzem valores maiores de f(x). Formalmente: se x₁ < x₂, então f(x₁) < f(x₂). Isso significa que a função 'sobe' da esquerda para a direita no gráfico.",
          },
          {
            id: "e5",
            question: "O gráfico da função f(x) = -x² + 4 tem concavidade:",
            options: { a: "Para cima, com máximo em y = 4", b: "Para baixo, com máximo em y = 4", c: "Para cima, com mínimo em y = 4", d: "Para baixo, sem ponto extremo" },
            answer: "b",
            resolution: "Como a = -1 < 0, a parábola tem concavidade para baixo, logo tem ponto de máximo. O vértice é (0, 4), pois xv = -b/(2a) = 0/(2×(-1)) = 0 e yv = f(0) = 4. Máximo em y = 4.",
          },
        ],
      },
      {
        id: "geometria",
        title: "Geometria Plana e Espacial",
        slug: "matematica-geometria",
        explanation: `<h2>Geometria Plana e Espacial</h2>
<p>A geometria estuda as formas, tamanhos e propriedades das figuras no espaço. A geometria plana trata de figuras bidimensionais (2D), enquanto a geometria espacial trata de sólidos tridimensionais (3D).</p>
<h3>Figuras Planas Principais</h3>
<p><strong>Triângulo:</strong> Soma dos ângulos internos = 180°. Área = base × altura / 2. Tipos: equilátero (3 lados iguais), isósceles (2 lados iguais), escaleno (lados diferentes).</p>
<p><strong>Quadriláteros:</strong> Quadrado (área = L²), retângulo (área = b × h), paralelogramo (área = b × h), trapézio (área = (B + b) × h / 2).</p>
<p><strong>Círculo:</strong> Área = π × r². Comprimento = 2π × r. O número π ≈ 3,14159...</p>
<h3>Teorema de Pitágoras</h3>
<p>Em um triângulo retângulo: c² = a² + b², onde c é a hipotenusa e a, b são os catetos. Triplas pitagóricas comuns: (3,4,5), (5,12,13), (8,15,17).</p>
<h3>Sólidos Geométricos</h3>
<p><strong>Cubo:</strong> Volume = L³. Área total = 6L².</p>
<p><strong>Esfera:</strong> Volume = (4/3)πr³. Área = 4πr².</p>
<p><strong>Cone:</strong> Volume = πr²h/3.</p>
<p><strong>Cilindro:</strong> Volume = πr²h.</p>`,
        videos: [{ id: "v1", title: "Geometria Plana - Fórmulas Essenciais", youtubeId: "kyiFRdDTGJg" }, { id: "v2", title: "Teorema de Pitágoras - Aula e Exercícios", youtubeId: "PEkkzOzL588" }, { id: "v3", title: "Circunferência, Círculo e Área", youtubeId: "8M6f2kfONFg" }, { id: "v4", title: "Geometria Espacial - Volumes e Áreas", youtubeId: "mKiitpAZxAA" }, { id: "v5", title: "Exercícios de Geometria ENEM", youtubeId: "2NdVRpF3jB0" }],
        exercises: [
          {
            id: "e1",
            question: "Um triângulo tem base 8 cm e altura 5 cm. Qual é sua área?",
            options: { a: "40 cm²", b: "20 cm²", c: "13 cm²", d: "80 cm²" },
            answer: "b",
            resolution: "Área do triângulo = (base × altura) / 2 = (8 × 5) / 2 = 40 / 2 = 20 cm².",
          },
          {
            id: "e2",
            question: "Num triângulo retângulo com catetos 3 e 4, a hipotenusa mede:",
            options: { a: "5", b: "7", c: "12", d: "25" },
            answer: "a",
            resolution: "Pelo Teorema de Pitágoras: c² = a² + b² = 3² + 4² = 9 + 16 = 25. Logo c = √25 = 5. A tripla (3, 4, 5) é a mais conhecida tripla pitagórica.",
          },
          {
            id: "e3",
            question: "A área de um círculo com raio 7 cm é (π ≈ 3,14):",
            options: { a: "21,98 cm²", b: "43,96 cm²", c: "153,86 cm²", d: "616 cm²" },
            answer: "c",
            resolution: "Área = π × r² = 3,14 × 7² = 3,14 × 49 = 153,86 cm².",
          },
          {
            id: "e4",
            question: "O volume de uma esfera de raio 3 cm é (π ≈ 3,14):",
            options: { a: "28,26 cm³", b: "84,78 cm³", c: "113,04 cm³", d: "37,68 cm³" },
            answer: "c",
            resolution: "Volume da esfera = (4/3) × π × r³ = (4/3) × 3,14 × 27 = (4 × 3,14 × 27) / 3 = 339,12 / 3 = 113,04 cm³.",
          },
          {
            id: "e5",
            question: "Qual é a soma dos ângulos internos de um pentágono?",
            options: { a: "360°", b: "450°", c: "540°", d: "720°" },
            answer: "c",
            resolution: "A soma dos ângulos internos de um polígono é (n-2) × 180°, onde n é o número de lados. Para o pentágono (n=5): (5-2) × 180° = 3 × 180° = 540°.",
          },
        ],
      },
      {
        id: "probabilidade",
        title: "Probabilidade e Estatística",
        slug: "matematica-probabilidade",
        explanation: `<h2>Probabilidade e Estatística</h2>
<p>A probabilidade mede a chance de um evento ocorrer. A estatística trata da coleta, organização e análise de dados. Ambas são fundamentais para a tomada de decisões baseadas em dados.</p>
<h3>Probabilidade</h3>
<p>P(A) = número de casos favoráveis / número de casos possíveis. O valor varia entre 0 (impossível) e 1 (certo). Exemplo: lançar um dado e obter o número 3: P = 1/6.</p>
<p><strong>Probabilidade Complementar:</strong> P(A') = 1 - P(A). A probabilidade de um evento NÃO ocorrer é 1 menos a probabilidade de ocorrer.</p>
<h3>Combinatória</h3>
<p><strong>Permutação:</strong> P(n) = n! Arranjos onde a ordem importa, usando todos os elementos.</p>
<p><strong>Arranjo:</strong> A(n,p) = n!/(n-p)! Seleção onde a ordem importa, usando p elementos de n.</p>
<p><strong>Combinação:</strong> C(n,p) = n!/[p!(n-p)!] Seleção onde a ordem NÃO importa.</p>
<h3>Estatística Descritiva</h3>
<p><strong>Média aritmética:</strong> Soma dos valores dividida pela quantidade.</p>
<p><strong>Mediana:</strong> Valor central quando os dados estão ordenados.</p>
<p><strong>Moda:</strong> Valor mais frequente no conjunto de dados.</p>
<p><strong>Desvio padrão:</strong> Mede a dispersão dos dados em torno da média.</p>`,
        videos: [{ id: "v1", title: "Probabilidade - Do Zero ao ENEM", youtubeId: "CYCB-YtduHU" }, { id: "v2", title: "Combinatória - Permutação, Arranjo, Combinação", youtubeId: "2NdVRpF3jB0" }, { id: "v3", title: "Média, Mediana e Moda - Estatística", youtubeId: "g1nDzBRiF34" }, { id: "v4", title: "Exercícios de Probabilidade Resolvidos", youtubeId: "f77VvEUXvI8" }, { id: "v5", title: "Estatística Descritiva na Prática", youtubeId: "zho7JDMyByA" }],
        exercises: [
          {
            id: "e1",
            question: "Ao lançar uma moeda, a probabilidade de dar cara é:",
            options: { a: "1/4", b: "1/3", c: "1/2", d: "2/3" },
            answer: "c",
            resolution: "Uma moeda tem 2 resultados possíveis (cara ou coroa). A probabilidade de cara é: P = 1 caso favorável / 2 casos possíveis = 1/2 ou 50%.",
          },
          {
            id: "e2",
            question: "A média aritmética dos valores 4, 6, 8, 10, 12 é:",
            options: { a: "6", b: "8", c: "9", d: "10" },
            answer: "b",
            resolution: "Média = (4 + 6 + 8 + 10 + 12) / 5 = 40 / 5 = 8.",
          },
          {
            id: "e3",
            question: "Quantas permutações são possíveis com as letras A, B, C?",
            options: { a: "3", b: "6", c: "9", d: "12" },
            answer: "b",
            resolution: "Permutação com 3 elementos: P(3) = 3! = 3 × 2 × 1 = 6. As permutações são: ABC, ACB, BAC, BCA, CAB, CBA.",
          },
          {
            id: "e4",
            question: "Qual é a mediana do conjunto {3, 7, 2, 9, 5}?",
            options: { a: "3", b: "5", c: "7", d: "9" },
            answer: "b",
            resolution: "Primeiro, ordenamos o conjunto: {2, 3, 5, 7, 9}. Com 5 elementos, a mediana é o elemento central, que está na posição 3: mediana = 5.",
          },
          {
            id: "e5",
            question: "De um baralho de 52 cartas, qual é a probabilidade de sortear um ás?",
            options: { a: "1/52", b: "1/13", c: "4/52 = 1/13", d: "1/4" },
            answer: "c",
            resolution: "Um baralho tem 4 ases (um de cada naipe) e 52 cartas. P(ás) = 4/52 = 1/13 ≈ 7,7%. As alternativas B e C são equivalentes, mas C mostra o cálculo explícito.",
          },
        ],
      },
      {
        id: "trigonometria",
        title: "Trigonometria",
        slug: "matematica-trigonometria",
        explanation: `<h2>Trigonometria</h2>
<p>A trigonometria estuda as relações entre ângulos e lados de triângulos. As razões trigonométricas fundamentais são: seno (sen), cosseno (cos) e tangente (tg), definidas no triângulo retângulo.</p>
<h3>Razões Trigonométricas no Triângulo Retângulo</h3>
<p>Para um ângulo θ em um triângulo retângulo:</p>
<p><strong>sen(θ) = cateto oposto / hipotenusa</strong></p>
<p><strong>cos(θ) = cateto adjacente / hipotenusa</strong></p>
<p><strong>tg(θ) = cateto oposto / cateto adjacente = sen(θ)/cos(θ)</strong></p>
<h3>Valores Notáveis</h3>
<p>30°: sen=1/2, cos=√3/2, tg=√3/3</p>
<p>45°: sen=√2/2, cos=√2/2, tg=1</p>
<p>60°: sen=√3/2, cos=1/2, tg=√3</p>
<h3>Círculo Trigonométrico</h3>
<p>No círculo unitário (r=1), qualquer ângulo pode ser representado. Os quadrantes determinam o sinal das funções. Identidade fundamental: sen²(θ) + cos²(θ) = 1.</p>
<h3>Lei dos Senos e Lei dos Cossenos</h3>
<p><strong>Lei dos Senos:</strong> a/sen(A) = b/sen(B) = c/sen(C) — aplicada a qualquer triângulo.</p>
<p><strong>Lei dos Cossenos:</strong> a² = b² + c² - 2bc·cos(A) — generalização do Teorema de Pitágoras.</p>`,
        videos: [{ id: "v1", title: "Trigonometria - Introdução Completa", youtubeId: "IFxeIp8m_Lw" }, { id: "v2", title: "Seno, Cosseno e Tangente - Aula", youtubeId: "yadwML8fVw4" }, { id: "v3", title: "Círculo Trigonométrico Explicado", youtubeId: "jOFHO-b-d6g" }, { id: "v4", title: "Lei dos Senos e Cossenos", youtubeId: "d25dNG4P5Vc" }, { id: "v5", title: "Questões de Trigonometria ENEM", youtubeId: "4sTUs4ll3dI" }],
        exercises: [
          {
            id: "e1",
            question: "Em um triângulo retângulo, o seno de um ângulo é igual a:",
            options: { a: "hipotenusa / cateto oposto", b: "cateto adjacente / hipotenusa", c: "cateto oposto / hipotenusa", d: "cateto oposto / cateto adjacente" },
            answer: "c",
            resolution: "O seno de um ângulo em um triângulo retângulo é definido como a razão entre o cateto oposto ao ângulo e a hipotenusa: sen(θ) = cateto oposto / hipotenusa.",
          },
          {
            id: "e2",
            question: "Qual é o valor de sen(30°)?",
            options: { a: "√3/2", b: "1/2", c: "√2/2", d: "1" },
            answer: "b",
            resolution: "Os valores notáveis de seno: sen(30°) = 1/2, sen(45°) = √2/2 ≈ 0,707, sen(60°) = √3/2 ≈ 0,866, sen(90°) = 1. Portanto, sen(30°) = 1/2.",
          },
          {
            id: "e3",
            question: "A identidade fundamental da trigonometria é:",
            options: { a: "sen²(θ) - cos²(θ) = 1", b: "sen(θ) + cos(θ) = 1", c: "sen²(θ) + cos²(θ) = 1", d: "tg(θ) = sen(θ) + cos(θ)" },
            answer: "c",
            resolution: "A identidade fundamental da trigonometria é sen²(θ) + cos²(θ) = 1. Essa identidade decorre do Teorema de Pitágoras aplicado ao círculo trigonométrico unitário e é válida para qualquer ângulo.",
          },
          {
            id: "e4",
            question: "A tangente de 45° vale:",
            options: { a: "0", b: "√3/2", c: "1/2", d: "1" },
            answer: "d",
            resolution: "tg(45°) = sen(45°)/cos(45°) = (√2/2)/(√2/2) = 1. A tangente de 45° é um dos valores mais importantes a memorizar, pois é exatamente 1.",
          },
          {
            id: "e5",
            question: "Para qual caso se utiliza a Lei dos Cossenos?",
            options: { a: "Apenas triângulos retângulos", b: "Quando se conhecem dois lados e o ângulo entre eles, ou os três lados", c: "Somente para calcular ângulos", d: "Apenas quando o triângulo é equilátero" },
            answer: "b",
            resolution: "A Lei dos Cossenos (a² = b² + c² - 2bc·cos(A)) é usada em triângulos obliquângulos quando: conhecemos dois lados e o ângulo incluído entre eles (LAL) ou conhecemos os três lados (LLL).",
          },
        ],
      },
      {
        id: "equacoes",
        title: "Equações e Inequações",
        slug: "matematica-equacoes",
        explanation: `<h2>Equações e Inequações</h2>
<p>Uma equação é uma igualdade matemática que contém uma ou mais incógnitas. Resolver uma equação significa encontrar o valor (ou valores) da incógnita que tornam a igualdade verdadeira. Uma inequação é uma desigualdade matemática.</p>
<h3>Equações do 1º Grau</h3>
<p>Forma geral: ax + b = 0, onde a ≠ 0. A solução é x = -b/a. Exemplo: 3x + 6 = 0 → x = -6/3 = -2.</p>
<h3>Equações do 2º Grau</h3>
<p>Forma geral: ax² + bx + c = 0, onde a ≠ 0. Resolvida pela fórmula de Bhaskara: x = (-b ± √Δ) / 2a, onde Δ = b² - 4ac.</p>
<p>Análise do discriminante Δ: se Δ > 0, duas raízes reais distintas; se Δ = 0, uma raiz real dupla; se Δ < 0, sem raízes reais.</p>
<h3>Inequações do 1º Grau</h3>
<p>Resolução semelhante às equações, mas atenção: ao multiplicar ou dividir por número negativo, o sentido da desigualdade se inverte. Exemplo: -2x > 4 → x < -2.</p>
<h3>Sistemas de Equações</h3>
<p>Métodos de resolução: substituição (isolar uma variável e substituir), adição (somar equações para eliminar uma variável) e igualação (igualar expressões equivalentes).</p>`,
        videos: [{ id: "v1", title: "Equações do 1° Grau - Fundamentos", youtubeId: "LNLvMo1PWok" }, { id: "v2", title: "Bhaskara - Equação do 2° Grau", youtubeId: "U1JrT8GFZok" }, { id: "v3", title: "Inequações - Como Resolver", youtubeId: "9_7M5k2tWiA" }, { id: "v4", title: "Sistemas de Equações - Método Substituição", youtubeId: "lUhFnQcpRbM" }, { id: "v5", title: "Equações - Questões ENEM e Vestibular", youtubeId: "KarCkEGZqXA" }],
        exercises: [
          {
            id: "e1",
            question: "Resolva a equação 4x - 8 = 0. O valor de x é:",
            options: { a: "x = -2", b: "x = 2", c: "x = 4", d: "x = 8" },
            answer: "b",
            resolution: "4x - 8 = 0 → 4x = 8 → x = 8/4 = 2. Verificação: 4(2) - 8 = 8 - 8 = 0 ✓",
          },
          {
            id: "e2",
            question: "O discriminante (Δ) de x² - 5x + 6 = 0 é:",
            options: { a: "1", b: "4", c: "11", d: "49" },
            answer: "a",
            resolution: "Δ = b² - 4ac = (-5)² - 4(1)(6) = 25 - 24 = 1. Como Δ = 1 > 0, a equação tem duas raízes reais distintas.",
          },
          {
            id: "e3",
            question: "Ao resolver a inequação -3x > 9, o resultado é:",
            options: { a: "x > -3", b: "x < -3", c: "x > 3", d: "x < 3" },
            answer: "b",
            resolution: "-3x > 9 → ao dividir ambos os lados por -3, o sinal se INVERTE: x < 9/(-3) → x < -3. Atenção: multiplicar/dividir por número negativo inverte o sinal da desigualdade.",
          },
          {
            id: "e4",
            question: "As raízes de x² - 3x + 2 = 0 são:",
            options: { a: "x = 1 e x = 2", b: "x = -1 e x = -2", c: "x = 1 e x = -2", d: "x = -1 e x = 2" },
            answer: "a",
            resolution: "Δ = 9 - 8 = 1. x = (3 ± 1)/2. x₁ = (3+1)/2 = 2. x₂ = (3-1)/2 = 1. Verificação: x²-3x+2 = (x-1)(x-2), logo raízes são 1 e 2.",
          },
          {
            id: "e5",
            question: "No sistema {x + y = 5 e x - y = 1}, os valores de x e y são:",
            options: { a: "x=2, y=3", b: "x=3, y=2", c: "x=4, y=1", d: "x=1, y=4" },
            answer: "b",
            resolution: "Pelo método da adição: (x+y) + (x-y) = 5+1 → 2x = 6 → x = 3. Substituindo: 3 + y = 5 → y = 2. Verificação: 3+2=5 ✓ e 3-2=1 ✓.",
          },
        ],
      },
    ],
    pdfs: [
      { id: "p1", title: "Apostila de Álgebra - Ensino Médio Completo", type: "apostila", description: "Equações, funções e sistemas", downloadUrl: "#pdf-algebra-apostila" },
      { id: "p2", title: "100 Questões de Funções com Gabarito", type: "exercicios", description: "Funções do 1° e 2° grau, exponencial, logarítmica", downloadUrl: "#pdf-funcoes-100q" },
      { id: "p3", title: "Resumo - Geometria Plana e Espacial", type: "resumo", description: "Fórmulas de área e volume", downloadUrl: "#pdf-geometria-resumo" },
      { id: "p4", title: "Trigonometria - Guia Completo", type: "apostila", description: "Do básico ao avançado", downloadUrl: "#pdf-trigonometria-guia" },
      { id: "p5", title: "Probabilidade e Combinatória - Exercícios", type: "exercicios", description: "60 questões resolvidas", downloadUrl: "#pdf-probabilidade-60q" },
      { id: "p6", title: "Fórmulas de Matemática - Resumão", type: "resumo", description: "Todas as fórmulas do ENEM em uma folha", downloadUrl: "#pdf-formulas-resumao" },
      { id: "p7", title: "Progressões Aritméticas e Geométricas", type: "apostila", description: "PA, PG e exercícios", downloadUrl: "#pdf-progressoes" },
      { id: "p8", title: "Matrizes e Determinantes", type: "apostila", description: "Operações e propriedades", downloadUrl: "#pdf-matrizes" },
      { id: "p9", title: "Análise Combinatória - Lista", type: "exercicios", description: "Permutação, arranjo e combinação", downloadUrl: "#pdf-combinatoria" },
      { id: "p10", title: "Logaritmos - Teoria e Exercícios", type: "apostila", description: "Propriedades e aplicações", downloadUrl: "#pdf-logaritmos" },
      { id: "p11", title: "Geometria Analítica - Retas e Circunferências", type: "apostila", description: "Equações e gráficos", downloadUrl: "#pdf-geometria-analitica" },
      { id: "p12", title: "Estatística Descritiva", type: "resumo", description: "Média, mediana, moda e desvio", downloadUrl: "#pdf-estatistica" },
      { id: "p13", title: "Equações do 2° Grau - 80 Exercícios", type: "exercicios", description: "Com Bhaskara e comentários", downloadUrl: "#pdf-eq2grau" },
      { id: "p14", title: "Simulado de Matemática ENEM", type: "exercicios", description: "45 questões estilo ENEM com gabarito", downloadUrl: "#pdf-simulado-mat" },
      { id: "p15", title: "Razões e Proporções", type: "resumo", description: "Regra de três simples e composta", downloadUrl: "#pdf-proporcoes" },
      { id: "p16", title: "Números Complexos", type: "apostila", description: "Forma algébrica e trigonométrica", downloadUrl: "#pdf-complexos" },
      { id: "p17", title: "Polinômios e Fatoração", type: "apostila", description: "Operações e casos notáveis", downloadUrl: "#pdf-polinomios" },
      { id: "p18", title: "Introdução ao Cálculo", type: "apostila", description: "Limites e derivadas básicas", downloadUrl: "#pdf-calculo-intro" },
      { id: "p19", title: "Matemática Financeira", type: "apostila", description: "Juros simples, compostos e amortização", downloadUrl: "#pdf-fin-mat" },
      { id: "p20", title: "Sistemas de Equações - Exercícios Resolvidos", type: "exercicios", description: "50 sistemas resolvidos passo a passo", downloadUrl: "#pdf-sistemas" },
    ],
  },
  {
    id: "historia",
    name: "História",
    slug: "historia",
    description: "História do Brasil, América e mundo. Antiguidade ao contemporâneo",
    icon: "🏛️",
    color: "#B45309",
    bgColor: "#FFFBEB",
    topics: [
      {
        id: "brasil-colonial",
        title: "Brasil Colonial (1500-1822)",
        slug: "historia-brasil-colonial",
        explanation: `<h2>Brasil Colonial (1500-1822)</h2>
<p>O período colonial brasileiro compreende desde a chegada dos portugueses em 1500 até a Independência em 1822. Foi uma fase marcada pela exploração de recursos naturais, pelo trabalho escravo e pela imposição da cultura europeia sobre os povos indígenas.</p>
<h3>O Ciclo do Pau-Brasil (1500-1530)</h3>
<p>Nos primeiros anos da colonização, os portugueses exploraram o pau-brasil, madeira avermelhada usada como corante na Europa. A extração era feita pelo sistema de escambo com os indígenas. Sem estrutura administrativa, Portugal limitou-se ao estabelecimento de feitorias no litoral.</p>
<h3>O Sistema de Capitanias Hereditárias (1532)</h3>
<p>Em 1532, Dom João III dividiu o Brasil em 15 faixas de terras chamadas capitanias hereditárias, doadas a nobres portugueses (donatários). O sistema teve resultado irregular: apenas Pernambuco e São Vicente prosperaram. Em 1548, o sistema foi reformado com a criação do Governo-Geral.</p>
<h3>Ciclo da Cana-de-Açúcar</h3>
<p>A cana-de-açúcar tornou-se o principal produto colonial, especialmente no Nordeste. O engenho de açúcar era o centro econômico e social. A mão de obra indígena foi gradualmente substituída pela africana escravizada, dando início ao tráfico negreiro no Brasil.</p>
<h3>Escravidão no Brasil</h3>
<p>Estima-se que cerca de 4 a 5 milhões de africanos foram trazidos ao Brasil como escravizados — o maior fluxo de escravos do mundo. Os quilombos, como Palmares (liderado por Zumbi), eram comunidades de resistência formadas por africanos fugidos.</p>`,
        videos: [{ id: "v1", title: "Brasil Colonial - Ciclos Econômicos", youtubeId: "4DD4OcLJGnQ" }, { id: "v2", title: "Ciclo do Açúcar e Escravidão Colonial", youtubeId: "tHFfCDiV6Zg" }, { id: "v3", title: "Ciclos Econômicos do Brasil Colonial", youtubeId: "qaZCM25Ohnw" }, { id: "v4", title: "Brasil Colônia - Mercantilismo", youtubeId: "P2Gbe3sqzT4" }, { id: "v5", title: "Brasil Colonial - Mapa Mental Resumo", youtubeId: "D6aBOZPhqXo" }],
        exercises: [
          {
            id: "e1",
            question: "O sistema de Capitanias Hereditárias foi criado em:",
            options: { a: "1500", b: "1532", c: "1549", d: "1548" },
            answer: "b",
            resolution: "As Capitanias Hereditárias foram criadas em 1532 por Dom João III, dividindo o Brasil em 15 faixas de terra doadas a nobres portugueses chamados donatários. Cada donatário tinha poderes para colonizar e administrar sua capitania.",
          },
          {
            id: "e2",
            question: "Qual foi o principal produto de exportação do Brasil no período colonial?",
            options: { a: "Café", b: "Ouro", c: "Pau-brasil", d: "Açúcar" },
            answer: "d",
            resolution: "O açúcar foi o principal produto colonial do Brasil por mais de dois séculos, especialmente durante os séculos XVI e XVII. Produzido no Nordeste, enriqueceu Portugal e tornou o Brasil o maior produtor mundial de açúcar.",
          },
          {
            id: "e3",
            question: "Os quilombos no Brasil colonial eram:",
            options: { a: "Aldeias indígenas isoladas", b: "Comunidades de africanos escravizados fugidos", c: "Postos militares portugueses", d: "Mercados de escravos" },
            answer: "b",
            resolution: "Quilombos eram comunidades formadas por africanos escravizados que fugiam das fazendas e engenhos. O mais famoso foi Palmares, que existiu por quase um século no atual Alagoas, liderado por Zumbi dos Palmares.",
          },
          {
            id: "e4",
            question: "O Governo-Geral foi criado em 1549 com o objetivo de:",
            options: { a: "Substituir os índios pela mão de obra africana", b: "Centralizar a administração colonial", c: "Iniciar o ciclo do ouro", d: "Declarar independência de Portugal" },
            answer: "b",
            resolution: "O Governo-Geral foi criado em 1549 para centralizar a administração do Brasil, corrigindo as deficiências do sistema de capitanias. Tomé de Sousa foi o primeiro governador-geral, chegando com jesuítas, soldados e colonos.",
          },
          {
            id: "e5",
            question: "O tráfico negreiro para o Brasil estava relacionado com:",
            options: { a: "A necessidade de trabalhadores para a mineração exclusivamente", b: "A demanda de mão de obra para os engenhos de açúcar", c: "A construção de cidades no interior", d: "A exploração do pau-brasil" },
            answer: "b",
            resolution: "O tráfico negreiro intensificou-se com o desenvolvimento dos engenhos de açúcar, que demandavam grande quantidade de mão de obra. Com o esgotamento da mão de obra indígena (por epidemias e resistência), os portugueses intensificaram o tráfico de africanos.",
          },
        ],
      },
      {
        id: "revolucao-francesa",
        title: "Revolução Francesa",
        slug: "historia-revolucao-francesa",
        explanation: `<h2>Revolução Francesa (1789)</h2>
<p>A Revolução Francesa (1789-1799) foi um dos eventos mais transformadores da história moderna. Marcou o fim do Antigo Regime, baseado na monarquia absolutista e na sociedade de ordens (clero, nobreza e Terceiro Estado), e lançou as bases do Estado moderno com os princípios de liberdade, igualdade e fraternidade.</p>
<h3>Causas da Revolução</h3>
<p><strong>Crise financeira:</strong> A França estava endividada após guerras, especialmente a participação na independência americana. A aristocracia recusava pagar impostos.</p>
<p><strong>Desigualdade social:</strong> O Terceiro Estado (97% da população) pagava todos os impostos enquanto clero e nobreza gozavam de privilégios.</p>
<p><strong>Iluminismo:</strong> As ideias de Rousseau, Voltaire e Montesquieu questionavam o poder absoluto e defendiam direitos naturais.</p>
<p><strong>Crise de subsistência:</strong> Más colheitas causaram fome entre o povo, enquanto a corte esbanjava em Versalhes.</p>
<h3>Fases da Revolução</h3>
<p><strong>Fase Moderada (1789-1792):</strong> Criação da Assembleia Nacional Constituinte, aprovação da Declaração dos Direitos do Homem e do Cidadão, monarquia constitucional.</p>
<p><strong>Fase Radical (1792-1794):</strong> Proclamação da República, Terror jacobino liderado por Robespierre, guilhotinação do Rei Luís XVI e da Rainha Maria Antonieta.</p>
<p><strong>Diretório (1795-1799):</strong> Governo moderado que terminou com o golpe de Napoleão Bonaparte em 18 Brumário (1799).</p>`,
        videos: [{ id: "v1", title: "Revolução Francesa - Resumo Completo", youtubeId: "ppInSLfkRWo" }, { id: "v2", title: "Causas e Fases da Revolução Francesa", youtubeId: "ceCcZooYDBo" }, { id: "v3", title: "Iluminismo e Revolução Francesa", youtubeId: "bmr1Txq1fj4" }, { id: "v4", title: "Revolução Francesa - Consequências", youtubeId: "12FUoB0EDNw" }, { id: "v5", title: "Revolução Francesa para o ENEM", youtubeId: "LgOmiodOGCE" }],
        exercises: [
          {
            id: "e1",
            question: "A Revolução Francesa ocorreu em:",
            options: { a: "1776", b: "1789", c: "1799", d: "1815" },
            answer: "b",
            resolution: "A Revolução Francesa iniciou em 1789 com a tomada da Bastilha em 14 de julho — data que ficou como símbolo da revolução e é comemorada como feriado nacional na França até hoje.",
          },
          {
            id: "e2",
            question: "O lema da Revolução Francesa era:",
            options: { a: "Paz, Terra e Pão", b: "Liberdade, Igualdade, Fraternidade", c: "Deus, Pátria e Família", d: "Trabalho, Família e Pátria" },
            answer: "b",
            resolution: "'Liberté, Égalité, Fraternité' (Liberdade, Igualdade, Fraternidade) tornou-se o lema da Revolução Francesa e mais tarde o lema oficial da França. Esses três princípios sintetizavam os ideais do Iluminismo que inspiraram a revolução.",
          },
          {
            id: "e3",
            question: "O Terceiro Estado na França pré-revolucionária era composto por:",
            options: { a: "Clero e nobreza", b: "Apenas os camponeses", c: "Toda a população exceto clero e nobreza", d: "Somente a burguesia" },
            answer: "c",
            resolution: "O Terceiro Estado englobava cerca de 97% da população francesa: burguesia, camponeses, artesãos e trabalhadores urbanos. Apesar de ser a maioria e pagar todos os impostos, tinha representação limitada nos Estados Gerais.",
          },
          {
            id: "e4",
            question: "Robespierre foi o principal líder de qual fase da Revolução Francesa?",
            options: { a: "Fase Moderada", b: "Diretório", c: "Fase do Terror", d: "Período Napoleônico" },
            answer: "c",
            resolution: "Maximilien Robespierre liderou o Comitê de Salvação Pública durante a Fase do Terror (1793-1794), período em que milhares de pessoas foram guilhotinadas acusadas de traição. O próprio Robespierre foi guilhotinado em julho de 1794.",
          },
          {
            id: "e5",
            question: "O que foi a Declaração dos Direitos do Homem e do Cidadão (1789)?",
            options: { a: "Um tratado de paz com a Inglaterra", b: "Um documento que afirmou direitos naturais e igualdade perante a lei", c: "A constituição definitiva da França", d: "Um decreto que aboliu a monarquia" },
            answer: "b",
            resolution: "A Declaração dos Direitos do Homem e do Cidadão, aprovada em agosto de 1789, afirmou que os homens nascem livres e iguais em direitos. Proclamou liberdades como a de expressão, propriedade e resistência à opressão, influenciando constituições do mundo inteiro.",
          },
        ],
      },
      {
        id: "segunda-guerra",
        title: "Segunda Guerra Mundial",
        slug: "historia-segunda-guerra",
        explanation: `<h2>Segunda Guerra Mundial (1939-1945)</h2>
<p>A Segunda Guerra Mundial foi o conflito mais devastador da história humana, envolvendo a maioria das nações do mundo e causando entre 70 e 85 milhões de mortes. Foi travada entre os Aliados (Reino Unido, França, URSS, EUA, Brasil) e as Potências do Eixo (Alemanha, Itália, Japão).</p>
<h3>Causas</h3>
<p>O Tratado de Versalhes (1919) impôs condições humilhantes à Alemanha, criando ressentimento. A crise econômica de 1929 favoreceu a ascensão de movimentos totalitários. Hitler chegou ao poder em 1933 prometendo restaurar a grandeza alemã e expandir o "espaço vital" germânico.</p>
<h3>Holocausto</h3>
<p>O regime nazista promoveu o extermínio sistemático de 6 milhões de judeus, além de ciganos, pessoas com deficiência, homossexuais e opositores políticos nos campos de concentração e extermínio como Auschwitz, Treblinka e Dachau.</p>
<h3>Fases do Conflito</h3>
<p><strong>1939-1941:</strong> Domínio do Eixo na Europa. Alemanha invade Polônia, França, URSS. Bombardeios sobre a Grã-Bretanha (Blitz).</p>
<p><strong>1942-1943:</strong> Virada da guerra. Batalha de Stalingrado (vitória soviética), Batalha do Atlântico, entrada dos EUA após Pearl Harbor (1941).</p>
<p><strong>1944-1945:</strong> Ofensiva Aliada. Desembarque na Normandia (D-Day), liberação da Europa, capitulação alemã (maio 1945), bombas atômicas sobre Hiroshima e Nagasaki, rendição japonesa (setembro 1945).</p>`,
        videos: [{ id: "v1", title: "Segunda Guerra Mundial - Resumo Completo", youtubeId: "75eeykQFbdU" }, { id: "v2", title: "Segunda Guerra - Fascismo e Nazismo", youtubeId: "5q1D9P3Tcjc" }, { id: "v3", title: "2ª Guerra e Pós-45 para o ENEM", youtubeId: "AgFw4IJ9KM0" }, { id: "v4", title: "Nazismo e Fascismo - Regimes Totalitários", youtubeId: "hqSnGDguLzo" }, { id: "v5", title: "Período Entre Guerras - Resumo", youtubeId: "E3avJBIszZ0" }],
        exercises: [
          {
            id: "e1",
            question: "A Segunda Guerra Mundial iniciou com a invasão de qual país pela Alemanha?",
            options: { a: "França", b: "Rússia", c: "Polônia", d: "Áustria" },
            answer: "c",
            resolution: "A Segunda Guerra Mundial começou em 1º de setembro de 1939 com a invasão da Polônia pela Alemanha nazista. Dois dias depois, Reino Unido e França declararam guerra à Alemanha.",
          },
          {
            id: "e2",
            question: "O Holocausto foi o extermínio sistemático de:",
            options: { a: "Apenas soldados aliados", b: "Principalmente judeus, além de outros grupos perseguidos", c: "Somente opositores políticos comunistas", d: "Exclusivamente ciganos" },
            answer: "b",
            resolution: "O Holocausto foi o genocídio promovido pelo regime nazista, resultando no assassinato de aproximadamente 6 milhões de judeus europeus (2/3 de toda a população judaica europeia), além de centenas de milhares de ciganos, pessoas com deficiência, homossexuais e outros.",
          },
          {
            id: "e3",
            question: "O ataque a Pearl Harbor em 1941 provocou a entrada de qual país na guerra?",
            options: { a: "União Soviética", b: "Brasil", c: "Estados Unidos", d: "China" },
            answer: "c",
            resolution: "O ataque surpresa do Japão à base naval americana em Pearl Harbor, no Havaí, em 7 de dezembro de 1941, provocou a entrada dos Estados Unidos na Segunda Guerra Mundial. Até então, os EUA mantinham neutralidade oficial.",
          },
          {
            id: "e4",
            question: "A Batalha de Stalingrado (1942-1943) foi um marco da guerra porque:",
            options: { a: "Representou a rendição da Alemanha", b: "Foi a primeira derrota significativa da Alemanha no front oriental", c: "Foi quando os EUA entraram na guerra", d: "Marcou o fim do Japão" },
            answer: "b",
            resolution: "A Batalha de Stalingrado foi uma virada decisiva da guerra. As tropas soviéticas cercaram e destruíram o exército alemão, capturando o Marechal Paulus. Foi a primeira grande derrota alemã e marcou o início do recuo germânico no front oriental.",
          },
          {
            id: "e5",
            question: "As bombas atômicas lançadas em 1945 atingiram as cidades japonesas de:",
            options: { a: "Tóquio e Osaka", b: "Hiroshima e Nagasaki", c: "Kyoto e Yokohama", d: "Nagoya e Kobe" },
            answer: "b",
            resolution: "Em agosto de 1945, os EUA lançaram bombas atômicas sobre Hiroshima (6 de agosto) e Nagasaki (9 de agosto). As explosões causaram destruição devastadora, com estimativas de 130.000 a 200.000 mortes, forçando a rendição do Japão.",
          },
        ],
      },
      {
        id: "independencia-brasil",
        title: "Independência do Brasil",
        slug: "historia-independencia-brasil",
        explanation: `<h2>Independência do Brasil (1822)</h2>
<p>A Independência do Brasil em 7 de setembro de 1822 foi um processo gradual influenciado por fatores internos e externos. Diferentemente de outras independências latino-americanas, o Brasil manteve a monarquia e a unidade territorial.</p>
<h3>Contexto: Vinda da Família Real</h3>
<p>Em 1808, a Corte portuguesa fugiu de Napoleão e se transferiu para o Brasil com a proteção inglesa. Dom João VI abriu os portos às nações amigas, impulsionando o comércio. Em 1815, o Brasil foi elevado a Reino Unido de Portugal, Brasil e Algarves.</p>
<h3>Antecedentes Imediatos</h3>
<p>Com a Revolução Liberal do Porto (1820), as Cortes portuguesas exigiram o retorno de Dom João VI e a recolonização do Brasil. Dom João retornou em 1821, deixando seu filho Dom Pedro como regente.</p>
<h3>O "Fico" e a Independência</h3>
<p>Em 9 de janeiro de 1822, pressionado pelo povo brasileiro, Dom Pedro recusou-se a retornar para Portugal: "Se é para o bem de todos e felicidade geral da nação, diga ao povo que fico." Em 7 de setembro de 1822, às margens do Rio Ipiranga, Dom Pedro proclamou a Independência com o grito do "Ipiranga".</p>
<h3>Características da Independência Brasileira</h3>
<p>A independência brasileira foi conservadora: manteve a escravidão, a estrutura fundiária desigual e a monarquia. A elite agrária preservou seus privilégios. O reconhecimento internacional veio gradualmente — Portugal reconheceu em 1825, mediante indenização.</p>`,
        videos: [{ id: "v1", title: "Independência do Brasil - Resumo", youtubeId: "TzwFrYCd-6M" }, { id: "v2", title: "Dom Pedro I e a Proclamação", youtubeId: "LiQI8jufWgg" }, { id: "v3", title: "Período Joanino e Independência", youtubeId: "gW9_Dx5HLjI" }, { id: "v4", title: "Independência do Brasil - Causas", youtubeId: "008sh9D9AwE" }, { id: "v5", title: "Brasil Império e Independência para ENEM", youtubeId: "S-7-zrMEulg" }],
        exercises: [
          {
            id: "e1",
            question: "A Família Real portuguesa chegou ao Brasil em:",
            options: { a: "1800", b: "1808", c: "1815", d: "1820" },
            answer: "b",
            resolution: "A Família Real portuguesa chegou ao Brasil em 1808, fugindo da invasão napoleônica de Portugal. Estabeleceu-se no Rio de Janeiro, que se tornou a capital do Império Português.",
          },
          {
            id: "e2",
            question: "O 'Dia do Fico' ocorreu em:",
            options: { a: "7 de setembro de 1822", b: "9 de janeiro de 1822", c: "7 de setembro de 1821", d: "1º de março de 1808" },
            answer: "b",
            resolution: "O 'Dia do Fico' foi 9 de janeiro de 1822, quando Dom Pedro recusou a ordem das Cortes portuguesas para retornar a Lisboa, afirmando que ficaria no Brasil. Esse ato foi um dos passos decisivos para a independência.",
          },
          {
            id: "e3",
            question: "A Revolução Liberal do Porto (1820) exigiu:",
            options: { a: "A abolição da escravidão no Brasil", b: "O retorno de Dom João VI a Portugal e a recolonização do Brasil", c: "A independência imediata do Brasil", d: "A criação de uma república no Brasil" },
            answer: "b",
            resolution: "A Revolução Liberal do Porto (1820) foi um movimento constitucionalista português que instalou as Cortes Gerais, exigindo o retorno de Dom João VI e pretendendo revogar as medidas que elevavam o Brasil a Reino, em essência recolonizando o Brasil.",
          },
          {
            id: "e4",
            question: "Qual característica distingue a independência brasileira das outras da América Latina?",
            options: { a: "O Brasil adotou um regime republicano imediatamente", b: "A independência foi resultado de uma revolução popular violenta", c: "O Brasil manteve a monarquia e a unidade territorial", d: "O Brasil proclamou independência antes de qualquer país da América" },
            answer: "c",
            resolution: "Enquanto as ex-colônias espanholas tornaram-se repúblicas e se fragmentaram em vários países, o Brasil manteve a monarquia (com Dom Pedro I como imperador) e preservou a unidade territorial, característica única na América Latina.",
          },
          {
            id: "e5",
            question: "Portugal reconheceu a independência do Brasil em 1825 mediante:",
            options: { a: "Uma guerra entre os dois países", b: "O pagamento de uma indenização de 2 milhões de libras", c: "A devolução de Dom Pedro I a Portugal", d: "A adoção do catolicismo como religião oficial" },
            answer: "b",
            resolution: "Portugal reconheceu a independência do Brasil em 1825, após negociações mediadas pela Inglaterra. O Brasil pagou uma indenização de 2 milhões de libras esterlinas a Portugal e assumiu dívidas portuguesas como condição para o reconhecimento.",
          },
        ],
      },
      {
        id: "guerra-fria",
        title: "Guerra Fria (1947-1991)",
        slug: "historia-guerra-fria",
        explanation: `<h2>Guerra Fria (1947-1991)</h2>
<p>A Guerra Fria foi um período de tensão geopolítica e ideológica entre os EUA (capitalismo) e a URSS (socialismo) após a Segunda Guerra Mundial. Chamada de "fria" porque nunca houve confronto militar direto entre as duas superpotências, mas conflitos indiretos em outros países.</p>
<h3>Causas e Contexto</h3>
<p>Após 1945, o mundo foi dividido em duas esferas de influência. Os EUA e a URSS tinham visões opostas sobre organização política e econômica. A corrida armamentista, especialmente nuclear, mantinha o mundo sob tensão constante.</p>
<h3>Principais Eventos</h3>
<p><strong>Doutrina Truman (1947):</strong> EUA prometeram apoio a países ameaçados pelo comunismo.</p>
<p><strong>Plano Marshall (1947):</strong> Ajuda econômica americana para reconstruir a Europa Ocidental e evitar avanço comunista.</p>
<p><strong>Criação da OTAN (1949):</strong> Aliança militar ocidental liderada pelos EUA.</p>
<p><strong>Guerra da Coreia (1950-1953):</strong> Primeiro conflito armado da Guerra Fria.</p>
<p><strong>Crise dos Mísseis em Cuba (1962):</strong> Momento de maior tensão, com risco real de guerra nuclear.</p>
<p><strong>Guerra do Vietnã (1955-1975):</strong> Conflito em que os EUA sofreram derrota para forças vietnamitas apoiadas pela URSS.</p>
<h3>Fim da Guerra Fria</h3>
<p>Com Mikhail Gorbachev (glasnost e perestroika), a URSS iniciou reformas. A queda do Muro de Berlim em 1989 simbolizou o fim da divisão europeia. Em 1991, a URSS se dissolveu, encerrando a Guerra Fria.</p>`,
        videos: [{ id: "v1", title: "Guerra Fria - Do Início ao Fim", youtubeId: "G0qSjypD8xo" }, { id: "v2", title: "EUA vs URSS - Bipolaridade", youtubeId: "dWmlSTJWCOU" }, { id: "v3", title: "Guerra Fria - Conflitos e Crises", youtubeId: "OBBISyRQirc" }, { id: "v4", title: "Queda do Muro de Berlim e Fim da URSS", youtubeId: "yLgHezil5UQ" }, { id: "v5", title: "Guerra Fria para o ENEM", youtubeId: "CU17ON9Z2qA" }],
        exercises: [
          {
            id: "e1",
            question: "A Guerra Fria foi marcada principalmente por:",
            options: { a: "Confronto militar direto entre EUA e URSS", b: "Tensão ideológica e conflitos indiretos", c: "Cooperação econômica entre as superpotências", d: "Um longo período de paz mundial total" },
            answer: "b",
            resolution: "A Guerra Fria foi caracterizada pela tensão ideológica (capitalismo vs. socialismo), corrida armamentista, corrida espacial e conflitos indiretos em outros países, mas sem confronto militar direto entre EUA e URSS.",
          },
          {
            id: "e2",
            question: "O Plano Marshall (1947) tinha como objetivo:",
            options: { a: "Invadir a União Soviética", b: "Reconstruir economicamente a Europa Ocidental para evitar o avanço comunista", c: "Criar armas nucleares para os aliados", d: "Estabelecer bases militares na Ásia" },
            answer: "b",
            resolution: "O Plano Marshall foi um programa americano de ajuda econômica de 13 bilhões de dólares para reconstruir os países da Europa Ocidental devastados pela guerra, evitando que a miséria favorecesse a expansão do comunismo.",
          },
          {
            id: "e3",
            question: "A Crise dos Mísseis em Cuba (1962) envolveu:",
            options: { a: "Uma invasão americana em Cuba", b: "A instalação de mísseis soviéticos em Cuba e o bloqueio naval americano", c: "Uma guerra entre Cuba e EUA", d: "A derrubada de Fidel Castro" },
            answer: "b",
            resolution: "A Crise dos Mísseis foi o momento mais tenso da Guerra Fria. A URSS instalou mísseis nucleares em Cuba. Os EUA responderam com um bloqueio naval e exigiram a retirada. Após 13 dias de tensão extrema, a URSS recuou.",
          },
          {
            id: "e4",
            question: "A Glasnost e a Perestroika foram políticas de qual líder soviético?",
            options: { a: "Lênin", b: "Stalin", c: "Krushchev", d: "Gorbachev" },
            answer: "d",
            resolution: "Mikhail Gorbachev (1985-1991) implementou a Glasnost (transparência/liberdade de imprensa) e Perestroika (reestruturação econômica), reformas que buscavam modernizar a URSS, mas que acabaram contribuindo para sua dissolução em 1991.",
          },
          {
            id: "e5",
            question: "A queda do Muro de Berlim ocorreu em:",
            options: { a: "1985", b: "1987", c: "1989", d: "1991" },
            answer: "c",
            resolution: "O Muro de Berlim caiu em 9 de novembro de 1989, após 28 anos dividindo a cidade. O evento simbolizou o fim da divisão da Europa e da Guerra Fria. Em 1990, as duas Alemanhas se reunificaram.",
          },
        ],
      },
    ],
    pdfs: [
      { id: "p1", title: "Apostila de História do Brasil - Colônia ao Império", type: "apostila", description: "Período colonial, imperial e início da República", downloadUrl: "#pdf-historia-brasil-apostila" },
      { id: "p2", title: "50 Questões - Revolução Francesa e Americana", type: "exercicios", description: "Com gabarito e comentários", downloadUrl: "#pdf-revolucoes-50q" },
      { id: "p3", title: "Linha do Tempo da História Mundial", type: "resumo", description: "Principais eventos da Antiguidade ao Século XXI", downloadUrl: "#pdf-timeline-mundial" },
      { id: "p4", title: "Segunda Guerra Mundial - Apostila Completa", type: "apostila", description: "Causas, desenvolvimento e consequências", downloadUrl: "#pdf-2guerra-apostila" },
      { id: "p5", title: "Guerra Fria - Resumo e Exercícios", type: "exercicios", description: "30 questões com gabarito", downloadUrl: "#pdf-guerra-fria-ex" },
      { id: "p6", title: "Revoluções Socialistas do Século XX", type: "apostila", description: "Rússia, China, Cuba e outras", downloadUrl: "#pdf-revolucoes-socialistas" },
      { id: "p7", title: "Brasil República - Da Proclamação ao Regime Militar", type: "apostila", description: "1889 a 1985", downloadUrl: "#pdf-brasil-republica" },
      { id: "p8", title: "Primeira Guerra Mundial - Resumo", type: "resumo", description: "Causas, frentes de batalha e consequências", downloadUrl: "#pdf-1guerra-resumo" },
      { id: "p9", title: "Imperialismo e Neocolonialismo na África e Ásia", type: "apostila", description: "Séculos XIX e XX", downloadUrl: "#pdf-imperialismo" },
      { id: "p10", title: "Era Vargas (1930-1945 e 1950-1954)", type: "apostila", description: "Estado Novo, populismo e trabalhismo", downloadUrl: "#pdf-era-vargas" },
      { id: "p11", title: "Escravidão e Abolição no Brasil", type: "apostila", description: "Da lei Eusébio de Queirós à Lei Áurea", downloadUrl: "#pdf-escravidao-brasil" },
      { id: "p12", title: "Simulado de História - ENEM", type: "exercicios", description: "45 questões no estilo ENEM", downloadUrl: "#pdf-simulado-historia" },
      { id: "p13", title: "Idade Média - Feudalismo e Igreja", type: "apostila", description: "Organização social e econômica medieval", downloadUrl: "#pdf-idade-media" },
      { id: "p14", title: "Renascimento e Reforma Protestante", type: "resumo", description: "Humanismo, arte e religião", downloadUrl: "#pdf-renascimento" },
      { id: "p15", title: "Absolutismo Europeu", type: "apostila", description: "Monarquias absolutas e seus limites", downloadUrl: "#pdf-absolutismo" },
      { id: "p16", title: "Independência das Américas", type: "resumo", description: "Brasil, EUA e América Espanhola", downloadUrl: "#pdf-independencias" },
      { id: "p17", title: "Questões de História Contemporânea", type: "exercicios", description: "Neoliberalismo, globalização e conflitos atuais", downloadUrl: "#pdf-contemporanea" },
      { id: "p18", title: "Ditadura Militar no Brasil (1964-1985)", type: "apostila", description: "Golpe, anos de chumbo e abertura", downloadUrl: "#pdf-ditadura-militar" },
      { id: "p19", title: "Civilizações Antigas - Mesopotâmia, Egito, Grécia e Roma", type: "apostila", description: "Origens das civilizações ocidentais", downloadUrl: "#pdf-civilizacoes-antigas" },
      { id: "p20", title: "Historia da África para o ENEM", type: "apostila", description: "Reinos africanos e impacto da escravidão", downloadUrl: "#pdf-africa" },
    ],
  },
  {
    id: "geografia",
    name: "Geografia",
    slug: "geografia",
    description: "Geografia física, humana, Brasil e cartografia",
    icon: "🌍",
    color: "#065F46",
    bgColor: "#ECFDF5",
    topics: [
      {
        id: "climatologia",
        title: "Climatologia e Biomas do Brasil",
        slug: "geografia-climatologia",
        explanation: `<h2>Climatologia e Biomas do Brasil</h2>
<p>O Brasil possui uma grande variedade climática devido à sua extensão territorial, relevo e posição geográfica. Os principais tipos climáticos brasileiros condicionam a formação de diferentes biomas, cada um com características únicas de flora, fauna e solo.</p>
<h3>Tipos de Clima no Brasil</h3>
<p><strong>Equatorial:</strong> Predomina na Amazônia. Temperatura elevada (26-28°C), chuvas abundantes e bem distribuídas ao longo do ano (acima de 2.000mm anuais). Umidade alta.</p>
<p><strong>Tropical:</strong> O mais comum no Brasil, presente no Cerrado e parte do Nordeste. Duas estações bem definidas: chuvosa (verão) e seca (inverno). Temperatura média de 18-28°C.</p>
<p><strong>Semiárido:</strong> No sertão nordestino. Chuvas escassas e irregulares (menos de 800mm/ano), altas temperaturas e secas prolongadas.</p>
<p><strong>Subtropical:</strong> No Sul do Brasil. Quatro estações bem definidas, geadas no inverno, sem estação seca definida.</p>
<h3>Biomas Brasileiros</h3>
<p><strong>Amazônia:</strong> Maior floresta tropical do mundo, cobrindo 49% do território. Enorme biodiversidade. Ameaçada pelo desmatamento.</p>
<p><strong>Cerrado:</strong> Savana brasileira, segundo maior bioma. Berço das águas do Brasil. Altamente ameaçado pela agricultura extensiva.</p>
<p><strong>Mata Atlântica:</strong> Um dos biomas mais ameaçados do mundo, restam apenas 12% da cobertura original. Grande biodiversidade e endemismo.</p>
<p><strong>Caatinga:</strong> Único bioma exclusivamente brasileiro, adaptado ao semiárido. Plantas xerófilas e animais resistentes à seca.</p>
<p><strong>Pampa:</strong> Campos gaúchos, vegetação rasteira, clima subtropical. Ameaçado pela sojicultura.</p>
<p><strong>Pantanal:</strong> Maior planície alagável do mundo, rica em fauna. Compartilhado com Bolívia e Paraguai.</p>`,
        videos: [{ id: "v1", title: "Climatologia - Climas do Brasil", youtubeId: "uHYgh89B67w" }, { id: "v2", title: "Biomas Brasileiros - Características", youtubeId: "8nYGGa3YP30" }, { id: "v3", title: "Clima e Vegetação no Brasil", youtubeId: "eEPabXAVzNA" }, { id: "v4", title: "Aquecimento Global e Mudanças Climáticas", youtubeId: "1qvSa5pTLT8" }, { id: "v5", title: "Climatologia para o ENEM", youtubeId: "3vyRz6vGxto" }],
        exercises: [
          {
            id: "e1",
            question: "O bioma exclusivamente brasileiro, adaptado ao semiárido, é:",
            options: { a: "Cerrado", b: "Caatinga", c: "Pampa", d: "Pantanal" },
            answer: "b",
            resolution: "A Caatinga é o único bioma 100% brasileiro, ocorrendo exclusivamente no Nordeste e norte de Minas Gerais. É adaptada ao clima semiárido com vegetação xerófila (resistente à seca) e fauna única.",
          },
          {
            id: "e2",
            question: "O clima equatorial, presente na Amazônia, se caracteriza por:",
            options: { a: "Chuvas escassas e temperatura baixa", b: "Quatro estações bem definidas", c: "Temperaturas altas e chuvas abundantes todo ano", d: "Inverno seco e verão chuvoso" },
            answer: "c",
            resolution: "O clima equatorial apresenta temperaturas elevadas durante todo o ano (média de 26-28°C) e chuvas abundantes e bem distribuídas, com precipitação superior a 2.000 mm anuais. Não há estação seca definida.",
          },
          {
            id: "e3",
            question: "Qual é o maior bioma do Brasil em extensão?",
            options: { a: "Cerrado", b: "Mata Atlântica", c: "Pantanal", d: "Amazônia" },
            answer: "d",
            resolution: "A Amazônia é o maior bioma brasileiro, cobrindo cerca de 49% do território nacional (aproximadamente 4,2 milhões de km²). É também a maior floresta tropical do mundo.",
          },
          {
            id: "e4",
            question: "O Pantanal é classificado como:",
            options: { a: "Floresta tropical", b: "Maior planície alagável do mundo", c: "Deserto tropical", d: "Savana subtropical" },
            answer: "b",
            resolution: "O Pantanal é a maior planície de inundação do mundo, com cerca de 150.000 km² no Brasil (mais partes na Bolívia e Paraguai). É alagada sazonalmente pelo Rio Paraguai e seus afluentes, criando um dos ecossistemas mais ricos em fauna do planeta.",
          },
          {
            id: "e5",
            question: "A Mata Atlântica original cobria boa parte do litoral brasileiro. Hoje restam:",
            options: { a: "Apenas 12% da cobertura original", b: "Cerca de 50% da cobertura original", c: "80% ainda preservados", d: "A Mata Atlântica está completamente destruída" },
            answer: "a",
            resolution: "A Mata Atlântica foi um dos biomas mais devastados, restando apenas cerca de 12% de sua cobertura original. Apesar disso, ainda abriga cerca de 70% das espécies ameaçadas de extinção do Brasil e alta biodiversidade.",
          },
        ],
      },
      {
        id: "populacao",
        title: "Dinâmica Populacional",
        slug: "geografia-populacao",
        explanation: `<h2>Dinâmica Populacional</h2>
<p>A dinâmica populacional estuda os movimentos e características das populações humanas, incluindo crescimento, distribuição, composição e migração. Essas análises são fundamentais para o planejamento de políticas públicas.</p>
<h3>Crescimento Populacional</h3>
<p>A taxa de crescimento natural é a diferença entre taxa de natalidade e taxa de mortalidade. A transição demográfica é o processo pelo qual países desenvolvidos passaram de alta natalidade/mortalidade para baixa natalidade/mortalidade.</p>
<p>O mundo atingiu 8 bilhões de pessoas em 2022. O crescimento é desigual: países em desenvolvimento crescem mais rapidamente, enquanto países desenvolvidos têm crescimento lento ou negativo.</p>
<h3>Distribuição Populacional no Brasil</h3>
<p>O Brasil tem distribuição populacional desigual: concentração no litoral e Sul/Sudeste, com grandes vazios demográficos na Amazônia e Cerrado. A densidade demográfica média é de cerca de 25 hab/km², mas varia enormemente entre regiões.</p>
<h3>Migrações</h3>
<p>Migrações internas no Brasil: êxodo rural (campo para cidade) e migrações inter-regionais (Nordeste para o Sudeste). Migrações internacionais: imigração europeia e asiática no passado; emigração brasileira para EUA e Europa contemporaneamente.</p>`,
        videos: [{ id: "v1", title: "Dinâmica Populacional - Crescimento", youtubeId: "qWg21HwZr18" }, { id: "v2", title: "Transição Demográfica e IDH", youtubeId: "B_mb5ez4RTQ" }, { id: "v3", title: "Movimentos Migratórios", youtubeId: "Hy0lpw68RUg" }, { id: "v4", title: "População Brasileira - Características", youtubeId: "0K3t7Kfo7RY" }, { id: "v5", title: "Distribuição Populacional para o ENEM", youtubeId: "ij_F79WyMvA" }],
        exercises: [
          { id: "e1", question: "A taxa de crescimento natural da população é calculada pela diferença entre:", options: { a: "Emigração e imigração", b: "Taxa de natalidade e taxa de mortalidade", c: "População urbana e rural", d: "PIB e IDH" }, answer: "b", resolution: "A taxa de crescimento natural (ou vegetativo) = Taxa de natalidade - Taxa de mortalidade. Não inclui migrações. Se a natalidade supera a mortalidade, a população cresce; se é menor, decresce." },
          { id: "e2", question: "Êxodo rural é o movimento de:", options: { a: "Pessoas do campo para a cidade", b: "Pessoas da cidade para o campo", c: "Animais em busca de alimento", d: "Capital estrangeiro para países em desenvolvimento" }, answer: "a", resolution: "Êxodo rural é a migração de populações do campo (zonas rurais) para as cidades (zonas urbanas), fenômeno intenso no Brasil principalmente entre 1950 e 1980, impulsionado pela mecanização agrícola e pela industrialização." },
          { id: "e3", question: "O Brasil tem sua população concentrada principalmente:", options: { a: "No interior da Amazônia", b: "No litoral e nas regiões Sul e Sudeste", c: "No Nordeste semiárido", d: "No Centro-Oeste" }, answer: "b", resolution: "A distribuição populacional brasileira é irregular, com forte concentração no litoral e nas regiões Sul e Sudeste, que concentram cerca de 55% da população. Grandes vazios demográficos existem na Amazônia e em partes do Centro-Oeste." },
          { id: "e4", question: "A transição demográfica é caracterizada por:", options: { a: "Queda simultânea da natalidade e mortalidade", b: "Aumento da natalidade e queda da mortalidade", c: "Aumento de ambas as taxas", d: "Estabilidade nas taxas ao longo do tempo" }, answer: "a", resolution: "A transição demográfica é o processo histórico pelo qual países passam de alta natalidade/alta mortalidade para baixa natalidade/baixa mortalidade, geralmente acompanhando o desenvolvimento econômico e social." },
          { id: "e5", question: "O conceito de 'bônus demográfico' se refere a:", options: { a: "O aumento de pessoas idosas na população", b: "Um período em que a população em idade ativa é maior que dependentes", c: "O crescimento rápido da natalidade", d: "A emigração de jovens para outros países" }, answer: "b", resolution: "O bônus demográfico (ou dividendo demográfico) é o período em que a proporção da população em idade ativa (15-64 anos) é maior que a de dependentes (crianças e idosos), oferecendo oportunidade de crescimento econômico acelerado." },
        ],
      },
      {
        id: "geopolitica",
        title: "Geopolítica Mundial",
        slug: "geografia-geopolitica",
        explanation: `<h2>Geopolítica Mundial Contemporânea</h2>
<p>A geopolítica estuda as relações entre o poder político, o território e o espaço geográfico. No mundo contemporâneo, a ordem geopolítica tem passado por transformações significativas desde o fim da Guerra Fria.</p>
<h3>Nova Ordem Mundial</h3>
<p>Com o fim da Guerra Fria e a dissolução da URSS em 1991, o mundo passou de bipolar (EUA vs. URSS) para multipolar, com o surgimento de novas potências como China, Índia, Brasil (BRICS) e a União Europeia.</p>
<h3>Globalização</h3>
<p>A globalização é a integração econômica, cultural e política das nações, impulsionada pela tecnologia da informação e pelo comércio internacional. Gera oportunidades (mercados maiores, difusão tecnológica) e desafios (desigualdade, perda de identidade cultural).</p>
<h3>Organizações Internacionais</h3>
<p>ONU (Organização das Nações Unidas): fundada em 1945, atua em paz, segurança e desenvolvimento humano. FMI, Banco Mundial, OMC regulam finanças e comércio globais. Blocos regionais: União Europeia, MERCOSUL, ASEAN.</p>`,
        videos: [{ id: "v1", title: "Geopolítica Mundial - Blocos Econômicos", youtubeId: "fGEc9exsKwg" }, { id: "v2", title: "Blocos Econômicos Características", youtubeId: "3G65dQBbTFc" }, { id: "v3", title: "Geopolítica e Globalização - ENEM", youtubeId: "WNDyCmznAnc" }, { id: "v4", title: "Blocos Econômicos - Mapa Mental", youtubeId: "tFGlxXZSTqY" }, { id: "v5", title: "Análise das Relações Globais", youtubeId: "2uXUSLF10R0" }],
        exercises: [
          { id: "e1", question: "Após o fim da Guerra Fria, a ordem mundial tornou-se:", options: { a: "Bipolar", b: "Unipolar com hegemonia americana", c: "Multipolar com várias potências", d: "Igualitária entre todos os países" }, answer: "c", resolution: "Com o fim da URSS em 1991, o mundo passou de bipolar (EUA vs. URSS) para multipolar, com a emergência de novas potências como China, União Europeia, Índia e Brasil." },
          { id: "e2", question: "Os países do BRICS são:", options: { a: "Brasil, Rússia, Índia, China e Suécia", b: "Brasil, Rússia, Índia, China e África do Sul", c: "Brasil, Reino Unido, Indonésia, Coreia e África do Sul", d: "Bolívia, Rússia, Índia, Chile e Suíça" }, answer: "b", resolution: "BRICS é o acrônimo para Brasil, Rússia, Índia, China e África do Sul — economias emergentes com crescimento acelerado que juntas representam cerca de 40% da população mundial e 25% do PIB global." },
          { id: "e3", question: "Qual organização internacional tem como objetivo a manutenção da paz e segurança mundiais?", options: { a: "OMC", b: "FMI", c: "ONU", d: "OTAN" }, answer: "c", resolution: "A ONU (Organização das Nações Unidas), fundada em 1945 após a Segunda Guerra Mundial, tem como objetivo primário manter a paz e segurança internacionais, além de promover o desenvolvimento humano e os direitos humanos." },
          { id: "e4", question: "A globalização é um processo que se intensificou com:", options: { a: "A Primeira Revolução Industrial do século XVIII", b: "A Revolução Francesa", c: "O desenvolvimento das tecnologias de informação e comunicação no final do século XX", d: "A Primeira Guerra Mundial" }, answer: "c", resolution: "Embora a globalização tenha raízes históricas nos séculos XV-XVI (expansão marítima europeia), ela se intensificou dramaticamente no final do século XX com a internet, tecnologias de comunicação e transporte, e liberalização do comércio." },
          { id: "e5", question: "O MERCOSUL é um bloco econômico composto principalmente por países da:", options: { a: "América do Norte", b: "Europa", c: "América do Sul", d: "Ásia" }, answer: "c", resolution: "O MERCOSUL (Mercado Comum do Sul) é um bloco de integração econômica composto principalmente por Brasil, Argentina, Uruguai e Paraguai, com países associados como Bolívia e Chile. Tem como objetivo criar um mercado comum entre os países membros." },
        ],
      },
      {
        id: "relevo",
        title: "Relevo Brasileiro",
        slug: "geografia-relevo",
        explanation: `<h2>Relevo Brasileiro</h2>
<p>O relevo do Brasil é predominantemente formado por planaltos e planícies. Ao contrário do que se pensa, não há montanhas muito elevadas — o ponto mais alto é o Pico da Neblina (AM), com 2.994 m. O relevo influencia diretamente o clima, a hidrografia e a ocupação humana.</p>
<h3>Classificação do Relevo</h3>
<p>A classificação mais aceita é a de Jurandyr Ross (1990), baseada na hipsometria:</p>
<p><strong>Planaltos:</strong> Áreas acima de 200m, formadas por erosão. Cobrem a maior parte do Brasil. Incluem o Planalto Brasileiro (dividido em Planalto Central, Atlântico, Sul-Rio-Grandense e meridional).</p>
<p><strong>Planícies:</strong> Áreas baixas, formadas por deposição. Exemplos: Planície Amazônica, Planície do Pantanal, Planície Costeira.</p>
<h3>Principais Unidades de Relevo</h3>
<p>Planalto das Guianas (Norte), Planalto Brasileiro Central (Cerrado), Planalto da Borborema (Nordeste), Planalto Meridional ou Serra Gaúcha (Sul), Planalto Atlântico (litoral do Sudeste).</p>`,
        videos: [{ id: "v1", title: "Relevo do Brasil - Planaltos e Planícies", youtubeId: "nFPEiOKBjyA" }, { id: "v2", title: "Relevo e Hidrografia - Aula", youtubeId: "iZf39fgFFZU" }, { id: "v3", title: "Tipos de Relevo - Montanha, Planalto", youtubeId: "JJyglMSJVIE" }, { id: "v4", title: "Relevo e Hidrografia do Brasil", youtubeId: "CwqcnS8OD7A" }, { id: "v5", title: "Aspectos Naturais do Brasil - Relevo", youtubeId: "kcAyd6rMUQ0" }],
        exercises: [
          { id: "e1", question: "O ponto mais alto do Brasil é:", options: { a: "Pico da Bandeira", b: "Pico das Agulhas Negras", c: "Pico da Neblina", d: "Serra do Mar" }, answer: "c", resolution: "O Pico da Neblina, localizado no Amazonas, com 2.994 metros de altitude, é o ponto mais alto do Brasil. Está localizado na Serra Imeri, próximo à fronteira com a Venezuela." },
          { id: "e2", question: "As planícies brasileiras são áreas formadas por:", options: { a: "Erosão intensa", b: "Deposição de sedimentos", c: "Vulcanismo", d: "Dobramentos modernos" }, answer: "b", resolution: "As planícies são áreas de relevo baixo e plano formadas por deposição (acúmulo) de sedimentos. As principais planícies brasileiras são: Planície Amazônica, Planície do Pantanal e Planícies Costeiras." },
          { id: "e3", question: "A maior bacia hidrográfica do mundo está localizada no Brasil. Trata-se da:", options: { a: "Bacia do Rio São Francisco", b: "Bacia do Paraná-Prata", c: "Bacia Amazônica", d: "Bacia do Tocantins-Araguaia" }, answer: "c", resolution: "A Bacia Amazônica é a maior bacia hidrográfica do mundo em volume de água e em extensão (cerca de 6 milhões de km²). O Rio Amazonas é o maior rio do mundo em descarga de água." },
          { id: "e4", question: "O Pantanal brasileiro é classificado como:", options: { a: "Um planalto muito baixo", b: "Uma planície de inundação", c: "Uma região de chapadas", d: "Um depressão periférica" }, answer: "b", resolution: "O Pantanal é a maior planície de inundação do mundo, localizado principalmente nos estados de Mato Grosso e Mato Grosso do Sul. É periodicamente inundado pelo Rio Paraguai, criando um ecossistema único." },
          { id: "e5", question: "O Rio São Francisco é importante para o Nordeste porque:", options: { a: "É o maior rio da América do Sul", b: "Atravessa o semiárido, sendo fonte de água para uma região com déficit hídrico", c: "Nasce no Nordeste e deságua na Amazônia", d: "Divide Brasil e Argentina" }, answer: "b", resolution: "O Rio São Francisco, chamado de 'Rio da Integração Nacional' ou 'Velho Chico', é fundamental para o Nordeste por atravessar o semiárido, fornecendo água para irrigação, abastecimento e energia elétrica numa região historicamente marcada pela seca." },
        ],
      },
      {
        id: "urbanizacao",
        title: "Urbanização no Brasil",
        slug: "geografia-urbanizacao",
        explanation: `<h2>Urbanização no Brasil</h2>
<p>A urbanização brasileira foi um dos processos mais rápidos do mundo. Em 1940, apenas 31% da população vivia em cidades; em 2020, esse número superou 85%. Esse crescimento acelerado trouxe avanços e sérios problemas sociais.</p>
<h3>Causas da Urbanização</h3>
<p>Industrialização (a partir de 1930), mecanização agrícola (que expulsou trabalhadores do campo), construção de Brasília (1960) e a atração das cidades como centros de serviços, comércio e oportunidades.</p>
<h3>Problemas Urbanos</h3>
<p>O crescimento desordenado gerou: favelas (déficit habitacional), violência urbana, congestionamentos, poluição atmosférica, desemprego e dificuldade de acesso a serviços básicos nas periferias.</p>
<h3>Metrópoles e Megalópoles</h3>
<p>São Paulo é a maior metrópole do Brasil e uma das maiores do mundo, com cerca de 12 milhões de habitantes na cidade e 22 milhões na Grande São Paulo. O eixo São Paulo-Rio de Janeiro forma uma megalópole. A rede urbana brasileira é hierárquica, com metrópoles nacionais, regionais, centros regionais e locais.</p>`,
        videos: [{ id: "v1", title: "Urbanização Brasileira - ENEM", youtubeId: "saYs5P9MNz8" }, { id: "v2", title: "Urbanização Causas e Consequências", youtubeId: "HpaLKYnY3AQ" }, { id: "v3", title: "O que é Urbanização", youtubeId: "hmXcEhWOp0k" }, { id: "v4", title: "Urbanização no ENEM - Como é Cobrada", youtubeId: "dlbu6TgUf4k" }, { id: "v5", title: "Urbanização e Geopolítica Global", youtubeId: "2uXUSLF10R0" }],
        exercises: [
          { id: "e1", question: "Qual foi o principal fator que acelerou a urbanização brasileira a partir dos anos 1930?", options: { a: "O crescimento da agricultura exportadora", b: "A industrialização impulsionada pelo governo Vargas", c: "A descoberta de petróleo", d: "A imigração europeia" }, answer: "b", resolution: "A industrialização, especialmente durante o governo Vargas (1930-1945) e depois com Juscelino Kubitschek, foi o principal fator de urbanização, atraindo trabalhadores do campo para as cidades industriais." },
          { id: "e2", question: "O processo de formação de favelas está relacionado principalmente com:", options: { a: "Planejamento urbano deficiente e desigualdade socioeconômica", b: "Excesso de imigração estrangeira", c: "Política de moradia eficiente", d: "A industrialização bem distribuída" }, answer: "a", resolution: "As favelas são resultado do crescimento urbano acelerado e desordenado combinado com a desigualdade socioeconômica. Sem condições de pagar por moradia formal, famílias ocupam áreas irregulares, formando assentamentos precários." },
          { id: "e3", question: "A maior metrópole do Brasil e uma das maiores do mundo é:", options: { a: "Rio de Janeiro", b: "Belo Horizonte", c: "São Paulo", d: "Brasília" }, answer: "c", resolution: "São Paulo é a maior metrópole brasileira, com cerca de 12 milhões de habitantes no município e aproximadamente 22 milhões na Grande São Paulo (região metropolitana). É o principal centro econômico e financeiro do Brasil e da América Latina." },
          { id: "e4", question: "Megalópole é o termo usado para definir:", options: { a: "Uma cidade com mais de 1 milhão de habitantes", b: "Conjunto de metrópoles que se fundem formando uma área urbana contínua enorme", c: "Uma cidade planejada como Brasília", d: "Uma metrópole que possui aeroporto internacional" }, answer: "b", resolution: "Megalópole é uma região urbana formada pela fusão de várias metrópoles e cidades, criando uma enorme concentração urbana contínua. O eixo São Paulo-Rio de Janeiro é considerado uma megalópole brasileira." },
          { id: "e5", question: "O êxodo rural no Brasil causou problemas nas cidades como:", options: { a: "Excesso de empregos formais", b: "Crescimento econômico equilibrado", c: "Déficit habitacional, formação de favelas e pressão sobre serviços públicos", d: "Redução do desemprego" }, answer: "c", resolution: "A chegada massiva de migrantes do campo para as cidades, sem infraestrutura adequada para recebê-los, gerou: déficit habitacional, expansão das favelas, sobrecarga dos sistemas de saúde e educação, desemprego e subemprego." },
        ],
      },
    ],
    pdfs: [
      { id: "p1", title: "Biomas do Brasil - Apostila Completa", type: "apostila", description: "Características, localização e ameaças", downloadUrl: "#pdf-biomas-apostila" },
      { id: "p2", title: "Climas do Brasil - Resumo", type: "resumo", description: "Mapa e características de cada clima", downloadUrl: "#pdf-climas-resumo" },
      { id: "p3", title: "50 Questões de Geopolítica", type: "exercicios", description: "Ordem mundial, globalização e blocos", downloadUrl: "#pdf-geopolitica-50q" },
      { id: "p4", title: "Cartografia - Escalas, Projeções e Fusos Horários", type: "apostila", description: "Leitura e interpretação de mapas", downloadUrl: "#pdf-cartografia" },
      { id: "p5", title: "Relevo e Hidrografia do Brasil", type: "resumo", description: "Planaltos, planícies e bacias", downloadUrl: "#pdf-relevo-brasil" },
      { id: "p6", title: "Urbanização e Problemas Urbanos", type: "apostila", description: "Crescimento das cidades e seus desafios", downloadUrl: "#pdf-urbanizacao" },
      { id: "p7", title: "Geografia da América do Sul", type: "apostila", description: "Países, capitais e características", downloadUrl: "#pdf-america-sul" },
      { id: "p8", title: "Questões de Dinâmica Populacional", type: "exercicios", description: "Transição demográfica e migrações", downloadUrl: "#pdf-populacao-quest" },
      { id: "p9", title: "Energias Renováveis e Matriz Energética", type: "apostila", description: "Solar, eólica, hidrelétrica e outras", downloadUrl: "#pdf-energia" },
      { id: "p10", title: "Agropecuária Brasileira", type: "resumo", description: "Culturas, pecuária e agronegócio", downloadUrl: "#pdf-agropecuaria" },
      { id: "p11", title: "Desastres Ambientais e Mudanças Climáticas", type: "apostila", description: "El Niño, La Niña e aquecimento global", downloadUrl: "#pdf-desastres" },
      { id: "p12", title: "Simulado ENEM - Geografia", type: "exercicios", description: "45 questões com gabarito", downloadUrl: "#pdf-simulado-geo" },
      { id: "p13", title: "Regiões Brasileiras - Norte ao Sul", type: "resumo", description: "Características de cada região", downloadUrl: "#pdf-regioes" },
      { id: "p14", title: "Indústria Brasileira - Setores e Regiões", type: "apostila", description: "Parques industriais e desenvolvimento", downloadUrl: "#pdf-industria" },
      { id: "p15", title: "Problemas Ambientais Brasileiros", type: "resumo", description: "Desmatamento, erosão, poluição hídrica", downloadUrl: "#pdf-amb-brasil" },
      { id: "p16", title: "Geopolítica da América Latina", type: "apostila", description: "Relações políticas e econômicas regionais", downloadUrl: "#pdf-am-latina" },
      { id: "p17", title: "Questões de Climatologia ENEM", type: "exercicios", description: "Climas mundiais e brasileiros", downloadUrl: "#pdf-climatologia-q" },
      { id: "p18", title: "Fusos Horários e Coordenadas Geográficas", type: "resumo", description: "Latitude, longitude e horários", downloadUrl: "#pdf-fusos" },
      { id: "p19", title: "Geomorfologia - Processos de Formação do Relevo", type: "apostila", description: "Intemperismo, erosão e deposição", downloadUrl: "#pdf-geomorfologia" },
      { id: "p20", title: "Atlas do Brasil - Mapas Temáticos", type: "apostila", description: "Mapas de clima, relevo, população e outros", downloadUrl: "#pdf-atlas-brasil" },
    ],
  },
  {
    id: "ciencias",
    name: "Ciências",
    slug: "ciencias",
    description: "Ciências naturais: corpo humano, ecologia e experimentos",
    icon: "🔬",
    color: "#0E7490",
    bgColor: "#ECFEFF",
    topics: [
      {
        id: "sistema-solar",
        title: "Sistema Solar e Universo",
        slug: "ciencias-sistema-solar",
        explanation: `<h2>Sistema Solar e Universo</h2>
<p>O Sistema Solar é formado pelo Sol e todos os corpos celestes que orbitam em torno dele: 8 planetas, planetas anões, satélites naturais, asteroides e cometas. Faz parte da galáxia Via Láctea, uma entre bilhões de galáxias no universo observável.</p>
<h3>O Sol</h3>
<p>O Sol é uma estrela de porte médio, com diâmetro de 1,4 milhão de km (109 vezes maior que a Terra). Sua temperatura superficial é de 5.500°C e no núcleo atinge 15 milhões de graus. A energia solar é produzida por fusão nuclear do hidrogênio em hélio.</p>
<h3>Os Planetas</h3>
<p><strong>Planetas Rochosos (Internos):</strong> Mercúrio, Vênus, Terra e Marte. Menores, densos, com superfície sólida.</p>
<p><strong>Planetas Gasosos (Externos):</strong> Júpiter, Saturno, Urano e Netuno. Maiores, formados principalmente por gás e gelo.</p>
<p>Em 2006, Plutão foi reclassificado como planeta anão pela União Astronômica Internacional.</p>
<h3>A Terra</h3>
<p>Único planeta conhecido com vida. Camadas: crosta, manto e núcleo. Possui um campo magnético que protege contra a radiação solar. A Lua é seu único satélite natural, influenciando as marés.</p>`,
        videos: [{ id: "v1", title: "Sistema Solar - Planetas e Características", youtubeId: "QTzyluDk_jI" }, { id: "v2", title: "Terra e Universo - Sistema Solar", youtubeId: "r9S6tpDbJIs" }, { id: "v3", title: "O Sistema Solar em 3D para Estudantes", youtubeId: "-oie4EFLs_0" }, { id: "v4", title: "Sistema Solar - Brasil Escola", youtubeId: "zF-fQPiTFtQ" }, { id: "v5", title: "Sistema Solar - Aula Online Fundamental", youtubeId: "9V0ZIcdrHbw" }],
        exercises: [
          { id: "e1", question: "Quantos planetas tem o Sistema Solar atualmente?", options: { a: "7", b: "8", c: "9", d: "10" }, answer: "b", resolution: "O Sistema Solar tem 8 planetas: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno. Plutão foi reclassificado como planeta anão em 2006 pela União Astronômica Internacional." },
          { id: "e2", question: "O Sol produz energia por meio de:", options: { a: "Fissão nuclear do urânio", b: "Queima de carvão mineral", c: "Fusão nuclear do hidrogênio em hélio", d: "Reação química do oxigênio" }, answer: "c", resolution: "O Sol produz energia por fusão nuclear: no núcleo solar, átomos de hidrogênio se fundem para formar hélio, liberando enorme quantidade de energia na forma de luz e calor. Esse processo é chamado de termonuclear." },
          { id: "e3", question: "Qual é o maior planeta do Sistema Solar?", options: { a: "Saturno", b: "Urano", c: "Netuno", d: "Júpiter" }, answer: "d", resolution: "Júpiter é o maior planeta do Sistema Solar, com diâmetro de 143.000 km (mais de 11 vezes o diâmetro da Terra). É um planeta gasoso, composto principalmente de hidrogênio e hélio." },
          { id: "e4", question: "As marés nos oceanos da Terra são causadas principalmente pela:", options: { a: "Rotação da Terra", b: "Gravidade da Lua", c: "Calor do Sol", d: "Ventos oceânicos" }, answer: "b", resolution: "As marés são causadas principalmente pela atração gravitacional da Lua sobre as águas dos oceanos. A Lua atrai a água mais próxima a ela, causando a maré alta. O Sol também influencia as marés, mas em menor intensidade." },
          { id: "e5", question: "A Via Láctea é:", options: { a: "Um planeta do Sistema Solar", b: "Um satélite natural da Terra", c: "A galáxia onde está o Sistema Solar", d: "Um asteroide próximo da Terra" }, answer: "c", resolution: "A Via Láctea é a galáxia espiral onde está localizado o Sistema Solar. Contém entre 100 e 400 bilhões de estrelas. O Sol está situado a cerca de 26.000 anos-luz do centro galáctico." },
        ],
      },
      {
        id: "celula",
        title: "A Célula - Unidade da Vida",
        slug: "ciencias-celula",
        explanation: `<h2>A Célula - Unidade Básica da Vida</h2>
<p>A célula é a menor unidade estrutural e funcional dos seres vivos. Todo ser vivo é formado por pelo menos uma célula. A teoria celular, formulada no século XIX, estabelece que todos os seres vivos são compostos por células.</p>
<h3>Tipos de Células</h3>
<p><strong>Células Procarióticas:</strong> Sem núcleo definido. Presentes em bactérias e arqueas. Material genético disperso no citoplasma. Sem organelas membranosas.</p>
<p><strong>Células Eucarióticas:</strong> Com núcleo definido (envolvido por membrana). Presentes em plantas, animais, fungos e protistas. Possuem organelas membranosas como mitocôndrias e retículo endoplasmático.</p>
<h3>Organelas Celulares</h3>
<p><strong>Núcleo:</strong> Contém o DNA, coordena as atividades celulares.</p>
<p><strong>Mitocôndria:</strong> Produz energia (ATP) através da respiração celular.</p>
<p><strong>Ribossomo:</strong> Produz proteínas por tradução do RNA mensageiro.</p>
<p><strong>Cloroplasto:</strong> Presente apenas em células vegetais, realiza a fotossíntese.</p>
<p><strong>Vacúolo:</strong> Armazenamento; grande e central nas células vegetais.</p>
<p><strong>Membrana Plasmática:</strong> Controla a entrada e saída de substâncias.</p>`,
        videos: [{ id: "v1", title: "A Célula - Organelas e Funções", youtubeId: "L4smfNoMKb8" }, { id: "v2", title: "Célula - Seres Vivos e Organização", youtubeId: "KitN2cbal50" }, { id: "v3", title: "Corpo Humano - Células, Órgãos, Tecidos", youtubeId: "e2CTn6WtRN8" }, { id: "v4", title: "Partes do Corpo Humano - Ciências", youtubeId: "VsInkfMijHQ" }, { id: "v5", title: "Níveis de Organização dos Seres Vivos", youtubeId: "2MpAiK1NNIE" }],
        exercises: [
          { id: "e1", question: "Qual organela é responsável pela produção de energia (ATP) na célula?", options: { a: "Ribossomo", b: "Núcleo", c: "Mitocôndria", d: "Vacúolo" }, answer: "c", resolution: "A mitocôndria é conhecida como 'usina de energia' da célula. Nela ocorre a respiração celular aeróbica, processo que transforma nutrientes (glicose) em ATP (adenosina trifosfato), a moeda energética das células." },
          { id: "e2", question: "Células procarióticas se diferenciam das eucarióticas por:", options: { a: "Serem maiores e mais complexas", b: "Não possuírem núcleo definido (sem membrana nuclear)", c: "Terem mais organelas", d: "Só existirem em animais" }, answer: "b", resolution: "A principal diferença é a ausência de núcleo definido nas células procarióticas: o material genético (DNA) fica disperso no citoplasma, sem ser envolto por membrana nuclear. Bactérias são exemplos de organismos procariontes." },
          { id: "e3", question: "O cloroplasto é uma organela presente exclusivamente em células:", options: { a: "Animais", b: "Bacterianas", c: "Vegetais (e algas)", d: "Fúngicas" }, answer: "c", resolution: "Cloroplastos são organelas exclusivas das células vegetais e das algas. Contêm clorofila e são responsáveis pela fotossíntese, processo que converte luz solar em energia química (glicose)." },
          { id: "e4", question: "A membrana plasmática tem como função principal:", options: { a: "Produzir proteínas", b: "Armazenar DNA", c: "Controlar a entrada e saída de substâncias na célula", d: "Realizar fotossíntese" }, answer: "c", resolution: "A membrana plasmática é semipermeável e controla o que entra e sai da célula, mantendo o equilíbrio interno (homeostase). É formada por uma bicamada fosfolipídica com proteínas intercaladas." },
          { id: "e5", question: "Os ribossomos são responsáveis por:", options: { a: "Produção de energia", b: "Síntese de proteínas", c: "Digestão celular", d: "Armazenamento de nutrientes" }, answer: "b", resolution: "Os ribossomos são organelas responsáveis pela síntese de proteínas, processo chamado de tradução. Eles leem a sequência do RNA mensageiro e montam as proteínas a partir dos aminoácidos." },
        ],
      },
      {
        id: "ecossistemas",
        title: "Ecossistemas e Ecologia",
        slug: "ciencias-ecossistemas",
        explanation: `<h2>Ecossistemas e Ecologia</h2>
<p>Ecologia é o estudo das relações entre os seres vivos e o ambiente. Um ecossistema é formado por uma comunidade de seres vivos (biocenose) e o ambiente físico onde vivem (biótopo), em constante interação.</p>
<h3>Cadeias e Teias Alimentares</h3>
<p>A cadeia alimentar representa o fluxo de energia e matéria nos ecossistemas. Produtores (vegetais) → Consumidores primários (herbívoros) → Consumidores secundários (carnívoros) → Decompositores (bactérias e fungos).</p>
<p>A teia alimentar é o conjunto de cadeias alimentares interligadas, representando as relações alimentares reais de um ecossistema.</p>
<h3>Ciclos Biogeoquímicos</h3>
<p><strong>Ciclo da Água:</strong> Evaporação, condensação, precipitação, infiltração e escoamento.</p>
<p><strong>Ciclo do Carbono:</strong> Fotossíntese, respiração, decomposição e combustão liberam e fixam CO₂.</p>
<p><strong>Ciclo do Nitrogênio:</strong> Fixação, nitrificação, desnitrificação pelos micro-organismos do solo.</p>
<h3>Relações Ecológicas</h3>
<p>Mutualismo: benefício mútuo (abelhas e flores). Comensalismo: um beneficia sem prejudicar o outro. Parasitismo: um se beneficia prejudicando o outro. Predatismo: um come o outro. Competição: disputa por recursos.</p>`,
        videos: [{ id: "v1", title: "Ecossistemas e Cadeia Alimentar", youtubeId: "TsclSi3nNsI" }, { id: "v2", title: "Cadeia Alimentar e Teia Alimentar", youtubeId: "wmVhZQN8-m4" }, { id: "v3", title: "Cadeia e Teia Alimentar - Samuel Cunha", youtubeId: "QQAqN7qL8Yg" }, { id: "v4", title: "Ecologia - Cadeia Alimentar", youtubeId: "ZZIH7PHQB-Q" }, { id: "v5", title: "Cadeias e Teias Alimentares - Aula", youtubeId: "QPFeWfM_6fs" }],
        exercises: [
          { id: "e1", question: "Os produtores em uma cadeia alimentar são:", options: { a: "Animais carnívoros", b: "Decompositores", c: "Vegetais fotossintetizantes", d: "Animais herbívoros" }, answer: "c", resolution: "Os produtores são organismos que produzem sua própria matéria orgânica por fotossíntese (principalmente vegetais e algas). São a base das cadeias alimentares, transformando energia solar em energia química." },
          { id: "e2", question: "A relação entre abelhas e flores é um exemplo de:", options: { a: "Parasitismo", b: "Mutualismo", c: "Comensalismo", d: "Predatismo" }, answer: "b", resolution: "O mutualismo é uma relação em que ambos os organismos se beneficiam. As abelhas se alimentam do néctar das flores (benefício para as abelhas) e ao mesmo tempo polinizam as flores (benefício para as plantas)." },
          { id: "e3", question: "Os decompositores em um ecossistema são fundamentais porque:", options: { a: "Produzem oxigênio", b: "Reciclam a matéria orgânica, devolvendo nutrientes ao solo", c: "São a base da cadeia alimentar", d: "Regulam a temperatura ambiental" }, answer: "b", resolution: "Decompositores (bactérias e fungos) quebram a matéria orgânica morta em compostos inorgânicos simples, devolvendo nutrientes ao solo que serão reutilizados pelos produtores. São essenciais para a ciclagem da matéria." },
          { id: "e4", question: "No ciclo da água, a evaporação ocorre quando:", options: { a: "A água líquida se transforma em gelo", b: "A água líquida se transforma em vapor", c: "O vapor de água se transforma em chuva", d: "A água subterrânea sobe para a superfície" }, answer: "b", resolution: "A evaporação é o processo em que a água líquida se transforma em vapor de água (gás) pelo aquecimento solar. Ocorre principalmente nos oceanos, rios e lagos. O vapor sobe, condensa em nuvens e retorna como chuva." },
          { id: "e5", question: "O parasitismo é uma relação em que:", options: { a: "Ambas as espécies se beneficiam", b: "Apenas uma espécie se beneficia sem prejudicar a outra", c: "Uma espécie se beneficia à custa da outra", d: "Uma espécie come a outra inteiramente" }, answer: "c", resolution: "No parasitismo, o parasita se beneficia (obtém nutrientes, abrigo, etc.) prejudicando o hospedeiro, mas geralmente não o matando imediatamente, pois precisa dele para sobreviver. Exemplos: piolho, lombriga, vírus." },
        ],
      },
      { id: "corpo-humano", title: "Sistemas do Corpo Humano", slug: "ciencias-corpo-humano", explanation: `<h2>Sistemas do Corpo Humano</h2><p>O corpo humano é organizado em diferentes sistemas, cada um com funções específicas que trabalham de forma integrada para manter a homeostase.</p><h3>Sistema Digestório</h3><p>Responsável pela digestão e absorção de nutrientes. Órgãos: boca, esôfago, estômago, intestino delgado, intestino grosso, fígado e pâncreas.</p><h3>Sistema Circulatório</h3><p>Distribui nutrientes, oxigênio e hormônios pelo corpo. Composto por coração, artérias, veias e capilares. O coração bombeia cerca de 5 litros de sangue por minuto.</p><h3>Sistema Respiratório</h3><p>Realiza as trocas gasosas (hematose): absorve O₂ e elimina CO₂. Órgãos: nariz, faringe, laringe, traqueia, brônquios e pulmões.</p><h3>Sistema Nervoso</h3><p>Controla e coordena as funções do organismo. Dividido em: Sistema Nervoso Central (cérebro, cerebelo, medula) e Sistema Nervoso Periférico (nervos).</p>`,
        videos: [{ id: "v1", title: "Sistema Digestório - Fisiologia", youtubeId: "ccxiObyUGRA" }, { id: "v2", title: "Digestório, Respiratório e Circulatório", youtubeId: "7gleFVOIcTo" }, { id: "v3", title: "Sistema Digestório - Toda Matéria", youtubeId: "OQy1lcyK52A" }, { id: "v4", title: "Sistema Nervoso - Neurônios", youtubeId: "w4kCRLP5_dQ" }, { id: "v5", title: "Sistema Digestório - Biologia ENEM", youtubeId: "MV4UMz5dWjg" }],
        exercises: [
          { id: "e1", question: "Qual órgão é responsável pela produção de bile, essencial para digestão de gorduras?", options: { a: "Pâncreas", b: "Estômago", c: "Fígado", d: "Intestino delgado" }, answer: "c", resolution: "O fígado produz a bile, substância armazenada na vesícula biliar e liberada no intestino delgado para emulsionar gorduras, facilitando sua digestão e absorção." },
          { id: "e2", question: "A hematose é o processo de:", options: { a: "Produção de sangue", b: "Troca gasosa nos pulmões (absorção de O₂ e liberação de CO₂)", c: "Bombeamento do sangue pelo coração", d: "Digestão de proteínas" }, answer: "b", resolution: "A hematose é a troca gasosa que ocorre nos alvéolos pulmonares: o sangue venoso (rico em CO₂) libera o dióxido de carbono e absorve oxigênio, tornando-se sangue arterial (rico em O₂)." },
          { id: "e3", question: "O sistema nervoso central é composto por:", options: { a: "Nervos e gânglios", b: "Cérebro, cerebelo e medula espinhal", c: "Coração e vasos sanguíneos", d: "Pulmões e brônquios" }, answer: "b", resolution: "O Sistema Nervoso Central (SNC) é formado pelo encéfalo (cérebro, cerebelo e tronco encefálico) e pela medula espinhal. Está protegido pelos ossos (crânio e coluna vertebral) e pelas meninges." },
          { id: "e4", question: "Qual sistema é responsável pela síntese de hormônios como insulina e adrenalina?", options: { a: "Sistema Digestório", b: "Sistema Nervoso", c: "Sistema Endócrino", d: "Sistema Circulatório" }, answer: "c", resolution: "O Sistema Endócrino produz hormônios — mensageiros químicos secretados por glândulas. A insulina é produzida pelo pâncreas, a adrenalina pelas suprarrenais. Os hormônios regulam diversas funções do organismo." },
          { id: "e5", question: "As artérias são vasos sanguíneos que:", options: { a: "Levam sangue do coração para o corpo", b: "Levam sangue do corpo para o coração", c: "Realizam trocas gasosas", d: "Só transportam sangue venoso" }, answer: "a", resolution: "Artérias são vasos que levam o sangue do coração para os órgãos (geralmente sangue oxigenado/arterial). Veias fazem o caminho inverso. Exceção: artéria pulmonar leva sangue venoso do coração para os pulmões." },
        ],
      },
      { id: "materia-energia", title: "Matéria e Energia", slug: "ciencias-materia-energia", explanation: `<h2>Matéria e Energia</h2><p>Toda a natureza é formada por matéria e energia. A matéria é tudo que tem massa e ocupa lugar no espaço. A energia é a capacidade de realizar trabalho ou provocar mudanças.</p><h3>Estados Físicos da Matéria</h3><p>Sólido: forma e volume definidos; partículas muito próximas e organizadas. Líquido: volume definido, forma variável; partículas próximas mas móveis. Gasoso: forma e volume variáveis; partículas distantes e com grande energia cinética.</p><h3>Mudanças de Estado</h3><p>Fusão (sólido→líquido), Solidificação (líquido→sólido), Vaporização (líquido→gás), Condensação (gás→líquido), Sublimação (sólido→gás), Deposição (gás→sólido).</p><h3>Formas de Energia</h3><p>Cinética (movimento), Potencial (posição), Térmica (calor), Luminosa (luz), Elétrica (elétrons), Química (ligações químicas), Nuclear (núcleo atômico). A energia se conserva — não é criada nem destruída, apenas transformada.</p>`,
        videos: [{ id: "v1", title: "Temperatura, Calor e Energia - Física", youtubeId: "OIPirCLyY6M" }, { id: "v2", title: "Termodinâmica - Calor e Temperatura", youtubeId: "ED2D6cckcnU" }, { id: "v3", title: "Termologia - Temperatura e Calor", youtubeId: "EZgxsI4YHRo" }, { id: "v4", title: "Termodinâmica para o ENEM", youtubeId: "OkKed4VCPsI" }, { id: "v5", title: "Calor Sensível e Latente - Física", youtubeId: "biLQGuEFGkU" }],
        exercises: [
          { id: "e1", question: "Fusão é a mudança de estado físico de:", options: { a: "Sólido para gasoso", b: "Sólido para líquido", c: "Líquido para gasoso", d: "Gasoso para líquido" }, answer: "b", resolution: "Fusão é a mudança de estado sólido para líquido, que ocorre quando a temperatura atinge o ponto de fusão do material. Por exemplo, o gelo (sólido) derrete e vira água (líquido) quando a temperatura sobe acima de 0°C." },
          { id: "e2", question: "A energia cinética é a energia relacionada ao:", options: { a: "Calor de um objeto", b: "Movimento de um objeto", c: "Posição de um objeto", d: "Combustível armazenado" }, answer: "b", resolution: "Energia cinética é a energia associada ao movimento dos corpos. Quanto maior a massa e a velocidade de um objeto, maior sua energia cinética. Fórmula: Ec = mv²/2." },
          { id: "e3", question: "Segundo a Lei da Conservação de Energia:", options: { a: "Energia pode ser criada a partir do nada", b: "Energia pode ser destruída completamente", c: "A energia total de um sistema isolado é constante — transforma-se, não se cria nem se destrói", d: "A energia diminui com o tempo" }, answer: "c", resolution: "A Lei da Conservação de Energia afirma que a energia não pode ser criada do nada nem destruída — apenas transformada de uma forma para outra. Assim, num sistema isolado, a energia total permanece constante." },
          { id: "e4", question: "Qual mudança de estado ocorre quando a água líquida se transforma em vapor?", options: { a: "Fusão", b: "Solidificação", c: "Condensação", d: "Vaporização" }, answer: "d", resolution: "Vaporização é a mudança de estado líquido para gasoso. Pode ocorrer de três formas: evaporação (lenta, na superfície), ebulição (rápida, em toda a massa do líquido, no ponto de ebulição) e calefação." },
          { id: "e5", question: "Num sólido, as partículas estão:", options: { a: "Muito distantes e com grande movimento", b: "Próximas, com movimento livre e aleatório", c: "Muito próximas, organizadas com vibração em torno de posições fixas", d: "Todas na mesma velocidade e temperatura" }, answer: "c", resolution: "Nos sólidos, as partículas estão muito próximas umas das outras, em posições fixas numa estrutura organizada (geralmente cristalina), podendo apenas vibrar ao redor de suas posições. Isso explica a forma e volume definidos dos sólidos." },
        ],
      },
    ],
    pdfs: [
      { id: "p1", title: "Ciências - Apostila Completa 6° ao 9° ano", type: "apostila", description: "Conteúdo completo do ensino fundamental", downloadUrl: "#pdf-ciencias-apostila" },
      { id: "p2", title: "Sistema Solar - Resumo com Imagens", type: "resumo", description: "Planetas e características", downloadUrl: "#pdf-solar-resumo" },
      { id: "p3", title: "Biologia Celular - Exercícios Resolvidos", type: "exercicios", description: "Célula e suas organelas", downloadUrl: "#pdf-celula-exerc" },
      { id: "p4", title: "Ecologia e Meio Ambiente", type: "apostila", description: "Cadeia alimentar, ciclos e preservação", downloadUrl: "#pdf-ecologia-ap" },
      { id: "p5", title: "Corpo Humano - Sistemas e Órgãos", type: "resumo", description: "Guia completo dos sistemas", downloadUrl: "#pdf-corpo-resumo" },
      { id: "p6", title: "Estados da Matéria e Mudanças", type: "apostila", description: "Físico-química para o ensino fundamental", downloadUrl: "#pdf-materia-estados" },
      { id: "p7", title: "50 Questões de Ciências com Gabarito", type: "exercicios", description: "Para o ensino fundamental", downloadUrl: "#pdf-ciencias-50q" },
      { id: "p8", title: "Nutrição e Alimentação Saudável", type: "resumo", description: "Grupos alimentares e vitaminas", downloadUrl: "#pdf-nutricao" },
      { id: "p9", title: "Saúde e Doenças - Prevenção", type: "apostila", description: "Infecciosas, parasitárias e crônicas", downloadUrl: "#pdf-saude-doencas" },
      { id: "p10", title: "Genética Básica para o Ensino Fundamental", type: "apostila", description: "DNA, genes e hereditariedade", downloadUrl: "#pdf-genetica-basica" },
      { id: "p11", title: "Evolução das Espécies", type: "resumo", description: "Darwin e seleção natural", downloadUrl: "#pdf-evolucao" },
      { id: "p12", title: "Ondas Sonoras e Luz", type: "apostila", description: "Física para o ensino fundamental", downloadUrl: "#pdf-ondas" },
      { id: "p13", title: "Experimentos de Ciências em Casa", type: "apostila", description: "10 experimentos com materiais simples", downloadUrl: "#pdf-experimentos" },
      { id: "p14", title: "Aquecimento Global e Mudanças Climáticas", type: "resumo", description: "Causas, efeitos e soluções", downloadUrl: "#pdf-aquecimento" },
      { id: "p15", title: "Simulado de Ciências - Ensino Fundamental", type: "exercicios", description: "40 questões com gabarito comentado", downloadUrl: "#pdf-simulado-ciencias" },
      { id: "p16", title: "Reprodução nos Seres Vivos", type: "apostila", description: "Reprodução sexuada e assexuada", downloadUrl: "#pdf-reproducao" },
      { id: "p17", title: "Microscopia e Técnicas Laboratoriais", type: "resumo", description: "Como usar o microscópio", downloadUrl: "#pdf-microscopio" },
      { id: "p18", title: "Reinos dos Seres Vivos", type: "apostila", description: "Animal, Vegetal, Fungi, Protista, Monera", downloadUrl: "#pdf-reinos" },
      { id: "p19", title: "Eletricidade Básica - Corrente e Circuitos", type: "resumo", description: "Conceitos fundamentais de elétrica", downloadUrl: "#pdf-eletricidade" },
      { id: "p20", title: "Lista de Ciências - Revisão Final", type: "exercicios", description: "60 questões de revisão com gabarito", downloadUrl: "#pdf-ciencias-revisao" },
    ],
  },
  {
    id: "fisica",
    name: "Física",
    slug: "fisica",
    description: "Mecânica, termodinâmica, óptica, eletricidade e ondas",
    icon: "⚡",
    color: "#4C1D95",
    bgColor: "#F5F3FF",
    topics: [
      { id: "cinematica", title: "Cinemática", slug: "fisica-cinematica", explanation: `<h2>Cinemática</h2><p>A cinemática é o ramo da Física que estuda o movimento dos corpos sem se preocupar com as causas que o originam. Analisa grandezas como posição, deslocamento, velocidade e aceleração.</p><h3>Conceitos Fundamentais</h3><p>Posição (x): localização do corpo num referencial. Deslocamento (Δx): variação de posição. Velocidade média (vm): deslocamento/tempo. Aceleração (a): variação de velocidade por unidade de tempo.</p><h3>Movimento Uniforme (MU)</h3><p>Velocidade constante, aceleração = 0. Equação: x = x₀ + v·t. Gráfico v×t: linha horizontal. Gráfico x×t: linha reta inclinada.</p><h3>Movimento Uniformemente Variado (MUV)</h3><p>Aceleração constante. Equações: v = v₀ + a·t e x = x₀ + v₀·t + a·t²/2. Equação de Torricelli: v² = v₀² + 2·a·Δx.</p>`, videos: [{ id: "v1", title: "Cinemática - MRU e MRUV Completo", youtubeId: "amK_I6bg5s4" }, { id: "v2", title: "Cinemática - Exercícios de MRUV", youtubeId: "s_T3C-33XuU" }, { id: "v3", title: "Gráficos de Velocidade e Aceleração", youtubeId: "7B7t7LxM-PQ" }, { id: "v4", title: "Fórmulas do MRUV - Como Aplicar", youtubeId: "-d8Hg0zB7K8" }, { id: "v5", title: "Física I - MRU e MRUV Fórmulas", youtubeId: "MovdTteYjv4" }], exercises: [{ id: "e1", question: "Um carro vai de 0 a 60 m/s em 10 s. Sua aceleração é:", options: { a: "6 m/s²", b: "10 m/s²", c: "60 m/s²", d: "600 m/s²" }, answer: "a", resolution: "a = Δv/Δt = (60-0)/10 = 6 m/s²." }, { id: "e2", question: "No MU, a aceleração é:", options: { a: "Crescente", b: "Constante e diferente de zero", c: "Nula", d: "Negativa" }, answer: "c", resolution: "No Movimento Uniforme (MU), a velocidade é constante, portanto a variação de velocidade é zero: a = 0." }, { id: "e3", question: "A equação x = x₀ + v₀·t + a·t²/2 descreve o:", options: { a: "MU", b: "MUV", c: "Queda livre apenas", d: "Lançamento horizontal" }, answer: "b", resolution: "Essa é a equação horária da posição para o Movimento Uniformemente Variado (MUV), onde há aceleração constante." }, { id: "e4", question: "Um objeto parte do repouso com aceleração de 2 m/s². Após 5 s, sua velocidade é:", options: { a: "2,5 m/s", b: "5 m/s", c: "10 m/s", d: "20 m/s" }, answer: "c", resolution: "v = v₀ + a·t = 0 + 2×5 = 10 m/s." }, { id: "e5", question: "Na equação de Torricelli (v² = v₀² + 2aΔx), ela é útil quando:", options: { a: "Não conhecemos o tempo", b: "A aceleração é zero", c: "A velocidade é constante", d: "O objeto está em repouso" }, answer: "a", resolution: "A equação de Torricelli é usada no MUV quando não temos o tempo disponível, relacionando velocidade, aceleração e deslocamento." }] },
      { id: "dinamica", title: "Dinâmica - Leis de Newton", slug: "fisica-leis-newton", explanation: `<h2>Leis de Newton</h2><p>Isaac Newton (1643-1727) formulou as três leis fundamentais do movimento, que formam a base da mecânica clássica.</p><h3>1ª Lei - Inércia</h3><p>Um corpo em repouso permanece em repouso, e um corpo em movimento continua em movimento retilíneo uniforme, a menos que uma força externa resultante atue sobre ele. A tendência do corpo de manter seu estado é chamada de inércia.</p><h3>2ª Lei - Força e Aceleração</h3><p>A força resultante aplicada a um corpo é igual ao produto de sua massa pela aceleração produzida: F = m·a. A direção e o sentido da aceleração coincidem com os da força resultante.</p><h3>3ª Lei - Ação e Reação</h3><p>Para cada ação, há uma reação de mesma intensidade, mesma direção e sentido oposto. As forças de ação e reação atuam em corpos diferentes.</p>`, videos: [{ id: "v1", title: "As 3 Leis de Newton - Resumo ENEM", youtubeId: "UM_RzhJakEQ" }, { id: "v2", title: "3ª Lei de Newton - Ação e Reação", youtubeId: "R9hh0WPe8Uc" }, { id: "v3", title: "Leis de Newton Explicadas", youtubeId: "B2u8FYE9fWk" }, { id: "v4", title: "Leis de Newton - Física do Zero", youtubeId: "iuPrkzJp20I" }, { id: "v5", title: "1ª Lei de Newton - Inércia", youtubeId: "0lmB4pNgQWU" }], exercises: [{ id: "e1", question: "Uma força de 30 N é aplicada a um objeto de 5 kg. Sua aceleração é:", options: { a: "6 m/s²", b: "10 m/s²", c: "150 m/s²", d: "25 m/s²" }, answer: "a", resolution: "F = m·a → a = F/m = 30/5 = 6 m/s²." }, { id: "e2", question: "A 1ª Lei de Newton descreve o conceito de:", options: { a: "Aceleração", b: "Inércia", c: "Força gravitacional", d: "Trabalho" }, answer: "b", resolution: "A 1ª Lei de Newton, ou Lei da Inércia, descreve a tendência dos corpos de manterem seu estado de repouso ou movimento retilíneo uniforme na ausência de forças externas." }, { id: "e3", question: "De acordo com a 3ª Lei de Newton, as forças de ação e reação:", options: { a: "Atuam no mesmo corpo", b: "São iguais em módulo e na mesma direção", c: "Atuam em corpos diferentes, com mesma intensidade e sentidos opostos", d: "Se anulam sempre" }, answer: "c", resolution: "As forças de ação e reação têm o mesmo módulo e direção, sentidos contrários, mas atuam em corpos diferentes, portanto não se anulam. Se eu empurro uma parede (ação), ela me empurra de volta (reação)." }, { id: "e4", question: "Dobrar a massa de um corpo, mantendo a mesma força, faz a aceleração:", options: { a: "Dobrar", b: "Quadruplicar", c: "Diminuir à metade", d: "Permanecer igual" }, answer: "c", resolution: "Pela 2ª Lei de Newton: F = ma → a = F/m. Se m dobra e F é constante: a = F/(2m) = metade da aceleração original." }, { id: "e5", question: "Inércia é a propriedade que os corpos têm de:", options: { a: "Resistir a mudanças em seu estado de movimento", b: "Acelerar quando uma força é aplicada", c: "Criar forças quando estão em repouso", d: "Atrair outros corpos pela gravidade" }, answer: "a", resolution: "Inércia é a propriedade dos corpos de resistirem a mudanças em seu estado de movimento. Corpos mais massivos têm maior inércia — são mais difíceis de acelerar ou parar." }] },
      { id: "termologia", title: "Termologia e Calorimetria", slug: "fisica-termologia", explanation: `<h2>Termologia e Calorimetria</h2><p>A Termologia estuda os fenômenos relacionados ao calor e à temperatura. A Calorimetria estuda as trocas de calor entre corpos.</p><h3>Temperatura e Calor</h3><p>Temperatura é uma medida da agitação das partículas de um corpo. Calor é a energia transferida entre corpos em diferentes temperaturas, sempre do mais quente para o mais frio.</p><h3>Escalas Termométricas</h3><p>Celsius (°C): água congela em 0° e ferve em 100°. Fahrenheit (°F): congela em 32° e ferve em 212°. Kelvin (K): escala absoluta, 0 K = -273°C. Conversões: K = °C + 273, °F = (9/5)·°C + 32.</p><h3>Calorimetria</h3><p>Quantidade de calor: Q = m·c·ΔT, onde m é a massa, c é o calor específico e ΔT é a variação de temperatura. Calor latente: Q = m·L (durante mudanças de estado, a temperatura não varia).</p>`, videos: [{ id: "v1", title: "Calor e Termodinâmica - ENEM", youtubeId: "ED2D6cckcnU" }, { id: "v2", title: "Termodinâmica - Sempre Cai no ENEM", youtubeId: "OkKed4VCPsI" }, { id: "v3", title: "Temperatura e Calor - Diferença", youtubeId: "biLQGuEFGkU" }, { id: "v4", title: "Física - Temperatura e Calor", youtubeId: "OIPirCLyY6M" }, { id: "v5", title: "Termologia - Temperatura e Calor Aula", youtubeId: "EZgxsI4YHRo" }], exercises: [{ id: "e1", question: "O calor sempre flui:", options: { a: "Do corpo frio para o quente", b: "Do corpo quente para o frio", c: "Em ambas as direções ao mesmo tempo", d: "Apenas se os corpos tiverem a mesma massa" }, answer: "b", resolution: "O calor flui espontaneamente do corpo de maior temperatura (mais quente) para o de menor temperatura (mais frio), até que ambos atinjam o equilíbrio térmico (mesma temperatura)." }, { id: "e2", question: "0°C equivale a quantos Kelvin?", options: { a: "0 K", b: "100 K", c: "273 K", d: "373 K" }, answer: "c", resolution: "A conversão é: K = °C + 273. Portanto, 0°C = 0 + 273 = 273 K. O zero absoluto (0 K = -273°C) é a temperatura mais baixa teoricamente possível." }, { id: "e3", question: "Na fórmula Q = m·c·ΔT, 'c' representa:", options: { a: "Velocidade da luz", b: "Calor específico do material", c: "Calor latente", d: "Comprimento do objeto" }, answer: "b", resolution: "Na equação da calorimetria, 'c' é o calor específico do material, que indica quanto calor (em J ou cal) é necessário para variar a temperatura de 1 g (ou 1 kg) do material em 1°C (ou 1 K)." }, { id: "e4", question: "Durante uma mudança de estado físico, como a fusão do gelo:", options: { a: "A temperatura aumenta rapidamente", b: "A temperatura permanece constante enquanto ocorre a mudança", c: "A temperatura diminui", d: "Não há troca de calor" }, answer: "b", resolution: "Durante as mudanças de estado, a temperatura permanece constante porque toda a energia fornecida (calor latente) é usada para romper as ligações entre as moléculas, não para aumentar a agitação (temperatura)." }, { id: "e5", question: "A transmissão de calor por irradiação ocorre:", options: { a: "Apenas em líquidos", b: "Através do contato direto entre corpos", c: "Por correntes de convecção no fluido", d: "Sem necessidade de meio material, por ondas eletromagnéticas" }, answer: "d", resolution: "A irradiação térmica é a transmissão de calor por ondas eletromagnéticas (infravermelho), podendo ocorrer no vácuo. É assim que o calor do Sol chega à Terra atravessando o espaço vazio." }] },
      { id: "optica", title: "Óptica Geométrica", slug: "fisica-optica", explanation: `<h2>Óptica Geométrica</h2><p>A óptica geométrica estuda a propagação da luz através de raios luminosos, tratando a luz como linha reta. Estuda fenômenos como reflexão, refração e formação de imagens em espelhos e lentes.</p><h3>Reflexão</h3><p>A luz ao atingir uma superfície é refletida. Lei da Reflexão: o ângulo de incidência é igual ao ângulo de reflexão (ambos medidos em relação à normal). Espelhos planos: imagem virtual, direita, de mesmo tamanho. Espelhos curvos: côncavos e convexos.</p><h3>Refração</h3><p>Mudança de velocidade e direção da luz ao passar de um meio para outro. Lei de Snell-Descartes: n₁·sen(θ₁) = n₂·sen(θ₂). O índice de refração n = c/v indica quantas vezes a luz viaja mais lento no meio.</p><h3>Lentes</h3><p>Lentes convergentes (convexas): converge raios de luz, forma imagens reais (quando objeto está além do foco) ou virtuais. Lentes divergentes (côncavas): diverge raios, sempre forma imagens virtuais, diretas e menores.</p>`, videos: [{ id: "v1", title: "Refração e Reflexão da Luz - ENEM", youtubeId: "zbS4mwj1WlI" }, { id: "v2", title: "Óptica Geométrica - Espelhos Planos", youtubeId: "c1QbVJ-FzjI" }, { id: "v3", title: "Refração Total - Óptica", youtubeId: "A2-h8I87RQs" }, { id: "v4", title: "Reflexão Total - Óptica Física", youtubeId: "-ZfZ1JcYKkM" }, { id: "v5", title: "Refração da Luz - Mapa Mental", youtubeId: "-GMtjKlPCOw" }], exercises: [{ id: "e1", question: "A Lei da Reflexão afirma que:", options: { a: "O ângulo de incidência é diferente do ângulo de reflexão", b: "O ângulo de incidência é sempre 90°", c: "O ângulo de incidência é igual ao ângulo de reflexão", d: "A luz sempre reflete em superfícies planas" }, answer: "c", resolution: "A Lei da Reflexão estabelece que o ângulo de incidência (θi) é igual ao ângulo de reflexão (θr), ambos medidos em relação à reta normal à superfície no ponto de incidência." }, { id: "e2", question: "Um espelho plano forma imagem:", options: { a: "Real, invertida e maior", b: "Virtual, direita e de mesmo tamanho", c: "Real, direta e menor", d: "Virtual, invertida e menor" }, answer: "b", resolution: "O espelho plano forma imagem virtual (atrás do espelho), direta (não invertida verticalmente), do mesmo tamanho do objeto e simétricamente oposta em relação ao espelho." }, { id: "e3", question: "A refração da luz ocorre quando:", options: { a: "A luz se reflete numa superfície", b: "A luz muda de meio e altera sua velocidade e direção", c: "A luz se dispersa em cores do arco-íris", d: "A luz atravessa o vácuo" }, answer: "b", resolution: "Refração é o fenômeno de mudança de velocidade (e consequentemente de direção) da luz ao passar de um meio para outro com índice de refração diferente." }, { id: "e4", question: "Lentes divergentes (côncavas) sempre formam imagens:", options: { a: "Reais, invertidas e ampliadas", b: "Reais, diretas e menores", c: "Virtuais, diretas e menores", d: "Virtuais, invertidas e do mesmo tamanho" }, answer: "c", resolution: "Lentes divergentes sempre formam imagens virtuais (do mesmo lado do objeto), diretas (não invertidas) e menores que o objeto, independentemente da posição do objeto." }, { id: "e5", question: "O índice de refração de um meio indica:", options: { a: "A cor da luz naquele meio", b: "Quantas vezes a velocidade da luz é menor naquele meio em relação ao vácuo", c: "A frequência da luz", d: "O comprimento de onda da luz" }, answer: "b", resolution: "O índice de refração n = c/v, onde c é a velocidade da luz no vácuo e v é a velocidade no meio. Se n = 1,5, a luz vai 1,5 vezes mais devagar naquele meio que no vácuo." }] },
      { id: "eletricidade", title: "Eletrostática e Eletrodinâmica", slug: "fisica-eletricidade", explanation: `<h2>Eletricidade</h2><p>A eletricidade estuda os fenômenos relacionados às cargas elétricas. A eletrostática trata cargas em repouso; a eletrodinâmica, cargas em movimento (corrente elétrica).</p><h3>Carga Elétrica</h3><p>A carga elétrica é uma propriedade fundamental da matéria. Há dois tipos: positiva (prótons) e negativa (elétrons). Cargas iguais se repelem; cargas diferentes se atraem.</p><h3>Corrente Elétrica</h3><p>É o fluxo ordenado de cargas elétricas. i = Q/t (Ampère). A lei de Ohm relaciona: V = R·i, onde V é a tensão (Volt), R é a resistência (Ohm) e i é a corrente (Ampère).</p><h3>Potência Elétrica</h3><p>P = V·i = R·i² = V²/R (Watt). A energia elétrica consumida é: E = P·t (Joule ou kWh).</p>`, videos: [{ id: "v1", title: "Tensão, Corrente e Resistência Elétrica", youtubeId: "0UX11WbhD8w" }, { id: "v2", title: "Corrente, Tensão e Resistência - Completo", youtubeId: "rDS-W6EQKpk" }, { id: "v3", title: "O que é Tensão, Corrente e Resistência", youtubeId: "lMFRBc2_Vo0" }, { id: "v4", title: "Tensão e Corrente Elétrica Básica", youtubeId: "IFl0K8ic_LQ" }, { id: "v5", title: "Eletricidade Básica - Corrente e Tensão", youtubeId: "kLUt4ZAJuPk" }], exercises: [{ id: "e1", question: "Pela Lei de Ohm, se a resistência de um resistor é 10 Ω e a corrente é 2 A, a tensão é:", options: { a: "5 V", b: "12 V", c: "20 V", d: "8 V" }, answer: "c", resolution: "Lei de Ohm: V = R·i = 10 × 2 = 20 V." }, { id: "e2", question: "Cargas elétricas de sinais opostos:", options: { a: "Se repelem", b: "Se atraem", c: "Não interagem", d: "Anulam-se completamente" }, answer: "b", resolution: "Pela lei das cargas: cargas de sinais opostos se atraem, cargas de mesmo sinal se repelem. Uma carga positiva e uma negativa exercem força atrativa entre si." }, { id: "e3", question: "A unidade de resistência elétrica é:", options: { a: "Volt", b: "Ampère", c: "Watt", d: "Ohm" }, answer: "d", resolution: "A resistência elétrica é medida em Ohm (Ω). O Volt é a unidade de tensão/voltagem. O Ampère é a unidade de corrente. O Watt é a unidade de potência." }, { id: "e4", question: "Um aparelho de 1000 W funcionando por 1 hora consome:", options: { a: "0,1 kWh", b: "0,5 kWh", c: "1 kWh", d: "1000 kWh" }, answer: "c", resolution: "Energia = Potência × Tempo = 1000 W × 1 h = 1000 Wh = 1 kWh. Essa é a unidade usada nas contas de luz (quilowatt-hora)." }, { id: "e5", question: "A corrente elétrica i = Q/t. Se Q = 60 C e t = 20 s, a corrente é:", options: { a: "1200 A", b: "40 A", c: "80 A", d: "3 A" }, answer: "d", resolution: "i = Q/t = 60/20 = 3 A. A corrente elétrica mede a quantidade de carga que passa por uma seção do condutor por unidade de tempo." }] },
    ],
    pdfs: [
      { id: "p1", title: "Apostila de Mecânica - Física Completa", type: "apostila", description: "Cinemática, dinâmica e energia", downloadUrl: "#pdf-mecanica-ap" },
      { id: "p2", title: "Leis de Newton - Exercícios Resolvidos", type: "exercicios", description: "50 problemas com resolução", downloadUrl: "#pdf-newton-ex" },
      { id: "p3", title: "Termologia e Calorimetria - Resumo", type: "resumo", description: "Fórmulas e conceitos essenciais", downloadUrl: "#pdf-termologia-resumo" },
      { id: "p4", title: "Óptica Geométrica - Apostila", type: "apostila", description: "Espelhos, lentes e refração", downloadUrl: "#pdf-optica-ap" },
      { id: "p5", title: "Eletricidade - Do Zero ao ENEM", type: "apostila", description: "Carga, corrente, resistência e circuitos", downloadUrl: "#pdf-eletricidade-ap" },
      { id: "p6", title: "Ondas e Som - Resumo Completo", type: "resumo", description: "Propriedades e tipos de ondas", downloadUrl: "#pdf-ondas-resumo" },
      { id: "p7", title: "Simulado de Física - ENEM", type: "exercicios", description: "45 questões com gabarito", downloadUrl: "#pdf-simulado-fisica" },
      { id: "p8", title: "Gravitação Universal", type: "apostila", description: "Lei de Newton da gravitação", downloadUrl: "#pdf-gravitacao" },
      { id: "p9", title: "Hidrostática e Hidrodinâmica", type: "resumo", description: "Pressão, fluidos e princípio de Arquimedes", downloadUrl: "#pdf-hidrostatica" },
      { id: "p10", title: "Energia, Trabalho e Potência", type: "apostila", description: "Conservação de energia mecânica", downloadUrl: "#pdf-energia-trabalho" },
      { id: "p11", title: "Física Moderna - Quântica e Relatividade", type: "apostila", description: "Introdução à física do século XX", downloadUrl: "#pdf-fisica-moderna" },
      { id: "p12", title: "Fórmulas de Física - Resumão", type: "resumo", description: "Todas as fórmulas em uma folha", downloadUrl: "#pdf-formulas-fisica" },
      { id: "p13", title: "Eletromagnetismo Básico", type: "apostila", description: "Campo elétrico, magnético e indução", downloadUrl: "#pdf-eletromag" },
      { id: "p14", title: "Lista de Cinemática - 80 Questões", type: "exercicios", description: "Com gabarito e resolução", downloadUrl: "#pdf-cinematica-80q" },
      { id: "p15", title: "Termodinâmica - Leis e Máquinas Térmicas", type: "apostila", description: "1ª e 2ª lei da termodinâmica", downloadUrl: "#pdf-termodinamica" },
      { id: "p16", title: "Impulso e Quantidade de Movimento", type: "resumo", description: "Colisões e conservação de momento", downloadUrl: "#pdf-impulso" },
      { id: "p17", title: "Radioatividade e Física Nuclear", type: "apostila", description: "Tipos de radiação e aplicações", downloadUrl: "#pdf-radioatividade" },
      { id: "p18", title: "Acústica e Ondas Sonoras", type: "apostila", description: "Intensidade, frequência e timbre", downloadUrl: "#pdf-acustica" },
      { id: "p19", title: "Campo Gravitacional e Satélites", type: "resumo", description: "Velocidade de escape e órbitas", downloadUrl: "#pdf-campo-grav" },
      { id: "p20", title: "Exercícios de Eletrostática - 60 Questões", type: "exercicios", description: "Cargas, campo elétrico e potencial", downloadUrl: "#pdf-eletrostatica-ex" },
    ],
  },
  {
    id: "quimica",
    name: "Química",
    slug: "quimica",
    description: "Química geral, orgânica e inorgânica, reações e substâncias",
    icon: "🧪",
    color: "#B91C1C",
    bgColor: "#FEF2F2",
    topics: [
      { id: "tabela-periodica", title: "Tabela Periódica", slug: "quimica-tabela-periodica", explanation: `<h2>Tabela Periódica dos Elementos</h2><p>A Tabela Periódica é a organização sistemática dos elementos químicos conhecidos. Foi proposta por Dmitri Mendeleev em 1869 e é usada universalmente como referência fundamental da química.</p><h3>Organização da Tabela</h3><p>Os elementos são organizados por número atômico crescente (número de prótons). As linhas horizontais são chamadas de PERÍODOS (7 ao total); as colunas verticais são FAMÍLIAS ou GRUPOS (18 ao total).</p><h3>Propriedades Periódicas</h3><p>Raio atômico: aumenta de cima para baixo (mais camadas) e diminui da esquerda para direita (mais prótons atraem mais elétrons). Eletronegatividade: aumenta da esquerda para direita e de baixo para cima — o flúor é o mais eletronegativo. Energia de ionização: aumenta da esquerda para direita e de baixo para cima.</p><h3>Famílias Importantes</h3><p>Metais alcalinos (IA): muito reativos, Li, Na, K. Alcalino-terrosos (IIA): Mg, Ca, Ba. Halogênios (VIIA): F, Cl, Br, I. Gases nobres (VIIIA/0): He, Ne, Ar, Kr — pouco reativos.</p>`, videos: [{ id: "v1", title: "Tabela Periódica - Guia Completo", youtubeId: "mfObV_CKrYo" }, { id: "v2", title: "Tabela Periódica - Famílias e Períodos", youtubeId: "99b6_HneB64" }, { id: "v3", title: "Propriedades Periódicas - Raio Atômico", youtubeId: "oUOcPWytESE" }, { id: "v4", title: "Metais, Semimetais e Não Metais", youtubeId: "mlq58sRaLKw" }, { id: "v5", title: "Tabela Periódica para o ENEM", youtubeId: "Vsnq2hJ2UZc" }], exercises: [{ id: "e1", question: "Os elementos de uma mesma família (coluna) na Tabela Periódica têm em comum:", options: { a: "Mesmo número de prótons", b: "Mesmo número de elétrons na última camada (valência)", c: "Mesmo número de nêutrons", d: "Mesmo número de camadas eletrônicas" }, answer: "b", resolution: "Elementos de uma mesma família possuem o mesmo número de elétrons na última camada eletrônica (camada de valência), o que lhes confere propriedades químicas semelhantes." }, { id: "e2", question: "O elemento mais eletronegativo da Tabela Periódica é:", options: { a: "Oxigênio", b: "Cloro", c: "Flúor", d: "Nitrogênio" }, answer: "c", resolution: "O Flúor (F) é o elemento mais eletronegativo, com valor de 4,0 na escala de Pauling. A eletronegatividade aumenta da esquerda para direita e de baixo para cima na Tabela Periódica." }, { id: "e3", question: "Os gases nobres são pouco reativos porque:", options: { a: "Têm muitos prótons", b: "Possuem a última camada completa (estável)", c: "São muito densos", d: "São sólidos em temperatura ambiente" }, answer: "b", resolution: "Os gases nobres (He, Ne, Ar, Kr, Xe, Rn) têm a última camada eletrônica completa: hélio com 2 elétrons, os demais com 8. Essa configuração é altamente estável, tornando-os quase inertes quimicamente." }, { id: "e4", question: "O número de períodos (linhas) na Tabela Periódica é:", options: { a: "5", b: "6", c: "7", d: "18" }, answer: "c", resolution: "A Tabela Periódica tem 7 períodos (linhas horizontais), correspondendo às 7 camadas eletrônicas possíveis: K, L, M, N, O, P, Q. O número de grupos (colunas) é 18." }, { id: "e5", question: "O raio atômico dos elementos aumenta ao longo de um período (esquerda para direita)?", options: { a: "Sim, aumenta", b: "Não, diminui da esquerda para a direita", c: "Permanece constante", d: "Aumenta apenas para os metais" }, answer: "b", resolution: "O raio atômico diminui da esquerda para direita num mesmo período porque o número de prótons no núcleo aumenta, atraindo os elétrons mais fortemente para perto do núcleo, reduzindo o raio." }] },
      { id: "ligacoes-quimicas", title: "Ligações Químicas", slug: "quimica-ligacoes", explanation: `<h2>Ligações Químicas</h2><p>As ligações químicas são as forças que unem átomos para formar moléculas e compostos. Ocorrem para que os átomos atinjam maior estabilidade, geralmente completando sua última camada eletrônica (regra do octeto).</p><h3>Ligação Iônica</h3><p>Ocorre entre metal e ametal, com transferência de elétrons. Um átomo perde elétrons (cátion +) e outro ganha (ânion -). Exemplos: NaCl (sal de cozinha), MgO, CaCl₂. Formam compostos com alto ponto de fusão, solúveis em água e bons condutores em solução.</p><h3>Ligação Covalente</h3><p>Ocorre entre ametais, com compartilhamento de pares de elétrons. Pode ser simples (1 par), dupla (2 pares) ou tripla (3 pares). Exemplos: H₂O, CO₂, N₂, CH₄.</p><h3>Ligação Metálica</h3><p>Ocorre entre átomos metálicos. Os elétrons da última camada ficam livres, formando um "mar de elétrons". Explica a condutividade elétrica e maleabilidade dos metais.</p>`, videos: [{ id: "v1", title: "Ligações Químicas - Iônica, Covalente", youtubeId: "UR7mFWrnCPk" }, { id: "v2", title: "Ligação Iônica - Formação e Propriedades", youtubeId: "R1iYAzbVNX0" }, { id: "v3", title: "Ligação Covalente - Compartilhamento", youtubeId: "UjXlHX3EEi0" }, { id: "v4", title: "Ligações Químicas no ENEM", youtubeId: "31HayGXOYt8" }, { id: "v5", title: "Ligação Metálica e Propriedades", youtubeId: "1zD2FiaM_-c" }], exercises: [{ id: "e1", question: "A ligação iônica ocorre entre:", options: { a: "Dois ametais", b: "Dois metais", c: "Metal e ametal", d: "Metal e gás nobre" }, answer: "c", resolution: "A ligação iônica ocorre predominantemente entre um metal (que perde elétrons, formando cátion) e um ametal (que ganha elétrons, formando ânion). A atração entre íons de cargas opostas forma o composto iônico." }, { id: "e2", question: "Na molécula de água (H₂O), o tipo de ligação química é:", options: { a: "Iônica", b: "Metálica", c: "Covalente", d: "Dativa" }, answer: "c", resolution: "Na água, o oxigênio e o hidrogênio são ambos ametais, formando ligação covalente por compartilhamento de pares de elétrons. O O forma duas ligações simples, uma com cada H." }, { id: "e3", question: "A condutividade elétrica dos metais é explicada pela:", options: { a: "Ligação iônica", b: "Ligação covalente apolar", c: "Ligação metálica (mar de elétrons livres)", d: "Alta eletronegatividade" }, answer: "c", resolution: "Na ligação metálica, os elétrons da última camada ficam deslocalizados (livres), formando um 'mar de elétrons'. Esses elétrons livres conduzem eletricidade e calor, explicando as propriedades dos metais." }, { id: "e4", question: "Uma ligação covalente dupla envolve o compartilhamento de:", options: { a: "1 par de elétrons", b: "2 pares de elétrons", c: "3 pares de elétrons", d: "4 pares de elétrons" }, answer: "b", resolution: "Ligação simples = 1 par (2 elétrons). Ligação dupla = 2 pares (4 elétrons). Ligação tripla = 3 pares (6 elétrons). Exemplo: O₂ tem ligação dupla, N₂ tem ligação tripla." }, { id: "e5", question: "Compostos iônicos, como o NaCl, em geral:", options: { a: "Conduzem eletricidade no estado sólido", b: "Possuem baixo ponto de fusão", c: "São insolúveis em água", d: "Conduzem eletricidade quando dissolvidos em água ou fundidos" }, answer: "d", resolution: "Compostos iônicos conduzem eletricidade quando dissolvidos em água (formando íons livres) ou quando fundidos (íons livres pelo calor). No estado sólido, os íons estão fixos no retículo cristalino e não conduzem." }] },
      { id: "reacoes-quimicas", title: "Reações Químicas", slug: "quimica-reacoes", explanation: `<h2>Reações Químicas</h2><p>Uma reação química é um processo em que substâncias (reagentes) se transformam em outras substâncias (produtos), com rompimento e formação de ligações químicas. A Lei da Conservação das Massas (Lavoisier) afirma: a massa dos reagentes é igual à massa dos produtos.</p><h3>Tipos de Reações</h3><p>Síntese: A + B → AB. Análise/Decomposição: AB → A + B. Simples Troca: A + BC → AC + B. Dupla Troca: AB + CD → AD + CB.</p><h3>Balanceamento de Equações</h3><p>O balanceamento garante a Lei de Lavoisier. Usa-se coeficientes estequiométricos. Exemplo: H₂ + O₂ → H₂O (não balanceada). Balanceada: 2H₂ + O₂ → 2H₂O.</p><h3>Velocidade de Reação</h3><p>Fatores que afetam a velocidade: temperatura (maior T = mais rápida), concentração dos reagentes, superfície de contato, catalisadores (aceleram sem ser consumidos).</p>`, videos: [{ id: "v1", title: "Reações Químicas - Tipos e Balanceamento", youtubeId: "KdFjktlNoaU" }, { id: "v2", title: "Balanceamento de Equações Químicas", youtubeId: "7p5UmxPUkzU" }, { id: "v3", title: "Tipos de Reações Químicas - Resumo", youtubeId: "xiPqarkHPNQ" }, { id: "v4", title: "Reações Químicas para o ENEM", youtubeId: "QCkdOU_yLgc" }, { id: "v5", title: "Química - Reações e Transformações", youtubeId: "BeZ8rJh3eug" }], exercises: [{ id: "e1", question: "A Lei de Lavoisier diz que em uma reação química:", options: { a: "A energia total é conservada", b: "A massa dos reagentes é igual à massa dos produtos", c: "Os volumes dos gases são conservados", d: "Sempre há liberação de calor" }, answer: "b", resolution: "A Lei de Lavoisier (1785) — 'Na natureza nada se cria, nada se perde, tudo se transforma' — afirma que a massa total dos reagentes é igual à massa total dos produtos em qualquer reação química." }, { id: "e2", question: "Uma reação de síntese tem o padrão:", options: { a: "AB → A + B", b: "A + BC → AC + B", c: "A + B → AB", d: "AB + CD → AD + CB" }, answer: "c", resolution: "Na reação de síntese (ou adição), dois ou mais reagentes se combinam para formar um único produto: A + B → AB. Exemplo: 2H₂ + O₂ → 2H₂O." }, { id: "e3", question: "Um catalisador é uma substância que:", options: { a: "Aumenta a velocidade de reação sendo consumida", b: "Diminui a velocidade de reação", c: "Aumenta a velocidade de reação sem ser consumida", d: "Aumenta a temperatura da reação" }, answer: "c", resolution: "Catalisadores aumentam a velocidade das reações ao fornecerem um caminho alternativo com menor energia de ativação, mas não são consumidos nas reações. São recuperados no final do processo." }, { id: "e4", question: "Para balancear 2H₂ + O₂ → 2H₂O, verificamos que:", options: { a: "Há 4 H e 2 O nos reagentes, e 4 H e 2 O nos produtos", b: "Há mais massa nos reagentes", c: "Faltam átomos de oxigênio nos produtos", d: "A equação não está balanceada" }, answer: "a", resolution: "Verificando: Reagentes: 2H₂ = 4 átomos de H; O₂ = 2 átomos de O. Produtos: 2H₂O = 4 átomos de H e 2 átomos de O. A equação está balanceada — mesma quantidade de cada átomo nos dois lados." }, { id: "e5", question: "Aumentar a temperatura de uma reação química geralmente:", options: { a: "Não afeta a velocidade", b: "Diminui a velocidade", c: "Paralisa a reação", d: "Aumenta a velocidade de reação" }, answer: "d", resolution: "O aumento de temperatura fornece mais energia cinética às moléculas, aumentando a frequência e a energia das colisões entre reagentes, o que aumenta a velocidade de reação. A regra de Van't Hoff diz que a cada 10°C de aumento, a velocidade dobra aproximadamente." }] },
      { id: "quimica-organica", title: "Química Orgânica", slug: "quimica-organica", explanation: `<h2>Química Orgânica</h2><p>A Química Orgânica estuda os compostos do carbono. O carbono é o elemento central por sua capacidade de formar 4 ligações covalentes e cadeias longas e complexas. Existem milhões de compostos orgânicos conhecidos.</p><h3>Hidrocarbonetos</h3><p>Compostos formados apenas por carbono e hidrogênio. Alcanos (CₙH₂ₙ₊₂): ligações simples, saturados. Alcenos (CₙH₂ₙ): uma dupla ligação. Alcinos (CₙH₂ₙ₋₂): uma tripla ligação. Aromáticos: contêm o anel benzênico (C₆H₆).</p><h3>Funções Orgânicas</h3><p>Álcoois (-OH): etanol (C₂H₅OH). Ácidos carboxílicos (-COOH): ácido acético (vinagre). Ésteres (-COO-): óleos e gorduras. Aminas (-NH₂): bases nitrogenadas. Cetonas (C=O): acetona.</p><h3>Reações Orgânicas</h3><p>Adição (em duplas/triplas ligações), substituição (troca de grupos), eliminação (forma dupla ligação) e combustão (reação com O₂).</p>`, videos: [{ id: "v1", title: "Funções Orgânicas para o ENEM", youtubeId: "5eyVwuUXp6E" }, { id: "v2", title: "Hidrocarbonetos - Funções Orgânicas", youtubeId: "KKVTPThabdc" }, { id: "v3", title: "Química Orgânica ENEM - Carbono", youtubeId: "I_Wm0nhOGNc" }, { id: "v4", title: "Hidrocarbonetos - Funções Orgânicas ENEM", youtubeId: "nDH3JllrQB8" }, { id: "v5", title: "Química Orgânica - Exercícios ENEM", youtubeId: "smLlZn9dgQU" }], exercises: [{ id: "e1", question: "O etanol (C₂H₅OH) pertence à função orgânica dos:", options: { a: "Ácidos carboxílicos", b: "Álcoois", c: "Ésteres", d: "Cetonas" }, answer: "b", resolution: "O etanol possui o grupo funcional -OH (hidroxila) ligado a um carbono saturado, caracterizando a função álcool. É o álcool das bebidas alcoólicas e dos combustíveis (etanol combustível)." }, { id: "e2", question: "Hidrocarbonetos são compostos formados por:", options: { a: "Carbono, hidrogênio e oxigênio", b: "Apenas carbono e hidrogênio", c: "Carbono e nitrogênio", d: "Apenas carbono" }, answer: "b", resolution: "Hidrocarbonetos são compostos orgânicos formados exclusivamente por carbono (C) e hidrogênio (H). São classificados em alcanos, alcenos, alcinos e aromáticos." }, { id: "e3", question: "O ácido acético (CH₃COOH), presente no vinagre, pertence à função:", options: { a: "Álcool", b: "Aldeído", c: "Ácido carboxílico", d: "Cetona" }, answer: "c", resolution: "O ácido acético possui o grupo carboxila -COOH, característico dos ácidos carboxílicos. É o responsável pelo sabor azedo do vinagre." }, { id: "e4", question: "Na reação de combustão completa de um hidrocarboneto, os produtos são:", options: { a: "CO e H₂", b: "CO₂ e H₂O", c: "CO₂ e SO₂", d: "Apenas CO₂" }, answer: "b", resolution: "Na combustão completa (excesso de O₂), hidrocarbonetos reagem com oxigênio produzindo CO₂ (dióxido de carbono) e H₂O (água). Exemplo: CH₄ + 2O₂ → CO₂ + 2H₂O." }, { id: "e5", question: "Isômeros são compostos que possuem:", options: { a: "Mesma fórmula molecular e mesma estrutura", b: "Fórmulas moleculares diferentes", c: "Mesma fórmula molecular, mas estruturas diferentes", d: "Mesma estrutura mas fórmulas diferentes" }, answer: "c", resolution: "Isômeros são substâncias com a mesma fórmula molecular (mesmo tipo e quantidade de átomos) mas com estruturas diferentes, resultando em propriedades físicas e/ou químicas distintas." }] },
      { id: "solucoes", title: "Soluções e Misturas", slug: "quimica-solucoes", explanation: `<h2>Soluções e Misturas</h2><p>Uma mistura é a combinação de duas ou mais substâncias sem reação química. As soluções são misturas homogêneas onde as substâncias se misturam uniformemente em nível molecular.</p><h3>Tipos de Mistura</h3><p>Homogênea (solução): aspecto uniforme, uma única fase. Heterogênea: fases visíveis distintas. Coloidal: aparência homogênea, mas microheterogênea.</p><h3>Componentes da Solução</h3><p>Solvente: substância em maior quantidade, dissolve o soluto. Soluto: substância em menor quantidade, é dissolvida. Concentração: quantidade de soluto por volume de solução (g/L ou mol/L).</p><h3>Formas de Separação de Misturas</h3><p>Filtração, decantação, centrifugação, destilação, cromatografia, cristalização — cada método é usado de acordo com as propriedades físicas das substâncias envolvidas.</p>`, videos: [{ id: "v1", title: "Cálculo da Concentração das Soluções", youtubeId: "kes0efmdLyg" }, { id: "v2", title: "Concentração das Soluções - ENEM", youtubeId: "yliBypW94j8" }, { id: "v3", title: "Soluções - Soluto e Solvente", youtubeId: "-itAGbIG1r0" }, { id: "v4", title: "Concentração Comum das Soluções", youtubeId: "yU70WTXKyrc" }, { id: "v5", title: "Soluções - Concentração Molar e Título", youtubeId: "0FiaUwO5MDg" }], exercises: [{ id: "e1", question: "Uma solução é uma mistura:", options: { a: "Heterogênea com fases visíveis", b: "Homogênea com uma única fase", c: "Coloidal com partículas visíveis a olho nu", d: "De substâncias que reagem quimicamente" }, answer: "b", resolution: "Uma solução é uma mistura homogênea, com aspecto uniforme e uma única fase aparente. O soluto está distribuído uniformemente no solvente em nível molecular/iônico." }, { id: "e2", question: "Em uma solução aquosa de sal (NaCl), o solvente é:", options: { a: "O NaCl", b: "A água", c: "O sódio", d: "O cloro" }, answer: "b", resolution: "O solvente é a substância que dissolve o soluto. Na solução de NaCl em água, a água é o solvente (presente em maior quantidade) e o NaCl é o soluto." }, { id: "e3", question: "A destilação é usada para separar:", options: { a: "Misturas heterogêneas sólido-líquido", b: "Líquidos com pontos de ebulição diferentes", c: "Substâncias com densidades diferentes", d: "Partículas grandes por tamanho" }, answer: "b", resolution: "A destilação separa líquidos com diferentes pontos de ebulição. O líquido de menor ponto de ebulição vaporiza primeiro, é condensado e recolhido separado. Exemplo: separação de água e álcool." }, { id: "e4", question: "A concentração em g/L de uma solução é dada por:", options: { a: "Volume / Massa do soluto", b: "Massa do soluto / Volume da solução em litros", c: "Massa do solvente / Massa do soluto", d: "Mol / Massa molar" }, answer: "b", resolution: "Concentração em g/L (C = m/V): massa do soluto (em gramas) dividida pelo volume da solução (em litros). Se 20 g de açúcar são dissolvidos em 0,5 L de água, C = 20/0,5 = 40 g/L." }, { id: "e5", question: "Filtração é um método de separação adequado para:", options: { a: "Líquidos miscíveis", b: "Substâncias com diferentes pontos de fusão", c: "Mistura heterogênea sólido-líquido", d: "Gases misturados" }, answer: "c", resolution: "A filtração separa misturas heterogêneas sólido-líquido utilizando um filtro (papel filtro, areia, etc.) que retém o sólido e deixa passar o líquido (filtrado). Exemplo: coar café." }] },
    ],
    pdfs: [
      { id: "p1", title: "Tabela Periódica Comentada", type: "apostila", description: "Famílias, propriedades e tendências", downloadUrl: "#pdf-tabela-per-ap" },
      { id: "p2", title: "Ligações Químicas - Exercícios", type: "exercicios", description: "Iônica, covalente e metálica", downloadUrl: "#pdf-ligacoes-ex" },
      { id: "p3", title: "Química Orgânica - Apostila Completa", type: "apostila", description: "Funções, nomenclatura e reações", downloadUrl: "#pdf-organica-ap" },
      { id: "p4", title: "Estequiometria - Passo a Passo", type: "resumo", description: "Cálculos nas reações", downloadUrl: "#pdf-estequio" },
      { id: "p5", title: "Soluções e Concentrações", type: "apostila", description: "Mol, g/L e diluição", downloadUrl: "#pdf-solucoes-ap" },
      { id: "p6", title: "Simulado de Química ENEM", type: "exercicios", description: "45 questões com gabarito", downloadUrl: "#pdf-simulado-quim" },
      { id: "p7", title: "Tabela Periódica para Colorir e Estudar", type: "resumo", description: "Tabela interativa para estudo", downloadUrl: "#pdf-tabela-colorir" },
      { id: "p8", title: "Termoquímica - Entalpia e Calor", type: "apostila", description: "Reações exotérmicas e endotérmicas", downloadUrl: "#pdf-termoquimica" },
      { id: "p9", title: "Eletroquímica - Pilhas e Eletrólise", type: "apostila", description: "Potencial de eletrodo e lei de Faraday", downloadUrl: "#pdf-eletroquimica" },
      { id: "p10", title: "Funções Inorgânicas", type: "resumo", description: "Ácidos, bases, sais e óxidos", downloadUrl: "#pdf-inorganica" },
      { id: "p11", title: "Equilíbrio Químico", type: "apostila", description: "Kc, Kp e princípio de Le Chatelier", downloadUrl: "#pdf-equilibrio" },
      { id: "p12", title: "Nomenclatura Química Inorgânica", type: "resumo", description: "Regras IUPAC simplificadas", downloadUrl: "#pdf-nomenclatura" },
      { id: "p13", title: "Lista de Reações Orgânicas", type: "exercicios", description: "Adição, substituição e eliminação", downloadUrl: "#pdf-reacoes-org" },
      { id: "p14", title: "Cinética Química", type: "apostila", description: "Velocidade, catalisadores e energia", downloadUrl: "#pdf-cinetica" },
      { id: "p15", title: "Separação de Misturas - Prática", type: "resumo", description: "Destilação, filtração, cromatografia", downloadUrl: "#pdf-separacao" },
      { id: "p16", title: "Polímeros e Plásticos", type: "apostila", description: "Polímeros naturais e sintéticos", downloadUrl: "#pdf-polimeros" },
      { id: "p17", title: "Radioatividade e Nucleoquímica", type: "resumo", description: "Tipos de radiação e meia-vida", downloadUrl: "#pdf-radio-quim" },
      { id: "p18", title: "pH e Soluções Tampão", type: "apostila", description: "Acidez, basicidade e equilíbrio ácido-base", downloadUrl: "#pdf-ph-tampao" },
      { id: "p19", title: "Bioquímica Básica", type: "resumo", description: "Carboidratos, proteínas e lipídios", downloadUrl: "#pdf-bioquimica" },
      { id: "p20", title: "80 Exercícios de Química Geral", type: "exercicios", description: "Revisão completa com gabarito", downloadUrl: "#pdf-quim-80ex" },
    ],
  },
  {
    id: "biologia",
    name: "Biologia",
    slug: "biologia",
    description: "Genética, evolução, ecologia, citologia e zoologia",
    icon: "🌿",
    color: "#166534",
    bgColor: "#F0FDF4",
    topics: [
      { id: "genetica", title: "Genética e Hereditariedade", slug: "biologia-genetica", explanation: `<h2>Genética e Hereditariedade</h2><p>A Genética estuda como as características são transmitidas de pais para filhos. Foi fundada por Gregor Mendel (1822-1884), que realizou experimentos com ervilhas e formulou as leis da hereditariedade.</p><h3>Conceitos Básicos</h3><p>Gene: segmento de DNA que codifica uma característica. Alelo: formas alternativas do mesmo gene. Genótipo: constituição genética do indivíduo. Fenótipo: características observáveis (resultado da interação gene+ambiente).</p><h3>1ª Lei de Mendel - Lei da Segregação</h3><p>Cada indivíduo possui dois fatores para cada característica, que se separam na formação dos gametas. Um gameta recebe apenas um fator de cada par. Exemplo: Aa × Aa → 1/4 AA + 2/4 Aa + 1/4 aa (proporção 3:1 no fenótipo).</p><h3>2ª Lei de Mendel - Segregação Independente</h3><p>Genes de diferentes características se combinam livremente nos gametas. Cruzamento diíbrido: AaBb × AaBb → proporção fenotípica 9:3:3:1.</p><h3>DNA e Código Genético</h3><p>O DNA (ácido desoxirribonucleico) é a molécula que carrega a informação genética. Organizado em cromossomos. Humanos têm 46 cromossomos (23 pares). O código genético é a relação entre as sequências de bases do DNA/RNA e os aminoácidos das proteínas.</p>`, videos: [{ id: "v1", title: "Introdução à Genética", youtubeId: "tUtj4HIg4Wo" }, { id: "v2", title: "DNA - Estrutura e Função", youtubeId: "XxpRohqKvek" }, { id: "v3", title: "Hereditariedade - Leis de Mendel", youtubeId: "22cQBJv0Cas" }, { id: "v4", title: "Genética Molecular - DNA e RNA", youtubeId: "jTj4Rw5-Qhs" }, { id: "v5", title: "DNA e RNA - Resumo para o ENEM", youtubeId: "QNZlZomZ40w" }], exercises: [{ id: "e1", question: "Indivíduos com genótipo Aa são chamados de:", options: { a: "Homozigotos dominantes", b: "Homozigotos recessivos", c: "Heterozigotos", d: "Gametas" }, answer: "c", resolution: "Indivíduos com dois alelos diferentes para um gene (Aa) são chamados heterozigotos. Homozigotos dominantes têm genótipo AA e recessivos têm genótipo aa." }, { id: "e2", question: "A 1ª Lei de Mendel afirma que:", options: { a: "Genes de características diferentes se segregam independentemente", b: "Os fatores genéticos se separam durante a formação dos gametas", c: "Os filhos são sempre iguais aos pais", d: "O ambiente não influencia o fenótipo" }, answer: "b", resolution: "A 1ª Lei de Mendel (Lei da Segregação) diz que os pares de fatores (alelos) se separam durante a formação dos gametas, de modo que cada gameta recebe apenas um fator de cada par." }, { id: "e3", question: "O fenótipo de um organismo é determinado por:", options: { a: "Apenas pelos genes (genótipo)", b: "Apenas pelo ambiente", c: "Pela interação entre genótipo e ambiente", d: "Apenas pelos gametas recebidos" }, answer: "c", resolution: "O fenótipo (características observáveis) resulta da interação entre o genótipo (constituição genética) e o ambiente. Por isso, gêmeos idênticos (mesmo genótipo) podem ter fenótipos diferentes dependendo do ambiente." }, { id: "e4", question: "Humanos têm quantos cromossomos em suas células somáticas?", options: { a: "23", b: "46", c: "48", d: "92" }, answer: "b", resolution: "Células somáticas humanas têm 46 cromossomos, organizados em 23 pares homólogos (diploides - 2n = 46). Os gametas (espermatozoides e óvulos) têm 23 cromossomos (haploides - n = 23)." }, { id: "e5", question: "O cruzamento Aa × Aa resulta em qual proporção fenotípica (A dominante sobre a)?", options: { a: "1:1", b: "1:2:1", c: "3:1", d: "9:3:3:1" }, answer: "c", resolution: "Aa × Aa produz: 1/4 AA + 2/4 Aa + 1/4 aa. Fenotipicamente, AA e Aa expressam o dominante A (3/4), e apenas aa expressa o recessivo (1/4). Proporção fenotípica = 3:1." }] },
      { id: "evolucao", title: "Evolução Biológica", slug: "biologia-evolucao", explanation: `<h2>Evolução Biológica</h2><p>A Teoria da Evolução por Seleção Natural, proposta por Charles Darwin e Alfred Wallace em 1859, é o pilar central da biologia moderna. Explica a diversidade da vida e as adaptações dos organismos ao ambiente.</p><h3>Teoria de Darwin</h3><p>Indivíduos de uma população apresentam variações naturais. Aqueles com características mais favoráveis ao ambiente têm maior chance de sobreviver e reproduzir (seleção natural). As características favoráveis são herdadas, acumulando-se nas gerações.</p><h3>Evidências da Evolução</h3><p>Paleontológicas (fósseis), anatômicas (estruturas homólogas e análogas), embriológicas (desenvolvimento embrionário semelhante), moleculares (similaridade do DNA entre espécies relacionadas).</p><h3>Especiação</h3><p>Formação de novas espécies. Especiação alopátrica: isolamento geográfico separa populações que divergem evolutivamente. Especiação simpátrica: novas espécies surgem sem isolamento geográfico.</p><h3>Teoria Sintética (Neodarwinismo)</h3><p>Unificou darwinismo com genética mendeliana. Mutações e recombinação genética geram variabilidade; seleção natural age sobre essa variabilidade.</p>`, videos: [{ id: "v1", title: "Tipos de Seleção Natural - Evolução", youtubeId: "WZ-u3NUMkXc" }, { id: "v2", title: "Darwin e Lamarck - Teorias Evolutivas", youtubeId: "piRSx5SvYv8" }, { id: "v3", title: "Evolução e Seleção Natural - Aula", youtubeId: "kTjewD4LRiU" }, { id: "v4", title: "Como Funciona a Evolução", youtubeId: "bEZZ3HAM9k8" }, { id: "v5", title: "Darwinismo e Seleção Natural", youtubeId: "_-SWtYY-vT4" }], exercises: [{ id: "e1", question: "A seleção natural ocorre quando:", options: { a: "Todos os indivíduos da população sobrevivem igualmente", b: "Indivíduos com características favoráveis ao ambiente têm maior reprodução", c: "O ambiente não exerce pressão sobre os organismos", d: "Apenas mutações aleatórias ocorrem" }, answer: "b", resolution: "A seleção natural é o processo pelo qual indivíduos com características mais adaptadas ao ambiente têm maior probabilidade de sobreviver e reproduzir, transmitindo essas características para os descendentes." }, { id: "e2", question: "Estruturas homólogas são aquelas que:", options: { a: "Têm a mesma função mas origem diferente", b: "Têm a mesma origem evolutiva mas podem ter funções diferentes", c: "São idênticas em todos os aspectos", d: "Surgiram ao mesmo tempo em espécies diferentes" }, answer: "b", resolution: "Estruturas homólogas têm a mesma origem evolutiva (mesmo ancestral comum) mas podem ter funções diferentes. Exemplo: braço humano, pata de gato e asa de morcego são homólogos — mesma origem, funções diferentes." }, { id: "e3", question: "A teoria de Lamarck difere da de Darwin principalmente porque Lamarck propôs:", options: { a: "A seleção natural como mecanismo evolutivo", b: "A herança de características adquiridas durante a vida", c: "Que as espécies não evoluem", d: "Que a evolução ocorre por mutações" }, answer: "b", resolution: "Lamarck propôs que as características adquiridas durante a vida de um indivíduo seriam transmitidas aos descendentes (herança de caracteres adquiridos). Darwin, corretamente, propôs a seleção natural sobre variações naturais existentes." }, { id: "e4", question: "Os fósseis são evidências evolutivas porque:", options: { a: "São restes de organismos extintos que mostram formas de vida do passado", b: "Provavelmente são criações humanas", c: "Mostram que as espécies nunca mudaram", d: "Aparecem apenas em camadas geológicas modernas" }, answer: "a", resolution: "Fósseis são restos ou marcas de organismos que viveram no passado, preservados em rochas sedimentares. Permitem reconstruir a história da vida na Terra, mostrando formas intermediárias e extintas." }, { id: "e5", question: "A especiação alopátrica ocorre quando:", options: { a: "Duas espécies competem pelo mesmo nicho", b: "Uma barreira geográfica separa populações que divergem evolutivamente", c: "Novas espécies surgem sem isolamento geográfico", d: "Uma espécie se extingue" }, answer: "b", resolution: "A especiação alopátrica ocorre quando uma barreira geográfica (montanha, rio, oceano) separa fisicamente uma população em grupos que não se cruzam. Com o tempo, divergem geneticamente até se tornarem espécies distintas." }] },
      { id: "fotossintese", title: "Fotossíntese e Respiração Celular", slug: "biologia-fotossintese", explanation: `<h2>Fotossíntese e Respiração Celular</h2><p>A fotossíntese e a respiração celular são os processos mais importantes para a manutenção da vida na Terra, sendo processos complementares de transformação de energia.</p><h3>Fotossíntese</h3><p>Realizada por plantas, algas e cianobactérias. Equação geral: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂. Ocorre nos cloroplastos. A fase clara (fotofosforilação) usa luz para produzir ATP e NADPH. A fase escura (Ciclo de Calvin) usa ATP e NADPH para fixar CO₂ em glicose.</p><h3>Respiração Celular Aeróbica</h3><p>Decompõe glicose com O₂ para liberar energia (ATP). Equação: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energia (ATP). Etapas: Glicólise (citoplasma) → Ciclo de Krebs (mitocôndria) → Cadeia Respiratória (mitocôndria). Produz ~36-38 ATPs por molécula de glicose.</p><h3>Fermentação (Respiração Anaeróbica)</h3><p>Ocorre sem O₂. Fermentação lática: glicose → lactato + ATP (nos músculos em esforço intenso e em bactérias). Fermentação alcoólica: glicose → etanol + CO₂ + ATP (em leveduras).</p>`, videos: [{ id: "v1", title: "Fotossíntese - Fases Clara e Escura", youtubeId: "SDNc_5qXa0Q" }, { id: "v2", title: "Cloroplasto e Fotossíntese - Aula", youtubeId: "hRSFZPk7yGk" }, { id: "v3", title: "Respiração Celular x Fotossíntese", youtubeId: "you08pxTph4" }, { id: "v4", title: "Fotossíntese - Ensino Médio", youtubeId: "zSOE1uRloZg" }, { id: "v5", title: "Fotossíntese - Visão Geral para ENEM", youtubeId: "Jy90DbNf_6Q" }], exercises: [{ id: "e1", question: "A fotossíntese utiliza como matérias-primas:", options: { a: "O₂ e glicose", b: "CO₂ e H₂O (com energia luminosa)", c: "O₂ e aminoácidos", d: "Glicose e H₂O" }, answer: "b", resolution: "A fotossíntese usa CO₂ (dióxido de carbono) e H₂O (água), com energia luminosa, para produzir glicose (C₆H₁₂O₆) e O₂. CO₂ + H₂O + luz → C₆H₁₂O₆ + O₂." }, { id: "e2", question: "A respiração celular ocorre principalmente:", options: { a: "No núcleo celular", b: "Nos ribossomos", c: "Na mitocôndria (e parcialmente no citoplasma)", d: "No cloroplasto" }, answer: "c", resolution: "A respiração aeróbica ocorre em duas regiões: glicólise no citoplasma e ciclo de Krebs + cadeia respiratória nas mitocôndrias. As mitocôndrias são os principais locais de produção de ATP." }, { id: "e3", question: "A fermentação alcoólica produz:", options: { a: "CO₂ e água", b: "Etanol, CO₂ e pequena quantidade de ATP", c: "Lactato e ATP", d: "Glicose e O₂" }, answer: "b", resolution: "A fermentação alcoólica, realizada por leveduras como Saccharomyces cerevisiae, converte glicose em etanol (álcool etílico) e CO₂, liberando pequena quantidade de ATP. Base da produção de pão, cerveja e vinhos." }, { id: "e4", question: "Qual das afirmativas sobre fotossíntese e respiração é CORRETA?", options: { a: "Apenas plantas fazem fotossíntese; apenas animais fazem respiração", b: "Plantas fazem fotossíntese de dia; respiração é realizada tanto por plantas quanto por animais", c: "A fotossíntese libera CO₂ e a respiração libera O₂", d: "São processos idênticos" }, answer: "b", resolution: "Plantas realizam fotossíntese (quando há luz) e respiração celular (sempre). Animais realizam apenas respiração. A fotossíntese consome CO₂ e libera O₂; a respiração consome O₂ e libera CO₂." }, { id: "e5", question: "Quantas moléculas de ATP são produzidas na respiração aeróbica completa de uma molécula de glicose?", options: { a: "2 ATP", b: "8 ATP", c: "24 ATP", d: "36-38 ATP" }, answer: "d", resolution: "A respiração aeróbica completa de uma molécula de glicose produz aproximadamente 36 a 38 moléculas de ATP: 2 na glicólise, 2 no Ciclo de Krebs e 32-34 na cadeia respiratória/fosforilação oxidativa." }] },
      { id: "reino-animal", title: "Reino Animal - Zoologia", slug: "biologia-zoologia", explanation: `<h2>Reino Animal - Zoologia</h2><p>O Reino Animal (Animalia) é formado por organismos eucarióticos, multicelulares, heterótrofos e geralmente com capacidade de locomoção. Compreende mais de 1,5 milhão de espécies descritas.</p><h3>Características Gerais</h3><p>Células eucarióticas sem parede celular. Heterótrofos (obtêm energia de outros organismos). Maioria tem reprodução sexuada. Possuem tecidos especializados e sistemas de órgãos.</p><h3>Classificação Básica</h3><p>Invertebrados: sem coluna vertebral. Incluem Poríferos (esponjas), Cnidários (água-viva), Platelmintos (tênia), Nematódeos (lombriga), Moluscos (caracol, polvo), Artrópodes (insetos, aranhas, crustáceos) e Equinodermos (estrela-do-mar).</p><p>Vertebrados: com coluna vertebral. Incluem Peixes (3 classes), Anfíbios (rãs), Répteis (cobras, lagartos), Aves e Mamíferos.</p><h3>Mamíferos</h3><p>Endotérmicos, com pelos e mamam em filhotes. Subclasses: Monotremados (ornitorrinco), Marsupiais (canguru) e Placentários (a maioria, incluindo humanos).</p>`, videos: [{ id: "v1", title: "Zoologia - Reino Animal Invertebrados", youtubeId: "I5YQU5BL8dk" }, { id: "v2", title: "Reino Animalia - Introdução à Zoologia", youtubeId: "wX2T2CaVmaA" }, { id: "v3", title: "Invertebrados x Vertebrados - Zoologia", youtubeId: "BXqVhvhFx34" }, { id: "v4", title: "Zoologia - Classificação dos Animais", youtubeId: "irigKT9UiKU" }, { id: "v5", title: "Biologia - Divisão Celular Mitose Meiose", youtubeId: "gAikprrKpK4" }], exercises: [{ id: "e1", question: "Os artrópodes se caracterizam por:", options: { a: "Terem endoesqueleto e sangue quente", b: "Possuírem exoesqueleto quitinoso e apêndices articulados", c: "Serem exclusivamente aquáticos", d: "Realizarem fotossíntese" }, answer: "b", resolution: "Artrópodes são invertebrados que possuem exoesqueleto de quitina e apêndices articulados (patas, antenas, quelíceras). Incluem insetos, aranhas, crustáceos e miriápodes — o grupo mais diversificado do reino animal." }, { id: "e2", question: "Os mamíferos se distinguem dos demais vertebrados principalmente por:", options: { a: "Terem escamas e serem ectotérmicos", b: "Possuírem pelos e amamentarem seus filhotes", c: "Realizarem metamorfose", d: "Terem coração com 2 câmaras" }, answer: "b", resolution: "Os mamíferos são caracterizados pela presença de pelos (ao menos em alguma fase da vida) e pelas glândulas mamárias que produzem leite para alimentar os filhotes. São também endotérmicos (de sangue quente)." }, { id: "e3", question: "Qual grupo de animais inclui insetos, aranhas e caranguejos?", options: { a: "Moluscos", b: "Equinodermos", c: "Artrópodes", d: "Anelídeos" }, answer: "c", resolution: "Insetos (6 patas), aranhas (8 patas) e caranguejos (10 patas) são todos artrópodes — invertebrados com exoesqueleto quitinoso e apêndices articulados." }, { id: "e4", question: "Anfíbios são animais que:", options: { a: "Vivem exclusivamente em ambientes aquáticos", b: "São endotérmicos com penas", c: "Passam parte da vida na água e parte em terra, e dependem de água para se reproduzir", d: "Têm escamas e são répteis modernos" }, answer: "c", resolution: "Anfíbios (rãs, sapos, salamandras) têm vida dupla: fase larval aquática (girino) e fase adulta terrestre/aquática. São ectotérmicos e dependem de ambientes úmidos para reprodução, pois seus ovos não têm casca resistente." }, { id: "e5", question: "Os platelmintos são conhecidos por serem:", options: { a: "Animais marinhos com espinhos", b: "Vermes achatados, muitos parasitas como tênia e esquistossomo", c: "Animais com concha calcária", d: "Invertebrados com carapaça" }, answer: "b", resolution: "Platelmintos são vermes de corpo achatado dorsoventralmente. Muitos são parasitas importantes: a tênia (Taenia solium e T. saginata) parasita o intestino humano; o Schistosoma causa a esquistossomose." }] },
      { id: "ecologia-biologia", title: "Ecologia Populacional", slug: "biologia-ecologia-populacional", explanation: `<h2>Ecologia Populacional</h2><p>A Ecologia Populacional estuda as características e dinâmicas das populações biológicas: seu tamanho, distribuição, crescimento e interações com o ambiente.</p><h3>Parâmetros Populacionais</h3><p>Tamanho (N): número de indivíduos. Densidade: N por área ou volume. Taxa de natalidade (b): nascimentos por tempo. Taxa de mortalidade (d): mortes por tempo. Taxa de crescimento: r = b - d.</p><h3>Crescimento Populacional</h3><p>Crescimento exponencial (em J): ocorre quando recursos são ilimitados, taxa de crescimento é constante. Crescimento logístico (em S ou sigmoide): mais realista, ocorre quando há limitação de recursos. A capacidade suporte (K) é o número máximo que o ambiente suporta.</p><h3>Fatores de Regulação</h3><p>Fatores dependentes da densidade: predação, competição, parasitismo, doença — mais intensos quando a população é densa. Fatores independentes da densidade: temperatura, seca, incêndio — afetam independente da densidade.</p>`, videos: [{ id: "v1", title: "Ecologia e Cadeia Alimentar - Resumo", youtubeId: "TsclSi3nNsI" }, { id: "v2", title: "Cadeia Alimentar e Teia Alimentar", youtubeId: "wmVhZQN8-m4" }, { id: "v3", title: "Cadeia e Teia Alimentar - Biologia", youtubeId: "QQAqN7qL8Yg" }, { id: "v4", title: "Biologia - Ecologia - Cadeia Alimentar", youtubeId: "ZZIH7PHQB-Q" }, { id: "v5", title: "Cadeias Alimentares - Módulo Ecologia", youtubeId: "QPFeWfM_6fs" }], exercises: [{ id: "e1", question: "A capacidade suporte (K) de uma população refere-se ao:", options: { a: "Taxa máxima de crescimento", b: "Número mínimo para sobrevivência", c: "Tamanho máximo que o ambiente suporta", d: "Número de predadores" }, answer: "c", resolution: "A capacidade suporte (K) é o número máximo de indivíduos que o ambiente pode sustentar indefinidamente, dado os recursos disponíveis (alimento, espaço, água, etc.)." }, { id: "e2", question: "No crescimento exponencial, a população cresce:", options: { a: "Linearmente", b: "De forma constante em número absoluto", c: "Mais rapidamente à medida que fica maior (curva em J)", d: "Mais lentamente quando fica grande" }, answer: "c", resolution: "No crescimento exponencial (curva em J), a taxa de crescimento percentual é constante, mas o número absoluto de indivíduos adicionados aumenta progressivamente. Ocorre quando recursos são ilimitados." }, { id: "e3", question: "Fatores dependentes da densidade afetam as populações:", options: { a: "Independentemente do tamanho da população", b: "Apenas em pequenas populações", c: "Mais intensamente quando a densidade populacional é alta", d: "Somente em condições de seca" }, answer: "c", resolution: "Fatores dependentes da densidade (predação, competição intraespecífica, parasitismo, doenças infecciosas) se tornam mais intensos quando a densidade populacional aumenta, servindo como mecanismo de regulação." }, { id: "e4", question: "A curva de crescimento logístico tem formato de:", options: { a: "J (exponencial)", b: "S (sigmoide)", c: "U (parabólico)", d: "L (linear depois estável)" }, answer: "b", resolution: "O crescimento logístico produz curva em S (sigmoide): crescimento lento no início, fase de crescimento exponencial no meio e desaceleração ao aproximar-se da capacidade suporte (K), estabilizando." }, { id: "e5", question: "A taxa de crescimento de uma população (r) é dada por:", options: { a: "r = mortalidade / natalidade", b: "r = natalidade - mortalidade + imigração - emigração", c: "r = natalidade × mortalidade", d: "r = tamanho × tempo" }, answer: "b", resolution: "A taxa de crescimento real de uma população considera: r = (natalidade - mortalidade) + (imigração - emigração). Se r > 0, a população cresce; se r < 0, declina; se r = 0, está estável." }] },
    ],
    pdfs: [
      { id: "p1", title: "Genética Mendeliana - Apostila Completa", type: "apostila", description: "Leis de Mendel com exercícios", downloadUrl: "#pdf-genetica-ap" },
      { id: "p2", title: "Evolução Biológica - Resumo", type: "resumo", description: "Darwin, Lamarck e neodarwinismo", downloadUrl: "#pdf-evolucao-resumo" },
      { id: "p3", title: "Biologia Celular - Apostila", type: "apostila", description: "Célula, organelas e divisão celular", downloadUrl: "#pdf-celula-bio-ap" },
      { id: "p4", title: "Ecologia - Exercícios com Gabarito", type: "exercicios", description: "Cadeias, relações e ciclos", downloadUrl: "#pdf-ecologia-ex" },
      { id: "p5", title: "Zoologia Completa", type: "apostila", description: "Todos os filos animais", downloadUrl: "#pdf-zoologia-ap" },
      { id: "p6", title: "Simulado de Biologia ENEM", type: "exercicios", description: "45 questões com gabarito", downloadUrl: "#pdf-simulado-bio" },
      { id: "p7", title: "Botânica - Plantas e Reprodução", type: "apostila", description: "Morfologia e fisiologia vegetal", downloadUrl: "#pdf-botanica" },
      { id: "p8", title: "Microbiologia - Vírus e Bactérias", type: "resumo", description: "Estrutura, reprodução e doenças", downloadUrl: "#pdf-microbiologia" },
      { id: "p9", title: "Sistema Imunológico", type: "apostila", description: "Imunidade inata, adquirida e vacinas", downloadUrl: "#pdf-imunologia" },
      { id: "p10", title: "Biotecnologia e DNA Recombinante", type: "apostila", description: "PCR, transgênicos e clonagem", downloadUrl: "#pdf-biotecnologia" },
      { id: "p11", title: "Fotossíntese e Respiração - Resumo", type: "resumo", description: "Metabolismo energético celular", downloadUrl: "#pdf-metabolismo" },
      { id: "p12", title: "Fisiologia Animal - Sistemas", type: "apostila", description: "Digestório, circulatório, nervoso...", downloadUrl: "#pdf-fisiologia-animal" },
      { id: "p13", title: "Genética Molecular - DNA e RNA", type: "apostila", description: "Replicação, transcrição e tradução", downloadUrl: "#pdf-genetica-mol" },
      { id: "p14", title: "Biomas e Conservação Ambiental", type: "resumo", description: "Biomas mundiais e espécies ameaçadas", downloadUrl: "#pdf-biomas-cons" },
      { id: "p15", title: "Hormônios e Regulação", type: "apostila", description: "Sistema endócrino e hormônios", downloadUrl: "#pdf-hormonios" },
      { id: "p16", title: "Evolução Humana - Hominídeos", type: "resumo", description: "Da Australopithecus ao Homo sapiens", downloadUrl: "#pdf-evolucao-humana" },
      { id: "p17", title: "Parasitologia - Doenças Parasitárias", type: "apostila", description: "Malária, dengue, verminoses...", downloadUrl: "#pdf-parasitologia" },
      { id: "p18", title: "Embriologia - Desenvolvimento Animal", type: "resumo", description: "Fecundação ao desenvolvimento", downloadUrl: "#pdf-embriologia" },
      { id: "p19", title: "Fisiologia Vegetal - Hormônios Vegetais", type: "apostila", description: "Auxinas, giberelinas e outros", downloadUrl: "#pdf-fisiologia-veg" },
      { id: "p20", title: "80 Questões de Biologia Geral", type: "exercicios", description: "Revisão completa com gabarito", downloadUrl: "#pdf-bio-80q" },
    ],
  },
  {
    id: "ingles",
    name: "Inglês",
    slug: "ingles",
    description: "Gramática, vocabulário, conversação e interpretação em inglês",
    icon: "🇬🇧",
    color: "#1D4ED8",
    bgColor: "#EFF6FF",
    topics: [
      { id: "verb-tenses", title: "Tempos Verbais em Inglês", slug: "ingles-verb-tenses", explanation: `<h2>Verb Tenses - Tempos Verbais em Inglês</h2><p>O inglês tem vários tempos verbais que expressam quando uma ação ocorre: no passado, presente ou futuro. Entender os tempos verbais é essencial para comunicação eficaz.</p><h3>Simple Present (Presente Simples)</h3><p>Usado para: hábitos, verdades gerais, rotinas. Forma: sujeito + verbo base (he/she/it + verbo+s). Exemplos: I study every day. She reads books. They work at 9 am.</p><h3>Simple Past (Passado Simples)</h3><p>Usado para: ações completas no passado. Verbos regulares: +ed. Irregulares: lista especial. Exemplos: I studied yesterday. She went to school. They played football.</p><h3>Present Perfect (Presente Perfeito)</h3><p>Forma: have/has + past participle. Usado para experiências de vida ou ações recentes. Exemplos: I have visited Paris. She has just finished. They have never eaten sushi.</p><h3>Simple Future (Futuro Simples)</h3><p>Forma: will + verb. Usado para promessas, decisões espontâneas. Exemplos: I will help you. It will rain tomorrow. She will call you later.</p>`, videos: [{ id: "v1", title: "Todos os Tempos Verbais em Inglês", youtubeId: "17To8_OfKnU" }, { id: "v2", title: "Verb to BE no Passado - Was, Were", youtubeId: "y1aRAmfETbQ" }, { id: "v3", title: "Past Simple - Verbo to be Passado", youtubeId: "2pJ_Tb4r3JM" }, { id: "v4", title: "Future Will - Aula de Inglês", youtubeId: "96w-GqF7F_8" }, { id: "v5", title: "Will x Going To - Futuro em Inglês", youtubeId: "EyPhGIjZKEA" }], exercises: [{ id: "e1", question: "Qual é a forma correta no Simple Present para 'he/she/it'?", options: { a: "He work every day", b: "He works every day", c: "He working every day", d: "He worked every day" }, answer: "b", resolution: "No Simple Present, os sujeitos he, she, it recebem -s ou -es no verbo: 'he works', 'she reads', 'it rains'. Outros sujeitos (I, you, we, they) usam o verbo na forma base sem alteração." }, { id: "e2", question: "Qual frase está no Simple Past?", options: { a: "She is reading now", b: "She reads every day", c: "She read the book yesterday", d: "She will read tomorrow" }, answer: "c", resolution: "'She read the book yesterday' está no Simple Past. 'Read' é um verbo irregular — tanto a forma base quanto o passado simples são 'read' (pronunciados diferente). 'Yesterday' é uma dica de passado." }, { id: "e3", question: "O Present Perfect usa:", options: { a: "was/were + verbo+ing", b: "have/has + particípio passado", c: "will + verbo base", d: "did + verbo base" }, answer: "b", resolution: "O Present Perfect é formado por have (I/you/we/they) ou has (he/she/it) + past participle (particípio passado). Exemplo: I have studied → have + studied (particípio de study)." }, { id: "e4", question: "Qual frase usa o Simple Future corretamente?", options: { a: "I am going study tomorrow", b: "I studied tomorrow", c: "I will study tomorrow", d: "I studying tomorrow" }, answer: "c", resolution: "O Simple Future é formado por will + verbo na forma base: 'I will study'. É usado para previsões, promessas e decisões espontâneas." }, { id: "e5", question: "Identifique o verbo irregular: qual é o passado de 'go'?", options: { a: "goed", b: "going", c: "gone", d: "went" }, answer: "d", resolution: "O verbo 'go' (ir) é irregular: go → went (Simple Past). Não segue a regra de adicionar -ed. O particípio passado é 'gone'. Exemplo: 'She went to school yesterday.'" }] },
      { id: "vocabulary", title: "Vocabulário Essencial", slug: "ingles-vocabulary", explanation: `<h2>Vocabulário Essencial em Inglês</h2><p>O vocabulário é a base de qualquer língua. Para o ENEM e comunicação básica, é essencial conhecer famílias de palavras, falsos cognatos e estratégias de inferência vocabular.</p><h3>Falsos Cognatos (False Friends)</h3><p>Palavras parecidas com o português mas com significados diferentes: actually (na verdade, não "atualmente"), pretend (fingir, não "pretender"), college (faculdade, não "colégio"), library (biblioteca, não "livraria"), parents (pais, não "parentes").</p><h3>Palavras de Alta Frequência</h3><p>As 100 palavras mais comuns em inglês incluem: the, be, to, of, and, a, in, that, have, it, for, not, on, with, he, as, you, do, at, this...</p><h3>Estratégias de Inferência Vocabular</h3><p>Quando não souber uma palavra: analise o contexto, busque cognatos (palavras parecidas), identifique a classe gramatical, use prefixos/sufixos para deduzir o significado (un- = não, -tion = ação, -er = agente).</p>`, videos: [{ id: "v1", title: "Reading Comprehension - Inglês", youtubeId: "JPpHtxQMjBc" }, { id: "v2", title: "Text Comprehension - Resolução ENEM", youtubeId: "zwp9ARoKcPw" }, { id: "v3", title: "Reading Comprehension - 6° Ano", youtubeId: "jPet88zIWwo" }, { id: "v4", title: "Inglês para o ENEM - Revisão", youtubeId: "Sdwb47IkR9Q" }, { id: "v5", title: "Língua Inglesa - Reading Comprehension", youtubeId: "3gNeSYZnqqQ" }], exercises: [{ id: "e1", question: "A palavra 'actually' em inglês significa:", options: { a: "Atualmente", b: "Na verdade / De fato", c: "Rapidamente", d: "Especialmente" }, answer: "b", resolution: "'Actually' é um falso cognato. Em inglês, 'actually' significa 'na verdade', 'de fato' (not 'atualmente'). Para dizer 'atualmente' em inglês, usa-se 'currently' ou 'nowadays'." }, { id: "e2", question: "O que significa 'library' em inglês?", options: { a: "Livraria", b: "Livro", c: "Biblioteca", d: "Loja" }, answer: "c", resolution: "'Library' é um falso cognato. Em inglês, significa 'biblioteca' (lugar de empréstimo de livros, não de venda). 'Livraria' em inglês é 'bookstore' ou 'bookshop'." }, { id: "e3", question: "O sufixo '-tion' em palavras inglesas como 'education' e 'information' indica:", options: { a: "Uma pessoa que realiza a ação", b: "O estado de ser algo", c: "Uma ação, processo ou resultado", d: "O oposto do conceito" }, answer: "c", resolution: "O sufixo '-tion' (e '-ation', '-sion') indica substantivos que expressam ação, processo ou resultado: education (ato de educar), information (ato de informar), creation (ato de criar)." }, { id: "e4", question: "'Parents' em inglês significa:", options: { a: "Parentes", b: "Pais (pai e mãe)", c: "Avós", d: "Irmãos" }, answer: "b", resolution: "'Parents' é outro falso cognato. Em inglês, significa especificamente 'pai e mãe' (father and mother). 'Parentes' em geral (tios, primos, etc.) se diz 'relatives' ou 'family members'." }, { id: "e5", question: "Para inferir o significado de uma palavra desconhecida em um texto em inglês, uma boa estratégia é:", options: { a: "Pular a palavra e ignorar seu significado", b: "Usar o contexto da frase e do parágrafo para deduzir o sentido", c: "Assumir que tem o mesmo significado em português", d: "Parar de ler o texto" }, answer: "b", resolution: "A inferência vocabular pelo contexto é a estratégia mais eficaz. Analise as palavras ao redor, a ideia geral do parágrafo, a classe gramatical da palavra desconhecida e possíveis cognatos para deduzir o significado sem recorrer ao dicionário." }] },
      { id: "reading", title: "Reading Comprehension", slug: "ingles-reading", explanation: `<h2>Reading Comprehension - Compreensão de Texto em Inglês</h2><p>A compreensão leitora em inglês é a habilidade mais exigida no ENEM. Exige identificar a ideia principal, informações específicas, inferências e o significado de palavras em contexto.</p><h3>Tipos de Questões</h3><p>Main idea: identificar a ideia central do texto. Specific information: localizar dados específicos. Inference: deduzir informações não explícitas. Vocabulary in context: compreender palavras pelo contexto. Author's purpose: identificar o objetivo do autor.</p><h3>Estratégias de Leitura</h3><p>Skimming: leitura rápida para captar a ideia geral. Scanning: busca por informações específicas. Reading for detail: leitura detalhada para compreensão completa.</p><h3>Gêneros Textuais no ENEM</h3><p>Artigos de opinião, notícias, propagandas, letras de música, cartoons, tirinhas, infográficos. O ENEM exige que o estudante compreenda o texto sem necessidade de conhecer todas as palavras.</p>`, videos: [{ id: "v1", title: "Como Interpretar Textos em Inglês", youtubeId: "JPpHtxQMjBc" }, { id: "v2", title: "Língua Inglesa - Compreensão de Texto", youtubeId: "3gNeSYZnqqQ" }, { id: "v3", title: "Videoaula Text Comprehension ENEM", youtubeId: "zwp9ARoKcPw" }, { id: "v4", title: "Inglês para ENEM 2025 - Revisão", youtubeId: "Sdwb47IkR9Q" }, { id: "v5", title: "Inglês - Frente A Reading Comprehension", youtubeId: "jPet88zIWwo" }], exercises: [{ id: "e1", question: "Skimming é uma técnica de leitura que envolve:", options: { a: "Ler cada palavra do texto com atenção máxima", b: "Buscar uma informação específica no texto", c: "Ler rapidamente para captar a ideia geral do texto", d: "Traduzir todo o texto antes de responder" }, answer: "c", resolution: "Skimming é a leitura rápida em busca da ideia geral — passa-se os olhos pelo texto, lendo títulos, subtítulos, primeira e última frases dos parágrafos para ter uma visão geral sem ler palavra por palavra." }, { id: "e2", question: "A estratégia de scanning é mais útil quando:", options: { a: "Queremos entender o propósito geral de um texto", b: "Precisamos identificar o estilo literário", c: "Buscamos uma informação específica como data, nome ou número", d: "Analisamos a estrutura gramatical" }, answer: "c", resolution: "Scanning é a varredura visual do texto em busca de um dado específico (nome, data, número, palavra-chave). O olho vai direto ao que procura, sem ler o texto todo." }, { id: "e3", question: "No ENEM, os textos em inglês geralmente testam:", options: { a: "A capacidade de traduzir perfeitamente", b: "A compreensão geral e a capacidade de inferir significados", c: "A pronúncia das palavras", d: "Apenas o vocabulário isolado" }, answer: "b", resolution: "O ENEM testa a competência leitora em inglês, não a tradução perfeita. As questões pedem identificação de ideia central, inferências, função comunicativa do texto e significado de vocabulário em contexto." }, { id: "e4", question: "Ao encontrar a palavra 'however' no início de um parágrafo em inglês, isso indica:", options: { a: "Uma adição de ideia (addition)", b: "Uma causa ou razão", c: "Uma conclusão final", d: "Uma ideia de contraste ou oposição" }, answer: "d", resolution: "'However' é um conector adversativo em inglês, equivalente a 'porém', 'no entanto', 'contudo'. Indica contraste ou oposição com a ideia anterior. Outros conectores de contraste: 'but', 'although', 'nevertheless', 'on the other hand'." }, { id: "e5", question: "O gênero textual 'editorial' tem como objetivo principal:", options: { a: "Informar objetivamente sobre um evento", b: "Entreter o leitor com uma história fictícia", c: "Expressar a opinião do veículo de comunicação sobre um tema", d: "Anunciar um produto ou serviço" }, answer: "c", resolution: "O editorial é um texto opinativo que expressa a posição oficial do jornal ou revista sobre um tema relevante. Diferentemente da notícia (informativa), o editorial argumenta e defende um ponto de vista." }] },
      { id: "grammar", title: "Gramática Inglesa Essencial", slug: "ingles-grammar", explanation: `<h2>Gramática Inglesa Essencial</h2><p>A gramática inglesa difere significativamente do português em vários aspectos. Conhecer essas diferenças ajuda a entender textos e evitar erros de interpretação.</p><h3>Ordem das Palavras</h3><p>Em inglês, a ordem padrão é Sujeito + Verbo + Objeto (SVO): "She loves music." Adjective vem ANTES do substantivo: "a beautiful house" (não "a house beautiful"). Advérbios de frequência ficam ANTES do verbo principal: "I always eat breakfast."</p><h3>Artigos</h3><p>Definido: THE (o, a, os, as). Indefinido: A (before consonant sound) / AN (before vowel sound). Em inglês, não se usa artigo antes de substantivos abstratos gerais, nomes próprios e refeições.</p><h3>Modais</h3><p>Can (poder/saber): I can swim. Could (passado/pedido): Could you help me? Will (futuro/promessa): I will call you. Would (condicional/pedido formal): Would you like some tea? Should (obrigação moral): You should study. Must (obrigação): You must wear a helmet.</p>`, videos: [{ id: "v1", title: "Modal Verbs - Guia Completo", youtubeId: "cBiEV9jLmxc" }, { id: "v2", title: "Modal Verbs - Can, Could, Should, Must", youtubeId: "X4Td7gAS5GM" }, { id: "v3", title: "Modal Verbs Part 1 - Língua Inglesa", youtubeId: "Nl4cUp0f0ZE" }, { id: "v4", title: "Como Usar Modal Verbs em Inglês", youtubeId: "IJ5nqhFaqoY" }, { id: "v5", title: "Verbos Modais em Inglês - Aula", youtubeId: "d5tHxPf8mnI" }], exercises: [{ id: "e1", question: "Qual é a ordem correta em inglês?", options: { a: "A house beautiful", b: "A beautiful house", c: "Beautiful a house", d: "A house the beautiful" }, answer: "b", resolution: "Em inglês, o adjetivo sempre vem ANTES do substantivo que modifica: 'a beautiful house', 'a tall man', 'an interesting book'. Isso difere do português, onde frequentemente o adjetivo vem depois." }, { id: "e2", question: "Qual modal expressa habilidade em inglês?", options: { a: "Must", b: "Should", c: "Can", d: "Would" }, answer: "c", resolution: "'Can' expressa habilidade (saber fazer algo): 'I can swim' (Eu sei nadar), 'She can play piano'. 'Must' = obrigação; 'Should' = obrigação moral/conselho; 'Would' = condicional/pedido formal." }, { id: "e3", question: "Use 'AN' antes de:", options: { a: "house", b: "university (som de 'yu')", c: "apple", d: "European" }, answer: "c", resolution: "Usa-se 'AN' antes de sons de vogal (não letra): 'an apple', 'an umbrella', 'an hour' (h mudo). Usa-se 'A' antes de sons de consoante: 'a university' (u soa como 'yu'), 'a European', 'a house'." }, { id: "e4", question: "A voz passiva em inglês é formada por:", options: { a: "Sujeito + will + verbo", b: "Sujeito + have + particípio", c: "Sujeito + to be + past participle", d: "Sujeito + did + verbo" }, answer: "c", resolution: "A voz passiva em inglês é formada por: sujeito + verbo 'to be' (conjugado) + past participle. Exemplo: 'The book was written by her.' (O livro foi escrito por ela.) Presente: 'is written', Passado: 'was written', Futuro: 'will be written'." }, { id: "e5", question: "'She should study more.' Qual é a tradução e uso correto?", options: { a: "Ela deve estudar mais (obrigação absoluta)", b: "Ela estudará mais (futuro)", c: "Ela deveria estudar mais (conselho/recomendação)", d: "Ela pode estudar mais (habilidade)" }, answer: "c", resolution: "'Should' expressa conselho, recomendação ou obrigação moral — equivalente a 'deveria'. É mais suave que 'must' (obrigação absoluta). 'You should see a doctor' = Você deveria ver um médico." }] },
      { id: "speaking", title: "Expressões e Conversação", slug: "ingles-expressoes", explanation: `<h2>Expressões e Conversação em Inglês</h2><p>Além da gramática formal, o inglês usa muitas expressões idiomáticas e frases prontas na comunicação cotidiana. Conhecê-las é fundamental para entender textos autênticos e comunicar-se naturalmente.</p><h3>Cumprimentos e Apresentações</h3><p>Hello/Hi, How are you? (Formal/Informal). Fine/Great/Good, thanks. And you? Nice to meet you! My name is... What's your name? Where are you from? I'm from Brazil.</p><h3>Expressões Idiomáticas Comuns</h3><p>Piece of cake (muito fácil). Break a leg! (Boa sorte!). Under the weather (sentindo-se mal). Hit the nail on the head (acertar em cheio). Beat around the bush (enrolar, não ir direto ao assunto). Once in a blue moon (muito raramente).</p><h3>Phrasal Verbs</h3><p>Phrasal verbs são combinações de verbo + preposição com significado diferente das palavras separadas: give up (desistir), look up (procurar), run out (acabar), pick up (pegar/buscar), turn off (desligar), get along (se dar bem).</p>`, videos: [{ id: "v1", title: "Phrasal Verbs - O Que São e Como Usar", youtubeId: "1Jt1t3NyY84" }, { id: "v2", title: "Phrasal Verbs Para Iniciantes", youtubeId: "BxrSe_08OGE" }, { id: "v3", title: "20 Expressões Idiomáticas Mais Usadas", youtubeId: "w-jV2j56E7g" }, { id: "v4", title: "100 Expressões em Inglês - Aula", youtubeId: "fk4fcvHmcQc" }, { id: "v5", title: "Expressões Idiomáticas - Fale Como Nativo", youtubeId: "tWLVeFBm2GM" }], exercises: [{ id: "e1", question: "A expressão 'break a leg' significa:", options: { a: "Quebrar uma perna", b: "Boa sorte!", c: "Tome cuidado", d: "Vai devagar" }, answer: "b", resolution: "'Break a leg!' é uma expressão idiomática usada para desejar boa sorte, especialmente antes de performances (teatro, apresentações). É o oposto literal da origem — vem de superstição teatral." }, { id: "e2", question: "O phrasal verb 'give up' significa:", options: { a: "Dar algo de presente", b: "Subir rápido", c: "Desistir, abandonar", d: "Aumentar" }, answer: "c", resolution: "'Give up' significa desistir ou parar de tentar algo: 'Don't give up!' (Não desista!). Phrasal verbs frequentemente têm significados que não são a soma das palavras individuais." }, { id: "e3", question: "'Once in a blue moon' significa:", options: { a: "A cada lua cheia", b: "Sempre", c: "Muito raramente", d: "Durante a noite" }, answer: "c", resolution: "'Once in a blue moon' é uma expressão idiomática que significa 'muito raramente', 'de vez em nunca'. Blue moon (segunda lua cheia num mês) é um evento raro, daí a expressão." }, { id: "e4", question: "Como se diz 'Muito prazer!' em inglês (ao se apresentar)?", options: { a: "Good morning!", b: "How are you?", c: "Nice to meet you!", d: "See you later!" }, answer: "c", resolution: "'Nice to meet you!' (ou 'Pleased to meet you!' numa versão mais formal) é a expressão padrão ao ser apresentado a alguém pela primeira vez, equivalente a 'Muito prazer!' em português." }, { id: "e5", question: "O phrasal verb 'look up' pode significar:", options: { a: "Olhar para cima e/ou procurar uma informação", b: "Fechar um livro", c: "Desistir de procurar", d: "Baixar os olhos" }, answer: "a", resolution: "'Look up' tem dois significados: 1) olhar para cima (literal): 'Look up at the sky!'; 2) procurar informação: 'Look up the word in the dictionary' = pesquise a palavra no dicionário." }] },
    ],
    pdfs: [
      { id: "p1", title: "Gramática Inglesa Completa - Apostila", type: "apostila", description: "Tempos verbais, modais e estrutura", downloadUrl: "#pdf-grammar-ap" },
      { id: "p2", title: "Falsos Cognatos - Lista Completa", type: "resumo", description: "100 palavras que enganam", downloadUrl: "#pdf-false-friends" },
      { id: "p3", title: "Expressões Idiomáticas e Phrasal Verbs", type: "apostila", description: "300+ expressões com tradução e exemplos", downloadUrl: "#pdf-idioms-pv" },
      { id: "p4", title: "Inglês para ENEM - Guia Completo", type: "apostila", description: "Estratégias e questões resolvidas", downloadUrl: "#pdf-ingles-enem" },
      { id: "p5", title: "Vocabulário Temático - 1000 Palavras", type: "resumo", description: "Por temas: saúde, tecnologia, natureza...", downloadUrl: "#pdf-vocab-tematico" },
      { id: "p6", title: "Simulado de Inglês - ENEM", type: "exercicios", description: "30 questões com gabarito e tradução", downloadUrl: "#pdf-simulado-ingles" },
      { id: "p7", title: "Reading Comprehension - 40 Textos", type: "exercicios", description: "Interpretação de textos variados", downloadUrl: "#pdf-reading-40" },
      { id: "p8", title: "Tempos Verbais - Tabela e Exercícios", type: "resumo", description: "Todos os tempos com exemplos", downloadUrl: "#pdf-verbos-ingles" },
      { id: "p9", title: "Gêneros Textuais em Inglês", type: "apostila", description: "Artigos, anúncios, cartas, emails...", downloadUrl: "#pdf-genres" },
      { id: "p10", title: "Listening Comprehension Tips", type: "resumo", description: "Estratégias para compreensão oral", downloadUrl: "#pdf-listening" },
      { id: "p11", title: "Writing Skills - Inglês Escrito", type: "apostila", description: "Emails, ensaios e cartas formais", downloadUrl: "#pdf-writing" },
      { id: "p12", title: "Pronúncia do Inglês para Brasileiros", type: "resumo", description: "Sons difíceis e dicas práticas", downloadUrl: "#pdf-pronunciation" },
      { id: "p13", title: "Connectors and Discourse Markers", type: "resumo", description: "Coesão textual em inglês", downloadUrl: "#pdf-connectors" },
      { id: "p14", title: "English for Specific Purposes - Negócios", type: "apostila", description: "Inglês no ambiente profissional", downloadUrl: "#pdf-business-en" },
      { id: "p15", title: "Questões Comentadas de Inglês", type: "exercicios", description: "50 questões ENEM/Vestibular resolvidas", downloadUrl: "#pdf-ingles-comentadas" },
      { id: "p16", title: "Prepositions in English", type: "resumo", description: "In, on, at, to, for, with e seus usos", downloadUrl: "#pdf-prepositions" },
      { id: "p17", title: "Conditional Sentences", type: "apostila", description: "If clauses - 0, 1, 2 e 3 condicionais", downloadUrl: "#pdf-conditionals" },
      { id: "p18", title: "Direct and Reported Speech", type: "resumo", description: "Discurso direto e indireto em inglês", downloadUrl: "#pdf-reported-speech" },
      { id: "p19", title: "Literature in English - Excerpts", type: "apostila", description: "Trechos de Shakespeare, Dickens e outros", downloadUrl: "#pdf-literature-en" },
      { id: "p20", title: "TOEFL and Cambridge Exam Prep", type: "exercicios", description: "Exercícios de proficiência", downloadUrl: "#pdf-toefl-prep" },
    ],
  },
  {
    id: "educacao-fisica",
    name: "Educação Física",
    slug: "educacao-fisica",
    description: "Esportes, saúde, corpo humano e atividade física",
    icon: "⚽",
    color: "#0284C7",
    bgColor: "#F0F9FF",
    topics: [
      { id: "saude-fisica", title: "Saúde e Qualidade de Vida", slug: "edfisica-saude", explanation: `<h2>Saúde e Qualidade de Vida</h2><p>A Educação Física vai além dos esportes — estuda a relação entre corpo, movimento e bem-estar. A OMS define saúde como "estado de completo bem-estar físico, mental e social, e não apenas a ausência de doença".</p><h3>Componentes da Aptidão Física</h3><p>Resistência cardiorrespiratória: capacidade de sustentar exercícios de longa duração. Força e resistência muscular: capacidade dos músculos de exercer força ou manter contrações repetidas. Flexibilidade: amplitude de movimento das articulações. Composição corporal: relação entre massa magra e massa gorda.</p><h3>Benefícios da Atividade Física Regular</h3><p>Reduz risco de doenças cardiovasculares, diabetes tipo 2 e hipertensão. Melhora saúde mental (libera endorfinas, reduz ansiedade e depressão). Fortalece ossos e músculos. Melhora qualidade do sono. Aumenta longevidade e qualidade de vida.</p><h3>Princípios do Treinamento</h3><p>Sobrecarga progressiva, especificidade, individualidade, continuidade e reversibilidade. A OMS recomenda 150-300 minutos de atividade física moderada por semana para adultos.</p>`, videos: [{ id: "v1", title: "Qualidade de Vida e Saúde - Ed. Física", youtubeId: "NJYUayWNwlA" }, { id: "v2", title: "Saúde, Atividade Física e Qualidade de Vida", youtubeId: "_98t_StCSMo" }, { id: "v3", title: "Atividade Física e Saúde - Fitness", youtubeId: "aHu0hXDJ0XA" }, { id: "v4", title: "Atividade Física e Saúde - Questões", youtubeId: "bQTfWvAnx2o" }, { id: "v5", title: "Esportes BNCC - Educação Física", youtubeId: "8jdHRlwDE0c" }], exercises: [{ id: "e1", question: "Segundo a OMS, quantos minutos de atividade física moderada são recomendados por semana para adultos?", options: { a: "30-60 minutos", b: "60-90 minutos", c: "150-300 minutos", d: "Apenas durante o fim de semana" }, answer: "c", resolution: "A OMS recomenda ao menos 150 minutos de atividade física aeróbica de intensidade moderada por semana (ex.: caminhada rápida) ou 75 minutos de atividade vigorosa (ex.: corrida) para adultos." }, { id: "e2", question: "A resistência cardiorrespiratória é:", options: { a: "A capacidade de levantar peso máximo uma vez", b: "A amplitude de movimento das articulações", c: "A capacidade de sustentar esforço aeróbico por longo período", d: "A força de contrações musculares isoladas" }, answer: "c", resolution: "A resistência cardiorrespiratória (ou capacidade aeróbica) é a capacidade do sistema cardiovascular e respiratório de sustentar exercícios de longa duração, como corrida, natação e ciclismo." }, { id: "e3", question: "O princípio da sobrecarga progressiva no treinamento físico significa:", options: { a: "Treinar sempre na mesma intensidade", b: "Aumentar gradualmente o estresse do exercício para promover adaptação", c: "Exercitar-se apenas nos fins de semana", d: "Focar em apenas um grupo muscular" }, answer: "b", resolution: "O princípio da sobrecarga progressiva diz que para o corpo continuar se adaptando e melhorando, é necessário aumentar gradualmente a intensidade, volume ou frequência do treinamento." }, { id: "e4", question: "A prática regular de atividade física está associada a:", options: { a: "Aumento do risco de doenças cardiovasculares", b: "Redução da qualidade do sono", c: "Melhora da saúde mental e redução de ansiedade", d: "Fraqueza óssea progressiva" }, answer: "c", resolution: "A atividade física regular libera endorfinas e outros neurotransmissores que melhoram o humor e reduzem sintomas de ansiedade e depressão. Também melhora a autoestima e qualidade do sono." }, { id: "e5", question: "O IMC (Índice de Massa Corporal) é calculado por:", options: { a: "Altura / Peso²", b: "Peso (kg) / Altura² (m)", c: "Peso × Altura", d: "Circunferência abdominal / Altura" }, answer: "b", resolution: "IMC = Peso (kg) / Altura² (m). Um IMC entre 18,5 e 24,9 é considerado normal. Abaixo de 18,5 é baixo peso; entre 25-29,9 é sobrepeso; acima de 30 é obesidade. É um indicador simples, mas limitado." }] },
      { id: "esportes", title: "Esportes e Regras", slug: "edfisica-esportes", explanation: `<h2>Esportes Coletivos e Suas Regras</h2><p>Os esportes coletivos são aqueles praticados por equipes e que exigem cooperação, comunicação e estratégia coletiva. São fundamentais para o desenvolvimento de habilidades sociais além das físicas.</p><h3>Futebol</h3><p>11 jogadores por equipe. Partida: 2 tempos de 45 minutos. O goleiro é o único que pode usar as mãos. Regras: impedimento (offside), falta, cartão amarelo (advertência) e cartão vermelho (expulsão). Sistema de pontuação: vitória = 3 pontos, empate = 1, derrota = 0.</p><h3>Basquetebol</h3><p>5 jogadores por equipe. Quadra com cesta de 3,05m de altura. Cesta de 3 pontos (além da linha), 2 pontos (dentro), 1 ponto (lance livre). Regra de 24 segundos para arremessar (ataque). 4 quartos de 10 minutos.</p><h3>Vôlei</h3><p>6 jogadores por equipe. Melhor de 5 sets (25 pontos, 3 no 5º). Regra de 3 toques por lado, não pode tocar duas vezes seguidas. Líbero: jogador especializado em defesa.</p><h3>Handebol</h3><p>7 jogadores. Gol demarcado por área do goleiro. Jogadores têm 3 segundos para arremessar e 3 passos com a bola.</p>`, videos: [{ id: "v1", title: "Esportes Coletivos e Individuais", youtubeId: "7HhaI4knjTg" }, { id: "v2", title: "Técnica Esportiva nos Esportes Coletivos", youtubeId: "mssbf9LBJso" }, { id: "v3", title: "Esportes Coletivos para Concursos", youtubeId: "kC6YLJhGh_4" }, { id: "v4", title: "Metodologia de Ensino dos Esportes", youtubeId: "_XHUSjmQces" }, { id: "v5", title: "BNCC e Esportes na Escola", youtubeId: "8jdHRlwDE0c" }], exercises: [{ id: "e1", question: "No futebol, quantos jogadores cada equipe tem em campo?", options: { a: "9", b: "10", c: "11", d: "12" }, answer: "c", resolution: "O futebol é jogado com 11 jogadores por equipe em campo, incluindo o goleiro. Com substituições e expulsões, o número pode reduzir. Times entram com 11 mas não podem sair de campo se ficarem com menos de 7." }, { id: "e2", question: "No basquetebol, uma cesta arremessada além da linha de 3 pontos vale:", options: { a: "1 ponto", b: "2 pontos", c: "3 pontos", d: "4 pontos" }, answer: "c", resolution: "Arremessos do campo com os pés além da linha de 3 pontos valem 3 pontos. Arremessos de dentro da área valem 2 pontos. Lances livres (após falta) valem 1 ponto cada." }, { id: "e3", question: "No voleibol, cada equipe pode tocar a bola no máximo:", options: { a: "2 vezes consecutivas", b: "3 vezes antes de passá-la para o lado oposto", c: "4 vezes por ponto", d: "Quantas quiser" }, answer: "b", resolution: "No vôlei, cada equipe tem direito a no máximo 3 toques antes de enviar a bola para o campo adversário. Nenhum jogador pode tocar a bola duas vezes consecutivas (exceto no bloqueio)." }, { id: "e4", question: "No handebol, os jogadores têm quantos passos permitidos com a bola sem quicar?", options: { a: "1 passo", b: "2 passos", c: "3 passos", d: "4 passos" }, answer: "c", resolution: "No handebol, o jogador pode dar 3 passos com a bola nas mãos sem quicá-la. Após quicar, pode pegar a bola e dar mais 3 passos. O tempo máximo com a bola sem agir é de 3 segundos." }, { id: "e5", question: "O cartão amarelo no futebol significa:", options: { a: "Expulsão imediata do jogador", b: "Advertência ao jogador", c: "Penalidade máxima automática", d: "Suspensão para o próximo jogo" }, answer: "b", resolution: "O cartão amarelo é uma advertência. Se um jogador recebe dois cartões amarelos no mesmo jogo, recebe automaticamente um cartão vermelho e é expulso. O cartão vermelho direto significa expulsão imediata." }] },
      { id: "historia-esportes", title: "História dos Esportes e Olimpíadas", slug: "edfisica-historia", explanation: `<h2>História dos Esportes e Olimpíadas</h2><p>Os esportes têm história milenar. Os Jogos Olímpicos da Antiguidade ocorriam a cada 4 anos em Olímpia, na Grécia, desde 776 a.C. até 393 d.C., quando foram proibidos pelo imperador romano Teodósio I.</p><h3>Jogos Olímpicos Modernos</h3><p>Pierre de Coubertin fundou o Comitê Olímpico Internacional (COI) em 1894. Os primeiros Jogos Olímpicos Modernos foram realizados em Atenas em 1896. O símbolo olímpico (cinco anéis) representa os cinco continentes. O lema olímpico é "Citius, Altius, Fortius" (Mais Rápido, Mais Alto, Mais Forte).</p><h3>Brasil nas Olimpíadas</h3><p>O Brasil participa dos Jogos Olímpicos desde 1920. Sediou os Jogos em 2016 (Rio de Janeiro). Esportes de destaque: vôlei, judô, futebol, atletismo, natação. Atletas históricos: Ayrton Senna (F1), Pelé (futebol), Daiane dos Santos (ginástica).</p>`, videos: [{ id: "v1", title: "História das Olimpíadas - Origem", youtubeId: "QweIkJdyyYU" }, { id: "v2", title: "Brasil nas Olimpíadas - Conquistas", youtubeId: "AByjq-_1_jQ" }, { id: "v3", title: "Jogos Olímpicos da Antiguidade - Grécia", youtubeId: "nphvsm2D6w4" }, { id: "v4", title: "Paralimpíadas e Esportes Adaptados", youtubeId: "AKULRvBCuUk" }, { id: "v5", title: "História dos Esportes - Educação Física", youtubeId: "-1Gxv7a4Qss" }], exercises: [{ id: "e1", question: "Os primeiros Jogos Olímpicos Modernos foram realizados em:", options: { a: "1890 em Paris", b: "1896 em Atenas", c: "1900 em Londres", d: "1920 no Brasil" }, answer: "b", resolution: "Os primeiros Jogos Olímpicos Modernos foram realizados em Atenas, Grécia, em 1896, por iniciativa de Pierre de Coubertin. Participaram 14 países e 241 atletas, todos homens." }, { id: "e2", question: "O lema olímpico 'Citius, Altius, Fortius' significa:", options: { a: "Paz, Amor, Solidariedade", b: "Mais Rápido, Mais Alto, Mais Forte", c: "Mente Sã em Corpo São", d: "Todos iguais, todos unidos" }, answer: "b", resolution: "'Citius, Altius, Fortius' é a frase em latim que significa 'Mais Rápido, Mais Alto, Mais Forte'. É o lema olímpico oficial desde 1894, proposto pelo padre Henri Didon e adotado por Pierre de Coubertin." }, { id: "e3", question: "Os cinco anéis do símbolo olímpico representam:", options: { a: "Os cinco elementos naturais", b: "Os cinco continentes", c: "Os cinco esportes mais antigos", d: "Os cinco países fundadores" }, answer: "b", resolution: "Os cinco anéis olímpicos (azul, amarelo, preto, verde e vermelho) representam os cinco continentes habitados: América, Europa, Ásia, África e Oceania. As cores foram escolhidas pois pelo menos uma aparece nas bandeiras de todos os países." }, { id: "e4", question: "O Brasil sediou os Jogos Olímpicos em:", options: { a: "2000 em São Paulo", b: "2012 no Rio de Janeiro", c: "2016 no Rio de Janeiro", d: "2020 em Brasília" }, answer: "c", resolution: "O Brasil sediou os Jogos Olímpicos de Verão em 2016, no Rio de Janeiro. Foi a primeira vez que a América do Sul recebeu os Jogos. Envolveu competições em várias cidades (Rio, São Paulo, Belo Horizonte, Salvador, Manaus e Brasília)." }, { id: "e5", question: "Os Jogos Olímpicos da Antiguidade eram realizados em:", options: { a: "Atenas, a cada 2 anos", b: "Esparta, anualmente", c: "Olímpia, a cada 4 anos", d: "Corinto, a cada 5 anos" }, answer: "c", resolution: "Os Jogos Olímpicos da Antiguidade eram realizados em Olímpia, no Peloponeso grego, a cada 4 anos, em honra ao deus Zeus. O período entre dois jogos era chamado de Olimpíada, usado como unidade de tempo pelos gregos." }] },
      { id: "corpo-movimento", title: "Corpo Humano e Movimento", slug: "edfisica-corpo-movimento", explanation: `<h2>Corpo Humano e Movimento</h2><p>A Educação Física estuda o movimento humano em suas diversas dimensões: biomecânica, fisiologia do exercício e anatomia funcional. Compreender o corpo ajuda a praticar exercícios com maior eficiência e segurança.</p><h3>Sistema Musculoesquelético</h3><p>O corpo humano tem 206 ossos e mais de 600 músculos. Os ossos servem de suporte, proteção e alavanca para o movimento. Os músculos se contraem para produzir movimento. Tendões conectam músculo ao osso; ligamentos conectam osso a osso.</p><h3>Tipos de Contração Muscular</h3><p>Isotônica concêntrica: o músculo encurta (levantar peso). Isotônica excêntrica: o músculo alonga enquanto resiste (descer peso). Isométrica: tensão sem mudança de comprimento (segurar uma posição).</p><h3>Fisiologia do Exercício</h3><p>Durante exercícios intensos, a frequência cardíaca aumenta para entregar mais O₂ aos músculos. A zona de treinamento alvo (60-80% da FC máxima) é ideal para atividade aeróbica. FC máxima estimada = 220 - idade.</p>`, videos: [{ id: "v1", title: "Sistema Musculoesquelético e Movimento", youtubeId: "NJYUayWNwlA" }, { id: "v2", title: "Tipos de Contração Muscular", youtubeId: "_98t_StCSMo" }, { id: "v3", title: "Fisiologia do Exercício - Como o Corpo Responde", youtubeId: "aHu0hXDJ0XA" }, { id: "v4", title: "Prevenção de Lesões no Esporte", youtubeId: "bQTfWvAnx2o" }, { id: "v5", title: "Aquecimento e Alongamento Corretos", youtubeId: "8jdHRlwDE0c" }], exercises: [{ id: "e1", question: "Tendões são estruturas que conectam:", options: { a: "Osso a osso", b: "Músculo a osso", c: "Músculo a músculo", d: "Nervo a músculo" }, answer: "b", resolution: "Tendões são estruturas fibrosas que conectam o músculo ao osso, transmitindo a força gerada pela contração muscular para produzir movimento. Ligamentos conectam osso a osso, estabilizando as articulações." }, { id: "e2", question: "A fórmula para estimar a frequência cardíaca máxima é:", options: { a: "FC máx = 180 + idade", b: "FC máx = 220 - idade", c: "FC máx = 200 - peso", d: "FC máx = 150 × 1,5" }, answer: "b", resolution: "A estimativa da FC máxima = 220 - idade é uma fórmula simples e amplamente usada. Para uma pessoa de 20 anos: FC máx = 220 - 20 = 200 bpm. Usada para calcular zonas de treinamento." }, { id: "e3", question: "Na contração muscular isotônica concêntrica:", options: { a: "O músculo alonga resistindo à carga", b: "O músculo mantém comprimento constante", c: "O músculo encurta, vencendo a resistência", d: "Não há produção de força" }, answer: "c", resolution: "Contração concêntrica: o músculo se encurta enquanto produz força contra uma resistência. Exemplo: a fase de subida na rosca bíceps. Excêntrica: o músculo alonga resistindo. Isométrica: sem mudança de comprimento." }, { id: "e4", question: "Quantos ossos tem o esqueleto adulto humano?", options: { a: "106", b: "206", c: "306", d: "406" }, answer: "b", resolution: "O esqueleto adulto humano tem 206 ossos. Ao nascer, temos cerca de 270-300 ossos, mas muitos se fundem durante o crescimento. O menor osso é o estribo (no ouvido) e o maior é o fêmur (coxa)." }, { id: "e5", question: "O aquecimento antes da atividade física é importante porque:", options: { a: "Não tem importância científica comprovada", b: "Aumenta a temperatura muscular, melhora a eficiência e reduz risco de lesões", c: "Apenas aumenta o cansaço antes do exercício", d: "Deve ser feito apenas por atletas profissionais" }, answer: "b", resolution: "O aquecimento (5-10 min de atividade leve) aumenta a temperatura dos músculos e articulações, melhora a oxigenação, aumenta a amplitude de movimento e prepara o sistema cardiovascular, reduzindo significativamente o risco de lesões." }] },
      { id: "atividade-fisica-saude", title: "Exercícios e Bem-Estar", slug: "edfisica-bem-estar", explanation: `<h2>Exercícios e Bem-Estar</h2><p>A relação entre exercício físico e bem-estar mental é comprovada cientificamente. A atividade física não é apenas sobre performance esportiva — é uma necessidade biológica humana com impactos profundos na qualidade de vida.</p><h3>Exercícios e Saúde Mental</h3><p>A prática regular de exercícios libera endorfinas, serotonina e dopamina — neurotransmissores associados ao bem-estar. Estudos mostram que 30 minutos de exercício moderado são tão eficazes quanto medicação para tratar depressão leve a moderada.</p><h3>Exercícios para Diferentes Objetivos</h3><p>Emagrecimento: déficit calórico + exercícios aeróbicos + musculação. Ganho de massa: musculação com sobrecarga progressiva + dieta hipercalórica e proteica. Saúde cardiovascular: exercícios aeróbicos (corrida, natação, ciclismo). Flexibilidade: alongamento, yoga, pilates.</p><h3>FITT (Princípios do Exercício)</h3><p>Frequência: quantas vezes por semana. Intensidade: quão forte (leve, moderado, intenso). Tempo: duração de cada sessão. Tipo: que tipo de exercício. Ajustar esses parâmetros é essencial para atingir objetivos.</p>`, videos: [{ id: "v1", title: "Exercícios e Saúde Mental - Ciência", youtubeId: "NJYUayWNwlA" }, { id: "v2", title: "Como Montar seu Treino - Princípios FITT", youtubeId: "_98t_StCSMo" }, { id: "v3", title: "Atividade Física - Qualidade de Vida", youtubeId: "aHu0hXDJ0XA" }, { id: "v4", title: "Nutrição e Exercício Físico", youtubeId: "bQTfWvAnx2o" }, { id: "v5", title: "Sedentarismo - Riscos e Prevenção", youtubeId: "8jdHRlwDE0c" }], exercises: [{ id: "e1", question: "Endorfinas liberadas durante o exercício são responsáveis por:", options: { a: "Aumentar a pressão sanguínea", b: "Produzir sensação de prazer e bem-estar ('barato do corredor')", c: "Causar dor muscular", d: "Reduzir a frequência cardíaca" }, answer: "b", resolution: "Endorfinas são neurotransmissores liberados pelo corpo durante exercícios intensos, produzindo sensação de euforia e bem-estar. Esse fenômeno é chamado de 'runner's high' (barato do corredor) e explica parte do prazer associado à atividade física." }, { id: "e2", question: "Para melhorar a flexibilidade, o tipo de exercício mais indicado é:", options: { a: "Musculação com carga alta", b: "Corrida de longa distância", c: "Alongamento, yoga ou pilates", d: "Natação em alta intensidade" }, answer: "c", resolution: "Flexibilidade é a amplitude de movimento das articulações. É desenvolvida principalmente por exercícios de alongamento estático, yoga e pilates, que visam aumentar a elasticidade dos músculos, tendões e ligamentos." }, { id: "e3", question: "O princípio FITT em educação física refere-se a:", options: { a: "Força, Intensidade, Tempo, Técnica", b: "Frequência, Intensidade, Tempo, Tipo", c: "Função, Intensidade, Treino, Teste", d: "Flexibilidade, Impacto, Treino, Técnica" }, answer: "b", resolution: "O princípio FITT descreve as variáveis do treinamento: Frequência (quantas vezes/semana), Intensidade (quão intenso), Tempo (duração) e Tipo (modalidade). Ajustar essas variáveis permite personalizar o treino para cada objetivo." }, { id: "e4", question: "Para objetivos de saúde cardiovascular, os exercícios mais indicados são:", options: { a: "Musculação com pesos máximos", b: "Atividades aeróbicas como corrida, ciclismo e natação", c: "Alongamento passivo", d: "Exercícios de respiração apenas" }, answer: "b", resolution: "Exercícios aeróbicos (que usam oxigênio como fonte principal de energia) como corrida, caminhada rápida, natação e ciclismo são os mais eficazes para saúde cardiovascular, melhorando a eficiência do coração e dos pulmões." }, { id: "e5", question: "O sedentarismo é considerado um problema de saúde pública porque:", options: { a: "Melhora a qualidade do sono", b: "Aumenta o risco de doenças crônicas não transmissíveis", c: "Fortalece o sistema imunológico", d: "Reduz o estresse" }, answer: "b", resolution: "O sedentarismo aumenta significativamente o risco de obesidade, diabetes tipo 2, doenças cardiovasculares, alguns tipos de câncer e problemas de saúde mental. A OMS classifica o sedentarismo como o quarto maior fator de risco de mortalidade global." }] },
    ],
    pdfs: [
      { id: "p1", title: "Educação Física - Apostila Completa", type: "apostila", description: "Saúde, esportes e corpo humano", downloadUrl: "#pdf-edfis-apostila" },
      { id: "p2", title: "Regras dos Esportes Coletivos", type: "resumo", description: "Futebol, basquete, vôlei, handebol", downloadUrl: "#pdf-regras-esportes" },
      { id: "p3", title: "Fisiologia do Exercício", type: "apostila", description: "Respostas do corpo ao esforço físico", downloadUrl: "#pdf-fisiologia-ex" },
      { id: "p4", title: "História das Olimpíadas - Resumo", type: "resumo", description: "Da Grécia Antiga ao presente", downloadUrl: "#pdf-olimpiadas" },
      { id: "p5", title: "Treinamento Físico - Princípios", type: "apostila", description: "Como montar um programa de treino", downloadUrl: "#pdf-treinamento" },
      { id: "p6", title: "Questões de Ed. Física ENEM", type: "exercicios", description: "30 questões com gabarito", downloadUrl: "#pdf-edfis-enem" },
      { id: "p7", title: "Nutrição Esportiva", type: "resumo", description: "Alimentação para atletas e praticantes", downloadUrl: "#pdf-nutricao-esportiva" },
      { id: "p8", title: "Ginástica Artística e Rítmica", type: "apostila", description: "Regras e elementos", downloadUrl: "#pdf-ginastica" },
      { id: "p9", title: "Prevenção e Tratamento de Lesões", type: "resumo", description: "Entorses, distensões e lesões comuns", downloadUrl: "#pdf-lesoes" },
      { id: "p10", title: "Dança e Expressão Corporal", type: "apostila", description: "História e estilos de dança", downloadUrl: "#pdf-danca" },
      { id: "p11", title: "Natação - Técnicas e Estilos", type: "resumo", description: "Crawl, costas, peito e borboleta", downloadUrl: "#pdf-natacao" },
      { id: "p12", title: "Atletismo - Provas e Recordes", type: "apostila", description: "Corridas, saltos, lançamentos", downloadUrl: "#pdf-atletismo" },
      { id: "p13", title: "Artes Marciais e Lutas", type: "resumo", description: "Judô, karatê, jiu-jitsu e outros", downloadUrl: "#pdf-artes-marciais" },
      { id: "p14", title: "Saúde Mental e Exercício", type: "apostila", description: "Relação entre atividade física e bem-estar", downloadUrl: "#pdf-saude-mental-ex" },
      { id: "p15", title: "Primeiros Socorros no Esporte", type: "resumo", description: "Como agir em emergências", downloadUrl: "#pdf-primeiros-socorros" },
      { id: "p16", title: "Esportes Radicais e de Aventura", type: "apostila", description: "Surf, skate, escalada e outros", downloadUrl: "#pdf-radicais" },
      { id: "p17", title: "Paralimpíadas e Esportes Adaptados", type: "resumo", description: "Esporte inclusivo e acessibilidade", downloadUrl: "#pdf-paralimpiadas" },
      { id: "p18", title: "Composição Corporal e IMC", type: "resumo", description: "Como avaliar a saúde pelo peso", downloadUrl: "#pdf-composicao-corp" },
      { id: "p19", title: "Tênis e Esportes com Raquete", type: "resumo", description: "Regras de tênis, badminton e squash", downloadUrl: "#pdf-tenis" },
      { id: "p20", title: "Exercícios em Casa - Sem Equipamento", type: "apostila", description: "Treinos completos sem academia", downloadUrl: "#pdf-exercicios-casa" },
    ],
  },
  {
    id: "artes",
    name: "Artes",
    slug: "artes",
    description: "História da arte, música, teatro, dança e artes visuais",
    icon: "🎨",
    color: "#BE185D",
    bgColor: "#FDF2F8",
    topics: [
      { id: "historia-arte", title: "História da Arte", slug: "artes-historia", explanation: `<h2>História da Arte</h2><p>A história da arte estuda a produção artística da humanidade ao longo do tempo, revelando como sociedades expressaram sua visão de mundo, valores e espiritualidade por meio de pinturas, esculturas, arquitetura e outras formas.</p><h3>Arte Pré-histórica</h3><p>As pinturas rupestres, como as de Lascaux (França) e da Serra da Capivara (Brasil, 36.000 anos), são as expressões artísticas mais antigas conhecidas. Representavam animais, caçadas e rituais, provavelmente com funções mágicas ou religiosas.</p><h3>Arte Clássica - Grécia e Roma</h3><p>Os gregos buscavam a perfeição e a harmonia nas proporções humanas. Esculturas como Vênus de Milo e Discóbolo definiram o ideal de beleza clássico. Os romanos desenvolveram a arquitetura com o arco e o concreto (Coliseu, Panteão).</p><h3>Renascimento (Séculos XIV-XVII)</h3><p>Retorno aos valores clássicos, humanismo, perspectiva, realismo e anatomia. Grandes artistas: Leonardo da Vinci (Mona Lisa, A Última Ceia), Michelangelo (David, Teto da Capela Sistina), Rafael.</p><h3>Arte Moderna e Contemporânea</h3><p>Impressionismo (Monet, Renoir), Expressionismo (Munch - O Grito), Cubismo (Picasso), Surrealismo (Dalí), Pop Art (Andy Warhol). Arte Contemporânea: sem definição única, engloba instalações, performances e arte digital.</p>`, videos: [{ id: "v1", title: "História da Arte - Renascimento", youtubeId: "91-d2luNhtw" }, { id: "v2", title: "Renascimento - História da Arte 1", youtubeId: "dxykzS8C378" }, { id: "v3", title: "Períodos da História da Arte", youtubeId: "v07zoRMitS8" }, { id: "v4", title: "História da Arte - O Renascimento", youtubeId: "epKQBoQAfF0" }, { id: "v5", title: "Principais Artistas do Renascimento", youtubeId: "243eglR3QUE" }], exercises: [{ id: "e1", question: "A pintura 'O Grito' (1893) é obra de qual artista?", options: { a: "Pablo Picasso", b: "Salvador Dalí", c: "Edvard Munch", d: "Claude Monet" }, answer: "c", resolution: "'O Grito' (ou 'Skrik') é a obra mais famosa do norueguês Edvard Munch (1893), representando o expressionismo. Retrata uma figura angustiada diante de um céu turbulento, sendo ícone da ansiedade e do isolamento moderno." }, { id: "e2", question: "O Renascimento foi um movimento que valorizou:", options: { a: "O teocentrismo e a vida após a morte", b: "O humanismo, a ciência e o retorno à cultura clássica greco-romana", c: "A arte abstrata e não-representativa", d: "A denúncia social e a arte popular" }, answer: "b", resolution: "O Renascimento (séculos XIV-XVII) foi marcado pelo humanismo (o ser humano no centro), pelo interesse científico, pela perspectiva matemática na pintura e pelo retorno aos ideais clássicos gregos e romanos." }, { id: "e3", question: "O Cubismo foi desenvolvido principalmente por:", options: { a: "Monet e Renoir", b: "Dalí e Magritte", c: "Picasso e Braque", d: "Munch e Klimt" }, answer: "c", resolution: "O Cubismo foi desenvolvido por Pablo Picasso e Georges Braque por volta de 1907-1910. Caracteriza-se pela fragmentação das formas, representação simultânea de múltiplos pontos de vista e geometrização das figuras." }, { id: "e4", question: "A Serra da Capivara, no Piauí, é conhecida por:", options: { a: "Ser a maior floresta do Brasil", b: "Ter as pinturas rupestres mais antigas das Américas", c: "Ser o centro do Modernismo brasileiro", d: "Ser o local da Semana de Arte Moderna" }, answer: "b", resolution: "O Parque Nacional Serra da Capivara, no Piauí, abriga as pinturas rupestres mais antigas das Américas, com estimativas de até 36.000 anos de idade. São Patrimônio Mundial da Humanidade pela UNESCO." }, { id: "e5", question: "O Impressionismo caracterizava-se por:", options: { a: "Representar formas geométricas abstratas", b: "Capturar a luz e a atmosfera em pinturas ao ar livre com pinceladas soltas", c: "Representar pesadelos e o inconsciente", d: "Usar objetos do cotidiano como arte" }, answer: "b", resolution: "O Impressionismo (1860-1890) buscava capturar a impressão momentânea da luz, cor e atmosfera. Pintado frequentemente ao ar livre (plein air), com pinceladas soltas e cores vibrantes. Principais artistas: Monet, Renoir, Degas." }] },
      { id: "musica", title: "Música - Elementos e História", slug: "artes-musica", explanation: `<h2>Música - Elementos e História</h2><p>A música é uma das formas de arte mais universais, presente em todas as culturas humanas. Envolve a organização de sons e silêncios no tempo para criar expressão estética, comunicação e emoção.</p><h3>Elementos da Música</h3><p>Ritmo: organização dos sons no tempo (tempo, compasso, acentuação). Melodia: sequência linear de notas musicais com alturas diferentes. Harmonia: sons simultâneos que se complementam (acordes). Timbre: qualidade sonora que distingue diferentes instrumentos ou vozes. Dinâmica: variação de intensidade (piano, forte, crescendo).</p><h3>História da Música Ocidental</h3><p>Música Medieval: cantochão gregoriano. Barroco (1600-1750): Bach, Vivaldi, Handel. Classicismo (1750-1820): Mozart, Haydn. Romantismo (1820-1900): Beethoven, Chopin, Wagner. Século XX: jazz, blues, rock and roll, música eletrônica.</p><h3>Música Brasileira</h3><p>O Brasil tem uma riquíssima tradição musical. Choro (final do século XIX), Samba (anos 1920), Bossa Nova (anos 1950-60 com Tom Jobim e João Gilberto), MPB, Tropicália (Caetano Veloso, Gilberto Gil), Baião (Luiz Gonzaga), Forró, Funk carioca.</p>`, videos: [{ id: "v1", title: "Fontes Sonoras - Ritmo, Melodia e Harmonia", youtubeId: "CYrlRfnWOyY" }, { id: "v2", title: "Os 3 Elementos da Música", youtubeId: "NL7e4fw-Xqs" }, { id: "v3", title: "Melodia, Harmonia e Ritmo no Violão", youtubeId: "ihE1tOYlBn0" }, { id: "v4", title: "Arte - Elementos da Música", youtubeId: "7hE0u28oCnM" }, { id: "v5", title: "Música - Ritmo, Melodia e Harmonia", youtubeId: "gDE7Jhr77f4" }], exercises: [{ id: "e1", question: "A Bossa Nova brasileira surgiu na:", options: { a: "Década de 1930", b: "Década de 1940", c: "Década de 1950-60", d: "Década de 1970" }, answer: "c", resolution: "A Bossa Nova surgiu no final da década de 1950 e início dos anos 1960, principalmente no Rio de Janeiro. Tom Jobim (Antônio Carlos Jobim), João Gilberto e Vinicius de Moraes são seus criadores. 'Garota de Ipanema' é a canção mais executada mundialmente." }, { id: "e2", question: "O timbre é o elemento musical que:", options: { a: "Controla a velocidade da música", b: "Define a altura dos sons", c: "Distingue diferentes instrumentos ou vozes com a mesma nota", d: "Organiza os sons no tempo" }, answer: "c", resolution: "Timbre é a qualidade sonora característica de um instrumento ou voz. Permite distinguir um violino de uma flauta mesmo tocando a mesma nota. É determinado pelas frequências parciais (harmônicos) do som." }, { id: "e3", question: "O gênero musical brasileiro surgido nos anos 1920, urbano e de raízes africanas, é o:", options: { a: "Baião", b: "Choro", c: "Samba", d: "Forró" }, answer: "c", resolution: "O Samba surgiu nos anos 1920 no Rio de Janeiro, com raízes na cultura africana trazida pelos escravizados. Tornou-se símbolo da identidade brasileira. Artistas como Cartola, Noel Rosa e Ismael Silva foram pioneiros." }, { id: "e4", question: "Johann Sebastian Bach pertence ao período musical:", options: { a: "Renascimento", b: "Barroco", c: "Classicismo", d: "Romantismo" }, answer: "b", resolution: "Johann Sebastian Bach (1685-1750) é o maior representante do período Barroco (1600-1750), caracterizado pela polifonia elaborada, ornamentação e expressividade. Obras como 'As Invenções' e 'O Cravo Bem-Temperado' são referências da música ocidental." }, { id: "e5", question: "A Tropicália foi um movimento musical brasileiro da:", options: { a: "Década de 1940", b: "Década de 1960", c: "Década de 1980", d: "Década de 1990" }, answer: "b", resolution: "A Tropicália surgiu no final da década de 1960, liderada por Caetano Veloso, Gilberto Gil, Tom Zé e Os Mutantes. Misturava rock, música baiana, bossa nova e vanguarda, em diálogo com o Tropicalismo nas artes visuais de Hélio Oiticica." }] },
      { id: "teatro-danca", title: "Teatro e Dança", slug: "artes-teatro-danca", explanation: `<h2>Teatro e Dança</h2><p>Teatro e dança são artes cênicas que combinam o corpo, o espaço e o tempo para criar expressão artística ao vivo. São manifestações presentes em todas as culturas desde a antiguidade.</p><h3>Teatro</h3><p>O teatro ocidental tem origem na Grécia Antiga, com os festivais em honra a Dionísio. Os gregos criaram a tragédia (Sófocles, Ésquilo, Eurípedes) e a comédia. O teatro romano adaptou o grego. No Renascimento, Shakespeare redefiniu o drama (Hamlet, Romeu e Julieta). No século XX: Brecht (teatro épico), Stanislavski (método de interpretação naturalista).</p><h3>Teatro Brasileiro</h3><p>Anchieta (teatro catequético colonial). Romantismo: José de Alencar. Modernismo: Nelson Rodrigues (Vestido de Noiva, Anjo Negro). Teatro Oficina (José Celso Martinez Corrêa) e Arena (Gianfrancesco Guarnieri). Teatro popular e circo-teatro.</p><h3>Dança</h3><p>Desde os rituais pré-históricos, a dança é forma de comunicação e celebração. Principais estilos: Ballet clássico (russso, francês), Dança Contemporânea, Jazz, Dança de Salão (tango, valsa, salsa), Danças Folclóricas. No Brasil: Frevo, Baião, Forró, Carimbó, Jongo.</p>`, videos: [{ id: "v1", title: "O que é Teatro - Aula", youtubeId: "I-wB6qEpGBQ" }, { id: "v2", title: "Arte - Ensino Médio 1° Ano", youtubeId: "oFQimHmAQmA" }, { id: "v3", title: "Teatro no Novo Ensino Médio", youtubeId: "cP6kXwiQUsA" }, { id: "v4", title: "Arte - Ensino Médio EDUCA PE", youtubeId: "lgRJ_hGls18" }, { id: "v5", title: "Texto Dramático - Língua e Arte", youtubeId: "Nh3WGqo7ppo" }], exercises: [{ id: "e1", question: "O teatro ocidental tem sua origem na:", options: { a: "Roma Antiga", b: "Grécia Antiga com festivais em honra a Dionísio", c: "Renascença italiana", d: "China Medieval" }, answer: "b", resolution: "O teatro ocidental surgiu na Grécia Antiga, nos festivais em honra ao deus Dionísio. Os gregos criaram os gêneros da tragédia e comédia, construíram teatros em forma de semicírculo e desenvolveram as primeiras convenções dramatúrgicas." }, { id: "e2", question: "Romeu e Julieta é obra de:", options: { a: "Molière", b: "Brecht", c: "Shakespeare", d: "Sófocles" }, answer: "c", resolution: "Romeu e Julieta é uma das obras mais famosas de William Shakespeare (1564-1616), escrita por volta de 1595. É uma tragédia sobre amor proibido entre dois jovens de famílias rivais (Montéquio e Capuleto) em Verona, Itália." }, { id: "e3", question: "O ballet clássico desenvolveu-se principalmente em:", options: { a: "Brasil e Argentina", b: "França e Rússia", c: "Grécia e Itália", d: "Estados Unidos e Japão" }, answer: "b", resolution: "O ballet clássico se desenvolveu principalmente na França (corte de Luís XIV, século XVII) e na Rússia (Imperial Ballet, séculos XIX-XX). Obras como 'O Lago dos Cisnes' e 'A Bela Adormecida' de Tchaikovsky são marcos do ballet russo." }, { id: "e4", question: "Nelson Rodrigues foi um importante dramaturgo:", options: { a: "Americano do século XX", b: "Brasileiro que escreveu Vestido de Noiva e outros dramas psicológicos", c: "Português do período Modernista", d: "Russo do teatro épico" }, answer: "b", resolution: "Nelson Rodrigues (1912-1980) foi um dramaturgo e cronista brasileiro. 'Vestido de Noiva' (1943) é considerado marco do teatro moderno no Brasil. Suas obras exploram a psicologia humana, sexualidade e a moral da classe média carioca." }, { id: "e5", question: "O Frevo é uma dança e ritmo musical típico de qual estado brasileiro?", options: { a: "Bahia", b: "Rio de Janeiro", c: "Pernambuco", d: "Amazonas" }, answer: "c", resolution: "O Frevo é uma manifestação cultural típica de Pernambuco, especialmente do Carnaval de Recife e Olinda. É caracterizado pelo ritmo acelerado, movimentos acrobáticos e uso de sombrinha colorida. É Patrimônio Cultural Imaterial da Humanidade pela UNESCO." }] },
      { id: "artes-visuais", title: "Artes Visuais e Elementos", slug: "artes-visuais-elementos", explanation: `<h2>Artes Visuais - Elementos e Técnicas</h2><p>As artes visuais compreendem todas as manifestações artísticas percebidas principalmente pela visão: pintura, desenho, escultura, fotografia, design gráfico e arte digital.</p><h3>Elementos da Linguagem Visual</h3><p>Ponto: menor elemento visual. Linha: conexão de pontos. Forma: área definida por linhas ou cores. Cor: resultado da absorção/reflexão de luz. Textura: qualidade superficial. Volume: tridimensionalidade (real ou sugerida). Espaço: relação entre figuras e fundo.</p><h3>Teoria das Cores</h3><p>Cores primárias (luz): vermelho, verde e azul (RGB). Cores primárias (pigmento): amarelo, azul e vermelho. Cores secundárias: mistura de duas primárias. Cores complementares: opostas no círculo cromático. Temperatura das cores: quentes (vermelho, laranja, amarelo) e frias (azul, verde, violeta).</p><h3>Técnicas de Pintura</h3><p>Óleo: pigmentos com óleos. Aquarela: pigmentos com água (transparente). Acrílico: secagem rápida, versátil. Têmpera: base de ovo (antiga). Guache: opaca e fosca. Afrescos: pigmento na parede úmida.</p>`, videos: [{ id: "v1", title: "Fundamentos da Linguagem Visual", youtubeId: "XwzJyFxtss4" }, { id: "v2", title: "Elementos da Linguagem Visual", youtubeId: "TOmFYI6skXo" }, { id: "v3", title: "Ponto, Linha, Textura e Forma", youtubeId: "PGlJYF17H_k" }, { id: "v4", title: "Artes Visuais - Elementos Básicos", youtubeId: "_nhOcCy0oeE" }, { id: "v5", title: "Elementos que Compõem uma Obra Visual", youtubeId: "UjjASRmC8o4" }], exercises: [{ id: "e1", question: "As cores primárias em pigmentos são:", options: { a: "Verde, azul e amarelo", b: "Amarelo, azul (ciano) e vermelho (magenta)", c: "Verde, vermelho e azul", d: "Branco, preto e cinza" }, answer: "b", resolution: "As cores primárias em pigmentos (tintas) são amarelo, azul (ciano) e vermelho (magenta). Ao misturar duas cores primárias, obtemos as secundárias: amarelo + azul = verde; amarelo + vermelho = laranja; azul + vermelho = violeta." }, { id: "e2", question: "Cores complementares são:", options: { a: "Cores semelhantes no círculo cromático", b: "As três cores primárias juntas", c: "Cores opostas no círculo cromático, que criam forte contraste", d: "Cores da mesma família (tons de azul)" }, answer: "c", resolution: "Cores complementares são aquelas que estão opostas no círculo cromático: vermelho e verde, azul e laranja, amarelo e violeta. Quando colocadas lado a lado, criam máximo contraste e vibração visual." }, { id: "e3", question: "A técnica de pintura a óleo caracteriza-se por:", options: { a: "Secagem muito rápida", b: "Usar água como diluente", c: "Pigmentos misturados com óleos, permitindo texturas e transparências", d: "Ser aplicada em paredes úmidas" }, answer: "c", resolution: "A pintura a óleo usa pigmentos misturados a óleos (linhaça, papoula, cártamo). Tem secagem lenta, permitindo retrabalho, e pode criar texturas impastadas ou glazes transparentes. Usada por Rembrandt, Vermeer e Van Gogh." }, { id: "e4", question: "O 'espaço negativo' em artes visuais refere-se a:", options: { a: "Cores escuras na composição", b: "A área ao redor e entre os objetos da composição", c: "A sombra nos objetos", d: "A perspectiva na pintura" }, answer: "b", resolution: "Espaço negativo é a área ao redor, entre e além dos objetos principais (figura positiva) numa composição. Compreender o espaço negativo é fundamental para composição, fotografia e design." }, { id: "e5", question: "O afresco é uma técnica onde se pinta:", options: { a: "Sobre tela com óleo", b: "Com aquarela em papel", c: "Pigmentos diretamente na parede úmida (argamassa fresca)", d: "Em vitrais com chumbo" }, answer: "c", resolution: "O afresco é uma técnica milenar onde os pigmentos são aplicados diretamente sobre a argamassa úmida da parede. Ao secar, o pigmento se integra à parede, tornando a pintura muito durável. Michelangelo usou afresco no teto da Capela Sistina." }] },
      { id: "patrimonio-cultural", title: "Patrimônio Cultural e Folclore", slug: "artes-patrimonio", explanation: `<h2>Patrimônio Cultural e Folclore Brasileiro</h2><p>O patrimônio cultural de um povo é o conjunto de bens materiais e imateriais que representa sua história, identidade e modo de ser. O folclore é a expressão da cultura popular, transmitida de geração em geração.</p><h3>Patrimônio Cultural Brasileiro</h3><p>O IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional) protege o patrimônio cultural brasileiro. Patrimônios materiais: Centro Histórico de Ouro Preto, Brasília, Pelourinho. Patrimônios imateriais: Capoeira, Frevo, Roda de Samba, Círio de Nazaré.</p><h3>Folclore Brasileiro</h3><p>O Dia do Folclore é 22 de agosto. Personagens do folclore: Saci-Pererê, Cuca, Curupira, Boto, Mula sem Cabeça, Mapinguari. Lendas: Lenda do Guaraná, Iara (sereia amazônica). Festas folclóricas: Festa Junina, Bumba meu boi, Folia de Reis.</p>`, videos: [{ id: "v1", title: "Bens Materiais e Imateriais do Brasil", youtubeId: "-Hnu9H7SniM" }, { id: "v2", title: "IPHAN - Preservação do Patrimônio", youtubeId: "65AAqTi2PIM" }, { id: "v3", title: "O Que é Patrimônio Material e Imaterial", youtubeId: "-Uz61DKiMAk" }, { id: "v4", title: "IPHAN - Protetor do Patrimônio Brasileiro", youtubeId: "tvEz4ju8-jI" }, { id: "v5", title: "Choro - Patrimônio Cultural Brasileiro", youtubeId: "WAxQjY3MZgk" }], exercises: [{ id: "e1", question: "O IPHAN é o órgão brasileiro responsável por:", options: { a: "Regulamentar o turismo nacional", b: "Proteger e promover o patrimônio cultural nacional", c: "Controlar a produção artística", d: "Registrar marcas e patentes culturais" }, answer: "b", resolution: "O IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional) é o órgão federal responsável por identificar, documentar, proteger e promover o patrimônio cultural brasileiro, tanto material (edificações, monumentos) quanto imaterial (saberes, práticas)." }, { id: "e2", question: "A Capoeira foi registrada como patrimônio imaterial do Brasil e da UNESCO porque:", options: { a: "É uma arte marcial muito eficiente para combate", b: "Representa símbolo de identidade, resistência cultural africana e riqueza artística", c: "É praticada apenas no estado da Bahia", d: "Foi inventada no século XX" }, answer: "b", resolution: "A Capoeira, criada por africanos escravizados no Brasil como forma de resistência disfarçada em dança, foi reconhecida pela UNESCO como Patrimônio Cultural Imaterial da Humanidade em 2014. Combina luta, dança, música e filosofia." }, { id: "e3", question: "O Bumba meu boi é uma manifestação cultural típica de:", options: { a: "São Paulo", b: "Rio de Janeiro", c: "Maranhão", d: "Minas Gerais" }, answer: "c", resolution: "O Bumba meu boi é uma festa folclórica típica do Maranhão, com variações em todo o Norte e Nordeste. É um drama musical sobre a morte e ressurreição de um boi, com personagens como o Amo, Catirina, Francisco e o Pai do Terreiro." }, { id: "e4", question: "O Saci-Pererê é uma lenda folclórica brasileira que representa:", options: { a: "Uma sereia dos rios amazônicos", b: "Um menino negro de uma perna só com poderes mágicos e travessuras", c: "Um curupira guardião das florestas", d: "Uma mulher-peixe sedutora" }, answer: "b", resolution: "O Saci-Pererê é um dos personagens mais conhecidos do folclore brasileiro: um menino negro, de uma só perna, que usa um gorro vermelho e faz travessuras. Representa a miscigenação cultural brasileira (indígena + africana + europeia)." }, { id: "e5", question: "O Dia do Folclore Brasileiro é comemorado em:", options: { a: "7 de setembro", b: "22 de agosto", c: "15 de outubro", d: "13 de maio" }, answer: "b", resolution: "O Dia do Folclore Brasileiro é comemorado em 22 de agosto, data escolhida em referência a uma carta de 22 de agosto de 1846 do inglês William Thoms, que criou o termo 'folklore'. No Brasil, a data foi oficializada pelo Decreto Presidencial nº 56.747/1965." }] },
    ],
    pdfs: [
      { id: "p1", title: "História da Arte - Apostila Completa", type: "apostila", description: "Da pré-história à contemporaneidade", downloadUrl: "#pdf-historia-arte-ap" },
      { id: "p2", title: "Teoria das Cores - Guia Prático", type: "resumo", description: "Círculo cromático e composição", downloadUrl: "#pdf-cores-guia" },
      { id: "p3", title: "Música Brasileira - Gêneros e Artistas", type: "apostila", description: "Samba, MPB, Bossa Nova e outros", downloadUrl: "#pdf-musica-br" },
      { id: "p4", title: "Técnicas de Pintura e Desenho", type: "resumo", description: "Materiais e procedimentos", downloadUrl: "#pdf-tecnicas-pintura" },
      { id: "p5", title: "Folclore Brasileiro - Lendas e Personagens", type: "apostila", description: "Cultura popular e tradições regionais", downloadUrl: "#pdf-folclore" },
      { id: "p6", title: "Questões de Artes ENEM", type: "exercicios", description: "30 questões com gabarito", downloadUrl: "#pdf-artes-enem" },
      { id: "p7", title: "Teatro - Da Grécia ao Brasil", type: "apostila", description: "História e principais dramaturgos", downloadUrl: "#pdf-teatro-ap" },
      { id: "p8", title: "Modernismo Brasileiro nas Artes", type: "resumo", description: "Semana de 22 e seus protagonistas", downloadUrl: "#pdf-modernismo-artes" },
      { id: "p9", title: "Fotografia como Arte", type: "apostila", description: "Composição, técnica e história", downloadUrl: "#pdf-fotografia" },
      { id: "p10", title: "Artes Indígenas Brasileiras", type: "resumo", description: "Artesanato, pinturas e rituais", downloadUrl: "#pdf-arte-indigena" },
      { id: "p11", title: "Design e Comunicação Visual", type: "apostila", description: "Princípios básicos de design gráfico", downloadUrl: "#pdf-design" },
      { id: "p12", title: "Cinema - Linguagem e História", type: "resumo", description: "Do cinema mudo ao digital", downloadUrl: "#pdf-cinema" },
      { id: "p13", title: "Ballet e Dança Clássica", type: "apostila", description: "História e técnica do ballet", downloadUrl: "#pdf-ballet" },
      { id: "p14", title: "Arte Contemporânea Brasileira", type: "resumo", description: "Candido Portinari, Di Cavalcanti e outros", downloadUrl: "#pdf-arte-cont-br" },
      { id: "p15", title: "Patrimônio Cultural - UNESCO no Brasil", type: "resumo", description: "Patrimônios mundiais em território nacional", downloadUrl: "#pdf-unesco-brasil" },
      { id: "p16", title: "Escultura - Técnicas e História", type: "apostila", description: "Escultura da Grécia ao Contemporâneo", downl9adUrl: "#pdf-escultura" },
      { id: "p17", title: "Gravura e Xilogravura", type: "resumo", description: "Arte popular nordestina e técnicas", downloadUrl: "#pdf-gravura" },
      { id: "p18", title: "Artesanato Brasileiro por Região", type: "apostila", description: "Renda de bilro, cerâmica, trançados...", downloadUrl: "#pdf-artesanato" },
      { id: "p19", title: "Capoeira - Arte, Luta e Cultura", type: "resumo", description: "História e filosofia da capoeira", downloadUrl: "#pdf-capoeira" },
      { id: "p20", title: "Simulado de Artes - ENEM e Vestibular", type: "exercicios", description: "40 questões com gabarito comentado", downloadUrl: "#pdf-simulado-artes" },
    ],
  },
  {
    id: "filosofia",
    name: "Filosofia",
    slug: "filosofia",
    description: "Filosofia antiga, moderna, ética, política e existencialismo",
    icon: "🤔",
    color: "#7C3AED",
    bgColor: "#F5F3FF",
    topics: [
      { id: "filosofia-antiga", title: "Filosofia Grega Antiga", slug: "filosofia-grega", explanation: `<h2>Filosofia Grega Antiga</h2><p>A filosofia ocidental nasceu na Grécia por volta do século VI a.C., quando pensadores começaram a buscar explicações racionais para a realidade, em contraste com os mitos religiosos anteriores. Essa transição é chamada de "passagem do mito ao logos".</p><h3>Pré-Socráticos</h3><p>Buscavam o arché (princípio primordial de tudo). Tales de Mileto: água. Heráclito: fogo e movimento eterno. Parmênides: ser imutável. Demócrito: átomos. Pitágoras: números.</p><h3>Sócrates (470-399 a.C.)</h3><p>Voltou a atenção para o homem e a ética. Não escreveu nada — conhecemos seu pensamento pelos diálogos de Platão. Maiêutica: método do parto das ideias, por perguntas. "Só sei que nada sei." Foi condenado à morte por impiedade e corrupção da juventude.</p><h3>Platão (428-348 a.C.)</h3><p>Discípulo de Sócrates. Teoria das Ideias/Formas: o mundo sensível é cópia imperfeita do mundo das ideias eternas. Alegoria da Caverna: metáfora sobre o acesso ao conhecimento verdadeiro. A República: cidade ideal governada por filósofos-reis.</p><h3>Aristóteles (384-322 a.C.)</h3><p>Discípulo de Platão. Criou o método científico de observação. Lógica formal, biologia, política, ética (ética das virtudes, a eudaimonia/felicidade). A forma está na própria matéria, não num mundo separado.</p>`, videos: [{ id: "v1", title: "Platão - Ética e Filosofia Grega", youtubeId: "nphvsm2D6w4" }, { id: "v2", title: "Ética na Antiguidade - Sócrates e Platão", youtubeId: "AKULRvBCuUk" }, { id: "v3", title: "Sócrates - Hipias Maior - Estética", youtubeId: "-1Gxv7a4Qss" }, { id: "v4", title: "Legado de Sócrates, Platão e Aristóteles", youtubeId: "QweIkJdyyYU" }, { id: "v5", title: "Vida e Método de Sócrates", youtubeId: "AByjq-_1_jQ" }], exercises: [{ id: "e1", question: "A 'Alegoria da Caverna' de Platão representa:", options: { a: "A origem do universo pela água", b: "A importância da observação empírica", c: "O processo de saída da ignorância rumo ao conhecimento verdadeiro", d: "A política ideal baseada na democracia" }, answer: "c", resolution: "Na Alegoria da Caverna (A República, Livro VII), Platão imagina prisioneiros que veem apenas sombras projetadas na parede e as confundem com a realidade. A saída da caverna representa a filosofia como caminho de iluminação e acesso à verdade." }, { id: "e2", question: "O método maiêutico de Sócrates consistia em:", options: { a: "Ensinar através de longas palestras", b: "Fazer perguntas para ajudar o interlocutor a 'parir' suas próprias ideias", c: "Memorizar textos de outros filósofos", d: "Observar a natureza para obter conhecimento" }, answer: "b", resolution: "A maiêutica socrática (arte de partejar ideias) consistia em fazer perguntas progressivas ao interlocutor, levando-o a contradizer-se e descobrir a verdade por si mesmo. Sócrates comparava-se a uma parteira — não gera a criança, mas ajuda no parto." }, { id: "e3", question: "Aristóteles diferencia-se de Platão porque:", options: { a: "Acreditava que as formas existem num mundo separado e eterno", b: "Nunca estudou filosofia formal", c: "Propôs que a forma está na própria matéria, não num mundo transcendente", d: "Rejeitou completamente a filosofia de Platão" }, answer: "c", resolution: "Enquanto Platão propunha que as Formas/Ideias existem num mundo transcendente separado, Aristóteles defendia que a forma é imanente à matéria — existe na própria coisa. Para Aristóteles, não é necessário postular um mundo ideal separado." }, { id: "e4", question: "Os filósofos pré-socráticos buscavam o 'arché', que significa:", options: { a: "O conceito de democracia ideal", b: "O princípio ou elemento primordial de todas as coisas", c: "A regra de comportamento ético", d: "O maior deus do Olimpo" }, answer: "b", resolution: "Arché (ἀρχή) é o princípio ou elemento primordial do qual tudo se origina e no qual tudo se resolve. Tales propôs a água; Anaxímenes, o ar; Heráclito, o fogo; Demócrito, os átomos. Essa busca pela unidade por trás da multiplicidade é central no pensamento pré-socrático." }, { id: "e5", question: "A ética de Aristóteles está baseada na busca pela:", options: { a: "Obediência às leis divinas", b: "Acumulação de riquezas e poder", c: "Eudaimonia (felicidade/florescimento humano) através da prática das virtudes", d: "Negação dos desejos corporais" }, answer: "c", resolution: "Para Aristóteles, o fim último da ação humana é a eudaimonia (felicidade, florescimento). Diferente do prazer imediato, é alcançada pela prática das virtudes (coragem, justiça, prudência) — o meio-termo entre extremos (mesotes)." }] },
      { id: "etica", title: "Ética e Moral", slug: "filosofia-etica", explanation: `<h2>Ética e Moral</h2><p>Ética é o ramo da filosofia que estuda a moral — os valores, princípios e normas que orientam a conduta humana. Enquanto moral se refere às normas concretas de uma sociedade, ética é a reflexão filosófica sobre essas normas.</p><h3>Principais Teorias Éticas</h3><p>Ética das Virtudes (Aristóteles): a pessoa virtuosa age bem por caráter, não por regra. A virtude é um hábito adquirido. Consequencialismo/Utilitarismo (Bentham, Mill): o ato é bom se maximiza a felicidade do maior número. Deontologia (Kant): a moralidade está na intenção, não nas consequências. O imperativo categórico: "Age apenas segundo a máxima que podes querer que seja lei universal."</p><h3>Dilemas Éticos Contemporâneos</h3><p>Eutanásia, aborto, experimentação em animais, clonagem, distribuição de renda, ética ambiental, bioética. São problemas para os quais as teorias éticas oferecem perspectivas diferentes.</p><h3>Ética e Cidadania</h3><p>A ética democrática pressupõe respeito aos direitos humanos, tolerância, diálogo e responsabilidade social. Ética pública e combate à corrupção são questões centrais da vida democrática.</p>`, videos: [{ id: "v1", title: "Ética de Kant - Imperativo Categórico", youtubeId: "ye4CBk95kkA" }, { id: "v2", title: "Filosofia no ENEM - Ética e Justiça", youtubeId: "92OBGFJg0lM" }, { id: "v3", title: "Filosofia no ENEM - Ética", youtubeId: "J9aCoxX2UV8" }, { id: "v4", title: "Moral e Ética - Videoaulas", youtubeId: "jpBj7RUxSEU" }, { id: "v5", title: "Ética e Moral - Filosofia no ENEM", youtubeId: "T0ZdMP3DVos" }], exercises: [{ id: "e1", question: "O imperativo categórico de Kant afirma que devemos agir:", options: { a: "Para maximizar o prazer pessoal", b: "De acordo com as tradições culturais locais", c: "Apenas segundo princípios que possamos querer que sejam universalmente válidos", d: "Seguindo sempre as leis do governo" }, answer: "c", resolution: "O Imperativo Categórico de Kant: 'Age apenas segundo a máxima que podes querer que se torne uma lei universal.' Não é baseado em consequências nem em costumes, mas na racionalidade pura — a ação deve ser universalizável." }, { id: "e2", question: "O utilitarismo avalia a moralidade de um ato com base em:", options: { a: "A intenção por trás do ato", b: "As consequências para a felicidade do maior número de pessoas", c: "O cumprimento de regras absolutas", d: "A virtude do agente" }, answer: "b", resolution: "O utilitarismo (Bentham, Mill) é uma ética consequencialista: o ato moralmente correto é aquele que produz maior quantidade de felicidade (utilidade) para o maior número de pessoas. O bem coletivo supera o individual." }, { id: "e3", question: "A diferença entre ética e moral é que:", options: { a: "São sinônimos perfeitos sem distinção", b: "Ética é a reflexão filosófica sobre os princípios morais; moral são as normas concretas de comportamento", c: "Moral é mais abstrata que ética", d: "Ética pertence ao direito e moral à filosofia" }, answer: "b", resolution: "Moral refere-se ao conjunto de normas e valores concretos de um grupo social (o que se deve/não deve fazer). Ética é a reflexão filosófica sobre esses valores — questiona por que devemos seguir certas normas e qual é o fundamento do bem." }, { id: "e4", question: "A ética das virtudes de Aristóteles propõe que:", options: { a: "A moralidade é determinada apenas pelas consequências das ações", b: "A pessoa boa é aquela que cumpre regras rígidas", c: "O caráter virtuoso é cultivado pelo hábito e expressa o meio-termo entre extremos", d: "Só Deus pode determinar o que é bom" }, answer: "c", resolution: "Para Aristóteles, a virtude (areté) é um hábito — uma disposição de caráter adquirida pela prática. Cada virtude é o meio-termo (mesotes) entre dois vícios opostos: coragem é o meio entre covardia e temeridade." }, { id: "e5", question: "Bioética é uma área da ética que se dedica a:", options: { a: "Estudar apenas os comportamentos dos animais", b: "Questões morais relacionadas à biologia e medicina (aborto, eutanásia, clonagem)", c: "Determinar quais animais podem ser usados em alimentação", d: "Pesquisar a origem biológica dos comportamentos morais" }, answer: "b", resolution: "Bioética é o campo que aplica princípios éticos às questões surgidas na medicina, biologia e tecnologias relacionadas à vida. Envolve temas como aborto, eutanásia, experimentos em humanos e animais, clonagem, modificação genética e direito à saúde." }] },
      { id: "filosofia-moderna", title: "Filosofia Moderna", slug: "filosofia-moderna", explanation: `<h2>Filosofia Moderna (Séculos XVII-XIX)</h2><p>A Filosofia Moderna foi marcada pela centralidade da razão e pelo questionamento das tradições medievais. O Renascimento, a Reforma Protestante e a Revolução Científica criaram o contexto para uma nova forma de filosofar.</p><h3>Racionalismo</h3><p>René Descartes (1596-1650): "Cogito ergo sum" (Penso, logo existo). A dúvida metódica como método filosófico. A razão como fonte principal do conhecimento. Espinoza e Leibniz seguiram o racionalismo.</p><h3>Empirismo</h3><p>John Locke: a mente como "tabula rasa" — todo conhecimento vem da experiência. David Hume: ceticismo radical — só temos acesso a impressões e ideias, não às coisas em si. Francis Bacon: método indutivo.</p><h3>Iluminismo</h3><p>Século XVIII, "Século das Luzes". Confiança na razão, ciência e progresso. Liberdade, igualdade, tolerância, separação de poderes. Voltaire (liberdade religiosa), Rousseau (contrato social), Montesquieu (separação dos poderes), Kant (Esclarecimento = "Sapere Aude").</p>`, videos: [{ id: "v1", title: "Kant para o ENEM", youtubeId: "gC-8IlAGRYM" }, { id: "v2", title: "Iluminismo - Filosofia Moderna Resumo", youtubeId: "Kef-qRKI_rk" }, { id: "v3", title: "Filosofia Kantiana - Introdução", youtubeId: "fSnYTcUSAYg" }, { id: "v4", title: "A Filosofia de Immanuel Kant", youtubeId: "BvEq04fPwDU" }, { id: "v5", title: "Kant e a Filosofia Moderna", youtubeId: "EHdiAoos_Ng" }], exercises: [{ id: "e1", question: "A frase 'Cogito ergo sum' (Penso, logo existo) foi dita por:", options: { a: "John Locke", b: "David Hume", c: "René Descartes", d: "Voltaire" }, answer: "c", resolution: "'Cogito ergo sum' é a formulação central de Descartes nas Meditações Metafísicas. Após duvidar de tudo (dúvida metódica), a única certeza indestrutível é: para duvidar, é preciso existir; portanto, penso, logo existo." }, { id: "e2", question: "John Locke propôs que a mente ao nascer é uma:", options: { a: "Estrutura com ideias inatas", b: "Tabula rasa (lousa em branco) — todo conhecimento vem da experiência", c: "Entidade racional perfeita", d: "Extensão do mundo das ideias platônico" }, answer: "b", resolution: "Locke, empirista, propôs que a mente ao nascer é uma 'tabula rasa' — vazia. Todo o conhecimento é adquirido através da experiência sensorial e da reflexão sobre essas experiências. Contraria os racionalistas que acreditavam em ideias inatas." }, { id: "e3", question: "Montesquieu é conhecido pela teoria:", options: { a: "Do contrato social entre cidadãos", b: "Da separação dos três poderes (Executivo, Legislativo e Judiciário)", c: "Da liberdade religiosa irrestrita", d: "Do ateísmo filosófico" }, answer: "b", resolution: "Montesquieu (1689-1755), em 'O Espírito das Leis' (1748), desenvolveu a teoria da separação dos três poderes para evitar o absolutismo e garantir a liberdade. Essa teoria influenciou as constituições modernas, incluindo a dos EUA e do Brasil." }, { id: "e4", question: "O Iluminismo do século XVIII defendia, entre outras coisas:", options: { a: "O poder absoluto dos reis e da Igreja", b: "A razão, a liberdade individual e o progresso como guias da sociedade", c: "O retorno aos valores medievais", d: "A submissão da ciência à religião" }, answer: "b", resolution: "O Iluminismo (Século das Luzes) foi um movimento filosófico que valorizava a razão, o conhecimento científico, a liberdade individual, a tolerância religiosa e o progresso social contra o obscurantismo e o absolutismo do Antigo Regime." }, { id: "e5", question: "Segundo Rousseau, o 'estado de natureza' do ser humano é:", options: { a: "Violento e egoísta ('guerra de todos contra todos')", b: "Naturalmente bom, corrompido pela sociedade e propriedade privada", c: "Idêntico ao estado civilizado", d: "Resultado do contrato social original" }, answer: "b", resolution: "Rousseau divergia de Hobbes: para ele, o ser humano no estado de natureza é bom e livre — 'o bom selvagem'. A propriedade privada e a sociedade civil corrompem essa bondade natural, gerando desigualdade e opressão. Daí sua proposta de um contrato social mais igualitário." }] },
      { id: "existencialismo", title: "Existencialismo e Filosofia Contemporânea", slug: "filosofia-existencialismo", explanation: `<h2>Existencialismo e Filosofia Contemporânea</h2><p>O existencialismo é uma corrente filosófica do século XX que coloca a existência humana, a liberdade e a responsabilidade individual no centro da reflexão. Surgiu como resposta às catástrofes das duas Guerras Mundiais.</p><h3>Jean-Paul Sartre (1905-1980)</h3><p>"A existência precede a essência": o ser humano não tem natureza predeterminada — primeiro existe, depois cria sua própria essência por suas escolhas. Condenados a ser livres. A má-fé (mauvaise foi): fugir da responsabilidade de nossas escolhas.</p><h3>Albert Camus e o Absurdo</h3><p>A vida não tem sentido intrínseco (absurdo), mas isso não deve levar ao suicídio — deve-se rebelar e criar sentido. O mito de Sísifo: deve-se imaginar Sísifo feliz.</p><h3>Simone de Beauvoir e Feminismo</h3><p>"Não se nasce mulher, torna-se mulher": o gênero é uma construção social. Fundou o feminismo existencialista. 'O Segundo Sexo' (1949) é obra fundamental.</p><h3>Nietzsche e a Filosofia do Poder</h3><p>Crítica à moral cristã. "Deus está morto". O super-homem (Übermensch): cria seus próprios valores. Vontade de Potência como força motriz da vida humana.</p>`, videos: [{ id: "v1", title: "Existencialismo - Sartre e Camus", youtubeId: "ye4CBk95kkA" }, { id: "v2", title: "Nietzsche - Filosofia e Poder", youtubeId: "gC-8IlAGRYM" }, { id: "v3", title: "Filosofia Contemporânea - Panorama", youtubeId: "Kef-qRKI_rk" }, { id: "v4", title: "Simone de Beauvoir e Feminismo", youtubeId: "T0ZdMP3DVos" }, { id: "v5", title: "Existencialismo no ENEM", youtubeId: "92OBGFJg0lM" }], exercises: [{ id: "e1", question: "Para Sartre, 'a existência precede a essência' significa que:", options: { a: "O ser humano tem uma essência determinada por Deus", b: "Primeiro existimos; depois criamos nossa essência por nossas escolhas e ações", c: "A essência humana é definida pela biologia", d: "A essência antecede qualquer existência" }, answer: "b", resolution: "Sartre inverteu a máxima medieval (essência precede existência): o humano não tem natureza predeterminada — surge no mundo sem propósito dado, e só através de suas escolhas e atos constrói sua identidade e essência." }, { id: "e2", question: "Albert Camus propôs que diante do absurdo da vida, devemos:", options: { a: "Aceitar passivamente a ausência de sentido e desistir", b: "Buscar um sentido transcendente em Deus", c: "Rebelar-nos contra o absurdo e criar nosso próprio sentido", d: "Ignorar completamente a questão do sentido" }, answer: "c", resolution: "Camus (no 'Mito de Sísifo') propõe que, mesmo reconhecendo que a vida não tem sentido inerente (absurdo), não devemos nos suicidar filosófica ou fisicamente. Devemos rebelar-nos, criar nosso sentido e imaginar Sísifo feliz em seu eterno labor." }, { id: "e3", question: "A frase de Simone de Beauvoir 'Não se nasce mulher, torna-se mulher' significa:", options: { a: "Só mulheres que passaram por certos rituais são realmente mulheres", b: "O gênero feminino é uma construção social, não uma essência biológica determinada", c: "As mulheres devem trabalhar para merecer esse status", d: "A biologia define completamente o gênero" }, answer: "b", resolution: "Beauvoir argumenta que 'mulher' não é uma essência biológica natural — é uma construção social, cultural e histórica. As características consideradas femininas são impostas pela sociedade patriarcal, não determinadas pela natureza." }, { id: "e4", question: "Nietzsche afirmou que 'Deus está morto'. Isso significa:", options: { a: "Deus realmente morreu fisicamente", b: "A crença em Deus não existe mais na sociedade moderna, exigindo nova base para os valores", c: "Nietzsche era indiferente à religião", d: "A religião é necessária para a moral" }, answer: "b", resolution: "'Deus está morto' (A Gaia Ciência) é uma metáfora de Nietzsche para o fim da era em que a fé cristã fundamentava todos os valores ocidentais. Sem esse fundamento, é preciso criar novos valores — o desafio do super-homem (Übermensch)." }, { id: "e5", question: "A 'má-fé' (mauvaise foi) em Sartre é:", options: { a: "Ser desonesto financeiramente", b: "Mentir para outros deliberadamente", c: "Negar a própria liberdade, agindo como se o comportamento fosse determinado por causas externas", d: "Ter crenças religiosas sem fundamento" }, answer: "c", resolution: "A má-fé sartreana é a tentativa de fugir da liberdade e responsabilidade, agindo como se não houvesse escolha ('sou assim porque sou', 'não tenho opção'). Para Sartre, estamos sempre escolhendo, inclusive ao aceitar papéis sociais sem questionamento." }] },
      { id: "politica", title: "Filosofia Política", slug: "filosofia-politica", explanation: `<h2>Filosofia Política</h2><p>A filosofia política estuda as questões fundamentais sobre o poder, o Estado, a justiça, a liberdade e a organização da sociedade. Busca responder: o que legitima o poder? Qual a melhor forma de governo? O que é uma sociedade justa?</p><h3>Teorias do Contrato Social</h3><p>Hobbes (Leviatã): no estado de natureza, a vida é "solitária, pobre, sórdida, brutal e curta". Para escapar, os homens cedem o poder a um soberano absoluto. Locke: o governo deve proteger os direitos naturais (vida, liberdade, propriedade) — se não o faz, a revolução é legítima. Rousseau: soberania popular, vontade geral.</p><h3>Democracia e Seus Fundamentos</h3><p>A democracia pressupõe soberania popular, direitos fundamentais, separação dos poderes, eleições livres e Estado de Direito. Desafios contemporâneos: populismo, desinformação, desigualdade.</p><h3>Teorias da Justiça</h3><p>John Rawls (Teoria da Justiça, 1971): princípio da diferença — desigualdades são justas apenas se beneficiam os menos favorecidos. Propõe o "véu da ignorância" como método para determinar princípios justos.</p>`, videos: [{ id: "v1", title: "Filosofia Política - Estado e Poder", youtubeId: "AKULRvBCuUk" }, { id: "v2", title: "Hobbes, Locke e Rousseau - Contrato Social", youtubeId: "nphvsm2D6w4" }, { id: "v3", title: "Democracia - Origens e Desafios", youtubeId: "QweIkJdyyYU" }, { id: "v4", title: "John Rawls e a Teoria da Justiça", youtubeId: "AByjq-_1_jQ" }, { id: "v5", title: "Filosofia Política para o ENEM", youtubeId: "J9aCoxX2UV8" }], exercises: [{ id: "e1", question: "Thomas Hobbes descreveu o estado de natureza como:", options: { a: "Um paraíso de harmonia entre os homens", b: "Uma guerra de todos contra todos, onde a vida é 'solitária, pobre, sórdida, brutal e curta'", c: "Um estado de perfeita igualdade e liberdade", d: "Uma comunidade baseada no amor" }, answer: "b", resolution: "Para Hobbes (Leviatã, 1651), sem um poder coercitivo, os homens entrariam em conflito permanente ('bellum omnium contra omnes'). Para escapar, formam um contrato social cedendo todo o poder a um soberano absoluto (Leviatã)." }, { id: "e2", question: "Para Locke, se o governo falha em proteger os direitos naturais:", options: { a: "Os cidadãos devem obedecer passivamente", b: "O povo tem direito de resistir e substituir o governo", c: "O governo deve ser ainda mais reforçado", d: "Os direitos naturais simplesmente deixam de existir" }, answer: "b", resolution: "Locke argumentou que o governo existe para proteger os direitos naturais (vida, liberdade, propriedade). Se falha nessa missão, viola o contrato social e o povo tem direito legítimo de resistir e substituir o governo — fundamento das revoluções liberais." }, { id: "e3", question: "O 'véu da ignorância' de John Rawls é um experimento mental para:", options: { a: "Provar que a ignorância é uma virtude", b: "Determinar princípios justos como se não soubéssemos nossa posição na sociedade", c: "Justificar a desigualdade social existente", d: "Mostrar que a igualdade total é impossível" }, answer: "b", resolution: "O véu da ignorância de Rawls: imagine que você deve criar os princípios de uma sociedade sem saber qual posição você ocupará — rico/pobre, homem/mulher, maioria/minoria. Rawls argumenta que, nessas condições, escolheríamos princípios igualitários e protetores dos mais vulneráveis." }, { id: "e4", question: "A soberania popular na democracia significa que:", options: { a: "O povo deve obedecer ao rei sem questionar", b: "O poder emana do povo e a ele deve retornar", c: "A soberania é dada por Deus ao governante", d: "Apenas os mais educados devem governar" }, answer: "b", resolution: "Na democracia, a soberania pertence ao povo — o poder emana do povo. Os governantes são representantes eleitos que exercem o poder em nome e para o bem do povo. Se perdem essa legitimidade, podem ser substituídos por novos representantes." }, { id: "e5", question: "Segundo Rousseau, a 'vontade geral' é:", options: { a: "A soma de todas as vontades individuais", b: "A vontade do governante", c: "O interesse comum que transcende as vontades particulares", d: "A vontade da maioria sempre" }, answer: "c", resolution: "Para Rousseau, a vontade geral não é a soma das vontades individuais (isso seria a 'vontade de todos'). É o interesse comum, o bem público que transcende os interesses particulares. A soberania pertence à vontade geral, não ao rei nem a indivíduos." }] },
    ],
    pdfs: [
      { id: "p1", title: "Filosofia Grega - Apostila Completa", type: "apostila", description: "Sócrates, Platão e Aristóteles", downloadUrl: "#pdf-fil-grega-ap" },
      { id: "p2", title: "Filosofia Moderna - Iluminismo", type: "apostila", description: "Descartes, Locke, Kant e Rousseau", downloadUrl: "#pdf-fil-moderna" },
      { id: "p3", title: "Ética e Moral - Resumo", type: "resumo", description: "Principais teorias éticas", downloadUrl: "#pdf-etica-resumo" },
      { id: "p4", title: "Existencialismo - Sartre, Camus e Beauvoir", type: "apostila", description: "Filosofia do século XX", downloadUrl: "#pdf-existencialismo" },
      { id: "p5", title: "Questões de Filosofia ENEM", type: "exercicios", description: "40 questões com gabarito", downloadUrl: "#pdf-fil-enem-q" },
      { id: "p6", title: "Nietzsche - Principais Conceitos", type: "resumo", description: "Além do bem e do mal, vontade de potência", downloadUrl: "#pdf-nietzsche" },
      { id: "p7", title: "Filosofia Política - Contrato Social", type: "apostila", description: "Hobbes, Locke, Rousseau e Rawls", downloadUrl: "#pdf-fil-politica" },
      { id: "p8", title: "Lógica Filosófica", type: "resumo", description: "Argumentação, falácias e silogismos", downloadUrl: "#pdf-logica-fil" },
      { id: "p9", title: "Filosofia Medieval", type: "apostila", description: "Agostinho, Tomás de Aquino e a escolástica", downloadUrl: "#pdf-fil-medieval" },
      { id: "p10", title: "Marxismo e Dialética", type: "apostila", description: "Marx, Engels e o materialismo histórico", downloadUrl: "#pdf-marxismo" },
      { id: "p11", title: "Epistemologia - Teoria do Conhecimento", type: "resumo", description: "O que podemos conhecer e como", downloadUrl: "#pdf-epistemologia" },
      { id: "p12", title: "Feminismo Filosófico", type: "apostila", description: "De Beauvoir à filosofia feminista contemporânea", downloadUrl: "#pdf-feminismo-fil" },
      { id: "p13", title: "Fenomenologia - Husserl e Heidegger", type: "resumo", description: "Consciência, ser e existência", downloadUrl: "#pdf-fenomenologia" },
      { id: "p14", title: "Bioética - Questões Filosóficas Contemporâneas", type: "apostila", description: "Aborto, eutanásia e biotecnologia", downloadUrl: "#pdf-bioetica-fil" },
      { id: "p15", title: "Filosofia Oriental - Budismo e Taoísmo", type: "resumo", description: "Filosofias não ocidentais", downloadUrl: "#pdf-fil-oriental" },
      { id: "p16", title: "Democracia e Direitos Humanos", type: "apostila", description: "Fundamentos filosóficos da democracia", downloadUrl: "#pdf-democracia-fil" },
      { id: "p17", title: "Platão - República e Alegoria da Caverna", type: "resumo", description: "Política e conhecimento em Platão", downloadUrl: "#pdf-platao" },
      { id: "p18", title: "Estética Filosófica - O que é Arte?", type: "apostila", description: "Beleza, sublime e experiência estética", downloadUrl: "#pdf-estetica-fil" },
      { id: "p19", title: "Pré-Socráticos - Os Primeiros Filósofos", type: "resumo", description: "Tales, Heráclito, Parmênides e outros", downloadUrl: "#pdf-pre-socraticos" },
      { id: "p20", title: "Simulado de Filosofia", type: "exercicios", description: "45 questões estilo ENEM com gabarito", downloadUrl: "#pdf-simulado-fil" },
    ],
  },
  {
    id: "sociologia",
    name: "Sociologia",
    slug: "sociologia",
    description: "Sociedade, cultura, política, cidadania e movimentos sociais",
    icon: "👥",
    color: "#1E40AF",
    bgColor: "#EFF6FF",
    topics: [
      { id: "fundadores-sociologia", title: "Fundadores da Sociologia", slug: "sociologia-fundadores", explanation: `<h2>Fundadores da Sociologia</h2><p>A Sociologia é a ciência que estuda a sociedade humana, suas estruturas, dinâmicas e transformações. Surgiu no século XIX como resposta científica às profundas mudanças causadas pela Revolução Industrial e Francesa.</p><h3>Auguste Comte (1798-1857)</h3><p>Criou o termo "Sociologia" e o Positivismo. Propôs que a sociedade deveria ser estudada com métodos científicos. Lei dos três estados: teológico, metafísico e positivo/científico. Influenciou a bandeira do Brasil ("Ordem e Progresso").</p><h3>Émile Durkheim (1858-1917)</h3><p>Pai da Sociologia científica. Conceito central: fato social — modo de agir, pensar e sentir exterior e coercitivo ao indivíduo. Solidariedade mecânica (sociedades tradicionais) e orgânica (modernas). Estudou o suicídio como fato social, não apenas individual.</p><h3>Karl Marx (1818-1883)</h3><p>Análise materialista da história. Luta de classes como motor da história. Burguesia vs. Proletariado no capitalismo. Mais-valia: o lucro vem do trabalho não pago ao trabalhador. Alienação: o trabalhador se torna estranho ao produto de seu trabalho.</p><h3>Max Weber (1864-1920)</h3><p>Ação social e seus tipos: racional com relação a fins, racional com relação a valores, tradicional e afetiva. Tipos de dominação: legal-racional, tradicional e carismática. Protestantismo e o espírito do capitalismo.</p>`, videos: [{ id: "v1", title: "Durkheim, Weber e Marx - Visões de Sociedade", youtubeId: "ZHqFhI1WRfM" }, { id: "v2", title: "O Tripé da Sociologia - Durkheim, Weber, Marx", youtubeId: "T_tUOFvGEWg" }, { id: "v3", title: "Durkheim Marx Weber - Teoria do Trabalho", youtubeId: "UG6PTnPpYrM" }, { id: "v4", title: "Sociologia - Clássicos Durkheim, Weber, Marx", youtubeId: "s-i1R4VBCqI" }, { id: "v5", title: "Sociologia e Religião - Weber, Marx, Durkheim", youtubeId: "ENvpUEN3bBI" }], exercises: [{ id: "e1", question: "Para Durkheim, fato social é:", options: { a: "Qualquer acontecimento na sociedade", b: "Um modo de agir, pensar e sentir exterior ao indivíduo e dotado de poder coercitivo", c: "Apenas crimes e desvios de comportamento", d: "A opinião da maioria num determinado momento" }, answer: "b", resolution: "Fato social, para Durkheim, é qualquer modo de agir, pensar ou sentir que é: exterior ao indivíduo (existe antes e independentemente de cada pessoa), geral (compartilhado) e coercitivo (exerce pressão sobre o indivíduo). Ex.: língua, religião, regras morais." }, { id: "e2", question: "Segundo Marx, a mais-valia é:", options: { a: "O lucro do comerciante na venda de produtos", b: "A diferença entre o valor produzido pelo trabalhador e o salário que recebe", c: "Os impostos pagos ao Estado", d: "O valor total da produção capitalista" }, answer: "b", resolution: "A mais-valia é o conceito central da crítica marxista ao capitalismo. O trabalhador produz mais valor do que recebe como salário — essa diferença (mais-valia) é apropriada pelo capitalista. É a fonte do lucro e da exploração no sistema capitalista." }, { id: "e3", question: "O positivismo de Comte propunha que:", options: { a: "A sociedade deve ser governada por religiosos", b: "A sociedade deve ser estudada com métodos científicos positivos", c: "A história é determinada pelo conflito de classes", d: "A ação social é o objeto central da sociologia" }, answer: "b", resolution: "O positivismo de Auguste Comte propôs que o conhecimento válido deve ser baseado em fatos observáveis e verificáveis (positivo). A sociologia deveria adotar o método científico para estudar a sociedade, como a física estuda a natureza." }, { id: "e4", question: "A solidariedade orgânica de Durkheim é característica de:", options: { a: "Sociedades tradicionais baseadas em similaridade", b: "Sociedades modernas com divisão do trabalho e interdependência entre especializações", c: "Grupos religiosos medievais", d: "Tribos indígenas isoladas" }, answer: "b", resolution: "A solidariedade orgânica caracteriza as sociedades modernas: com a divisão do trabalho, as pessoas têm funções diferentes mas são interdependentes. Como órgãos num corpo, cada parte especializada depende das outras para o todo funcionar." }, { id: "e5", question: "Para Max Weber, a dominação carismática é aquela baseada em:", options: { a: "Leis e regras impessoais", b: "Tradições e costumes históricos", c: "Qualidades pessoais excepcionais do líder, reconhecidas pelos seguidores", d: "Riqueza e poder econômico" }, answer: "c", resolution: "Weber identificou três tipos de dominação legítima. A carismática baseia-se no reconhecimento de qualidades excepcionais (dom, heroísmo, santidade) do líder pelos seguidores. Exemplos: líderes religiosos (Jesus, Maomé) e políticos revolucionários." }] },
      { id: "cultura-sociedade", title: "Cultura e Sociedade", slug: "sociologia-cultura", explanation: `<h2>Cultura e Sociedade</h2><p>Cultura é o conjunto de valores, normas, crenças, práticas, símbolos e produção material de um grupo social, transmitidos de geração em geração. É o elemento que distingue os grupos humanos entre si.</p><h3>Conceitos Fundamentais</h3><p>Cultura material: objetos, ferramentas, tecnologia produzida. Cultura imaterial: conhecimentos, crenças, valores, linguagem. Socialização: processo pelo qual o indivíduo aprende e internaliza a cultura de seu grupo (família, escola, mídia, religião).</p><h3>Etnocentrismo e Relativismo Cultural</h3><p>Etnocentrismo: julgar outras culturas a partir dos valores da própria cultura (vê a própria como superior). Relativismo cultural: entender cada cultura em seus próprios termos, sem julgamentos de valor. Ambos têm limites — o relativismo absoluto pode justificar violações aos direitos humanos.</p><h3>Indústria Cultural</h3><p>Conceito de Adorno e Horkheimer (Escola de Frankfurt): a cultura produzida industrialmente para consumo de massa transforma a arte em mercadoria, padroniza gostos e desestimula o pensamento crítico.</p>`, videos: [{ id: "v1", title: "Cultura e Identidade - Sociologia ENEM", youtubeId: "mx-b7rtmLQE" }, { id: "v2", title: "Cultura - Diversidade e Identidade", youtubeId: "dziV7pCUXDY" }, { id: "v3", title: "Vai Cair no ENEM - Cultura Sociologia", youtubeId: "kkzrfQH2Asw" }, { id: "v4", title: "Estratificação Social - Weber", youtubeId: "i6JZvWPdfH8" }, { id: "v5", title: "Sociologia - Estratificação Social", youtubeId: "Hn6-wsP6rmY" }], exercises: [{ id: "e1", question: "Etnocentrismo é a tendência de:", options: { a: "Respeitar e valorizar todas as culturas igualmente", b: "Julgar outras culturas a partir dos padrões e valores da própria cultura", c: "Negar a existência de diferentes culturas", d: "Criar uma cultura universal única" }, answer: "b", resolution: "Etnocentrismo é o comportamento de considerar a própria cultura como superior e usar seus valores como parâmetro para avaliar outras culturas. Pode levar ao preconceito, discriminação e justificar o colonialismo." }, { id: "e2", question: "A socialização primária ocorre principalmente:", options: { a: "Na escola e no trabalho", b: "Na família e nos primeiros anos de vida", c: "Na adolescência e na universidade", d: "Apenas em comunidades religiosas" }, answer: "b", resolution: "A socialização primária é o processo inicial de aprendizado cultural, ocorre principalmente na família durante a infância. É o mais fundamental — a criança aprende a língua, normas básicas, valores e identidade inicial." }, { id: "e3", question: "A Indústria Cultural, segundo Adorno e Horkheimer, refere-se à:", options: { a: "Produção artística de alta qualidade para o grande público", b: "Produção cultural industrializada que transforma arte em mercadoria e padroniza o gosto", c: "Indústrias que fabricam produtos culturais físicos", d: "A cultura das classes trabalhadoras" }, answer: "b", resolution: "Adorno e Horkheimer cunharam 'Indústria Cultural' para criticar a produção cultural em massa: padronização, repetição de fórmulas, estimulação do consumo passivo e desestímulo ao pensamento crítico. A cultura vira produto e o espectador, consumidor." }, { id: "e4", question: "Relativismo cultural significa:", options: { a: "Que todas as culturas são idênticas", b: "Que não existem diferenças culturais", c: "Analisar e compreender cada cultura segundo seus próprios valores e contexto", d: "Que uma cultura é relativa a outra em termos de superioridade" }, answer: "c", resolution: "O relativismo cultural propõe que cada cultura deve ser compreendida e avaliada a partir de seus próprios termos e contexto, não com base em critérios externos. Foi desenvolvido por antropólogos como Franz Boas como alternativa ao etnocentrismo." }, { id: "e5", question: "O conceito de 'habitus' de Pierre Bourdieu refere-se a:", options: { a: "Os hábitos de consumo da classe alta", b: "Disposições duráveis e estruturadas incorporadas pelos indivíduos através da socialização", c: "As regras formais de comportamento social", d: "A habitação e moradia dos grupos sociais" }, answer: "b", resolution: "O habitus (Bourdieu) são as disposições mentais, corporais e culturais incorporadas inconscientemente pelo indivíduo através da socialização em um campo social específico. Predispõe a perceber, pensar e agir de determinada maneira sem reflexão consciente." }] },
      { id: "desigualdade-social", title: "Desigualdade Social e Estratificação", slug: "sociologia-desigualdade", explanation: `<h2>Desigualdade Social e Estratificação</h2><p>A estratificação social é a organização hierárquica da sociedade em grupos com diferentes graus de poder, prestígio e recursos. A desigualdade social é uma das questões centrais da sociologia.</p><h3>Tipos de Estratificação</h3><p>Castas: sistema rígido, hereditário, sem mobilidade. Índia tradicional. Estamentos: sociedade medieval, com ordens fixas (clero, nobreza, servos). Status: posição social numa sociedade moderna, pode ser adscrito (herdado) ou adquirido. Classes sociais: baseadas na posição econômica; há mobilidade social.</p><h3>Desigualdade no Brasil</h3><p>O Brasil é um dos países mais desiguais do mundo. O coeficiente Gini mede a desigualdade (0 = igualdade perfeita; 1 = máxima desigualdade). Fatores: herança escravocrata, concentração fundiária, acesso desigual à educação, discriminação racial e de gênero.</p><h3>Mobilidade Social</h3><p>A mobilidade social é a possibilidade de mudar de posição na estratificação. Mobilidade vertical (subir ou descer) e horizontal (mudar de posição na mesma camada). No Brasil, a mobilidade é limitada comparada a países europeus.</p>`, videos: [{ id: "v1", title: "Estratificação Social - Classes e Castas", youtubeId: "Hn6-wsP6rmY" }, { id: "v2", title: "Estratificação Social para Weber", youtubeId: "i6JZvWPdfH8" }, { id: "v3", title: "Globalização e Capitalismo - Sociologia", youtubeId: "_P957jZiyGQ" }, { id: "v4", title: "Capitalismo e Trabalho - Sociologia ENEM", youtubeId: "xtTJHkBezT4" }, { id: "v5", title: "Sociologia - Mundo do Trabalho", youtubeId: "LQPffshbEvE" }], exercises: [{ id: "e1", question: "O sistema de castas, presente na Índia tradicional, caracteriza-se por:", options: { a: "Alta mobilidade social baseada no mérito", b: "Divisão rígida e hereditária sem possibilidade de mudança de posição", c: "Classes baseadas exclusivamente na riqueza", d: "Divisão da sociedade entre clero e laicos" }, answer: "b", resolution: "O sistema de castas é uma forma extremamente rígida de estratificação, onde a posição social é determinada pelo nascimento e não pode ser alterada durante a vida. Na Índia, esse sistema (varna) tem raízes milenares, embora seja legalmente proibido desde a Constituição de 1950." }, { id: "e2", question: "O coeficiente de Gini mede:", options: { a: "O crescimento econômico de um país", b: "A desigualdade de renda numa sociedade (0 = igualdade, 1 = desigualdade máxima)", c: "A taxa de natalidade e mortalidade", d: "O IDH de um país" }, answer: "b", resolution: "O índice de Gini, desenvolvido pelo estatístico italiano Corrado Gini, mede a desigualdade de distribuição de renda: 0 representa igualdade perfeita (todos com mesma renda) e 1 representa desigualdade máxima (uma pessoa tem toda a renda)." }, { id: "e3", question: "Mobilidade social vertical ascendente significa:", options: { a: "Mudar de cidade mantendo a mesma classe social", b: "Subir na hierarquia social (mudar para uma classe superior)", c: "Descer na hierarquia social", d: "Permanecer na mesma posição social dos pais" }, answer: "b", resolution: "Mobilidade vertical ascendente é o deslocamento para uma posição mais alta na hierarquia social. Pode ocorrer entre gerações (filho numa classe acima dos pais) ou intrageneracional (o próprio indivíduo ao longo da vida, por educação ou trabalho)." }, { id: "e4", question: "A desigualdade social no Brasil tem raízes históricas relacionadas principalmente a:", options: { a: "Industrialização tardia", b: "Escravidão, concentração fundiária e acesso desigual à educação", c: "Imigração europeia excessiva", d: "Ausência de recursos naturais" }, answer: "b", resolution: "A desigualdade brasileira tem raízes profundas: o sistema escravocrata (que excluiu africanos e seus descendentes da cidadania plena), a concentração da terra desde a colonização, e o acesso historicamente desigual à educação de qualidade perpetuam as disparidades." }, { id: "e5", question: "Para Marx, a classe social é definida por:", options: { a: "O prestígio e status reconhecidos socialmente", b: "A relação com os meios de produção (quem possui vs. quem vende sua força de trabalho)", c: "O nível de educação formal", d: "A origem étnica e cultural" }, answer: "b", resolution: "Para Marx, a classe social é definida pela posição nas relações de produção: a burguesia (capitalista) possui os meios de produção (fábricas, terras, capital) e o proletariado vende sua força de trabalho. Essa relação define os interesses de classe e os conflitos sociais." }] },
      { id: "movimentos-sociais", title: "Movimentos Sociais e Cidadania", slug: "sociologia-movimentos", explanation: `<h2>Movimentos Sociais e Cidadania</h2><p>Movimentos sociais são ações coletivas organizadas que buscam transformações sociais, políticas ou culturais. São fundamentais para a dinâmica das democracias e para a conquista de direitos.</p><h3>Características dos Movimentos Sociais</h3><p>Identidade coletiva (senso de "nós"), oposição (contra quem lutam), projeto (o que querem transformar), ação coletiva organizada. Podem ser progressistas (feminismo, direitos LGBTQ+, ambientalismo) ou conservadores.</p><h3>Movimentos Sociais no Brasil</h3><p>Movimento abolicionista (século XIX). Anarcossindicalismo e movimento operário (início do século XX). Ligas Camponesas (1950-60). Movimento de Direitos Civis e Diretas Já (1984). MST (Movimento dos Sem Terra). Movimento Negro, Feminista, LGBTQ+ e Ambientalista contemporâneos.</p><h3>Cidadania e Direitos</h3><p>T.H. Marshall (1950) propôs três gerações de direitos: civis (século XVIII: liberdades individuais), políticos (XIX: participação política), sociais (XX: saúde, educação, trabalho). O Brasil consolidou esses direitos na Constituição de 1988 ("Constituição Cidadã").</p>`, videos: [{ id: "v1", title: "Globalização e Capitalismo - Sociologia", youtubeId: "_P957jZiyGQ" }, { id: "v2", title: "Mundo do Trabalho - Sociologia ENEM", youtubeId: "LQPffshbEvE" }, { id: "v3", title: "ENEM - Mundo do Trabalho Sociologia", youtubeId: "HUO3MquFdjk" }, { id: "v4", title: "Trabalho e Sociedade - Sociologia", youtubeId: "NEBfTk10yII" }, { id: "v5", title: "Capitalismo e Trabalho - ENEM Sociologia", youtubeId: "xtTJHkBezT4" }], exercises: [{ id: "e1", question: "Os direitos civis, segundo T.H. Marshall, incluem:", options: { a: "Direito ao voto e participação política", b: "Direito à educação, saúde e trabalho", c: "Liberdades individuais como expressão, ir e vir, e propriedade", d: "Direito à moradia e previdência social" }, answer: "c", resolution: "Marshall classificou os direitos em civis (século XVIII): liberdades individuais — expressão, locomoção, propriedade, justiça; políticos (XIX): participação política e eleições; sociais (XX): saúde, educação, trabalho, previdência." }, { id: "e2", question: "O movimento das 'Diretas Já' (1983-84) no Brasil exigia:", options: { a: "Reformas agrárias", b: "Eleições diretas para presidente após a ditadura militar", c: "A criação do MST", d: "O fim do sistema de cotas raciais" }, answer: "b", resolution: "As 'Diretas Já' foi um movimento de massas que mobilizou milhões de brasileiros pedindo eleições diretas para presidente, encerradas durante a ditadura militar (1964-85). Apesar de o projeto Dante de Oliveira não passar, o movimento acelerou a redemocratização." }, { id: "e3", question: "O MST (Movimento dos Trabalhadores Rurais Sem Terra) tem como principal reivindicação:", options: { a: "Salário mínimo mais alto para trabalhadores rurais", b: "Reforma agrária e redistribuição de terras", c: "Exportação de commodities agrícolas", d: "Industrialização do campo" }, answer: "b", resolution: "O MST, fundado em 1984, é um dos maiores movimentos sociais do Brasil e da América Latina. Reivindica a reforma agrária — redistribuição de terras improdutivas para trabalhadores sem terra, enfrentando a histórica concentração fundiária brasileira." }, { id: "e4", question: "A Constituição Federal de 1988 é chamada de 'Constituição Cidadã' porque:", options: { a: "Foi escrita exclusivamente por cidadãos comuns", b: "Ampliou direitos civis, políticos e sociais, reconhecendo a cidadania plena", c: "Criou o cargo de cidadão honorário", d: "Aboliu a distinção entre cidadãos e estrangeiros" }, answer: "b", resolution: "A Constituição de 1988 foi chamada de 'Cidadã' por Ulysses Guimarães porque, após a ditadura, ampliou enormemente os direitos: saúde, educação e previdência como direitos sociais, direitos políticos e liberdades civis garantidos, além de reconhecer populações tradicionais." }, { id: "e5", question: "O movimento feminista luta principalmente contra:", options: { a: "A igualdade de direitos entre homens e mulheres", b: "O patriarcado e as desigualdades de gênero nas esferas pública e privada", c: "A participação das mulheres no mercado de trabalho", d: "A igualdade na educação" }, answer: "b", resolution: "O feminismo é um movimento político e intelectual que denuncia o patriarcado — sistema de dominação masculina — e luta pela igualdade de direitos e oportunidades entre homens e mulheres em todas as esferas: trabalho, política, família, cultura e sexualidade." }] },
      { id: "sociologia-brasileira", title: "Sociologia Brasileira", slug: "sociologia-brasileira", explanation: `<h2>Pensamento Social Brasileiro</h2><p>O Brasil desenvolveu uma rica tradição de pensamento social que busca compreender a formação e as particularidades da sociedade brasileira. Questões como mestiçagem, escravidão, democracia racial e cordialidade marcaram esse debate.</p><h3>Formadores do Pensamento Social Brasileiro</h3><p>Gilberto Freyre (Casa-Grande & Senzala, 1933): propôs que a mestiçagem e a convivência entre raças criou uma democracia racial brasileira. Muito criticado por minimizar os conflitos raciais. Sérgio Buarque de Holanda (Raízes do Brasil, 1936): o "homem cordial" como caráter brasileiro — relações pessoalizadas em vez de formais e impessoais. Caio Prado Júnior: perspectiva marxista da formação econômica do Brasil colonial.</p><h3>Questão Racial no Brasil</h3><p>A "democracia racial" de Freyre foi amplamente contestada. O Brasil tem uma das maiores populações negras do mundo (fora da África). A desigualdade racial é gritante: negros têm menor renda, menor escolaridade e maior vulnerabilidade à violência. Políticas de cotas raciais são resposta a essa desigualdade histórica.</p><h3>Urbanização e Modernização</h3><p>Florestan Fernandes: estudo das populações negras e das contradições da modernização brasileira. Fernando Henrique Cardoso: teoria da dependência. A modernização brasileira foi "pelo alto", sem reforma agrária e com exclusão das classes populares.</p>`, videos: [{ id: "v1", title: "Cultura e Identidade Nacional", youtubeId: "dziV7pCUXDY" }, { id: "v2", title: "Sociologia Clássicos Fundadores", youtubeId: "ZHqFhI1WRfM" }, { id: "v3", title: "Sociologia Brasileira - Pensadores", youtubeId: "UG6PTnPpYrM" }, { id: "v4", title: "Desigualdade Social no Brasil", youtubeId: "_P957jZiyGQ" }, { id: "v5", title: "Sociologia no ENEM - Resumão", youtubeId: "T_tUOFvGEWg" }], exercises: [{ id: "e1", question: "Gilberto Freyre, em 'Casa-Grande & Senzala', propôs:", options: { a: "Que o Brasil é profundamente racista e desigual", b: "Que a mestiçagem gerou uma democracia racial e uma identidade nacional única", c: "Que a escravidão não deixou marcas na sociedade brasileira", d: "Que o Brasil deve voltar ao modelo europeu de sociedade" }, answer: "b", resolution: "'Casa-Grande & Senzala' (1933) de Gilberto Freyre argumentou que a mistura de raças (portugueses, africanos e indígenas) criou uma civilização tropical única e uma 'democracia racial'. A obra foi muito criticada por suavizar o racismo e a violência da escravidão." }, { id: "e2", question: "O 'homem cordial' de Sérgio Buarque de Holanda representa:", options: { a: "O brasileiro como pessoa extremamente gentil e hospitaleira", b: "A tendência brasileira de confundir as esferas pública e privada, privilegiando relações pessoais", c: "O político corrupto que age com aparente cordialidade", d: "O trabalhador dedicado e honesto" }, answer: "b", resolution: "O 'homem cordial' não é simplesmente alguém educado — é uma crítica à tendência brasileira de personalizar relações que deveriam ser impessoais e formais. O coração (cordis) governa onde deveriam governar regras formais, gerando nepotismo e patrimonialismo." }, { id: "e3", question: "A teoria da democracia racial foi criticada principalmente porque:", options: { a: "O Brasil nunca teve mistura racial", b: "Mascara a real desigualdade e o racismo presentes na sociedade brasileira", c: "É uma teoria muito antiga e desatualizada", d: "Foi criada por pensadores estrangeiros sem conhecimento do Brasil" }, answer: "b", resolution: "A 'democracia racial' foi criticada por minimizar o racismo estrutural brasileiro. As evidências mostram persistente desigualdade racial: negros têm menor renda, maior desemprego, menor acesso à educação e são desproporcionalmente vítimas de violência policial." }, { id: "e4", question: "As cotas raciais nas universidades brasileiras têm como objetivo:", options: { a: "Aumentar a competitividade entre estudantes brancos e negros", b: "Compensar desigualdades históricas e garantir representação de grupos marginalizados", c: "Criar escolas separadas para diferentes etnias", d: "Reduzir o número de vagas nas universidades públicas" }, answer: "b", resolution: "As cotas raciais são uma política de ação afirmativa que busca compensar séculos de exclusão histórica dos negros da educação superior. Ao reservar vagas, corrige desvantagens estruturais, aumenta a diversidade e melhora resultados para comunidades historicamente marginalizadas." }, { id: "e5", question: "Florestan Fernandes contribuiu para a sociologia brasileira ao:", options: { a: "Defender a ideia de democracia racial como solução para os problemas do Brasil", b: "Estudar rigorosamente a situação social do negro no Brasil e denunciar o racismo estrutural", c: "Propor o retorno ao sistema colonial como modelo de desenvolvimento", d: "Defender o autoritarismo como forma de modernização" }, answer: "b", resolution: "Florestan Fernandes (1920-1995) foi um dos maiores sociólogos brasileiros. Seu trabalho 'A Integração do Negro na Sociedade de Classes' (1965) denunciou que a Abolição não integrou os negros à sociedade de classes — eles permaneceram excluídos e marginalizados." }] },
    ],
    pdfs: [
      { id: "p1", title: "Fundamentos da Sociologia - Apostila", type: "apostila", description: "Durkheim, Marx, Weber e Comte", downloadUrl: "#pdf-sociologia-fund" },
      { id: "p2", title: "Cultura e Indústria Cultural", type: "resumo", description: "Conceitos e escola de Frankfurt", downloadUrl: "#pdf-cultura-ind" },
      { id: "p3", title: "Desigualdade e Estratificação Social", type: "apostila", description: "Classes sociais e mobilidade", downloadUrl: "#pdf-desigualdade-soc" },
      { id: "p4", title: "Movimentos Sociais Brasileiros", type: "apostila", description: "MST, Diretas Já, feminismo e outros", downloadUrl: "#pdf-mov-sociais" },
      { id: "p5", title: "50 Questões de Sociologia ENEM", type: "exercicios", description: "Com gabarito e comentários", downloadUrl: "#pdf-soc-50q" },
      { id: "p6", title: "Questão Racial no Brasil", type: "apostila", description: "Racismo, cotas e desigualdade racial", downloadUrl: "#pdf-questao-racial" },
      { id: "p7", title: "Cidadania e Direitos Humanos", type: "resumo", description: "Gerações de direitos e Constituição 88", downloadUrl: "#pdf-cidadania-dh" },
      { id: "p8", title: "Globalização e Suas Consequências", type: "apostila", description: "Impactos sociais e culturais", downloadUrl: "#pdf-globalizacao-soc" },
      { id: "p9", title: "Pensamento Social Brasileiro", type: "apostila", description: "Freyre, Buarque, Florestan e outros", downloadUrl: "#pdf-pen-soc-br" },
      { id: "p10", title: "Violência e Segurança Pública", type: "resumo", description: "Análise sociológica da violência", downloadUrl: "#pdf-violencia-soc" },
      { id: "p11", title: "Trabalho e Reestruturação Produtiva", type: "apostila", description: "Fordismo, toyotismo e trabalho hoje", downloadUrl: "#pdf-trabalho-soc" },
      { id: "p12", title: "Simulado de Sociologia - ENEM", type: "exercicios", description: "45 questões no estilo ENEM", downloadUrl: "#pdf-simulado-soc" },
      { id: "p13", title: "Gênero e Sexualidade na Sociologia", type: "apostila", description: "Construção social do gênero", downloadUrl: "#pdf-genero-soc" },
      { id: "p14", title: "Educação e Reprodução Social", type: "resumo", description: "Escola como agente de socialização", downloadUrl: "#pdf-educacao-soc" },
      { id: "p15", title: "Sociologia Urbana - A Cidade", type: "apostila", description: "Urbanização, segregação e periferia", downloadUrl: "#pdf-sociologia-urbana" },
      { id: "p16", title: "Família e Estruturas Familiares", type: "resumo", description: "Transformações da família contemporânea", downloadUrl: "#pdf-familia-soc" },
      { id: "p17", title: "Mídia e Comunicação Social", type: "apostila", description: "Redes sociais, opinião pública e poder", downloadUrl: "#pdf-midia-soc" },
      { id: "p18", title: "Sociologia do Esporte", type: "resumo", description: "Esporte como fenômeno social", downloadUrl: "#pdf-sociologia-esporte" },
      { id: "p19", title: "Populismo e Democracia no Brasil", type: "apostila", description: "Análise sociológica da política brasileira", downloadUrl: "#pdf-populismo-br" },
      { id: "p20", title: "Sociologia Ambiental", type: "apostila", description: "Relação sociedade-natureza e sustentabilidade", downloadUrl: "#pdf-soc-ambiental" },
    ],
  },
];

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find(s => s.slug === slug);
}

export function getTopicBySlug(slug: string): { topic: Topic; subject: Subject } | undefined {
  for (const subject of subjects) {
    const topic = subject.topics.find(t => t.slug === slug);
    if (topic) return { topic, subject };
  }
  return undefined;
}

export function searchContent(query: string): Array<{ topic: Topic; subject: Subject }> {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: Array<{ topic: Topic; subject: Subject }> = [];
  for (const subject of subjects) {
    for (const topic of subject.topics) {
      if (
        topic.title.toLowerCase().includes(q) ||
        subject.name.toLowerCase().includes(q) ||
        topic.explanation.toLowerCase().includes(q)
      ) {
        results.push({ topic, subject });
      }
    }
  }
  return results.slice(0, 20);
}
