import { Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface ProjectCardProps {
  image: IconType;
  destiny?: string;
}

export const AboutMeMiniCard = ({ image, destiny }: ProjectCardProps) => {
  return (
    <>
      <Flex
        as="a"
        w="fit-content"
        justify="center"
        align="center"
        p={3}
        bg="gray.800"
        borderRadius="lg"
        href={destiny}
        target="_blank"
        boxShadow="dark-lg"
        transition="0.2s"
        _hover={{
          bg: "gray.900",
        }}
      >
        <Icon as={image} color="gray.200" />
      </Flex>
    </>
  );
};
