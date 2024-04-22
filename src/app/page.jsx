import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";

import Asterisks from "../svg/Asterisks";
import Image from "next/image";
 

const page = () => {
  return (
    <>
    <HStack   w={"100%"} h={"100%"} align={"center"} justify={"center"} >

      <VStack w={"100%"} h={"100%"} align={"center"} justify={"center"}>

        <Text fontSize={["200px"]} color={"white"}>
          Anjesh
        </Text>
        <Text fontSize={["60"]} color={"white"} >
        Full Stack Developer 
        </Text>
        <Image  w={100}  h={100}  src={Asterisks}/>
      </VStack>
    </HStack>
    
    </>
  )
}


export default page