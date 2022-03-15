import { Box, BoxProps, Flex, FlexboxProps, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface ProjectCardNavButtonProps extends FlexboxProps {
  icon: IconType;
  destiny: string;
}

export const ProjectCardNavButton = ({
  icon,
  destiny,
  ...rest
}: ProjectCardNavButtonProps) => {
  return (
    <>
      <Flex
        color="gray.100"
        p={2}
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        boxShadow="md"
        transition="0.2s"
        cursor="pointer"
        display="flex"
        as="a"
        href={destiny}
        target="_blank"
      >
        <Icon as={icon} fontSize={20} />
      </Flex>
    </>
  );
};
