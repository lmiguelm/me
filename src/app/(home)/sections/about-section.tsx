import { LinearBackground } from "@/components/linear-background";
import { Link } from "@/components/link";
import { Subtitle } from "@/components/subtitle";
import { getMyAge } from "@/utils/get-my-age";

export function AboutSection() {
  return (
    <LinearBackground
      variant="highlight"
      className="flex-1 flex flex-col gap-3 rounded-lg p-3"
    >
      <div className="flex justify-between items-center">
        <Subtitle>Sobre</Subtitle>

        <Link
          target="_blank"
          href="/docs/curriculo.pdf"
          title="Ver currículo"
        />
      </div>

      <p className="leading-relaxed text-justify text-sm">
        Tenho {getMyAge()} anos, sou de Araraquara, interior do estado de São
        Paulo. Comecei a programar em 2018, no curso técnico em informática no
        IFSP. Sou formado em Análise e Desenvolvimento de Sistemas na UNIP, e
        atualmente atuo como Desenvolvedor na 5by5 Soluções em Sistemas atuando
        na squad da Azul Linhas Aéreas.
      </p>
    </LinearBackground>
  );
}
