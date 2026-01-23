export interface Category {
  name: string;
  slug: string;
  image: string;
}

export const categories: Category[] = [
  { name: "Telha Térmica trapezoidal Confort", slug: "telha-termica-trapezoidal-confort", image: "/isotelha-trapezoidal.png" },
  { name: "Telha térmica trapezoidal Sanduiche", slug: "telha-metalica-sanduiche", image: "/telha-metalica-sanduiche.png" },
  { name: "Telha Galvalume Simples trapezoidal", slug: "telha-galvalume-simples-trapezoidal", image: "/telha-galvalume-simples.png" },
  { name: "Calhas e rufos", slug: "calhas-e-rufos", image: "/calhas-e-rufos.png" },
];