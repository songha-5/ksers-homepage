import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

interface TransportationFigureProps {
  readonly src: StaticImageData;
  readonly alt: string;
}

export function TransportationFigure({
  src,
  alt,
}: TransportationFigureProps): ReactElement {
  return (
    <Image
      src={src}
      alt={alt}
      sizes="(min-width: 1100px) 1000px, 100vw"
      className="mt-4 h-auto w-full"
    />
  );
}
