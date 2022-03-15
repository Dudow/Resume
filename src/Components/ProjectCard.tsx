import { Flex, Icon, Text } from "@chakra-ui/react";
import { FiGithub, FiCoffee } from "react-icons/fi";
import { ProjectCardNavButton } from "./ProjectCardNavButton";

interface ProjectCardProps {
  title: string;
  destiny?: string;
  githubPath: string;
}

export const ProjectCard = ({
  title,
  destiny,
  githubPath,
}: ProjectCardProps) => {
  return (
    <>
      <Flex
        overflow="hidden"
        borderRadius="md"
        border="1px solid"
        borderColor="gray.300"
        p="2px"
        h="100%"
      >
        <Flex
          border="1px solid"
          borderColor="gray.200"
          p="2px"
          w="100%"
          borderRadius="md"
        >
          <Flex
            border="1px solid"
            borderColor="gray.100"
            p={4}
            w="100%"
            flexDir="column"
            gap={3}
            borderRadius="md"
            justify="space-between"
            backdropFilter="blur(2px)"
            bg="transparent"
          >
            <Text
              mr={10}
              color="white.800"
              textShadow="1px 1px #97266d"
              letterSpacing={4}
              fontSize="xl"
            >
              {title}
            </Text>
            <Flex w="fit-content" gap={4}>
              <ProjectCardNavButton icon={FiGithub} destiny={githubPath} />
              {destiny && (
                <ProjectCardNavButton icon={FiCoffee} destiny={destiny} />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
