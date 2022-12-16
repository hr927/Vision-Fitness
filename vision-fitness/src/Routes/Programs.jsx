import React, { useState, useEffect } from "react";
import {
  SimpleGrid,
  Box,
  Container,
  Button,
  Heading,
  Text,
  Center,
  textDecoration,
  color,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ProgramBox from "../Components/ProgramBox";
import Loader from "../Components/Loader";

function Program() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://vision-fitness.onrender.com/programs`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ paddingTop: "90px" }}>
      <Container
        maxW={"10xl"}
        h="calc(90vh)"
        p="20"
        style={{
          backgroundImage: `url(
            "https://d18zdz9g6n5za7.cloudfront.net/workouts_programs/masthead-workouts.jpg"
          )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <Box
          textAlign={"left"}
          w={"32%"}
          marginTop={"auto"}
          h={"auto"}
          alignSelf={"center"}
        >
          <Text
            fontSize={"16px"}
            lineHeight={"26px"}
            letterSpacing={"0.5px"}
            color={"#4296cb"}
          >
            PROGRAMS, CHALLENGES, MEAL PLANS
          </Text>
          <Heading
            fontSize={"48px"}
            lineHeight={"57px"}
            letterSpacing={"-1px"}
            color={"white"}
            fontWeight={"normal"}
          >
            Follow professionally developed programs for fitness and nutrition.
          </Heading>
        </Box>
      </Container>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Container
            maxW={"10xl"}
            textAlign={"left"}
            bgColor={"#e3ebee"}
            p={"20"}
          >
            <Heading
              mb={"10"}
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
            >
              Full-Length Workout Programs
            </Heading>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 4 }}
              spacing={2}
              alignItems={"center"}
              p="2"
            >
              {data &&
                data
                  .filter((el) => el.category === "full")
                  .map((el) => (
                    <ProgramBox
                      key={el.id}
                      image={el.img}
                      title={el.title}
                      detail={el.details}
                      subtitle={el.msg}
                      id={el.id}
                    ></ProgramBox>
                  ))}
            </SimpleGrid>
          </Container>
          <Container
            maxW={"10xl"}
            w={"auto"}
            marginTop={"1"}
            textAlign={"start"}
            p={"20"}
            // bgColor={"#f0f4f6"}
          >
            <Heading
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
              marginBottom={"10px"}
            >
              Workout Program Features
            </Heading>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Features</Th>

                    <Th w={"20%"} textAlign={"center"}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      Work out with research-backed programs designed by
                      Certified Personal Trainers (CPTs).
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Follow expertly-curated combinations of workouts from our
                      free video library.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Take the guesswork out of planning routines and picking
                      workouts.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Focus your exercise time with proper structure for more
                      effective results.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Learn to modify individual exercises to accommodate
                      virtually any fitness level.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Improve overall health and functional fitness.</Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Schedule and track progress via the FB Calendar.</Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Review each day's objectives and workout details.</Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Complete as many times as you like.</Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Get additional tips and information with a detailed
                      program and nutrition guide.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Container>
          <Container
            maxW={"10xl"}
            textAlign={"left"}
            bgColor={"#f0f4f6"}
            p={"20"}
            marginTop={"1"}
          >
            <Heading
              mb={"10"}
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
            >
              Quick Workout Challenges
            </Heading>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 4 }}
              spacing={2}
              alignItems={"center"}
              p="2"
            >
              {data &&
                data
                  .filter((el) => el.category === "quick")
                  .map((el) => (
                    <ProgramBox
                      key={el.id}
                      image={el.img}
                      title={el.title}
                      detail={el.details}
                      subtitle={el.msg}
                      id={el.id}
                    ></ProgramBox>
                  ))}
            </SimpleGrid>
          </Container>
          <Container
            maxW={"10xl"}
            w={"auto"}
            marginTop={"1"}
            textAlign={"start"}
            p={"20"}
            // bgColor={"#f0f4f6"}
          >
            <Heading
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
              marginBottom={"10px"}
            >
              Workout Challenge Features
            </Heading>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Features</Th>

                    <Th w={"20%"} textAlign={"center"}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      Work out with research-backed programs designed by
                      Certified Personal Trainers (CPTs).
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Follow expertly-curated combinations of workouts from our
                      free video library.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Take the guesswork out of planning routines and picking
                      workouts.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Focus your exercise time with proper structure for more
                      effective results.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Learn to modify individual exercises to accommodate
                      virtually any fitness level.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Improve overall health and functional fitness.</Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Schedule and track progress via the FB Calendar.</Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Complete as many times as you like.</Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Container>
          <Container
            maxW={"10xl"}
            textAlign={"left"}
            bgColor={"#e3ebee"}
            p={"20"}
            marginTop={"1"}
          >
            <Heading
              mb={"10"}
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
            >
              Meal Plans
            </Heading>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 4 }}
              spacing={2}
              alignItems={"center"}
              p="2"
            >
              {data &&
                data
                  .filter((el) => el.category === "meal")
                  .map((el) => (
                    <ProgramBox
                      key={el.id}
                      image={el.img}
                      title={el.title}
                      detail={el.details}
                      subtitle={el.msg}
                      id={el.id}
                    ></ProgramBox>
                  ))}
            </SimpleGrid>
          </Container>
          <Container
            maxW={"10xl"}
            w={"auto"}
            marginTop={"1"}
            textAlign={"start"}
            p={"20"}
            // bgColor={"#f0f4f6"}
          >
            <Heading
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
              marginBottom={"10px"}
            >
              Meal Plan Features
            </Heading>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Features</Th>

                    <Th w={"20%"} textAlign={"center"}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      Follow healthy, research-backed meal plans designed by
                      Registered Dietitians (RDs) and crafted by professional
                      chefs.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Make meal planning for the week a breeze with
                      easy-to-follow recipes and shopping lists.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Schedule and track your meals on the FB Calendar.</Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Personalize your meal plans to fit your approach to food
                      and daily energy needs.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Build or maintain your healthy eating habits.</Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Complete as many times as you like.</Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Mix and match with other meal plans to keep your diet
                      fresh and exciting.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      US Customary and Metric units included with all plans and
                      recipes.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Container>
          <Container
            maxW={"10xl"}
            textAlign={"left"}
            bgColor={"#f0f4f6"}
            p={"20"}
            marginTop={"1"}
          >
            <Heading
              mb={"10"}
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
            >
              Pilot Programs
            </Heading>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 4 }}
              spacing={2}
              alignItems={"center"}
              p="2"
            >
              {data &&
                data
                  .filter((el) => el.category === "pilot")
                  .map((el) => (
                    <ProgramBox
                      key={el.id}
                      image={el.img}
                      title={el.title}
                      detail={el.details}
                      subtitle={el.msg}
                      id={el.id}
                    ></ProgramBox>
                  ))}
            </SimpleGrid>
          </Container>
          <Container
            maxW={"10xl"}
            w={"auto"}
            marginTop={"1"}
            textAlign={"start"}
            // bgColor={"#f0f4f6"}
            p={"20"}
          >
            <Heading
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
              marginBottom={"10px"}
            >
              Meal Plan Features
            </Heading>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Features</Th>

                    <Th w={"20%"} textAlign={"center"}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      New pilot programs to test different types of content,
                      formats, or topics.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Researched backed and designed by experts.</Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      May include guided meditations, mental wellness, and other
                      specialized topics.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Works alongside existing scheduled workout programs and
                      meal plans.
                    </Td>
                    <Td alignItems={"center"}>
                      <Box w={"10%"} m={"auto"}>
                        <img
                          src="https://i.ibb.co/T0h9kJT/accept.png"
                          alt=""
                          width={"100%"}
                        />
                      </Box>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Container>
          <Container maxW={"10xl"} bgColor={"#313443"} p={"10"}>
            <Stack
              color={"white"}
              textAlign={"left"}
              maxW={"6xl"}
              m={"auto"}
              spacing={"4"}
            >
              <Heading
                fontSize={"40px"}
                lineHeight={"48px"}
                fontWeight={"semibold"}
              >
                Frequently Asked Questions
              </Heading>
              <Text fontSize={"30px"} lineHeight={"36px"}>
                Why aren’t Programs and Challenges free since the videos are
                free?
              </Text>
              <Text fontSize={"16px"} lineHeight={"32px"} color={"#ced1db"}>
                Our professionally-created Programs and Challenges target
                specific goals and/or training styles to provide the type of
                guidance you would receive from a personal trainer, at a
                fraction of the cost. In addition, Workout Program and Workout
                Challenge sales make it possible for us to keep producing free
                videos and to continue adding free features and content to the
                Fitness Blender website.
              </Text>
              <Text fontSize={"30px"} lineHeight={"36px"}>
                What do I get with if I purchase the FB Plus Pass option?
              </Text>
              <Text fontSize={"16px"} lineHeight={"32px"} color={"#ced1db"}>
                With a FB Plus Pass, you get full access to FB Plus content and
                features for a set number of days (including the selected
                program or challenge) and can purchase additional FB Plus Passes
                to add more days as necessary. Learn more about FB Plus Passes.
              </Text>
              <Text fontSize={"30px"} lineHeight={"36px"}>
                Can I download a Program or Challenge?
              </Text>
              <Text fontSize={"16px"} lineHeight={"32px"} color={"#ced1db"}>
                Workout Programs and Workout Challenges work in conjunction with
                our online calendar; they are not downloadable or available to
                other calendar apps or platforms.
              </Text>
              <Text fontSize={"30px"} lineHeight={"36px"}>
                Can I use my older eBook or PDF program with the new calendar?
              </Text>
              <Text fontSize={"16px"} lineHeight={"32px"} color={"#ced1db"}>
                If you own an old eBook/PDF program, thank you for being such a
                long-time customer. Unfortunately, these older programs do not
                crossover to the new calendar.
              </Text>
              <Text fontSize={"30px"} lineHeight={"36px"}>
                What is the return policy?
              </Text>
              <Text fontSize={"16px"} lineHeight={"32px"} color={"#ced1db"}>
                Calendar-based Workout Programs and Workout Challenges have a 5
                day return/refund policy. Meal Plans are a non-refundable
                purchase.
              </Text>
              <Text fontSize={"30px"} lineHeight={"36px"}>
                Where can I get help with my new Program, Challenge, or Meal
                Plan?
              </Text>
              <Text fontSize={"16px"} lineHeight={"32px"} color={"#ced1db"}>
                The community here at fitnessblender.com is a great place to
                start. Many of our members know the site inside and out, and can
                help with many site-usage or technical questions. If you need
                more detailed help, fill out our Contact Us form or email us at
                service@visionfitness.com.
              </Text>
            </Stack>
          </Container>
        </div>
      )}
    </div>
  );
}

export default Program;
