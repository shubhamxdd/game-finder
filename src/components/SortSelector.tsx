import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";

const SortSelector = () => {
  return (
    // <Box marginX={3}>
    <Menu>
      <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
        Order by
      </MenuButton>
      <MenuList>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
        <MenuItem>4</MenuItem>
        <MenuItem>5</MenuItem>
        <MenuItem>6</MenuItem>
      </MenuList>
    </Menu>
    // </Box>
  );
};

export default SortSelector;
