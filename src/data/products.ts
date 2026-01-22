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
    name: "Isotelha Trapezoidal Térmica Galvalume SEM FORRO– núcleo em PIR 30 mm",
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
    name: "Isotelha Trapezoidal Térmica Branca SEM FORRO– núcleo em PIR 30 mm",
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
  }
];