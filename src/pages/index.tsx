import Head from "next/head";

import {
  Flex,
  FormControl,
  VStack,
  FormLabel,
  Center,
  Button,
} from "@chakra-ui/react";
import { GeneralInput } from "@/components/GeneralInput";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matchup Notepad</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex>
        <VStack
          as="form"
          spacing={8}
          align="center"
          justifyContent="center"
          paddingX={24}
          maxW={600}
          w="100%"
          h="100vh"
          backgroundColor="mainColor.400"
        >
          <FormControl id="email">
            <FormLabel color="white">Endereço de Email</FormLabel>
            <GeneralInput placeholder="garen@demacia.com" type="email" />
          </FormControl>

          <FormControl id="password">
            <FormLabel color="white">Senha</FormLabel>
            <GeneralInput placeholder="digite sua senha" type="password" />
          </FormControl>

          <Button type="submit" isFullWidth>
            Entrar
          </Button>
        </VStack>

        <Center w="fill-available">tutorial</Center>
      </Flex>
    </div>
  );
}
