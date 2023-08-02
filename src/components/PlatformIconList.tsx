import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../types/gameTypes";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendoswitch,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={2}>
        {platforms.map((platform) => {
          return (
            <Icon
              as={iconsMap[platform.slug]}
              key={platform.id}
              color="gray.400"
            />
          );
        })}
      </HStack>
    </>
  );
};

export default PlatformIconList;
