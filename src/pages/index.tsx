import Head from "next/head";

import {
  Flex,
  Center,
  VStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { SessionMenu } from "@/components/SessionMenu";

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
        <SessionMenu />

        <VStack w="fill-available">
          <Center>
            <Tabs>
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Center>
          <Center>Propaganda</Center>
          <Center>Video</Center>
        </VStack>
      </Flex>
    </div>
  );
}
