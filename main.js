const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vocẽ acha que a génetica humana e confiável?",
        alternativas: [
            {
                texto: "Não, a génetica pode destruir o mundo",
                afirmacao: "Num mundo dominado pela busca pelo aprimoramento e pela perfeição, a engenharia genética emerge como uma promessa sedutora de moldar a própria essência da humanidade. No entanto, por trás do véu de promessas de cura e aprimoramento, esconde-se uma realidade sombria de riscos inerentes e consequências imprevistas."
            },
            {
                texto: "Sim é maravilhoso!",
                afirmacao: "Desde os primórdios da história humana, o mistério de nossa própria existência tem nos fascinado. Quem somos? De onde viemos? E, mais importante ainda, para onde estamos indo? No cerne dessas questões está o complexo e maravilhoso código genético que nos define: o DNA."
            }
        ]
    },
    {
        enunciado: "Você acha que devemos conhecer nosso passado?",
        alternativas: [
            {
                texto: "Sim, ja que podemos saber nossas raizes.",
                afirmacao: "A genética humana oferece uma janela para os segredos mais profundos de nossa espécie. Ao decifrar o intricado padrão de nossos genes, somos capazes não apenas de compreender melhor nossa herança ancestral, mas também de desbloquear as chaves para o futuro da medicina, da ciência e até mesmo da própria evolução humana."
            },
            {
                texto: "Não, porque e algo que deve ser esquecido!",
                afirmacao: "A corrida desenfreada pela manipulação genética também levanta sérias preocupações sobre questões de privacidade e segurança. À medida que os dados genéticos se tornam uma mercadoria valiosa, surge o risco de abuso e exploração por parte de entidades governamentais e corporativas, minando a autonomia e a dignidade dos indivíduos."
            }
        ]
    },
    {
        enunciado: "Como devemos lidar com doenças hereditárias?",
        alternativas: [
            {
                texto: "Devemos achar uma maneira de remediar isso!",
                afirmacao: "Imagine um mundo onde doenças hereditárias são coisa do passado. Graças aos avanços na pesquisa genética, estamos cada vez mais perto de tornar essa visão uma realidade. Testes genéticos precisos e acessíveis permitem a identificação precoce de predisposições genéticas para uma variedade de condições médicas, permitindo intervenções preventivas e personalizadas para melhorar a saúde e o bem-estar."
            },
            {
                texto: "Devemos deixar o corpo humano fazer algo!",
                afirmacao: "A manipulação genética, embora ofereça a perspectiva de corrigir defeitos genéticos e prevenir doenças hereditárias, carrega consigo o potencial de criar uma sociedade cada vez mais homogeneizada e padronizada. Ao valorizar determinadas características genéticas em detrimento de outras, corremos o risco de eliminar a diversidade genética que nos torna únicos e resilientes como espécie."
            }
        ]
    },
    {
        enunciado: "Como a engenharia genética está impactando a agricultura e a conservação ambiental?",
        alternativas: [
            {
                texto: "Está fazendo a agricultura ser mais forte e produtiva!",
                afirmacao: "Mas os benefícios da genética humana vão além da saúde. No campo da agricultura, a engenharia genética está ajudando a alimentar uma população mundial em crescimento, desenvolvendo culturas mais resistentes a doenças, pragas e condições ambientais adversas. E na conservação da biodiversidade, a genética é uma ferramenta vital para proteger espécies ameaçadas e restaurar ecossistemas frágeis."
            },
            {
                texto: "Está criando um mundo onde as pessoas adquirem doenças mais faceis!",
                afirmacao: "Além disso, a manipulação genética pode ter consequências imprevisíveis e de longo prazo para o equilíbrio ecológico e a saúde do planeta como um todo. Ao introduzir organismos geneticamente modificados no ambiente natural, corremos o risco de desencadear reações em cadeia irreversíveis que poderiam ter impactos devastadores na biodiversidade e na estabilidade dos ecossistemas."
            }
        ]
    },
    {
        enunciado: "Você acha que a génetica humana pode ser ética?",
        alternativas: [
            {
                texto: "Sim, se for usada de maneira correta!",
                afirmacao: "No entanto, como em todas as áreas da ciência, a pesquisa genética levanta questões éticas e morais importantes. É crucial que avancemos com responsabilidade, garantindo que os benefícios da genética humana sejam acessíveis a todos, enquanto protegemos a privacidade e a dignidade de cada indivíduo."
            },
            {
                texto: "Não, porque o corpo e algo que deve ser manter puro!",
                afirmacao: "Portanto, à medida que navegamos pelas águas turbulentas da engenharia genética, devemos permanecer vigilantes e críticos, lembrando-nos sempre das implicações éticas, sociais e ambientais de nossas ações. Pois, embora possamos ser tentados pelas promessas de cura e aprimoramento, devemos sempre nos perguntar a que custo esses ganhos vêm e se o preço é um que estamos dispostos a pagar."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();