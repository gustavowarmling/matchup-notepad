import { FormControl, FormLabel, VStack } from "@chakra-ui/react";
import { GeneralButton } from "../GeneralButton/GeneralButton";
import { GeneralInput } from "../GeneralInput";

export function SigninForm() {
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

      <FormControl id="repeated-password">
        <FormLabel color="white">Repetir senha</FormLabel>
        <GeneralInput
          placeholder="digite novamente sua senha"
          type="password"
        />
      </FormControl>

      <GeneralButton text="Cadastrar" type="submit" />
    </VStack>
  );
}
