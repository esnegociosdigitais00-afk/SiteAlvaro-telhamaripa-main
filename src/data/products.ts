export interface Product {
  id: number;
  name: string;
  ref: string;
  category: string;
  categorySlug: string;
  descriptionShort: string;
  descriptionLong?: string;
  images: string[];
  specs: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Isotelha Trapezoidal Térmica Galvalume natural SEM FORRO - núcleo em PIR 30 mm",
    ref: "0001821",
    category: "Telhas Térmicas",
    categorySlug: "telha-termica-trapezoidal-confort",
    descriptionShort: "A Telha Confort Trapezoidal Sem Forro é composta por duas camadas desenvolvidas para oferecer desempenho e conforto térmico. A camada externa, em aço Galvalume natural, proporciona proteção contra as intempéries, enquanto a camada intermediária, em espuma rígida de PIR, contribui para a estabilidade térmica interna e para a redução do consumo de energia. A face inferior é revestida com filme de alumínio, que não substitui um forro tradicional, sendo indicada para locais que já possuam outro tipo de acabamento, como laje ou rebaixamento de gesso.",
    images: [
      "/isotelha-sem-forro.png",
      "/isotelha-sem-forro-details-1.png",
      "/isotelha-sem-forro-details-2.png"
    ],
    specs: [
      "Núcleo isolante em PIR de 30mm",
      "Modelo Trapezoidal",
      "Face superior em aço galvalume",
      "Sem forro na face inferior (acabamento simples)",
      "Excelente isolamento térmico e acústico",
      "Material retardante a chamas",
    ]
  },
  {
    id: 2,
    name: "Isotelha Trapezoidal Térmica cor Branco neve SEM FORRO - núcleo em PIR 30 mm",
    ref: "0001822",
    category: "Telhas Térmicas",
    categorySlug: "telha-termica-trapezoidal-confort",
    descriptionShort: "A Isotelha Trapezoidal Sem Forro é composta por duas camadas desenvolvidas para oferecer desempenho e conforto térmico. A camada externa, em aço Galvalume pré-pintado na cor Branca, proporciona proteção contra as intempéries, enquanto a camada intermediária, em espuma rígida de PIR, contribui para a estabilidade térmica interna e para a redução do consumo de energia. A face inferior é revestida com filme de alumínio, que não substitui um forro tradicional, sendo indicada para locais que já possuam outro tipo de acabamento, como laje ou rebaixamento de gesso.",
    images: [
      "/isotelha-branca-sem-forro.png",
      "/isotelha-branca-sem-forro-details-1.png",
      "/isotelha-branca-sem-forro-details-2.png"
    ],
    specs: [
      "Núcleo isolante em PIR de 30mm",
      "Modelo Trapezoidal",
      "Face superior em aço galvalume pré-pintado (Branco)",
      "Sem forro na face inferior (filme de alumínio)",
      "Excelente isolamento térmico",
      "Material retardante a chamas",
    ]
  },
  {
    id: 3,
    name: "Isotelha Trapezoidal Térmica Galvalume Natural com Forro cor Branco Neve - Núcleo em PIR 30 mm",
    ref: "0001823",
    category: "Telhas Térmicas",
    categorySlug: "telha-metalica-sanduiche",
    descriptionShort: "A ISOTELHA Trapezoidal é indicada para uma variedade de ambientes, como comércios, indústrias, residências, sítios e templos religiosos. Projetada para oferecer conforto térmico e eficiência energética, esta telha conta com três camadas estratégicas: a externa, em aço galvalume natural, que proporciona durabilidade; a intermediária, composta por espuma de PIR, para isolamento térmico eficaz; e a inferior, em forro de aço pintado na cor Branca, eliminando a necessidade de forros tradicionais. A ISOTELHA Trapezoidal é uma escolha prática e funcional para transformar seus espaços.",
    images: [
      "/isotelha-com-forro-natural-principal.png",
      "/isotelha-com-forro-natural-details-1.png",
      "/isotelha-com-forro-natural-details-2.png"
    ],
    specs: [
      "Núcleo isolante em PIR de 30mm",
      "Modelo Trapezoidal",
      "Face superior em aço galvalume natural",
      "Face inferior com forro em aço pré-pintado (Branco Neve)",
      "Dispensa o uso de forro tradicional",
      "Excelente isolamento térmico",
    ]
  },
  {
    id: 4,
    name: "Isotelha Trapezoidal Térmica-Cor branco neve com forro branco neve - Nucleo em PIR 30 mm",
    ref: "0001824",
    category: "Telhas Térmicas",
    categorySlug: "telha-metalica-sanduiche",
    descriptionShort: "A ISOTELHA Trapezoidal é indicada para uma variedade de ambientes, como comércios, indústrias, residências, sítios e templos religiosos. Projetada para oferecer conforto térmico e eficiência energética, esta telha conta com três camadas estratégicas: a externa na cor branco neve, que proporciona durabilidade; a intermediária, composta por espuma de PIR, para isolamento térmico eficaz; e a inferior, em forro de aço pintado na cor Branca, eliminando a necessidade de forros tradicionais. A ISOTELHA Trapezoidal é uma escolha prática e funcional para transformar seus espaços.",
    images: [
      "/isotelha-branca-com-forro-principal.png",
      "/isotelha-branca-com-forro-details-1.png",
      "/isotelha-branca-com-forro-details-2.png"
    ],
    specs: [
      "Núcleo isolante em PIR de 30mm",
      "Modelo Trapezoidal",
      "Face superior em aço pré-pintado (Branco Neve)",
      "Face inferior com forro em aço pré-pintado (Branco Neve)",
      "Ideal para acabamento estético",
      "Excelente isolamento térmico",
    ]
  },
  {
    id: 5,
    name: "Isotelha Trapezoidal Térmica - Cor Branco neve com Forro amadeirado - Núcleo em PIR 30 mm",
    ref: "0001825",
    category: "Telhas Térmicas",
    categorySlug: "telha-metalica-sanduiche",
    descriptionShort: "A ISOTELHA Trapezoidal é indicada para uma variedade de ambientes, como comércios, indústrias, residências, sítios e templos religiosos. Projetada para oferecer conforto térmico e eficiência energética, esta telha conta com três camadas estratégicas: a externa, na cor branco neve, que proporciona durabilidade; a intermediária, composta por espuma de PIR, para isolamento térmico eficaz; e a inferior, em forro de aço pintado na cor Amadeirado Clara, eliminando a necessidade de forros tradicionais. A ISOTELHA Trapezoidal é uma escolha prática e funcional para transformar seus espaços.",
    images: [
      "/pd-5-principal.png",
      "/pd-5-foto-2.png"
    ],
    specs: [
      "Núcleo isolante em PIR de 30mm",
      "Modelo Trapezoidal",
      "Face superior em aço pré-pintado (Branco Neve)",
      "Face inferior com forro em aço (Amadeirado)",
      "Acabamento estético superior",
      "Excelente isolamento térmico",
    ]
  },
  {
    id: 6,
    name: "Telha Galvalume Simples TP-40 Trapezoidal",
    ref: "0001826",
    category: "Telhas Galvalume Simples",
    categorySlug: "telha-galvalume-simples-trapezoidal",
    descriptionShort: "Uma da telhas metálicas mais utilizadas no mercado brasileiro, possui uma alta resistência mecânica e um baixo custo de aplicação. As Telhas Galvalume Trapezoidais TP40 são indicadas acima de tudo para fechamentos laterais, forros e coberturas em geral. Além, de serem produzidas em aço galvalume natural ou pré-pintado, conferindo maior resistência a corrosão. Permitindo assim, mais segurança e comodidade para você. Produto acima de tudo para coberturas, fachadas e fechamentos laterais em sua obra. Produzida em aço galvalume. Largura total - 1,05mt Trapezio -40mm",
    images: [
      "/telha-galvalume-simples-tp40.png"
    ],
    specs: [
      "Modelo: TP-40 Trapezoidal",
      "Material: Aço Galvalume",
      "Largura total: 1,05m",
      "Altura do trapézio: 40mm",
      "Alta resistência mecânica e à corrosão",
      "Indicada para coberturas, fachadas e fechamentos laterais",
    ]
  },
  {
    id: 7,
    name: "Telha Térmica Sanduiche (EPS) 30mm TP40",
    ref: "0001827",
    category: "Telhas Térmicas",
    categorySlug: "telha-metalica-sanduiche",
    descriptionShort: "As Telhas Térmoacustica, popularmente conhecida como telha sanduíche, é especialmente recomendada para quem busca conforto térmico com economia de energia, reduzindo investimento nos equipamentos de climatização. Vence maiores vãos, economizando na estrutura da cobertura. O isolamento térmico proporcionado pelo núcleo atua como uma cobertura isolante contra o frio ou calor. Uma obra que tenha sua cobertura formada por essas telhas térmicas utiliza menos ar condicionado, atendendo facilmente os requisitos de economia de energia.",
    images: [
      "/telha-termica-sanduiche-eps.png"
    ],
    specs: [
      "Composição: Telha inferior x Placa de EPS 30mm x Telha superior",
      "Largura total: 1,05m",
      "Altura do trapézio: 40mm",
      "Espessura do núcleo (EPS): 30mm",
      "Reduz o consumo de energia com climatização",
      "Excelente isolamento térmico",
    ]
  },
  {
    id: 10,
    name: "Telha Térmica Sanduiche Poliuretano (PU) 30mm TP40",
    ref: "0001830",
    category: "Telhas Térmicas",
    categorySlug: "telha-metalica-sanduiche",
    descriptionShort: "Eleve o desempenho térmico da sua cobertura com a Telha Sanduíche de Poliuretano (PU). Superior ao EPS, o núcleo de PU de 30mm oferece um isolamento térmico excepcional, bloqueando o calor com mais eficiência e garantindo um ambiente interno mais agradável e econômico. Ideal para projetos que exigem máxima performance, esta telha reduz significativamente a necessidade de climatização artificial, proporcionando conforto e economia de energia o ano todo.",
    images: [
      "/telha-termica-sanduiche-pu.png"
    ],
    specs: [
      "Composição: Telha inferior x Placa de PU 30mm x Telha superior",
      "Núcleo isolante em Poliuretano (PU) de alta densidade",
      "Isolamento térmico superior ao EPS",
      "Largura total: 1,05m",
      "Altura do trapézio: 40mm",
      "Máxima eficiência energética e redução de custos",
    ]
  },
  {
    id: 8,
    name: "Calha Galvanizada",
    ref: "0001828",
    category: "Calhas e Rufos",
    categorySlug: "calhas-e-rufos",
    descriptionShort: "Essencial para a proteção da sua construção, a Calha Galvanizada é a solução ideal para o escoamento eficiente da água da chuva. Fabricada em aço galvanizado de alta qualidade, oferece excelente resistência à corrosão e durabilidade, prevenindo infiltrações e danos à estrutura do seu imóvel. Seu design funcional garante uma instalação prática e um acabamento perfeito para qualquer tipo de telhado.",
    images: [
      "/calha-galvanizada.png"
    ],
    specs: [
      "Material: Aço Galvanizado de alta resistência",
      "Proteção contra corrosão e ferrugem",
      "Ideal para escoamento de águas pluviais",
      "Previne infiltrações e umidade",
      "Fácil instalação e baixa manutenção",
      "Disponível em diversos tamanhos (sob consulta)",
    ]
  },
  {
    id: 9,
    name: "Rufo Galvanizado",
    ref: "0001829",
    category: "Calhas e Rufos",
    categorySlug: "calhas-e-rufos",
    descriptionShort: "O Rufo Galvanizado é a peça-chave para a vedação e proteção de encontros entre telhados e paredes, evitando infiltrações e garantindo um acabamento impecável. Produzido com aço galvanizado de alta resistência, ele protege contra a ação da chuva e do tempo, aumentando a vida útil da sua cobertura e paredes. É a solução definitiva para a segurança e estética da sua obra.",
    images: [
      "/rufo-galvanizado.png"
    ],
    specs: [
      "Material: Aço Galvanizado de alta durabilidade",
      "Proteção superior contra infiltrações",
      "Ideal para vedação de paredes e telhados",
      "Acabamento profissional para a sua obra",
      "Resistente à corrosão e intempéries",
      "Fabricado sob medida para seu projeto (sob consulta)",
    ]
  }
];