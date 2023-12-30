'use client'

import { ImageField } from '@prismicio/client'

import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { Image } from './image'

type Props = {
  images: ImageField[]
}

export function Carousel({ images }: Props) {
  return (
    <CarouselUI className="w-[90%] aspect-video self-center">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.url}>
            <Image field={image} alt="" />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </CarouselUI>
  )
}
