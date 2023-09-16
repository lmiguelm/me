import { Mail } from "lucide-react";

import { Clipboard } from "@/components/clipboard";
import { LinearBackground } from "@/components/linear-background";
import { Link } from "@/components/link";
import { Subtitle } from "@/components/subtitle";
import { Tooltip } from "@/components/tooltip";

export function ContactSection() {
  return (
    <LinearBackground className="p-3 rounded-lg flex flex-col gap-3">
      <Subtitle>Contato</Subtitle>

      <p className="leading-relaxed text-justify text-sm">
        Espero que tenha gostado do meu portfólio. Caso queria entrar em
        contato, além das minhas redes sociais, segue meu e-mail:
      </p>

      <div className="flex items-center gap-3">
        <Mail className="h-4 w-4 text-muted-foreground max-sm:hidden" />
        <Tooltip message="Clique para copiar">
          <Clipboard textToBeCopied="luismiguelfernandes.marcelo@gmail.com">
            <Link title="luismiguelfernandes.marcelo@gmail.com" />
          </Clipboard>
        </Tooltip>
      </div>
    </LinearBackground>
  );
}
