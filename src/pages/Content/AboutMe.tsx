import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { AboutMeMiniCard } from "../../Components/AboutMeMiniCard";
import {
  SiAnilist,
  SiGoodreads,
  SiLinkedin,
  SiGithub,
  SiGmail,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";
import { NavButton } from "../../Components/NavButton";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

export const AboutMe = () => {
  return (
    <>
      <Flex
        height="100vh"
        w="100%"
        justifyContent="space-between"
        id="aboutMe"
        position="relative"
      >
        <Flex
          p={10}
          flexDir="column"
          flex={3}
          className="aboutMePattern"
          justifyContent="space-between"
        >
          <Box>
            <Image
              src="/Gradient1Big.png"
              alt="Dudow's logo"
              width={60}
              height={60}
            />
          </Box>
          <Flex flexDir="column">
            <Text lineHeight={0} color="#8cc0dc">
              Yo!
            </Text>
            <Text fontSize="5xl" marginLeft="-4px" color="#8f87ce">
              Dudow here
            </Text>
            <Text lineHeight={0} color="#8cc0dc">
              Your cutest Frontend developer
            </Text>
            <Flex mt={10} gap={3}>
              <AboutMeMiniCard
                destiny="https://anilist.co/user/DinossauroTarado/"
                image={SiAnilist}
              />
              <AboutMeMiniCard
                destiny="https://www.goodreads.com/user/show/138261088-dudow"
                image={SiGoodreads}
              />
              <AboutMeMiniCard
                destiny="https://www.linkedin.com/in/eduardo-nunes-5768a0168/"
                image={SiLinkedin}
              />
              <AboutMeMiniCard
                destiny="https://github.com/Dudow"
                image={SiGithub}
              />
              <AboutMeMiniCard
                destiny="mailto:edu30.nm@gmail.com.br"
                image={SiGmail}
              />
              <AboutMeMiniCard
                destiny="https://t.me/virgemAosVinte"
                image={SiTelegram}
              />
              <AboutMeMiniCard
                destiny="https://wa.me/5543999672966?text=E aí, Dudow!"
                image={SiWhatsapp}
              />
            </Flex>
            <Flex
              gap={6}
              p={6}
              bg="gray.900"
              borderRadius="lg"
              mt={10}
              w="fit-content"
              boxShadow="dark-lg"
            >
              <Flex flexDir="column">
                <Text fontSize="3xl" fontWeight="bold" color="#8f87ce">
                  1
                </Text>
                <Text>Year experience</Text>
              </Flex>
              <Flex flexDir="column">
                <Text fontSize="3xl" fontWeight="bold" color="#8f87ce">
                  33
                </Text>
                <Text>Books read</Text>
              </Flex>
              <Flex flexDir="column">
                <Text fontSize="3xl" fontWeight="bold" color="#8f87ce">
                  0
                </Text>
                <Text>Girlfriends</Text>
              </Flex>
            </Flex>
          </Flex>
          <Text>Brazilian, 20</Text>
        </Flex>
        <Flex
          p={10}
          flexDir="column"
          flex={2}
          position="relative"
          className="aboutMePattern2"
        >
          <Text
            position="absolute"
            right="-180px"
            top="50%"
            transform={"rotate(-90deg) translate(20%, 0px)"}
            fontFamily="Monoton"
            fontSize={100}
            opacity={0.3}
            color="#88d0dc"
            transition="0.6s"
            cursor="default"
            _hover={{
              color: "gray.800",
            }}
          >
            DUDOW
          </Text>
        </Flex>
        <NavButton
          destinyId="#projects"
          icon={BsChevronCompactUp}
          top={10}
          backdropFilter="blur(2px)"
          bg="gray.800"
          border="0"
          color="#5f52cc"
          _hover={{ borderColor: "pink.800" }}
        />
      </Flex>
    </>
  );
};
