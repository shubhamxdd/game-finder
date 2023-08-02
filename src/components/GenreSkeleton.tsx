import { ListItem, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <>
      <ListItem paddingY={"5px"}>
        <Skeleton boxSize="32px" borderRadius={8} />
      </ListItem>
    </>
  );
};

export default GenreSkeleton;
