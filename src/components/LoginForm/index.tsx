import {
  FormControl,
  FormLabel,
  Link,
  HStack,
  Divider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GeneralButton } from "../GeneralButton/GeneralButton";
import { GeneralInput } from "../GeneralInput";
import { SocialLogin } from "../SocialLogin";

export function LoginForm() {
  return (
    <VStack paddingX={{ base: 4, lg: 24 }} as="form" spacing={8}>
      <FormControl id="email">
        <FormLabel color="white">Endereço de Email</FormLabel>
        <GeneralInput placeholder="garen@demacia.com" type="email" />
      </FormControl>

      <FormControl id="password">
        <FormLabel color="white">Senha</FormLabel>
        <GeneralInput placeholder="digite sua senha" type="password" />
      </FormControl>

      <GeneralButton text="Entrar" type="submit" />

      <Link href="/" color="white" fontWeight="bold">
        Esqueceu a sua senha?
      </Link>

      <HStack w="100%">
        <Divider />
        <Text fontWeight="bold" color="white">
          OU
        </Text>
        <Divider />
      </HStack>

      <SocialLogin />
    </VStack>
  );
}
