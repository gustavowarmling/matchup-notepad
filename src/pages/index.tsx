import Head from "next/head";

import {
  Flex,
  FormControl,
  VStack,
  FormLabel,
  Center,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { GeneralInput } from "@/components/GeneralInput";
import { Imagelogo } from "@/components/ImageLogo";
import { GeneralButton } from "@/components/GeneralButton/GeneralButton";
import { LoginForm } from "@/components/LoginForm";

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
          <Imagelogo />

          <LoginForm />
        </VStack>

        <Center w="fill-available">tutorial</Center>
      </Flex>
    </div>
  );
}
