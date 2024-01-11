import { useColorMode, IconButton } from "@chakra-ui/react";
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

function ThemeBtn() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      shadow={'0'}
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
    />
  );
}

export default ThemeBtn;
