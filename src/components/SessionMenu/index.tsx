import {
  Tabs,
  TabList,
  Tab,
  TabProps,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { Imagelogo } from "@/components/ImageLogo";
import { LoginForm } from "@/components/LoginForm";
import { SigninForm } from "../SigninForm";

export function SessionMenu() {
  const tabStyles = {
    textTransform: `uppercase`,
    letterSpacing: 5,
    color: `white`,
    p: 4,
    w: `100%`,
    backgroundColor: `rgba(0, 0, 0, 0.48)`,
    _selected: {
      fontWeight: 600,
      color: `white`,
      backgroundColor: `rgba(0, 0, 0, 0)`,
    },
    _focus: { border: `none` },
    _hover: { textDecoration: `underline` },
  } as TabProps;

  return (
    <Tabs
      variant="unstyled"
      maxW={600}
      w="100%"
      h="100vh"
      backgroundColor="mainColor.400"
      justifyContent="space-evenly"
      align="center"
    >
      <TabList mb={14} textAlign="center">
        <Tab {...tabStyles}>Entrar</Tab>
        <Tab {...tabStyles}>Cadastrar</Tab>
      </TabList>

      <Imagelogo marginBottom={8} />
      <TabPanels>
        <TabPanel>
          <LoginForm />
        </TabPanel>

        <TabPanel>
          <SigninForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
