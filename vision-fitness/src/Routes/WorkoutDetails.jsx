import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  useDisclosure,
  Container,
  AspectRatio,
  Divider,
  SimpleGrid,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Difficulty from "../Components/Difficulty";
import Loader from "../Components/Loader";
const WorkoutDetail = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState({});
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    fetch(`https://vision-fitness.onrender.com/workouts/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setWorkout(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <Container maxW={"10xl"} p={5} pt={90}>
      {loading ? (
        <Loader />
      ) : (
        <Box p={5} shadow="md" borderWidth="1px" textAlign={"left"}>
          <Box>
            {workout.videosrc ? (
              <AspectRatio maxW={"1280px"} m={"auto"}>
                <iframe
                  src={workout.videosrc}
                  width="1280"
                  height="720"
                  frameborder="0"
                />
              </AspectRatio>
            ) : (
              <AspectRatio maxW={"720px"} m={"auto"}>
                <Image src={workout.imagesrc} alt="" objectFit="cover" />
              </AspectRatio>
            )}
          </Box>
          <Divider mt={4} />
          <Box mt={4}>
            <Flex align="center" mb={5}>
              <Box flex="1">
                <Heading
                  fontSize={"22px"}
                  lineHeight={"26px"}
                  fontWeight={"normal"}
                  mb={1}
                >
                  {workout.title}
                </Heading>
                <Text fontSize={"16px"} lineHeight={"22px"}>
                  {workout.subtitle}
                </Text>
              </Box>
              <Button onClick={onOpen} variant="link">
                Show Details
              </Button>
            </Flex>
            <Box display={isOpen ? "block" : "none"}>
              <Heading
                fontSize={"16px"}
                color={"#4296cb"}
                fontWeight={"semibold"}
                mb={1}
              >
                {workout.primarydetail}
              </Heading>
              <Heading mb={2}>
                <Difficulty difficulty={workout.difficulty} />
              </Heading>
              <Heading
                fontSize={"15px"}
                fontWeight={"normal"}
                lineHeight={"22px"}
                mb={2}
              >
                Training Type:{" "}
                <Text
                  display={"inline"}
                  fontSize={"15px"}
                  fontWeight={"semibold"}
                  lineHeight={"22px"}
                >
                  {workout.trainingtype}
                </Text>
              </Heading>
              <Heading
                fontSize={"15px"}
                fontWeight={"normal"}
                lineHeight={"22px"}
                mb={2}
              >
                Equipment:{" "}
                <Text
                  display={"inline"}
                  fontSize={"15px"}
                  fontWeight={"semibold"}
                  lineHeight={"22px"}
                >
                  {workout.equipment}
                </Text>
              </Heading>
              <Heading
                fontSize={"15px"}
                fontWeight={"normal"}
                lineHeight={"22px"}
                mb={2}
              >
                Burn Estimate:{" "}
                <Text
                  display={"inline"}
                  fontSize={"15px"}
                  fontWeight={"semibold"}
                  lineHeight={"22px"}
                >
                  {workout.burnestimate}
                </Text>
              </Heading>
              <Heading
                fontSize={"22px"}
                lineHeight={"26px"}
                fontWeight={"semibold"}
                mb={2}
              >
                Details
              </Heading>
              <Text
                mb={5}
                display={"inline"}
                fontSize={"15px"}
                fontWeight={"normal"}
                lineHeight={"22px"}
              >
                {workout.details}
              </Text>
              <Button display={"block"} mt={2} onClick={onClose}>
                Hide Details
              </Button>
            </Box>
          </Box>
          {!workout.videosrc ? (
            <Box
              bgColor="
        #f0f4f6"
              mt={4}
              p={10}
              maxW={"6xl"}
              m={"auto"}
            >
              <Heading
                fontSize={"40px"}
                lineHeight={"48px"}
                fontWeight={"normal"}
              >
                Available with FB Plus
              </Heading>
              <Text>
                This content is available exclusively with FB Plus. Sign up for
                an FB Plus Membership or buy a 1 to 90-day Pass to get access
                now. Both Memberships and Passes include all of our exclusive
                content and features.
              </Text>
              <SimpleGrid
                maxW={"xl"}
                columns={{ md: 1, lg: 2 }}
                spacing={10}
                bgColor="
        #f0f4f6"
                alignItems={"center"}
                p="2"
                m={"auto"}
              >
                <Box
                  _hover={{ border: "2px", borderColor: "#4296cb" }}
                  textAlign={"left"}
                  bgColor={"white"}
                  minH={275}
                >
                  <img
                    src="https://d18zdz9g6n5za7.cloudfront.net/products/320/320-18-1-day-pass-8679.jpg"
                    alt=""
                    width={"100%"}
                  />
                  <Stack p={"5"}>
                    <Text fontSize="11px" fontWeight={"500"}>
                      FB PLUS PASS
                    </Text>
                    <Text
                      fontSize={"18px"}
                      lineHeight={"20px"}
                      fontWeight={"600"}
                    >
                      1-Day Pass
                    </Text>
                    <HStack justifyContent={"space-between"}>
                      {" "}
                      <Text>₹160</Text> <Button>ADD TO BAG</Button>
                    </HStack>
                  </Stack>
                </Box>
                <Box
                  _hover={{ border: "2px", borderColor: "#4296cb" }}
                  textAlign={"center"}
                  bgColor={"white"}
                  minH={275}
                >
                  <Heading
                    fontSize={"40px"}
                    lineHeight={"48px"}
                    fontWeight={"normal"}
                    mb={4}
                  >
                    <Text display={"inline"} fontWeight={"medium"}>
                      FB
                    </Text>{" "}
                    <Text
                      display={"inline"}
                      fontWeight={"medium"}
                      color={"blue.500"}
                    >
                      Plus
                    </Text>{" "}
                    <Text
                      fontSize={"16px"}
                      lineHeight={"20px"}
                      fontWeight={"normal"}
                      mb={4}
                    >
                      Get access to all exclusive content and features starting
                    </Text>
                    <Text
                      fontSize={"16px"}
                      lineHeight={"20px"}
                      fontWeight={"600"}
                    >
                      as low as ₹500 per month.
                    </Text>
                    <Button
                      color={"white"}
                      bg={"black"}
                      marginTop={"10"}
                      _hover={{ bg: "blue.700" }}
                    >
                      JOIN FB PLUS
                    </Button>
                  </Heading>
                </Box>
              </SimpleGrid>
            </Box>
          ) : (
            <></>
          )}
        </Box>
      )}
    </Container>
  );
};

export default WorkoutDetail;
