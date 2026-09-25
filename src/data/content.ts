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
    title: "Kit do Cantinho da Calma",
    imageSrc: "/images/bonus-kit-cantinho-calma.jpg",
    alt: "Bônus: Kit do Cantinho da Calma",
  },
  {
    id: 2,
    title: "Comunicação Escola-Família",
    imageSrc: "/images/bonus-06-roteiros-familias.jpg",
    alt: "Bônus: Comunicação Escola-Família",
  },
  {
    id: 3,
    title: "Trilha por Faixa Etária",
    imageSrc: "/images/bonus-trilha-faixa-etaria.jpg",
    alt: "Bônus: Trilha por Faixa Etária",
  },
  {
    id: 4,
    title: "Certificado de Concluído",
    imageSrc: "/images/bonus-certificado-concluido.jpg",
    alt: "Bônus: Certificado de Concluído",
  },
  {
    id: 5,
    title: "Plano Socioemocional de 30 Dias",
    imageSrc: "/images/bonus-01-plano-30-dias.jpg",
    alt: "Bônus: Plano Socioemocional de 30 Dias",
  },
  {
    id: 6,
    title: "Banco de Dinâmicas e Brincadeiras",
    imageSrc: "/images/bonus-02-dinamicas.jpg",
    alt: "Bônus: Banco de Dinâmicas e Brincadeiras",
  },
  {
    id: 7,
    title: "Fichas de Observação Socioemocional",
    imageSrc: "/images/bonus-03-fichas-observacao.jpg",
    alt: "Bônus: Fichas de Observação Socioemocional",
  },
];

export const EXCLUSIVE_BONUSES = [
  { icon: "🧘", title: "Kit do Cantinho da Calma" },
  { icon: "💌", title: "Comunicação Escola-Família" },
  { icon: "🌱", title: "Trilha por Faixa Etária" },
  { icon: "🎓", title: "Certificado de Concluído" },
  { icon: "🗓️", title: "Plano Socioemocional de 30 Dias" },
  { icon: "🎲", title: "Banco de Dinâmicas e Brincadeiras" },
  { icon: "📋", title: "Fichas de Observação Socioemocional" },
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
    excluded: [
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
