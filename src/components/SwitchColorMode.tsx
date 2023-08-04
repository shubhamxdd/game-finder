import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const SwitchColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="blue"
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
      />
      <Text>Dark mode</Text>
    </HStack>
  );
};

export default SwitchColorMode;
