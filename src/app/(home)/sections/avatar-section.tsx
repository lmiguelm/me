import { Image } from "@/components/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { createClient } from "@/prismicio";

export async function AvatarSection() {
  const client = createClient();

  const { data } = await client.getSingle("home", {
    fetch: ["home.avatar"],
  });

  return (
    <div className="flex-1 overflow-hidden rounded flex items-center justify-center">
      <AspectRatio ratio={4 / 4}>
        <Image
          field={data.avatar}
          width={500}
          height={500}
          className="rounded-lg object-cover transition-transform hover:scale-110"
        />
      </AspectRatio>
    </div>
  );
}
