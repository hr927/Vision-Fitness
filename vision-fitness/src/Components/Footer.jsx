import { ReactNode } from "react";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.800", "gray.900")}
      color={useColorModeValue("white", "gray.200")}
    >
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6} align={"flex-start"}>
            <Box alignSelf={"start"}>
              <img
                src="https://i.ibb.co/PFt9Zj3/Vision-1.png"
                alt=""
                width={"50%"}
              />
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>WORKOUTS</ListHeader>
            <Link href={"#"}>WORKOUT VIDEOS</Link>
            <Link href={"#"}>CUSTOM VIDEOS</Link>
            <ListHeader>PROGRAMS</ListHeader>
            <Link href={"#"}>WORKOUT PROGRAMS</Link>
            <Link href={"#"}>MEAL PLANS</Link>
            <Link href={"#"}>PILOT PROGRAMS</Link>
            <Link href={"#"}>ROUTINES</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>HEALTHY LIVING</ListHeader>
            <Link href={"#"}>FITNESS</Link>
            <Link href={"#"}>HEALTH</Link>
            <Link href={"#"}>NUTRITION</Link>
            <Link href={"#"}>HEALTHY RECIPES</Link>
            <Link href={"#"}>EXPERTS</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>ABOUT</ListHeader>
            <Link href={"#"}>CAREERS</Link>
            <Link href={"#"}>TUTORIALS</Link>
            <Link href={"#"}>OUR TEAM</Link>
            <Link href={"#"}>B2B OPTIONS</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>MEMBERSHIP</ListHeader>
            <ListHeader>FB PLUS</ListHeader>
            <ListHeader>COMMUNITY</ListHeader>
            <ListHeader>BLOG</ListHeader>
            <ListHeader>CONTACT US</ListHeader>
            <ListHeader>FAQ</ListHeader>
            <ListHeader>STORE</ListHeader>
          </Stack>
        </SimpleGrid>
        <Stack
          align={"flex-start"}
          direction="row"
          spacing={6}
          p="2"
          alignItems={"center"}
        >
          <Text fontSize={"sm"}>
            Copyright © 2022 Vision Fitness. All rights reserved.
          </Text>
          <ListHeader>Follow Us</ListHeader>
          <Link href={"#"}>
            <img src="https://i.ibb.co/XzRD7qz/icons8-youtube-24.png" />
          </Link>
          <Link href={"#"}>
            <img src="https://i.ibb.co/9ttgXTp/icons8-facebook-24.png" />
          </Link>
          <Link href={"#"}>
            <img src="https://i.ibb.co/yXqrhN2/icons8-instagram-24.png" />
          </Link>
          <Link href={"#"}>
            <img src="https://i.ibb.co/XVDk3nY/icons8-twitter-24.png" />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
