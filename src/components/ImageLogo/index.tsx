import { Image } from "@chakra-ui/react";

type ImageLogoProps = {
  marginBottom?: string | number;
};

export function Imagelogo({ marginBottom = 0 }: ImageLogoProps) {
  return (
    <Image
      mb={marginBottom}
      src="logo.png"
      alt="Figura aleatória do league of legends"
    />
  );
}
