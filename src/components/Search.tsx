import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (queryText: string | undefined) => void;
}

const Search = ({ onSearch }: Props) => {
  const queryRef = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (queryRef) {
          console.log(queryRef.current?.value);
          onSearch(queryRef.current?.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <FaSearch />
        </InputLeftElement>
        <Input
          ref={queryRef}
          borderRadius={20}
          variant={"filled"}
          placeholder="Search Games.."
        />
      </InputGroup>
    </form>
  );
};

export default Search;
