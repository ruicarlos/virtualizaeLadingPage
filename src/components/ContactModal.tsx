// src/components/ContactModal.jsx

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ContactModal = ({ isOpen, onOpenChange }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5585985935792";
    const { name, message } = formData;

    const text = `Olá! Meu nome é ${name}. \n\nMensagem: ${message}`;
    
    const encodedText = encodeURIComponent(text);
    
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Falha ao enviar o email.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] bg-background text-foreground">
        <DialogHeader>
          <DialogTitle>Fale Conosco</DialogTitle>
          <DialogDescription>
            Escolha como prefere entrar em contato conosco.
          </DialogDescription>
        </DialogHeader>
        {status === "success" ? (
          <div className="py-10 text-center">
            <h3 className="text-lg font-medium text-green-500">Mensagem Enviada!</h3>
            <p className="text-muted-foreground">Obrigado pelo seu contato. Responderemos em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nome
                </Label>
                <Input id="name" value={formData.name} onChange={handleChange} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="message" className="text-right">
                  Mensagem
                </Label>
                <Textarea id="message" value={formData.message} onChange={handleChange} className="col-span-3" required />
              </div>
            </div>
            <DialogFooter className="">
             
               <Button 
                type="submit"
                onClick={handleWhatsAppRedirect}
              >
            
                Enviar via WhatsApp
              </Button>

              {/*
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Enviando..." : "Enviar por Email"}
              </Button>

              */}
            </DialogFooter>
             {status === 'error' && <p className="text-sm text-red-500 text-center mt-2">Ocorreu um erro ao enviar a Mensagem. Tente novamente.</p>}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};