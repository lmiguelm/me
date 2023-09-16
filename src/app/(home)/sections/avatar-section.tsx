import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function AvatarSection() {
  return (
    <div className="flex-1 overflow-hidden rounded flex items-center justify-center">
      <AspectRatio ratio={4 / 4}>
        <Image
          src="/avatar.jpg"
          width={500}
          height={500}
          alt="Luis Miguel"
          className="rounded-lg object-cover transition-transform hover:scale-110"
        />
      </AspectRatio>
    </div>
  );
}
