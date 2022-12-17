import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const Difficulty = ({ difficulty }) => {
  const flames = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= difficulty) {
      flames.push(
        <Image
          key={i}
          src="https://i.ibb.co/y46KphJ/icons8-gas-16.png"
          size="16px"
          mr={1}
          alt="Flame"
        />
      );
    } else {
      flames.push(
        <Image
          key={i}
          src="https://i.ibb.co/ZWB1YDX/icons8-gas-16-1.png"
          size="16px"
          mr={1}
          alt="Flame Outline"
        />
      );
    }
  }

  return (
    <Flex
      align="center"
      alignSelf={"center"}
      fontSize={"15px"}
      fontWeight={"normal"}
      lineHeight={"22px"}
    >
      {" "}
      Difficulty : {"  "}
      {flames}
    </Flex>
  );
};

export default Difficulty;
