import { Box, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { NavButton } from "../../Components/NavButton";
import { ProjectCard } from "../../Components/ProjectCard";

export const Projects = () => {
  return (
    <>
      <Flex height="100vh" w="100%" id="projects">
        <Flex w="100%" className="projectsPattern" position="relative">
          <Flex
            height="100vh"
            className="projectsPattern"
            p={10}
            flexDir="column"
            justifyContent="space-between"
          >
            <Box>
              <Image
                src="/Gradient2Big.png"
                alt="Dudow's logo"
                width={60}
                height={60}
              />
            </Box>

            <Flex
              boxShadow="dark-lg"
              borderTopRadius="md"
              h="100%"
              alignItems="center"
            >
              <SimpleGrid minChildWidth="360px" spacing={10} w="100%">
                <ProjectCard
                  title="Worldow Ranks"
                  destiny="https://worldow.dudow.vercel.app/"
                  githubPath="https://github.com/Dudow/Worldow-Rank"
                />
                <ProjectCard
                  title="Dashgow"
                  githubPath="https://github.com/Dudow/Dashgow"
                />
                <ProjectCard
                  title="EggDino"
                  githubPath="https://github.com/Dudow/EggDino"
                  destiny="https://discord.com/oauth2/authorize?client_id=772102488005935114&scope=bot&permissions=3145"
                />
                <ProjectCard
                  title="Asteroids"
                  githubPath="https://github.com/Dudow/Asteroids"
                />
                <ProjectCard
                  title="Moneow"
                  githubPath="https://github.com/Dudow/moneow"
                />
                <ProjectCard
                  title="Neows"
                  githubPath="https://github.com/Dudow/Neows"
                />
              </SimpleGrid>
            </Flex>

            <Text
              fontSize={["50px", "50px"]}
              letterSpacing="40px"
              pl="40px"
              fontFamily="Monoton"
              as="h1"
              color="white"
              opacity={0.8}
            >
              PROJECTS... OR PROJECTOWS
            </Text>

            <NavButton
              destinyId="#home"
              icon={BsChevronCompactUp}
              top={10}
              backdropFilter="blur(2px)"
              bg="transparent"
              color="pink.400"
              _hover={{ borderColor: "pink.800" }}
            />
            <NavButton
              destinyId="#aboutMe"
              icon={BsChevronCompactDown}
              bottom={10}
              backdropFilter="blur(3px)"
              bg="transparent"
              color="pink.400"
              _hover={{ borderColor: "pink.800" }}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
