import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrderN: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrderN }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  return (
    // <Box marginX={3}>
    <Menu>
      <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
        Order by : {sortOrder.find((sort) => sort.value === sortOrderN)?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((sort) => {
          return (
            <MenuItem
              key={sort.value}
              value={sort.value}
              onClick={() => onSelectSortOrder(sort.value)}
            >
              {sort.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
    // </Box>
  );
};

export default SortSelector;
