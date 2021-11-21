import { HStack } from "@chakra-ui/react";
import { SocialLoginButton } from "../SocialLoginButton";

export function SocialLogin() {
  return (
    <HStack w="100%" spacing={4}>
      <SocialLoginButton network="google" />
      <SocialLoginButton network="facebook" />
      <SocialLoginButton network="twitter" />
    </HStack>
  );
}
