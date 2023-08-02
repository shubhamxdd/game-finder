import { Text } from "@chakra-ui/react";
import { Platform } from "../types/gameTypes";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => {
        return <Text key={platform.id}>{platform.name}</Text>;
      })}
    </>
  );
};

export default PlatformIconList;
