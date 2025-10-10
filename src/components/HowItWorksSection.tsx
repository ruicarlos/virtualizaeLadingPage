import howItWorksPhone from "@/assets/how-it-works-phone.png";

const steps = [
  {
    number: "1",
    title: "Adicione o Imóvel",
    description:
      "O cliente acessa a planta do seu empreendimento de forma simples e segura, utilizando o código ou QR Code fornecido pela construtora.",
    position: "top-left",
  },
  {
    number: "2",
    title: "Escaneie o Ambiente",
    description:
      "Basta movimentar o celular pelo cômodos. Nossa tecnologia de reconhecimento mapeia o espaço em segundos: fácil, preciso e direto ao ponto.",
    position: "top-right",
  },
  {
    number: "3",
    title: "Visualize cada detalhe",
    description:
      "Explore toda a rede de tubulações que ganha vida na sua frente através da câmera, sobreposta ao ambiente real.",
    position: "bottom-left",
  },
  {
    number: "4",
    title: "Interaja e Documente",
    description:
      "Ajuste de filtros, crie anotações e comentários para documentar informações importantes.",
    position: "bottom-right",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-normal tracking-wider uppercase mb-4">
            Como funciona?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Construa confiança. Entregue inovação. Garanta segurança.
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Com o Virtualizae, sua construtora não entrega apenas um imóvel, mas um verdadeiro manual interativo que valoriza o empreendimento. 
            Ofereça ao seu cliente a tranquilidade de saber exatamente onde cada instalação passa, evitando perfurações acidentais e custos com reparos. 
            É a ferramenta definitiva para qualquer futura reforma, instalação de móveis ou manutenção.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-150" />
              <img
                src={howItWorksPhone}
                alt="Scanning process"
                className="relative w-120 md:w-[1400px] drop-shadow-2xl z-10"
              />
            </div>
          </div>

          <div className="lg:hidden mt-16 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-background">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
