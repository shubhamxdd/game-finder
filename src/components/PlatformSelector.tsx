import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const { data } = usePlatform();
  return (
    <Box marginX={3}>
      <Menu>
        <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
          Platform
        </MenuButton>
        <MenuList>
          {data.map((platform) => {
            return <MenuItem key={platform.id}>{platform.name}</MenuItem>;
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
