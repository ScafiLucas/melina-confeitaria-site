export type GalleryImage = {
  // URL pública da imagem (Cloudinary, Drive público, etc.)
  url: string;
  // Texto alternativo para acessibilidade/SEO
  alt: string;
};

// COMO EDITAR A GALERIA:
// 1) Para adicionar: copie um item e cole no final da lista.
// 2) Para alterar: edite url e/ou alt.
// 3) Para remover: apague o objeto inteiro.
// 4) Mantenha a lista no formato abaixo.
export const galleryImages: GalleryImage[] = [
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771283317/WhatsApp_Image_2026-02-16_at_18.55.33_gfgc3s.jpg",
    alt: "Doces e Bolos Festivos",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771283318/WhatsApp_Image_2026-02-16_at_18.55.27_cxlnpv.jpg",
    alt: "Presentes e Mimos",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771283316/WhatsApp_Image_2026-02-16_at_18.55.36_g8ozht.jpg",
    alt: "Bolos para o Dia-a-Dia",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771283938/WhatsApp_Image_2026-02-16_at_20.18.24_ee5lav.jpg",
    alt: "Cookies",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771283842/WhatsApp_Image_2026-02-16_at_17.16.53_cadipk.jpg",
    alt: "Bolos Especiais",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771283316/WhatsApp_Image_2026-02-16_at_18.55.37_lybc7t.jpg",
    alt: "Docinhos",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771284313/WhatsApp_Image_2026-02-16_at_20.24.42_xeiyav.jpg",
    alt: "Bolos Interativos",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771284315/WhatsApp_Image_2026-02-16_at_18.24.33_a0dshj.jpg",
    alt: "Bolos Caseiros",
  },
  {
    url: "https://res.cloudinary.com/db8aa3e8s/image/upload/v1771284539/WhatsApp_Image_2026-02-16_at_20.28.17_rgzllx.jpg",
    alt: "Bolos Personalizados",
  },
];
