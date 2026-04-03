import { useState, useEffect } from 'react';
import { GusnaphLogo } from './components/GusnaphLogo';
import { 
  MessageCircle, 
  Check, 
  Store, 
  ShoppingCart, 
  ChefHat, 
  Factory, 
  Star, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Mail, 
  ArrowRight 
} from 'lucide-react';
import heroImage from 'figma:asset/83ddd3e185b54f1d3a3d362de11275f10792c184.png';

// Fotos reais da Gusnaph
// Centro de Distribuição
import centroDistrib1 from "figma:asset/5469137e4f1440b5ab1b11e06077431950769b85.png";
import centroDistrib2 from "figma:asset/f75428144bf8e8ad9393a19ba916af816c04d513.png";
import centroDistrib3 from "figma:asset/54cdfd7eb4abfd321978a8e20d803a2139c42a89.png";
import centroDistrib4 from "figma:asset/1a41c111482226b55f96cb414064746fa9b93988.png";
import centroDistrib5 from "figma:asset/950a8aef6a89c8aecfdb3031b7e0d9f658dae5ae.png";
import centroDistrib6 from "figma:asset/03b49c286250fa8998316abca7e26d7344faad4a.png";
import centroDistrib7 from "figma:asset/4b38f6f44f5ee98b0af5a58c36eb4100c7fc7069.png";
import centroDistrib8 from "figma:asset/a482af46113a9e3ea1fb441043b72219d218472c.png";
import centroDistrib9 from "figma:asset/8d36889dfec33a2ff0e967925d56e9c3d7500cac.png";
import centroDistrib10 from "figma:asset/2085e227097377bb62c933cb7579c8528ba8c251.png";
import centroDistrib11 from "figma:asset/7a75b9cfe25baef699304731dcde38dd92d42d94.png";
import centroDistrib12 from "figma:asset/7c67e1a9e738024a16d20805f7cd71c7bdbd6905.png";
// Imagem de caixas de suco do centro de distribuição (para Embalagens)
import centroDistribEmbalagens from "figma:asset/0237b2204f23b082430907d9270a03b1bd6cd558.png";

// Granja - Ovos
import granjaOvos1 from "figma:asset/def7d2454046059c1f25d1d18014f21c80a647b5.png";
import granjaOvos2 from "figma:asset/421965de4a1a8403c3b2a03a1661b78c8b9b0ed4.png";
import granjaOvos3 from "figma:asset/c309acb46a20490640bd13a2ce610089e913123d.png";
import granjaOvos4 from "figma:asset/0f9968c5405357362109d128ee1cddae116d4c31.png";
import granjaOvos5 from "figma:asset/bb3aabddd336b2c39ae4cb9e6449d43668c61b47.png";
import granjaOvos6 from "figma:asset/5da50a622577d06f3f4c372c2d88d822b3b403cb.png";
import granjaOvos7 from "figma:asset/4dd47ef6c3a1c6aa5663d9026d81877fd07d0784.png";

// Plantação - Cereais
import plantacaoCereais1 from "figma:asset/8f5b4d64899fe5b39ee5f6bd604cdb499cd065b8.png";
import plantacaoCereais2 from "figma:asset/42869f3c6d3d951d42636fe950095bf4c1b82a60.png";
import plantacaoCereais3 from "figma:asset/6db40d1fb240085fefba1f03f19137c00702d0fb.png";

// Logos dos parceiros
import logoValeDoRancho from "figma:asset/18b2cc76392b0556241dffca3caf50020ed0e78f.png";
import logoLopes from "figma:asset/f28b0c14bdac69ad5f81f19c8ea24f1978fea017.png";
import logoOlinda from "figma:asset/5ffea92b565ea5d2fac93c46f457dc4cf70b79ef.png";
import logoMarca4 from "figma:asset/a35e91bfb6942eff89cb2279d8b5a46b32bbd885.png";
import logoCepera from "figma:asset/62bf0209d8992f8ee30b2f1757e2c573db046818.png";
import logoSeara1 from "figma:asset/5b5ce10c80367ea4f102b30c499e5280bef08a00.png";
import logoAdelCoco from "figma:asset/bc6876bc05a8f7e1166239f9a9895e2b36cfc315.png";
import logoBunge from "figma:asset/3595eec62cb59b426eb93656e5de9403cb0c11da.png";
import logoFrango from "figma:asset/7125a02707b2be1e5bc0ab337bb45f113cefc47e.png";
import logoComigo from "figma:asset/61d6397e68eb746ee7b05ccd8024e23df40641fe.png";
import logoSinha from "figma:asset/534ae2dabb740d7736d196072539345794aa5b31.png";
import logoNutriNectar from "figma:asset/45ec3816b65b115e8ac96411b1ed60832697cad5.png";
import logoFugini from "figma:asset/9a358f9568f07616b7627deb84caf661dcd47413.png";
import logoSalGarca from "figma:asset/be6c4ebf60c89ee31ead98133315533476f2e9bf.png";
import logoDasa from "figma:asset/da0a3bc64fe569b404da4a8888c55b84c6ccd710.png";
import logoPredilecta from "figma:asset/8e9272b10e98ff9d19aedd949a3061b4ebb118ae.png";
import logoAmbidue from "figma:asset/4867a64b5833fbf786486b85d2311b32b6c1b50a.png";
import logoAmendoim from "figma:asset/532f843dac3fd46d077c97126b7246c1dedf3e9d.png";
import logoSeara2 from "figma:asset/d4aef645d3df2a0f33a660a79a7afced7916fd47.png";
import logoPiracanjuba from "figma:asset/68ec12c22bdd90a7acec01aee210d0f5fd46643c.png";

// Images from Unsplash
const images = {
  hero: centroDistrib9,
  eggs: granjaOvos2,
  flour: centroDistrib10,
  spices: centroDistrib6,
  packaging: "https://images.unsplash.com/photo-1762049213265-675d3e57fe5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ5b2ZvYW0lMjBmb29kJTIwcGFja2FnaW5nJTIwY29udGFpbmVyc3xlbnwxfHx8fDE3NzM4NTk3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  beverages: centroDistrib12,
  grains: plantacaoCereais2,
  logistics: centroDistrib1,
  worker: centroDistrib2
};

const WHATSAPP_NUMBER = "556232924839";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const BRAND_RED = "#C73336";

function WhatsAppButton({ text = "Falar no WhatsApp", className = "", variant = "primary" }) {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300";
  const variants = {
    primary: "bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 shadow-lg hover:shadow-xl",
    secondary: "bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-white text-gray-900 px-5 py-2 shadow-sm",
    outline: "border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5 px-6 py-3"
  };

  return (
    <a 
      href={WHATSAPP_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{text}</span>
    </a>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-40 h-auto">
            <GusnaphLogo className="w-full h-full" dark={!isScrolled} />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Quem somos', 'Produtos', 'Como funciona'].map((item, i) => {
            const href = `#${item.toLowerCase().replace(' ', '-')}`;
            // Adjust text color based on scroll/hero overlap
            const textColor = isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white';
            return (
              <a key={i} href={href === '#quem-somos' ? '#about' : href === '#produtos' ? '#products' : '#how-it-works'} className={`${textColor} text-sm font-medium transition-colors`}>
                {item}
              </a>
            )
          })}
          <WhatsAppButton text="Cotar Agora" variant={isScrolled ? "primary" : "secondary"} />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 flex flex-col gap-4 shadow-xl">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 py-2">Quem somos</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 py-2">Produtos</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 py-2">Como funciona</a>
          <WhatsAppButton text="Cotar no WhatsApp" variant="primary" className="w-full" />
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-950 overflow-hidden">
      {/* Subtle dark texture overlay on entire section */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/95 to-gray-950/40 z-10" />

      {/* Right side: Photo collage */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0">
        <div className="h-full grid grid-rows-2 grid-cols-2 gap-1">
          {/* Centro de Distribuição — ocupa toda a coluna da esquerda */}
          <div className="row-span-2 relative overflow-hidden">
            <img
              src={centroDistrib5}
              alt="Centro de Distribuição Gusnaph"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <span className="absolute bottom-3 left-3 text-white/60 text-xs tracking-widest uppercase">Centro de Distribuição</span>
          </div>
          {/* Granja - Ovos */}
          <div className="relative overflow-hidden">
            <img
              src={granjaOvos2}
              alt="Granja Gusnaph"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-black/25" />
            <span className="absolute bottom-3 left-3 text-white/60 text-xs tracking-widest uppercase">Granja</span>
          </div>
          {/* Plantação */}
          <div className="relative overflow-hidden">
            <img
              src={plantacaoCereais3}
              alt="Plantação Gusnaph"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-black/25" />
            <span className="absolute bottom-3 left-3 text-white/60 text-xs tracking-widest uppercase">Plantação</span>
          </div>
        </div>
        {/* gradient to blend collage into the dark left side */}
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-gray-950 to-transparent" />
      </div>

      {/* Left side: Text content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full pt-24 pb-16">
        <div className="max-w-xl space-y-8">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.1] tracking-tight">
              Cotação rápida de <span className="text-[#C73336]">suprimentos</span> para Padarias e Supermercados.
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Reposição sem complicação: ovos, farináceos, embalagens, química para alimentos, condimentos, bebidas e cereais. Você chama, manda sua lista e o comercial responde com a melhor condição.
            </p>

            <div className="flex flex-col gap-3 pt-1">
              {[
                "Atendimento objetivo",
                "Mix completo para o dia a dia",
                "Cotação em poucos minutos (horário comercial)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-200">
                  <div className="bg-[#C73336] p-1 rounded-full shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <WhatsAppButton text="Quero cotar no WhatsApp" variant="primary" className="text-lg px-8 py-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TargetAudienceSection() {
  const audiences = [
    { icon: <ChefHat className="w-8 h-8" />, title: "Padaria / Panificadora" },
    { icon: <ShoppingCart className="w-8 h-8" />, title: "Supermercado / Atacarejo" },
    { icon: <Store className="w-8 h-8" />, title: "Confeitaria" },
    { icon: <Factory className="w-8 h-8" />, title: "Indústria / produção" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Você compra para:</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-[#C73336]/10 w-16 h-16 rounded-xl flex items-center justify-center text-[#C73336] mb-6 group-hover:bg-[#C73336] group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="text-center max-w-2xl">
              <p className="text-xl font-semibold text-gray-900 mb-2">Então você está no lugar certo.</p>
              <p className="text-gray-600">A Gusnaph atende operações que precisam de continuidade de estoque e reposição organizada.</p>
            </div>
            <WhatsAppButton text="Falar com o comercial agora" variant="outline" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const categories = [
    { title: "Ovos e derivados", img: images.eggs },
    { title: "Farináceos e pré-misturas", img: images.flour },
    { title: "Química para alimentos", subtitle: "melhoradores, fermentação", img: images.logistics },
    { title: "Embalagens", subtitle: "balcão, delivery, vitrine", img: images.packaging },
    { title: "Condimentos e complementos", img: images.spices },
    { title: "Bebidas", img: images.beverages },
    { title: "Cereais e derivados", img: images.grains },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Principais categorias</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-2xl h-72 ${i === 0 ? 'lg:col-span-2' : ''} shadow-md border border-white/10`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                 <h3 className="text-2xl font-bold text-white tracking-tight">{cat.title}</h3>
                 {cat.subtitle && <p className="text-white/80 text-sm mt-1">{cat.subtitle}</p>}
                 <div className="h-1 w-12 bg-[#C73336] mt-3 rounded-full"/>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white border border-gray-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Não encontrou o que procura?</h4>
            <p className="text-gray-500">Se preferir, diga só o que está faltando hoje — a gente monta a lista com você.</p>
          </div>
          <WhatsAppButton text="Pedir cotação no WhatsApp" variant="primary" />
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Column — Vimeo embed */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-[300px] md:w-[340px] rounded-[2rem] overflow-hidden shadow-2xl aspect-[9/16]">
              <iframe
                src="https://player.vimeo.com/video/1175213004?autoplay=1&muted=1&loop=1&background=1&playsinline=1"
                title="Apresentação Gusnaph"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                <div className="bg-black/50 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#C73336] fill-[#C73336]" />
                    ))}
                  </div>
                  <p className="text-white text-xs font-medium">"Compromisso e lealdade no atendimento."</p>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F3F4F6] rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#C73336]/5 rounded-full -z-10" />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight">
              Por que comprar com a <span className="text-[#C73336]">Gusnaph</span>?
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed border-l-4 border-[#C73336] pl-6">
              Fornecedor de suprimentos precisa ser parceiro. Aqui o foco é simples: compromisso e lealdade no atendimento — pra sua operação não parar.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                "Atendimento consultivo (sem enrolação)",
                "Reposição mais previsível",
                "Agilidade para cotar e fechar",
                "Organização no pedido e no retorno"
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 hover:bg-white hover:shadow-lg hover:-translate-y-1 p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                  <div className="w-10 h-10 rounded-full bg-[#C73336]/10 flex items-center justify-center mb-4 group-hover:bg-[#C73336] transition-colors">
                    <Check className="w-5 h-5 text-[#C73336] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-gray-900 block text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Chame no WhatsApp", desc: "Informe cidade + tipo de negócio" },
    { num: "02", title: "Envie sua lista", desc: "Texto, foto, PDF ou planilha" },
    { num: "03", title: "Receba a cotação", desc: "E finalize com o comercial" },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">Como funciona</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C73336]/30 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#C73336]/30 transition-all duration-300">
              <div className="absolute -top-6 left-8 bg-[#C73336] text-white w-12 h-12 flex items-center justify-center font-bold text-xl rounded-xl shadow-lg shadow-[#C73336]/20">
                {step.num}
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const reviews = [
    { text: "Atendimento rápido e muito objetivo. Mandei a lista e já recebi a cotação no mesmo dia.", author: "Ana", role: "Padaria (Goiânia/GO)" },
    { text: "Mix completo e parceria no dia a dia. Ajuda muito na reposição da semana.", author: "Marcos", role: "Supermercado" },
    { text: "O comercial entende o que a operação precisa e facilita o processo.", author: "Juliana", role: "Confeitaria" },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">O que dizem nossos parceiros</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl flex flex-col justify-between border border-gray-100">
              <div>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-5 h-5 text-[#C73336] fill-[#C73336]" />
                  ))}
                </div>
                <p className="text-lg italic text-gray-600 mb-6">"{review.text}"</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <a href="https://share.google/6eJKUVNgVIjzGeGnm" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-[#C73336] underline decoration-1 underline-offset-4 transition-colors">
             Ver mais avaliações no Google
           </a>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const partnerLogos = [
    logoValeDoRancho,
    logoLopes,
    logoPiracanjuba,
    logoOlinda,
    logoMarca4,
    logoCepera,
    logoSeara1,
    logoAdelCoco,
    logoBunge,
    logoFrango,
    logoComigo,
    logoSinha,
    logoNutriNectar,
    logoFugini,
    logoSalGarca,
    logoDasa,
    logoPredilecta,
    logoAmbidue,
    logoAmendoim,
    logoSeara2,
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h3 className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-10">Parceiros e marcas do nosso portfólio</h3>
        
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {partnerLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-[100px] h-[60px] md:w-[120px] md:h-[72px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Parceiro ${i + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <p className="mt-8 text-gray-400 text-sm">Trabalhamos com marcas e parceiros que garantem padrão e consistência no fornecimento.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* CTA Final */}
        <div className="bg-gradient-to-r from-[#C73336] to-[#A02729] rounded-3xl p-12 mb-16 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pronto para começar?</h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Entre em contato agora e receba sua cotação personalizada</p>
          <WhatsAppButton text="Quero cotar agora no WhatsApp" variant="secondary" className="text-lg px-8 py-4 !bg-white !text-gray-900 hover:!bg-gray-100" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-48 h-auto">
                <GusnaphLogo className="w-32 h-auto" dark />
              </div>
            </div>
            <p className="text-white/70 max-w-sm mb-6 leading-relaxed">
              Gusnaph Distribuidora de Produtos para Panificação — compromisso e lealdade no atendimento para sua operação não parar.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#C73336]">Contato</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-[#C73336]" />
                <span>Rua C-63, 267, Q.77, L.18, S. Sudoeste — Goiânia/GO — CEP 74305-420</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-[#C73336]" />
                <span>(62) 3292-4839</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-[#C73336]" />
                <span>gusnaph@ig.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#C73336]">Acesso Rápido</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Quem somos</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Como funciona</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Gusnaph Distribuidora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#C73336] selection:text-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <TargetAudienceSection />
        <CategoriesSection />
        <WhyUsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}