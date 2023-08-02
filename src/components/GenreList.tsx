import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCorppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <List>
        {data.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  src={getCorppedImageUrl(genre.image_background)}
                  boxSize="32px"
                  borderRadius={8}
                />
                <Text>{genre.name}</Text>
              </HStack>
            </ListItem>
          );
        })}
        {isLoading &&
          skeletons.map((index) => {
            return <GenreSkeleton key={index} />;
          })}
      </List>
    </>
  );
};

export default GenreList;
