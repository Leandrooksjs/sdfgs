export const CHECKOUT_URLS = {
  ESSENCIAL: "https://app.zuptos.com.br/checkout/3964ebc0548af57e",
  COMPLETO: "https://app.zuptos.com.br/checkout/58864c8277caafae",
  OFERTA_UPSELL: "https://app.zuptos.com.br/checkout/e8d0547d33daa9bd",
};

export interface CarouselBonusItem {
  id: number;
  title: string;
  imageSrc: string;
  alt: string;
}

export const CAROUSEL_BONUSES: CarouselBonusItem[] = [
  {
    id: 1,
    title: "Mapa Mental Socioemocional 1",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 10_46_35 PM.png",
    alt: "Mapa mental socioemocional 1",
  },
  {
    id: 2,
    title: "Mapa Mental Socioemocional 2",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 10_46_40 PM.png",
    alt: "Mapa mental socioemocional 2",
  },
  {
    id: 3,
    title: "Mapa Mental Socioemocional 3",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 10_46_45 PM.png",
    alt: "Mapa mental socioemocional 3",
  },
  {
    id: 4,
    title: "Mapa Mental Socioemocional 4",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 10_50_21 PM (1).png",
    alt: "Mapa mental socioemocional 4",
  },
  {
    id: 5,
    title: "Mapa Mental Socioemocional 5",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 10_50_21 PM (2).png",
    alt: "Mapa mental socioemocional 5",
  },
  {
    id: 6,
    title: "Mapa Mental Socioemocional 6",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 10_50_21 PM (3).png",
    alt: "Mapa mental socioemocional 6",
  },
  {
    id: 7,
    title: "Mapa Mental Socioemocional 7",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 10_50_21 PM (4).png",
    alt: "Mapa mental socioemocional 7",
  },
  {
    id: 8,
    title: "Mapa Mental Socioemocional 8",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 10_50_21 PM (5).png",
    alt: "Mapa mental socioemocional 8",
  },
];

export const EXCLUSIVE_BONUSES = [
  {
    id: 1,
    title: "Kit do Cantinho da Calma",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 08_06_15 PM (1).png",
    alt: "Kit do Cantinho da Calma",
    description: "Materiais prontos para montar e usar um cantinho de regulação emocional.",
  },
  {
    id: 2,
    title: "Comunicação Escola-Família",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 08_06_16 PM (2).png",
    alt: "Comunicação Escola-Família",
    description: "Modelos e orientações para aproximar escola e família no dia a dia.",
  },
  {
    id: 3,
    title: "Trilha por Faixa Etária",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 08_06_16 PM (3).png",
    alt: "Trilha por Faixa Etária",
    description: "Conteúdos organizados por idade para aplicar no nível certo.",
  },
  {
    id: 4,
    title: "Certificado de Concluído",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 08_06_16 PM (4).png",
    alt: "Certificado de Concluído",
    description: "Certificado digital pronto para entregar ao final do material.",
  },
  {
    id: 5,
    title: "Plano Socioemocional de 30 Dias",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 08_06_16 PM (5).png",
    alt: "Plano Socioemocional de 30 Dias",
    description: "Rotina prática de 30 dias para trabalhar habilidades socioemocionais.",
  },
  {
    id: 6,
    title: "Banco de Dinâmicas e Brincadeiras",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 08_06_16 PM (6).png",
    alt: "Banco de Dinâmicas e Brincadeiras",
    description: "Atividades e brincadeiras prontas para aplicar com as crianças.",
  },
  {
    id: 7,
    title: "Fichas de Observação Socioemocional",
    imageSrc: "/images/ChatGPT Image Sep 25, 2026, 08_06_16 PM (7).png",
    alt: "Fichas de Observação Socioemocional",
    description: "Fichas prontas para registrar avanços e comportamentos socioemocionais.",
  },
];

export interface PricingPlanItem {
  label: string;
  bonus?: boolean;
}

export interface PricingPlan {
  id: string;
  featured?: boolean;
  badge?: string;
  title: string;
  subtitle?: string;
  mockupImage?: string;
  mockupAlt?: string;
  items: PricingPlanItem[];
  excluded?: string[];
  price: string;
  priceNote: string;
  ctaId: string;
  ctaHref: string;
  ctaLabel: string;
  ctaVariant?: "primary" | "muted";
  footnote?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plano-essencial",
    title: "Material Essencial",
    subtitle: "+100 Mapas Mentais Socioemocionais",
    items: [
      { label: "+100 Mapas Mentais Socioemocionais" },
      { label: "Guia Prático de Aplicação em Sala" },
      { label: "Arquivos em PDF de alta qualidade para impressão" },
      { label: "Acesso imediato no e-mail" },
    ],
    price: "R$ 10,00",
    priceNote: "Pagamento único. Sem mensalidade.",
    ctaId: "cta-oferta-basica",
    ctaHref: CHECKOUT_URLS.ESSENCIAL,
    ctaLabel: "Quero comprar",
    ctaVariant: "muted",
  },
  {
    id: "plano-completo",
    featured: true,
    badge: "Mais Escolhido pelas Professoras",
    title: "Plano Premium Completo",
    mockupImage: "/images/mockup-mapas-mentais.jpg",
    mockupAlt: "Mockup do Plano Premium +100 Mapas Mentais Socioemocionais",
    items: [
      { label: "+100 Mapas Mentais" },
      { label: "Guia Prático" },
      { label: "Cartas de Perguntas" },
      { label: "Diário das Emoções" },
      { label: "Guia de Extensão para Casa" },
      { label: "Kit do Cantinho da Calma", bonus: true },
      { label: "Comunicação Escola-Família", bonus: true },
      { label: "Trilha por Faixa Etária", bonus: true },
      { label: "Certificado de Concluído", bonus: true },
      { label: "Plano Socioemocional de 30 Dias", bonus: true },
      { label: "Banco de Dinâmicas e Brincadeiras", bonus: true },
      { label: "Fichas de Observação Socioemocional", bonus: true },
    ],
    price: "R$ 27,00",
    priceNote: "Pagamento único. Sem mensalidade.",
    ctaId: "cta-pacote-completo",
    ctaHref: CHECKOUT_URLS.COMPLETO,
    ctaLabel: "Quero comprar",
    footnote: "Compra 100% segura • Acesso imediato • Garantia de 30 dias",
  },
];

export const UPSELL_ITEMS = [
  "+100 Mapas Mentais Socioemocionais",
  "Guia Prático",
  "Cartas de Perguntas",
  "Diário das Emoções",
  "Guia de Extensão para Casa",
  "Kit do Cantinho da Calma",
  "Comunicação Escola-Família",
  "Trilha por Faixa Etária",
  "Certificado de Concluído",
  "Plano Socioemocional de 30 Dias",
  "Banco de Dinâmicas e Brincadeiras",
  "Fichas de Observação Socioemocional",
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "O material é físico ou digital?",
    answer:
      "O material é 100% digital em formato PDF de alta definição. Você recebe o acesso imediatamente no seu e-mail e pode consultar no celular, tablet, computador ou imprimir quantas vezes desejar.",
  },
  {
    question: "Preciso de apostilas ou cartilhas para aplicar?",
    answer:
      "Não! A premissa central é justamente Educar Emocionalmente Sem Cartilha e Sem Apostilas, priorizando o diálogo real, dinâmicas de roda, brincadeiras e acolhimento nas vivências diárias.",
  },
  {
    question: "Para quais idades os mapas mentais são indicados?",
    answer:
      "São focados na Primeira Infância e Educação Infantil (crianças de 0 a 5 anos e 11 meses), sendo também de grande utilidade e fácil adaptação para os anos iniciais do Ensino Fundamental (1º e 2º ano).",
  },
  {
    question: "O conteúdo está de acordo com a BNCC?",
    answer:
      'Sim! O material está totalmente alinhado com a BNCC da Educação Infantil, especialmente com os campos de experiências "O eu, o outro e o nós" e "Corpo, gestos e movimentos".',
  },
  {
    question: "Como recebo o acesso ao material?",
    answer:
      "Assim que o pagamento for confirmado, você receberá imediatamente no seu e-mail os dados de acesso para download instantâneo de todos os arquivos e bônus.",
  },
  {
    question: "Posso imprimir para colocar na minha sala de aula?",
    answer:
      "Sim! Todos os arquivos foram preparados com diagramação profissional e cores vivas em alta resolução para que você possa imprimir em folhas A4 ou cartazes.",
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer:
      "Você tem 30 dias inteiros para explorar todos os Mapas Mentais e bônus. Se por qualquer motivo achar que o material não atende às suas expectativas, basta solicitar o reembolso e 100% do seu valor será devolvido, sem complicações.",
  },
];

export interface BuyerNotification {
  nome: string;
  cidade: string;
}

export const RECENT_BUYERS: BuyerNotification[] = [
  { nome: "Profª Juliana M.", cidade: "São Paulo, SP" },
  { nome: "Profª Mariana R.", cidade: "Belo Horizonte, MG" },
  { nome: "Profª Carla S.", cidade: "Curitiba, PR" },
  { nome: "Profª Patrícia L.", cidade: "Recife, PE" },
  { nome: "Profª Fernanda T.", cidade: "Porto Alegre, RS" },
  { nome: "Profª Amanda C.", cidade: "Fortaleza, CE" },
  { nome: "Profª Camila B.", cidade: "Salvador, BA" },
  { nome: "Profª Beatriz V.", cidade: "Goiânia, GO" },
  { nome: "Profª Renata P.", cidade: "Campinas, SP" },
  { nome: "Profª Débora F.", cidade: "Florianópolis, SC" },
];
