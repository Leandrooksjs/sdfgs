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
  { id: 1, title: "Algoritmos e Estruturas de Dados", imageSrc: "/images/mockup-mapas-mentais.jpg", alt: "Prévia dos mapas mentais de Ciência da Computação sobre algoritmos e estruturas de dados" },
  { id: 2, title: "Arquitetura e Organização de Computadores", imageSrc: "/images/mockup-mapas-mentais.jpg", alt: "Prévia dos mapas mentais de Ciência da Computação sobre arquitetura de computadores" },
  { id: 3, title: "Sistemas Operacionais", imageSrc: "/images/mockup-mapas-mentais.jpg", alt: "Prévia dos mapas mentais de Ciência da Computação sobre sistemas operacionais" },
  { id: 4, title: "Redes de Computadores", imageSrc: "/images/mockup-mapas-mentais.jpg", alt: "Prévia dos mapas mentais de Ciência da Computação sobre redes de computadores" },
  { id: 5, title: "Banco de Dados", imageSrc: "/images/mockup-mapas-mentais.jpg", alt: "Prévia dos mapas mentais de Ciência da Computação sobre banco de dados" },
  { id: 6, title: "Engenharia de Software", imageSrc: "/images/mockup-mapas-mentais.jpg", alt: "Prévia dos mapas mentais de Ciência da Computação sobre engenharia de software" },
  { id: 7, title: "Segurança da Informação", imageSrc: "/images/mockup-mapas-mentais.jpg", alt: "Prévia dos mapas mentais de Ciência da Computação sobre segurança da informação" },
  { id: 8, title: "Inteligência Artificial e Computação", imageSrc: "/images/mockup-mapas-mentais.jpg", alt: "Prévia dos mapas mentais de Ciência da Computação sobre inteligência artificial" },
];

export const EXCLUSIVE_BONUSES = [
  {
    id: 1,
    title: "Mapa Visual de Big-O",
    imageSrc: "/images/ChatGPT Image 2 de out. de 2026, 11_10_29.png",
    alt: "Mapa visual de complexidade de algoritmos",
    description: "Referência visual para consultar complexidade de algoritmos e comparar desempenho.",
  },
  {
    id: 2,
    title: "Guia Visual de Siglas de TI",
    imageSrc: "/images/ChatGPT Image 2 de out. de 2026, 11_10_44.png",
    alt: "Guia visual de siglas de tecnologia",
    description: "Siglas, termos e conceitos organizados para revisão rápida.",
  },
  {
    id: 3,
    title: "Mapa de Comparativos",
    imageSrc: "/images/ChatGPT Image 2 de out. de 2026, 11_14_26.png",
    alt: "Mapas comparativos de conceitos de computação",
    description: "Comparações entre conceitos que costumam ser confundidos durante o estudo.",
  },
  {
    id: 4,
    title: "Checklist de Revisão",
    imageSrc: "/images/ChatGPT Image 2 de out. de 2026, 11_17_31.png",
    alt: "Checklist visual de revisão de Ciência da Computação",
    description: "Lista organizada para acompanhar assuntos estudados e revisados.",
  },
  {
    id: 5,
    title: "Caderno Visual de Pegadinhas",
    imageSrc: "/images/ChatGPT Image 2 de out. de 2026, 11_18_51.png",
    alt: "Caderno visual de pegadinhas de Ciência da Computação",
    description: "Diferenças, exceções e detalhes que merecem atenção na revisão.",
  },
]


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
    subtitle: "+300 Mapas Mentais de Ciência da Computação",
    items: [
      { label: "+300 Mapas Mentais de Ciência da Computação" },
      { label: "9 grandes áreas de estudo" },
      { label: "Mapas organizados por assunto" },
      { label: "Acesso digital imediato" },
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
    badge: "Mais Escolhido",
    title: "Plano Completo",
    mockupImage: "/images/ChatGPT Image 2 de out. de 2026, 10_45_59.png?v=2",
    mockupAlt: "Mockup do Plano Completo +300 Mapas Mentais de Ciência da Computação",
    items: [
      { label: "+300 Mapas Mentais de Ciência da Computação" },
      { label: "Arquitetura e Organização de Computadores" },
      { label: "Sistemas Operacionais" },
      { label: "Redes de Computadores" },
      { label: "Banco de Dados" },
      { label: "Engenharia de Software" },
      { label: "Mapa Visual de Big-O", bonus: true },
      { label: "Guia Visual de Siglas de TI", bonus: true },
      { label: "Mapa de Comparativos", bonus: true },
      { label: "Checklist de Revisão", bonus: true },
      { label: "Caderno Visual de Pegadinhas", bonus: true },
    ],
    price: "R$ 27,00",
    priceNote: "Pagamento único. Sem mensalidade.",
    ctaId: "cta-pacote-completo",
    ctaHref: CHECKOUT_URLS.COMPLETO,
    ctaLabel: "Quero comprar",
    footnote: "Compra única • Acesso imediato • Garantia de 30 dias",
  },
];

export const UPSELL_ITEMS = [
  "+300 Mapas Mentais de Ciência da Computação",
  "9 grandes áreas de estudo",
  "Arquitetura de Computadores",
  "Sistemas Operacionais",
  "Redes de Computadores",
  "Banco de Dados",
  "Engenharia de Software",
  "Mapa Visual de Big-O",
  "Guia Visual de Siglas de TI",
  "Mapa de Comparativos",
  "Checklist de Revisão",
  "Caderno Visual de Pegadinhas",
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "O material é físico ou digital?",
    answer:
      "O material é 100% digital. Você recebe acesso ao conteúdo e pode consultar os mapas no celular, tablet ou computador.",
  },
  {
    question: "O que existe dentro dos +300 mapas?",
    answer:
      "Os mapas são organizados por grandes áreas da Ciência da Computação, como algoritmos, estruturas de dados, arquitetura, sistemas operacionais, redes, banco de dados, engenharia de software, segurança e inteligência artificial.",
  },
  {
    question: "Os mapas substituem um curso completo?",
    answer:
      "Não. A proposta é funcionar como uma biblioteca visual de estudo e revisão, ajudando a condensar e organizar conceitos para consulta rápida.",
  },
  {
    question: "Posso usar os mapas para revisar antes de uma prova?",
    answer:
      "Sim. A estrutura foi pensada para consulta e revisão, facilitando a retomada de conceitos, comparações e pontos importantes sem precisar percorrer materiais extensos.",
  },
  {
    question: "Como recebo o acesso ao material?",
    answer:
      "Após a confirmação do pagamento, o acesso é liberado digitalmente conforme as instruções da plataforma de compra.",
  },
  {
    question: "Posso estudar pelo celular?",
    answer:
      "Sim. O conteúdo foi organizado para ser consultado digitalmente em diferentes dispositivos.",
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer:
      "Você tem 30 dias para conhecer o material. Dentro das condições da plataforma de pagamento, poderá solicitar o reembolso caso o conteúdo não faça sentido para sua necessidade.",
  },
];

export interface BuyerNotification {
  nome: string;
  cidade: string;
}

export const RECENT_BUYERS: BuyerNotification[] = [
  { nome: "Estudante de TI", cidade: "São Paulo, SP" },
  { nome: "Candidato de Tecnologia", cidade: "Belo Horizonte, MG" },
  { nome: "Estudante de Computação", cidade: "Curitiba, PR" },
  { nome: "Profissional de TI", cidade: "Recife, PE" },
  { nome: "Estudante de Tecnologia", cidade: "Porto Alegre, RS" },
];

// Conteúdo sincronizado com a oferta atual.
