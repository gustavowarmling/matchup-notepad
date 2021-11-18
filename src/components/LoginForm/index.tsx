import { FormControl, FormLabel, Link } from "@chakra-ui/react";
import { GeneralButton } from "../GeneralButton/GeneralButton";
import { GeneralInput } from "../GeneralInput";

export function LoginForm() {
  return (
    <>
      <FormControl id="email">
        <FormLabel color="white">Endereço de Email</FormLabel>
        <GeneralInput placeholder="garen@demacia.com" type="email" />
      </FormControl>

      <FormControl id="password">
        <FormLabel color="white">Senha</FormLabel>
        <GeneralInput placeholder="digite sua senha" type="password" />
      </FormControl>

      <GeneralButton text="entrar" type="submit" />

      <Link href="/" alignSelf="baseline" color="white" fontWeight="bold">
        Esqueceu a sua senha?
      </Link>
    </>
  );
}
