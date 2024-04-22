import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";

import Asterisks from "../svg/Asterisks.svg";
import Image from "next/image";
import Home from "@/components/home/home";

const page = () => {
  return (
    <Box bgColor={"#0B1315"} w={"100%"} h={"100vh"}  >
      
        <Home />
     
      <Box
        bgGradient="linear(to-b, #000000, #3900B3, #000000)"
        w="100%"
        h="100vh"
      ></Box>
    </Box>
  );
};

export default page;
