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
  }
];