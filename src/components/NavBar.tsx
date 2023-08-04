import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./SwitchColorMode";
import Search from "./Search";

interface Props {
  onSearch: (queryText: string | undefined) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <Search onSearch={onSearch} />
        <SwitchColorMode />
      </HStack>
    </>
  );
};

export default NavBar;
