import { Button } from "@chakra-ui/react";

type GeneralButtonProps = {
  type?: "button" | "submit" | "reset";
  text: string;
};

export function GeneralButton({ type = `button`, text }: GeneralButtonProps) {
  return (
    <Button type={type} colorScheme="twitter" isFullWidth p={6}>
      {text}
    </Button>
  );
}
