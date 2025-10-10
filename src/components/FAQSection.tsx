import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o Virtualizae?",
    answer:
      "O Virtualizae é uma solução inovadora de realidade aumentada que permite visualizar toda a infraestrutura hidráulica e elétrica de um imóvel através do smartphone. É como ter um manual interativo e visual do seu empreendimento.",
  },
  {
    question: "Para quem é a solução?",
    answer:
      "A solução é destinada a construtoras que desejam agregar valor aos seus empreendimentos, oferecendo aos clientes uma ferramenta moderna e prática para visualizar e entender toda a infraestrutura interna do imóvel.",
  },
  {
    question: "Como o meu cliente acessa a planta?",
    answer:
      "O acesso é feito de forma simples e segura através de um código ou QR Code fornecido pela construtora. O cliente apenas precisa escanear o código no aplicativo para ter acesso completo à planta e infraestrutura do imóvel.",
  },
  {
    question: "É preciso algum equipamento especial?",
    answer:
      "Não! Basta um smartphone compatível com tecnologia de realidade aumentada (a maioria dos dispositivos modernos). O aplicativo está disponível para Android e iOS, sem necessidade de equipamentos adicionais.",
  },
  {
    question: "O que acontece se o cliente quiser fazer uma anotação?",
    answer:
      "O Virtualizae permite que o cliente crie anotações e comentários diretamente no aplicativo. Essas informações ficam salvas e podem ser acessadas posteriormente, funcionando como um registro pessoal de manutenções e modificações.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Perguntas frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
