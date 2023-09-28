import { PrismicNextImage, PrismicNextImageProps } from "@prismicio/next";
import { getPlaiceholder } from "plaiceholder";

export async function Image(props: PrismicNextImageProps) {
  async function getBlurImg(url?: string | null) {
    if (!url) {
      return "/public/placeholder.svg";
    }

    try {
      const response = await fetch(url);

      const buffer = Buffer.from(await response.arrayBuffer());
      const { base64 } = await getPlaiceholder(buffer);

      return base64;
    } catch {
      return "";
    }
  }

  return (
    <PrismicNextImage
      {...props}
      placeholder="blur"
      blurDataURL={await getBlurImg(props.field?.url)}
    />
  );
}