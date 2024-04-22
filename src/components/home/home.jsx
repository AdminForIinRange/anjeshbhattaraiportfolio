import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Spacer,
  useMediaQuery,
  Icon,
} from "@chakra-ui/react";

import FlowerCross from "../../svg/SunSpike.svg";

import SunSpike from "../../svg/FlowerCross.svg";

import Pellets from "../../svg/SunSpike.svg";
import Asterisks from "../../svg/FlowerCross.svg";

//   import FlowerCross from "../../svg/FlowerCross.svg";
//   import Pellets from "../../svg/Pellets.svg";
//   import Asterisks from "../../svg/SunSpike.svg";
//   import SunSpike from "../../svg/Asterisks.svg";

import Image from "next/image";

const Home = () => {
  return (
    <>
      <HStack
        id={"Home"}
        w={"100%"}
        h={"100%"}
        align={"center"}
        justify={"center"}
      >
        <VStack
          w={"100%"}
          h={"100%"}
          align={"center"}
          justify={"center"}
          fontFamily={"Raleway"}
        >
          <HStack
            zIndex={0}
            w={["80%", "80%", "80%", "60%", "45%"]}
            h={["120%", "120%", "110%", "100%", "100%"]}
            align={"center"}
            justify={"start"}
            top={"-200"}
            position={"absolute"}
          >
            <Box width={["100px", "150px", "200px", "250px", "250px"]}>
              <Image src={Pellets} />
            </Box>
          </HStack>

          <Text
            textColor={["white", "red", "blue", "green", "yellow"]}
            zIndex={1}
            fontSize={["90px", "100px", "150px", "200px", "200px"]}
            fontWeight={"bold"}
            color={"white"}
            fontFamily={"Raleway"}
          >
            Anjesh
          </Text>
          <Text
            mt={"-25px"}
            zIndex={1}
            fontWeight={"bold"}
            fontSize={["25px", "30px", "30px", "50px", "50px"]}
            color={"white"}
            fontFamily={"Raleway"}
          >
            Full Stack Developer
          </Text>

          <HStack
            zIndex={0}
            w={["90%", "90%", "90%", "70%", "55%"]}
            h={"100%"}
            align={"center"}
            justify={"start"}
            top={"100"}
            position={"absolute"}
          >
            <Box width={["100px", "150px", "200px", "250px", "250px"]}>
              <Image src={Asterisks} />
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </>
  );
};

export default Home;
