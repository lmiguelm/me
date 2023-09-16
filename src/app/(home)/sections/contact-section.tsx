import { Clipboard } from "@/components/clipboard";
import { LinearBackground } from "@/components/linear-background";
import { Subtitle } from "@/components/subtitle";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <LinearBackground className="p-3 rounded-lg flex flex-col gap-3">
      <Subtitle>Contato</Subtitle>

      <p className="leading-relaxed text-justify text-sm">
        Espero que tenha gostado do meu portfólio. Caso queria entrar em
        contato, além das minhas redes sociais, segue meu E-mail e Discord:
      </p>

      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />

          <Clipboard
            position="right"
            textToBeCopied="luismiguelfernandes.marcelo@gmail.com"
          />
        </div>

        <div className="flex items-center gap-2">
          <DiscordLogoIcon className="h-4 w-4" />
          <Clipboard position="right" textToBeCopied="lmiguelm" />
        </div>
      </div>
    </LinearBackground>
  );
}
