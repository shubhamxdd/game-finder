import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./SwitchColorMode";
import Search from "./Search";

const NavBar = () => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <Search />
        <SwitchColorMode />
      </HStack>
    </>
  );
};

export default NavBar;
