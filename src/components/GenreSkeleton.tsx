import { ListItem, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <>
      <ListItem paddingY={"5px"}>
        <Stack direction="row" alignItems="center">
          <Skeleton boxSize="32px" borderRadius={8} />
          <SkeletonText ml="10px" noOfLines={1} w="100px" />
        </Stack>
      </ListItem>
    </>
  );
};

export default GenreSkeleton;
