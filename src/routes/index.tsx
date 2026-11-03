import { useId, useState } from 'react';
import { createRoute } from '@tanstack/react-router';
import { ArrowDown, ArrowRight, ArrowUpRight, Bluetooth, Check, ChevronLeft, ChevronRight, Cpu, Expand, Film, Lightbulb, Monitor, MoveUpRight, RotateCw, Sparkles, Star, Wifi } from 'lucide-react';
import { Route as rootRoute } from '@/routes/__root';
import { Button } from '@/components/ui/button';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: ProductPage,
});

const productUrl = 'https://aurallight.shop/products/magcubic-projector-android-14-8k-1280-720p-hy300-pro-dual-wifi-290ansi-180-flexible-bt5-0-cinema-outdoor-portable-projector';
const slides = [
  { title: 'Um pequeno projetor. Grandes momentos.', label: 'Vista do produto', tag: 'PROJETADO PARA A SUA ROTINA' },
  { title: 'Seu cinema, onde você estiver.', label: 'Ambiente de cinema', tag: 'MUDE O CLIMA DA SUA SALA' },
  { title: 'Encontre o seu melhor ângulo.', label: 'Ajuste de 180°', tag: 'MAIS LIBERDADE PARA PROJETAR' },
];
const specs = [
  { icon: Cpu, value: 'Android 14', label: 'Sistema integrado' },
  { icon: Monitor, value: 'HD 720p', label: 'Resolução nativa' },
  { icon: Lightbulb, value: '290 ANSI', label: 'Brilho anunciado' },
  { icon: RotateCw, value: '180°', label: 'Ajuste de inclinação' },
  { icon: Wifi, value: 'Dual Wi-Fi', label: 'Conexão sem fio' },
  { icon: Bluetooth, value: 'Bluetooth 5.0', label: 'Conectividade' },
];

function ProjectorArt({ scene, className = '' }: { scene: number; className?: string }) {
  const id = useId().replace(/:/g, '');
  const dark = scene === 1;
  return (
    <svg viewBox="0 0 640 500" role="img" aria-label={`Ilustração do projetor Magcubic: ${slides[scene].label.toLowerCase()}`} className={`h-full w-full ${className}`}>
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" /><stop offset="0.48" stopColor="#f1f0e9" /><stop offset="1" stopColor="#bebfb7" />
        </linearGradient>
        <radialGradient id={`${id}-lens`}>
          <stop stopColor="#8cd4e4" /><stop offset="0.22" stopColor="#374c78" /><stop offset="0.52" stopColor="#172c37" /><stop offset="0.78" stopColor="#496276" /><stop offset="1" stopColor="#101c25" />
        </radialGradient>
        <linearGradient id={`${id}-beam`} x1="0" y1="1" x2="1" y2="0">
          <stop stopColor="#bfe3d5" stopOpacity="0.15" /><stop offset="1" stopColor="#bfe3d5" stopOpacity="0" />
        </linearGradient>
        <filter id={`${id}-shadow`}><feGaussianBlur stdDeviation="12" /></filter>
      </defs>
      {dark && <>
        <rect width="640" height="500" fill="#142b29" />
        <rect x="110" y="45" width="420" height="225" rx="7" fill="#42655d" />
        <circle cx="410" cy="106" r="32" fill="#e4e2bb" />
        <path d="M110 228 250 110 366 241 445 158 530 238V270H110Z" fill="#243e38" />
        <path d="M110 254 275 180 385 270H110Z" fill="#749082" />
        <path d="M0 403Q170 350 320 402T640 401V500H0Z" fill="#203d36" />
      </>}
      {!dark && <>
        <circle cx="328" cy="249" r="185" fill="#e6e9df" />
        <circle cx="328" cy="249" r="154" fill="none" stroke="#f8f9f5" strokeWidth="1.5" />
        <path d="M391 184 640 45V291Z" fill={`url(#${id}-beam)`} />
      </>}
      <g transform={dark ? 'translate(190 204) scale(.55)' : 'translate(0 0)'}>
        <ellipse cx="324" cy="412" rx="142" ry="17" fill="#172822" opacity=".16" filter={`url(#${id}-shadow)`} />
        <ellipse cx="323" cy="400" rx="99" ry="20" fill="#bec3b9" />
        <ellipse cx="323" cy="393" rx="99" ry="18" fill="#f9f9f2" />
        <path d="M251 252V337Q251 377 297 382H348Q393 377 393 337V252" fill="none" stroke="#b7bdb3" strokeWidth="25" />
        <path d="M247 248V332Q247 370 294 375H344Q386 370 386 332V248" fill="none" stroke="#eeeee7" strokeWidth="17" />
        <g transform={scene === 2 ? 'rotate(-28 320 250)' : 'rotate(-12 320 250)'}>
          <rect x="218" y="126" width="200" height="211" rx="49" fill={`url(#${id}-body)`} />
          <rect x="259" y="128" width="159" height="208" rx="47" fill="#f4f4ee" />
          <rect x="275" y="145" width="127" height="152" rx="35" fill="#1e292b" />
          <circle cx="339" cy="209" r="45" fill="#080f14" stroke="#647475" strokeWidth="2" />
          <circle cx="339" cy="209" r="35" fill={`url(#${id}-lens)`} />
          <circle cx="330" cy="198" r="10" fill="#c6eff5" opacity=".32" />
          <circle cx="351" cy="222" r="6" fill="#829bc9" opacity=".6" />
          <circle cx="340" cy="275" r="4" fill="#83aa9b" />
          {[0, 1, 2, 3, 4, 5, 6].map((line) => <path key={line} d={`M231 ${202 + line * 11}h16`} stroke="#a8afa8" strokeWidth="3" strokeLinecap="round" />)}
          <text x="338" y="319" textAnchor="middle" fill="#69746e" fontSize="9" letterSpacing="2" fontFamily="Arial, sans-serif">MAGCUBIC</text>
          <circle cx="244" cy="276" r="12" fill="#e8eae2" stroke="#bec5ba" />
        </g>
      </g>
      {scene === 2 && <>
        <path d="M164 285A175 175 0 0 1 449 107" fill="none" stroke="#6c8b67" strokeWidth="2" strokeDasharray="5 7" />
        <path d="m439 99 12 10-15 4" fill="none" stroke="#6c8b67" strokeWidth="2" />
        <text x="144" y="155" fill="#456742" fontSize="26" fontFamily="Arial, sans-serif">180°</text>
      </>}
    </svg>
  );
}

function BuyLink({ compact = false }: { compact?: boolean }) {
  return (
    <a href={productUrl} className={`inline-flex items-center justify-center gap-3 rounded-xl bg-primary font-semibold text-primary-foreground transition-colors hover:bg-foreground ${compact ? 'min-h-12 px-6 text-sm' : 'min-h-14 w-full px-6 text-base'}`}>
      Comprar Agora <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

function ProductPage() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const navigate = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#produto" className="sr-only z-50 rounded-lg bg-background p-4 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Pular para o produto</a>
      <div className="flex min-h-9 items-center justify-center gap-2 bg-foreground px-4 py-2 text-center text-[11px] tracking-wide text-white sm:text-xs">
        <Sparkles size={13} aria-hidden="true" /> Transforme qualquer espaço no seu cinema particular
      </div>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <a href="#" aria-label="Aural Light — início" className="flex items-center gap-2 text-xl font-semibold tracking-[-0.06em] sm:text-2xl">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background"><Sparkles size={17} strokeWidth={1.5} aria-hidden="true" /></span>
            aural<span className="font-normal">light.</span>
          </a>
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#produto" className="text-foreground">O projetor</a>
            <a href="#experiencia" className="hover:text-foreground">A experiência</a>
            <a href="#especificacoes" className="hover:text-foreground">Especificações</a>
          </nav>
          <a href="#detalhes" className="flex items-center gap-2 text-xs font-medium sm:text-sm">Conheça o HY300 Pro <ArrowDown size={14} aria-hidden="true" /></a>
        </div>
      </header>

      <main id="produto" className="mx-auto max-w-7xl px-5 pb-12 pt-6 sm:px-8 sm:pt-8">
        <nav aria-label="Caminho da página" className="mb-6 flex items-center gap-2 text-[11px] text-muted-foreground sm:mb-8 sm:text-xs">
          <a href="#" className="hover:text-foreground">Início</a><ChevronRight size={12} aria-hidden="true" /><span>Projetores</span><ChevronRight size={12} aria-hidden="true" /><span aria-current="page" className="text-foreground">HY300 Pro</span>
        </nav>
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <section aria-label="Galeria do produto" aria-roledescription="carrossel" className="min-w-0">
            <div
              className={`relative overflow-hidden rounded-3xl border border-border ${active === 1 ? 'bg-foreground text-white' : 'bg-[#f0f1e9]'}`}
              onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
              onTouchEnd={(event) => {
                if (touchStart !== null) {
                  const difference = touchStart - event.changedTouches[0].clientX;
                  if (Math.abs(difference) > 50) navigate(difference > 0 ? 1 : -1);
                }
                setTouchStart(null);
              }}
              onTouchCancel={() => setTouchStart(null)}
            >
              <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
                <span className="rounded-full border border-current/15 px-3 py-1.5 text-[10px] font-semibold tracking-widest">HY300 PRO</span>
                <Button onClick={() => setExpanded(true)} aria-label="Ampliar ilustração do produto" className="h-10 min-h-10 w-10 border-0 bg-background/90 p-0"><Expand size={16} /></Button>
              </div>
              <div aria-live="polite" aria-atomic="true" className="pt-8">
                <ProjectorArt scene={active} className="aspect-[1.16]" />
                <div className="px-6 pb-8 text-center sm:px-10">
                  <p className="mb-2 text-[9px] font-semibold tracking-[0.2em] opacity-65 sm:text-[10px]">{slides[active].tag}</p>
                  <h2 className="mx-auto max-w-xs text-xl font-medium leading-snug tracking-tight sm:text-2xl">{slides[active].title}</h2>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-current/10 px-5 py-3">
                <span className="text-[10px] opacity-65">Ilustração conceitual · {active + 1} / {slides.length}</span>
                <div className="flex gap-2">
                  <Button onClick={() => navigate(-1)} aria-label="Imagem anterior" className="h-10 min-h-10 w-10 p-0"><ChevronLeft size={17} /></Button>
                  <Button onClick={() => navigate(1)} aria-label="Próxima imagem" className="h-10 min-h-10 w-10 p-0"><ChevronRight size={17} /></Button>
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {slides.map((slide, index) => (
                <button key={slide.label} type="button" onClick={() => setActive(index)} aria-label={`Mostrar ${slide.label.toLowerCase()}`} aria-pressed={active === index} className={`overflow-hidden rounded-xl border-2 bg-muted transition-colors ${active === index ? 'border-primary' : 'border-transparent hover:border-border'}`}>
                  <div className="aspect-[1.8] overflow-hidden"><ProjectorArt scene={index} /></div>
                  <span className="block px-1 pb-2 text-[10px] text-muted-foreground sm:text-xs">{slide.label}</span>
                </button>
              ))}
            </div>
          </section>

          <section id="detalhes" aria-labelledby="product-title" className="lg:pt-2">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> CINEMA EM CASA, REINVENTADO</div>
            <h1 id="product-title" className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl">Pequeno no tamanho.<br /><span className="text-muted-foreground">Grande na experiência.</span></h1>
            <p className="mt-4 text-base font-medium">Projetor inteligente Magcubic HY300 Pro</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
              <span className="flex gap-0.5 text-[#b58127]" aria-label="Exemplo visual: 5 estrelas">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" aria-hidden="true" />)}</span>
              <span className="text-muted-foreground">Avaliação demonstrativa</span>
            </div>
            <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">Dê uma nova dimensão às suas noites de filme. Um projetor compacto com Android integrado e ajuste de 180° para transformar uma parede — ou o teto — no seu próximo lugar favorito.</p>
            <div className="my-6 border-y border-border py-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl font-semibold tracking-tight sm:text-4xl">R$ 499,90</span>
                <del className="text-sm text-muted-foreground">R$ 799,90</del>
                <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold text-primary">−37%</span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">Preço ilustrativo do layout. Consulte o valor e as condições atuais na loja.</p>
            </div>
            <div className="mb-6 flex items-center justify-between rounded-xl bg-muted px-4 py-3">
              <div><p className="text-xs text-muted-foreground">Modelo em destaque</p><p className="mt-1 text-sm font-medium">HY300 Pro · Branco</p></div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-primary"><Check size={15} aria-hidden="true" /></span>
            </div>
            <BuyLink />
            <p className="mt-3 text-center text-[11px] text-muted-foreground">Você será direcionado para a página da loja Aural Light.</p>
            <div className="mt-6 grid grid-cols-3 gap-2 border-b border-border pb-6">
              {[{ icon: Cpu, label: 'Android 14' }, { icon: Wifi, label: 'Dual Wi-Fi' }, { icon: RotateCw, label: 'Rotação 180°' }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center text-[11px] text-muted-foreground"><Icon size={20} strokeWidth={1.4} className="text-primary" aria-hidden="true" />{label}</div>
              ))}
            </div>
            <details className="group border-b border-border py-4">
              <summary className="flex list-none items-center justify-between text-sm font-medium">Sobre o produto <ChevronRight size={16} className="transition-transform group-open:rotate-90" aria-hidden="true" /></summary>
              <p className="pt-3 text-xs leading-6 text-muted-foreground">Projetor portátil com resolução nativa de 1280 × 720 pixels, sistema Android 14 e conectividade sem fio. A indicação de 8K no nome do anúncio não equivale à resolução nativa da imagem projetada. Confirme compatibilidades e conteúdo da embalagem na loja.</p>
            </details>
            <details className="group border-b border-border py-4">
              <summary className="flex list-none items-center justify-between text-sm font-medium">Entrega, pagamento e devoluções <ChevronRight size={16} className="transition-transform group-open:rotate-90" aria-hidden="true" /></summary>
              <p className="pt-3 text-xs leading-6 text-muted-foreground">Frete, disponibilidade, formas de pagamento, garantia e política de devolução devem ser consultados diretamente na loja de destino antes da compra.</p>
            </details>
          </section>
        </div>

        <section id="experiencia" className="my-14 overflow-hidden rounded-3xl bg-foreground text-white sm:my-20">
          <div className="grid items-center md:grid-cols-2">
            <div className="px-7 py-10 sm:p-12">
              <span className="text-[10px] font-medium tracking-[0.2em] text-[#bed2ba]">MAIS QUE ASSISTIR. VIVER.</span>
              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">A melhor sessão<br />é no seu lugar favorito.</h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">Filmes, séries e momentos juntos. Apague as luzes, encontre uma superfície clara e deixe a experiência ganhar espaço.</p>
              <a href="#especificacoes" className="mt-6 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-xs font-medium">Conheça os detalhes <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
            <div className="relative">
              <ProjectorArt scene={1} />
              <span className="absolute bottom-4 right-5 text-[9px] text-white/50">Ambiente ilustrativo</span>
            </div>
          </div>
        </section>

        <section id="especificacoes" aria-labelledby="spec-title" className="pb-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-primary">COMPACTO POR FORA. COMPLETO POR DENTRO.</p><h2 id="spec-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">Os detalhes fazem a diferença.</h2></div>
            <Film className="hidden text-primary sm:block" size={32} strokeWidth={1.2} aria-hidden="true" />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {specs.map(({ icon: Icon, value, label }) => (
              <div key={value} className="rounded-2xl border border-border bg-white px-4 py-6">
                <Icon size={24} strokeWidth={1.4} className="mb-6 text-primary" aria-hidden="true" />
                <h3 className="text-sm font-semibold">{value}</h3><p className="mt-1.5 text-[11px] leading-5 text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] leading-5 text-muted-foreground">Especificações baseadas no nome do produto no link informado. Confirme os detalhes técnicos na loja antes de comprar.</p>
        </section>
      </main>

      <footer className="border-t border-border px-5 pb-28 pt-8 sm:px-8 md:pb-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <span className="text-lg font-semibold tracking-tight">aural light.</span>
          <p className="max-w-md text-xs leading-5 text-muted-foreground">Landing page demonstrativa. Ilustrações, preço e estrelas não representam fotos, oferta ou avaliações verificadas.</p>
          <a href={productUrl} className="inline-flex items-center gap-2 text-xs font-medium">Visitar loja <MoveUpRight size={14} aria-hidden="true" /></a>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_24px_#182b2908] backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-3"><div><p className="text-[10px] text-muted-foreground">Preço ilustrativo</p><p className="text-lg font-semibold">R$ 499,90</p></div><BuyLink compact /></div>
      </div>

      {expanded && (
        <dialog
          ref={(node) => { if (node && !node.open) node.showModal(); }}
          onCancel={() => setExpanded(false)}
          onClick={(event) => { if (event.target === event.currentTarget) setExpanded(false); }}
          aria-labelledby="gallery-dialog-title"
          className="fixed inset-0 m-auto max-h-[90dvh] w-[min(92vw,760px)] overflow-auto rounded-3xl border border-border bg-background p-5 text-foreground shadow-2xl backdrop:bg-black/70"
        >
          <div className="flex items-center justify-between gap-4"><h2 id="gallery-dialog-title" className="text-sm font-medium">{slides[active].label}</h2><Button autoFocus onClick={() => setExpanded(false)}>Fechar</Button></div>
          <div className="my-4 overflow-hidden rounded-2xl bg-muted"><ProjectorArt scene={active} /></div>
          <div className="flex items-center justify-between gap-2"><Button onClick={() => navigate(-1)} aria-label="Imagem anterior"><ChevronLeft size={16} /></Button><p aria-live="polite" className="text-center text-xs text-muted-foreground">Ilustração conceitual · {active + 1} / {slides.length}</p><Button onClick={() => navigate(1)} aria-label="Próxima imagem"><ChevronRight size={16} /></Button></div>
        </dialog>
      )}
    </div>
  );
}
