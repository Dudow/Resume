import { Box, BoxProps, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavButtonProps extends BoxProps {
  icon: IconType;
  destinyId: string;
  external?: boolean;
}

export const NavButton = ({
  icon,
  destinyId,
  external = false,
  ...rest
}: NavButtonProps) => {
  return (
    <>
      <Box
        position="absolute"
        left="50%"
        transform="translate(-50%, 0%)"
        color="white"
        p={4}
        border="1px solid"
        borderColor="white"
        bg="black"
        borderRadius="md"
        boxShadow="md"
        transition="0.2s"
        cursor="pointer"
        display="flex"
        as="a"
        href={destinyId}
        target={external ? "_blank" : ""}
        {...rest}
      >
        <Icon as={icon} fontSize={20} />
      </Box>
    </>
  );
};
