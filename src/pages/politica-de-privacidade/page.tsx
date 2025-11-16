import React from "react";


// Componente da Página
export default function PoliticaDePrivacidadePage() {
  return (
    <main className="pt-28 pb-16">
      {" "}
      {/* pt-28 = 16 (altura do header) + 12 (padding) */}
      <div className="container mx-auto px-4 max-w-4xl">
        {" "}
        {/* max-w-4xl para melhor legibilidade */}
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          Política de Privacidade do Aplicativo Virtualizae
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Última atualização: 14 de novembro de 2025
        </p>
        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 leading-relaxed space-y-6">
          <p>
            Bem-vindo ao Virtualizae. Esta Política de Privacidade descreve como
            a Virtualizae ("nós", "nosso") coleta, usa e protege as informações
            dos usuários em conexão com o uso do nosso aplicativo móvel de
            realidade aumentada ("Aplicativo").
          </p>
          <p>
            Nosso compromisso é com a transparência e a proteção da sua
            privacidade. O objetivo principal do nosso Aplicativo é fornecer uma
            ferramenta de segurança para reformas e manutenções, permitindo a
            visualização de tubulações (água, gás) e linhas de energia (elétrica)
            através da sobreposição de plantas 3D no ambiente real.
          </p>

          <h2 className="text-2xl font-semibold pt-4">
            1. Informações que Coletamos
          </h2>
          <p>
            Para o funcionamento do Aplicativo, coletamos os seguintes tipos de
            informações:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              <strong>Código de Unidade:</strong> Para fornecer a planta 3D
              correta, o usuário deve inserir um "Código de Unidade"
              específico ou escaneá-lo através de um QR Code. Este código é a
              chave de acesso para visualizar o modelo 3D correspondente àquela
              residência ou ambiente.
            </li>
            <li>
              <strong>Informações de Contato (Opcional):</strong> Caso você entre
              em contato conosco para suporte através do nosso site ou e-mail
              (vinculado ao "Fale Conosco"), podemos coletar seu nome, endereço
              de e-mail e o conteúdo da sua mensagem para respondê-lo.
            </li>
            <li>
              <strong>Dados de Diagnóstico e Uso (Anônimos):</strong> Coletamos
              informações anônimas sobre como o Aplicativo é usado, como relatórios
              de falhas (crash logs), tipo de dispositivo (ex: "iPhone 14"),
              sistema operacional (ex: "iOS 17.1") e interações com a interface.
              Estes dados não identificam você pessoalmente e são usados
              exclusivamente para melhorar a estabilidade e a performance do
              Aplicativo.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">
            2. Permissões Essenciais do Aplicativo
          </h2>
          <p>
            Para sua funcionalidade principal, o Aplicativo Virtualizae exige
            acesso à câmera do seu dispositivo.
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              <strong>Leitura de QR Code:</strong> A permissão da câmera é
              utilizada para escanear o QR Code que contém o "Código de
              Unidade".
            </li>
            <li>
              <strong>Realidade Aumentada (AR):</strong> A permissão da câmera é
              essencial para que a tecnologia de AR funcione. O Aplicativo
              analisa o feed de vídeo ao vivo para detectar superfícies (como
              pisos e paredes) e "ancorar" (posicionar) corretamente a planta 3D
              sobre o ambiente real.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">
            3. Nossa Política de Uso da Câmera (Privacidade Fundamental)
          </h2>
          <p className="font-semibold text-foreground">
            A Virtualizae NÃO grava, NÃO tira fotos, NÃO armazena e NÃO
            transmite o feed de vídeo ou imagens do seu ambiente para nossos
            servidores.
          </p>
          <p>
            Todo o processamento de reconhecimento de superfícies e posicionamento
            do modelo 3D é realizado <strong>localmente no seu dispositivo</strong>. As
            imagens capturadas pela câmera são processadas em tempo real e
            descartadas imediatamente após o uso, não sendo salvas nem no
            dispositivo nem na nuvem.
          </p>
          <p>
            As únicas informações enviadas aos nossos servidores são o "Código de
            Unidade" (para que possamos enviar a planta 3D correta de volta para
            o seu app) e os dados de diagnóstico anônimos mencionados no item 1.
          </p>

          <h2 className="text-2xl font-semibold pt-4">
            4. Como Usamos Suas Informações
          </h2>
          <p>
            Utilizamos as informações coletadas estritamente para:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2">
            <li>
              <strong>Fornecer o Serviço Principal:</strong> Autenticar seu
              acesso à planta correta usando o "Código de Unidade".
            </li>
            <li>
              <strong>Habilitar a Função de AR:</strong> Permitir que a câmera
              posicione o modelo 3D no seu ambiente.
            </li>
            <li>
              <strong>Melhorar o Aplicativo:</strong> Analisar relatórios de
              falhas e dados de uso anônimos para corrigir bugs e otimizar a
              experiência.
            </li>
            <li>
              <strong>Prestar Suporte:</strong> Responder às suas dúvidas ou
              solicitações enviadas através dos nossos canais de contato.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">
            5. Compartilhamento de Informações
          </h2>
          <p>
            Nós não vendemos, alugamos ou trocamos suas informações pessoais.
            Não compartilhamos o "Código de Unidade" que você utiliza com
            terceiros.
          </p>
          <p>
            Podemos compartilhar dados de diagnóstico anônimos com provedores de
            serviços de análise (como Google Firebase Analytics ou similares)
            com o único propósito de melhorar o desempenho do aplicativo. Tais
            provedores são obrigados a não utilizar esses dados para outros fins.
          </p>

          <h2 className="text-2xl font-semibold pt-4">6. Segurança dos Dados</h2>
          <p>
            Empregamos medidas de segurança para proteger as informações que
            transitam entre o Aplicativo e nossos servidores (como o uso de
            criptografia SSL/TLS). O acesso às plantas 3D é protegido pelo
            "Código de Unidade".
          </p>

          <h2 className="text-2xl font-semibold pt-4">
            7. Alterações nesta Política de Privacidade
          </h2>
          <p>
            Podemos atualizar nossa Política de Privacidade de tempos em tempos.
            Recomendamos que você revise esta página periodicamente. Alterações
            significativas podem ser comunicadas através de um aviso no
            Aplicativo ou no nosso site.
          </p>

          <h2 className="text-2xl font-semibold pt-4">8. Fale Conosco</h2>
          <p>
            Se você tiver alguma dúvida sobre esta Política de Privacidade ou
            sobre as práticas de dados do Aplicativo Virtualizae, entre em
            contato conosco através do nosso website.
          </p>
        </div>
      </div>
    </main>
  );
}