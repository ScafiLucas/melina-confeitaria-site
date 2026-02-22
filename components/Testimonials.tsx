"use client";

import { Star, Quote } from "lucide-react";
import { useRef, useState, useEffect, type MouseEvent } from "react";
import { testimonials } from "@/data/testimonials";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "5519971193794";
// Para editar depoimentos sem mexer no componente:
// atualize apenas data/testimonials.ts

export default function Testimonials() {
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
      const cardWidth = el.querySelector("[data-carousel-item]")?.getBoundingClientRect().width ?? 320;
      const gap = 20;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, testimonials.length - 1));
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => el.removeEventListener("scroll", handleScroll);
  }, [testimonials.length]);

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
      id="depoimentos"
      className="py-fluid bg-gradient-to-b from-craft-100 to-craft-200"
    >
      <div className="container-fluid px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-fluid-h2 font-heading font-bold mb-4" style={{ color: '#00255F' }}>
            O Que Nossos Clientes{" "}
            <span style={{ color: '#b8a490' }}>Dizem</span>
          </h2>
          <p className="text-fluid-body-lg font-body text-chocolate-700 max-w-3xl mx-auto">
            Depoimentos de quem já provou nosso carinho em forma de doce.
          </p>
        </div>

        <div className="relative overflow-visible">
          {/* Carrossel horizontal puro (igual comportamento da Galeria) */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 -mx-4 pl-4 pr-4 pt-2 pb-4 md:mx-0 md:pl-0 md:pr-6 md:pb-6 scroll-smooth select-none cursor-grab active:cursor-grabbing [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [touch-action:pan-x] [&::-webkit-scrollbar]:hidden"
            style={{ scrollPaddingInline: "1rem" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                data-carousel-item
                className="relative flex-shrink-0 w-[82%] min-w-[280px] max-w-[320px] md:w-[clamp(320px,20vw,400px)] md:min-w-[clamp(320px,20vw,400px)] p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border snap-start first:snap-center last:snap-end md:snap-center"
              style={{ 
                background: 'linear-gradient(135deg, #ebe6dd 0%, #e0d7c9 100%)',
                borderColor: '#d4c5b0'
              }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8" style={{ color: '#8f7054', opacity: 0.4 }} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              <p className="font-body text-chocolate-800 mb-6 italic whitespace-pre-line leading-relaxed">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-heading font-semibold" style={{ color: '#00255F' }}>
                  {testimonial.name}
                </p>
                <p className="text-sm font-body text-chocolate-600">
                  Cliente Melina
                </p>
              </div>
            </div>
          ))}
          </div>

          {/* Indicadores do carrossel */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6" role="tablist" aria-label="Depoimentos">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={activeIndex === idx}
                aria-label={`Depoimento ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-6 bg-chocolate-600"
                    : "w-2 bg-chocolate-300 hover:bg-chocolate-400"
                }`}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const card = el.querySelector(`[data-carousel-item]:nth-child(${idx + 1})`) as HTMLElement;
                  if (card) {
                    el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
                  }
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-chocolate-700 mb-4">
            Quer fazer parte dessa família?
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer minha primeira encomenda.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-chocolate-600 to-chocolate-700 text-white hover:from-chocolate-700 hover:to-chocolate-800 transition-all shadow-lg font-heading font-medium"
          >
            Faça sua Primeira Encomenda
          </a>
        </div>
      </div>
    </section>
  );
}
