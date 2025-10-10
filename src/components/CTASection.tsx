import heroV from "@/assets/v.png";

const googlePlayBadge = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
const appStoreBadge = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";


const CTASection = () => {
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative bg-primary rounded-3xl p-8 md:p-12 max-w-5xl mx-auto overflow-hidden
                    flex flex-col md:flex-row items-center justify-between md:text-left text-center">
          
          <img
            src={heroV}
            alt="Background V"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full w-auto opacity-1 md:opacity-1 pointer-events-none"
          />
          <div className="relative z-10 flex flex-col items-center md:items-start md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-normal text-primary-foreground mb-4">
              Leve essa inovação para o seu empreendimento
            </h2>
            <p className="text-primary-foreground/90  mb-8">
              Disponível para os clientes dos projetos parceiros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={googlePlayBadge}
                  alt="Get it on Google Play"
                  className="h-14"
                />
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  className="h-14"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;