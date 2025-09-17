import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import useGameStore from "../store";
import usePlatform from "../hooks/UsePlatform";
import usePlatforms from "../hooks/usePlatforms";



const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const platform = usePlatform()
  const setPlatformId = useGameStore(s => s.setPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
