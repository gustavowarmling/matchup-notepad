import { Button } from "@chakra-ui/react";

type GeneralButtonProps = {
  type?: "button" | "submit" | "reset";
  text: string;
};

export function GeneralButton({ type = `button`, text }: GeneralButtonProps) {
  return (
    <Button type={type} isFullWidth>
      {text}
    </Button>
  );
}
