"use client";

import { useRef, useState, useEffect, type MouseEvent } from "react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "5519971193794";

const images = [
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

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const firstCard = el.querySelector("[data-gallery-item]") as HTMLElement;
      const cardWidth = firstCard?.getBoundingClientRect().width ?? 280;
      const gap = 16;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, images.length - 1));
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    dragStartXRef.current = event.pageX;
    dragStartScrollLeftRef.current = event.currentTarget.scrollLeft;
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    event.preventDefault();
    const deltaX = event.pageX - dragStartXRef.current;
    event.currentTarget.scrollLeft = dragStartScrollLeftRef.current - deltaX;
  };

  const stopDragging = () => {
    isDraggingRef.current = false;
  };

  return (
    <section
      id="galeria"
      className="py-fluid bg-white"
    >
      <div className="container-fluid px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-fluid-h2 font-heading font-bold mb-4" style={{ color: '#00255F' }}>
            Galeria
          </h2>
          <p className="text-fluid-body-lg font-body text-chocolate-700 max-w-2xl mx-auto">
            Cada criação é única e especial. Confira alguns dos nossos doces que levam 
            afeto e sabor para momentos inesquecíveis.
          </p>
        </div>

        {/* Mobile: carrossel horizontal | Desktop: grid */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 pl-4 pr-4 pb-2 md:mx-0 md:pl-0 md:pr-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-[clamp(1rem,2vw,1.5rem)] scroll-smooth select-none cursor-grab active:cursor-grabbing [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [touch-action:pan-x] [&::-webkit-scrollbar]:hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
          >
            {images.map((image, idx) => (
              <div
                key={idx}
                data-gallery-item
                className="group relative flex-shrink-0 w-[80vw] max-w-[300px] aspect-square snap-start first:snap-center last:snap-end rounded-2xl overflow-hidden bg-chocolate-100 hover:shadow-2xl transition-all duration-300 border-2 border-chocolate-200 md:flex-shrink md:w-auto"
              >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/80 via-chocolate-900/0 to-chocolate-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium text-center">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
          </div>

          {/* Indicadores do carrossel - só no mobile */}
          <div className="flex justify-center gap-2 mt-4 md:hidden" role="tablist" aria-label="Galeria de fotos">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={activeIndex === idx}
                aria-label={`Foto ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-6 bg-chocolate-600"
                    : "w-2 bg-chocolate-300 hover:bg-chocolate-400"
                }`}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const card = el.querySelector(`[data-gallery-item]:nth-child(${idx + 1})`) as HTMLElement;
                  if (card) {
                    const gap = 16;
                    el.scrollTo({ left: card.offsetLeft - gap, behavior: "smooth" });
                  }
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-chocolate-600 italic mb-6">
            Trabalhamos com encomendas personalizadas para tornar seu momento ainda mais especial
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer uma encomenda personalizada.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-chocolate-600 text-white hover:bg-chocolate-700 transition-all shadow-lg font-heading font-medium"
          >
            Fazer Encomenda Personalizada
          </a>
        </div>
      </div>
    </section>
  );
}
