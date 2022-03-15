import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { BsChevronCompactDown, BsGithub, BsLinkedin } from "react-icons/bs";
import { NavButton } from "../../Components/NavButton";

export default function Introduction() {
  return (
    <>
      <Flex height="100vh" w="100%" id="home">
        <Flex w="100%" bg="#3237b8" position="relative">
          <Flex
            w="50%"
            height="100vh"
            bg="black"
            p={10}
            flexDir="column"
            justifyContent="space-between"
          >
            <Box w={60} h={60}>
              <Image
                src="/Gradient3Big.png"
                alt="Dudow's logo"
                width={60}
                height={60}
              />
            </Box>
            <Text>Se Voglio, Lo Faccio</Text>

            <Box
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
              boxShadow="dark-lg"
              bg="#3237b8"
              borderTopRadius="md"
              h={500}
              w={500}
            >
              <Box w="100%" h="100%" borderRadius="md"></Box>
            </Box>

            <Text
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
              fontSize={["200px", "100px"]}
              letterSpacing="40px"
              pl="40px"
              textShadow="1px 1px #3237b8"
              fontFamily="Monoton"
              as="h1"
              color="white"
              opacity={0.8}
            >
              DUDOW
            </Text>

            <NavButton
              icon={BsChevronCompactDown}
              destinyId="#projects"
              left="50%"
              bottom={10}
              bg="blue"
              border="0"
              _hover={{
                boxShadow: "dark-lg",
              }}
            />
          </Flex>
          <Flex
            w="50%"
            height="100vh"
            flexDir="column"
            justifyContent="space-between"
            alignItems="flex-end"
            p={10}
          >
            <Flex gap={4}>
              <NavButton
                icon={BsGithub}
                destinyId="https://github.com/Dudow"
                bg="blue"
                border="0"
                position="static"
                transform="none"
                external
                transition="0.2s"
                _hover={{
                  boxShadow: "dark-lg",
                }}
              />
              <NavButton
                icon={BsLinkedin}
                destinyId="https://www.linkedin.com/in/eduardo-nunes-5768a0168/"
                bg="blue"
                border="0"
                position="static"
                transform="none"
                external
                _hover={{
                  boxShadow: "dark-lg",
                }}
              />
            </Flex>

            <Text>Frontend Developer</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
