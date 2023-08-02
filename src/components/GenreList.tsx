import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCorppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import { Genre } from "../types/genreTypes";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
                <Button variant="link" onClick={() => onSelectGenre(genre)}>
                  {genre.name}
                </Button>
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
