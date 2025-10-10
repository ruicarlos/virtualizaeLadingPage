import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "./ContactModal";
import logoImg from "@/assets/logo.png";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Logo Virtualizae"
              className="w-7 h-7 object-contain"
            />
            <span className="font-bold text-xl text-foreground">Virtualizae</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("funcionalidades")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Benefícios
            </button>
          </nav>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            Fale conosco!
          </Button>
        </div>
      </header>
      
      <ContactModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default Header;