import { Button } from "@chakra-ui/react";
import { RiGoogleFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri";

type LoginButtonProps = {
  network: "google" | "facebook" | "twitter";
};

export function SocialLoginButton({ network }: LoginButtonProps) {
  const networkIcon = {
    google: <RiGoogleFill />,
    facebook: <RiFacebookFill />,
    twitter: <RiTwitterFill />,
  };

  return (
    <Button
      type="button"
      colorScheme="blackAlpha"
      w="100%"
      p={4}
      leftIcon={networkIcon[network]}
    >
      {network}
    </Button>
  );
}
