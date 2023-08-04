import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <FaSearch />
      </InputLeftElement>
      <Input
        borderRadius={20}
        variant={"filled"}
        placeholder="Search Games.."
      />
    </InputGroup>
  );
};

export default Search;
