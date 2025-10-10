import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroPhone from "@/assets/mobile.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">
              REALIDADE VIRTUAL DE AMBIENTES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-tight">
              Inove a experiência do cliente no seu empreendimento
            </h1>
            <p className="text-lg text-muted-foreground font-bold leading-relaxed">
              Com o Virtualizae, sua construtora entrega mais valor:
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              clientes visualizam em realidade aumentada toda a infraestrutura hidráulica e elétrica do imóvel, direto no celular. Diga adeus aos acidentes em reformas e instalações.
            </p>            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-8 py-6">
              Saiba mais
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroPhone}
                alt="Virtualizae App Interface"
                className="w-full max-w-xl drop-shadow-2xl"
              />
              {/* Floating decorative elements 
              <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-yellow-400 opacity-80 blur-sm" />
              <div className="absolute top-1/4 -right-12 w-12 h-12 rounded-full bg-amber-500 opacity-70 blur-sm" />
              <div className="absolute top-1/2 -left-8 w-14 h-14 rounded-full bg-blue-400 opacity-60 blur-sm" />
              <div className="absolute bottom-1/4 -left-12 w-10 h-10 rounded-full bg-green-400 opacity-70 blur-sm" />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
