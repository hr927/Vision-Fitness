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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Container maxW={"8xl"} paddingTop={"90px"}>
      <SimpleGrid
        maxW={"8xl"}
        columns={{ md: 1, lg: 2 }}
        spacing={10}
        bgColor="
#16d9bd"
        alignItems={"center"}
        p="2"
        m={"auto"}
      >
        <Box maxW={"60%"} textAlign={"start"} m={"auto"}>
          <Heading fontSize={"40px"} lineHeight={"48px"}>
            Feel Great.
          </Heading>
          <Heading fontSize={"40px"} lineHeight={"48px"}>
            Body and Mind.
          </Heading>
          <Text fontSize={"20px"} lineHeight={"32px"}>
            Choose from hundreds of workouts, healthy recipes, relaxing
            meditations, and expert articles, for a whole body and mind approach
            to feeling great.
          </Text>
          <Button
            color={"white"}
            bg={"black"}
            marginTop={"10px"}
            _hover={{ bg: "blue.700" }}
          >
            JOIN NOW
          </Button>
        </Box>
        <Box>
          <img
            src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-720.webp"
            alt=""
          />
        </Box>
      </SimpleGrid>
      <Container
        bg={"#f4e6f7"}
        maxW={"8xl"}
        marginTop={"10px"}
        alignItems={"center"}
        justifyContent={"center"}
        p={"20px"}
      >
        <div style={{ width: "30%", margin: "auto" }}>
          <Heading fontSize={"40px"} lineHeight={"48px"} fontWeight={"normal"}>
            Introducing{" "}
          </Heading>
          <Heading fontSize={"40px"} lineHeight={"48px"} fontWeight={"normal"}>
            <Text display={"inline"} fontWeight={"medium"}>
              FB
            </Text>{" "}
            <Text display={"inline"} fontWeight={"medium"} color={"blue.500"}>
              Plus
            </Text>{" "}
            Passes
          </Heading>

          <Center>
            <Text fontSize={"16px"} lineHeight={"25px"}>
              Passes give you full access to everything FB Plus has to offer,
              without a long-term subscription. Choose a pass that fits your
              budget and your schedule.
            </Text>
          </Center>
          <Button
            color={"white"}
            bg={"black"}
            marginTop={"10px"}
            _hover={{ bg: "blue.700" }}
          >
            BUY A PASS
          </Button>
        </div>
        <Box align={"center"}>
          <img
            src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp"
            alt=""
          />
        </Box>
      </Container>
      <Container
        maxW={"8xl"}
        marginTop="10px"
        alignItems={"center"}
        justifyContent={"center"}
        p={"20px"}
      >
        <SimpleGrid
          columns={{ md: 1, lg: 2 }}
          spacing={3}
          alignItems={"center"}
        >
          <Box
            alignItems={"center"}
            justifyContent={"center"}
            bgColor="#f0f4f6"
          >
            <Heading
              p={"2"}
              paddingTop={"10"}
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
            >
              Workout Videos
            </Heading>
            <Text fontSize={"16px"} lineHeight={"25px"} w={"58%"} m={"auto"}>
              Exercise with certified personal trainers whether you’re at home
              or on the road.
            </Text>
            <Text
              _hover={{
                textDecoration: "underline",

                cursor: "pointer",
              }}
              color="#4296cb"
            >
              Find a Workout
            </Text>

            <img
              src="https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-720.webp"
              alt=""
              align={"end"}
              width={"100%"}
            />
          </Box>
          <Box
            alignItems={"center"}
            justifyContent={"center"}
            bgColor="#f9fcfd"
          >
            <Heading
              p={"2"}
              paddingTop={"10"}
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
            >
              Programs
            </Heading>
            <Text fontSize={"16px"} lineHeight={"25px"} w={"58%"} m={"auto"}>
              Professionally designed programs take the guesswork out of
              exercising.
            </Text>
            <Text
              _hover={{
                textDecoration: "underline",

                cursor: "pointer",
              }}
              color="#4296cb"
            >
              Browse All Programs
            </Text>
            <img
              src="https://cloudfront.fitnessblender.com/assets/img/homepage/programs-720.webp"
              alt=""
            />
          </Box>
          <Box
            alignItems={"center"}
            justifyContent={"center"}
            bgColor="#000000"
          >
            <Heading
              color={"white"}
              p={"2"}
              paddingTop={"10"}
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
            >
              Wellness Articles
            </Heading>
            <Text
              color={"white"}
              fontSize={"16px"}
              lineHeight={"25px"}
              w={"58%"}
              m={"auto"}
            >
              Research-backed articles to help you care for your body and mind.
            </Text>
            <Text
              _hover={{
                textDecoration: "underline",

                cursor: "pointer",
              }}
              color="#4296cb"
            >
              Learn from Experts
            </Text>
            <img
              src="https://cloudfront.fitnessblender.com/assets/img/homepage/articles-720.webp"
              alt=""
            />
          </Box>
          <Box
            alignItems={"center"}
            justifyContent={"center"}
            bgColor="#d8d9da"
          >
            <Heading
              p={"2"}
              paddingTop={"10"}
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
            >
              Healthy Recipes
            </Heading>
            <Text fontSize={"16px"} lineHeight={"25px"} w={"58%"} m={"auto"}>
              Fuel your day with recipes by Registered Dietitians and
              professional chefs.
            </Text>
            <Text
              _hover={{
                textDecoration: "underline",

                cursor: "pointer",
              }}
              color="#4296cb"
            >
              Find a Recipe
            </Text>
            <img
              src="https://cloudfront.fitnessblender.com/assets/img/homepage/recipes-720.webp"
              alt=""
            />
          </Box>
        </SimpleGrid>
      </Container>
      <Container maxW={"8xl"} marginTop="10px">
        <Box zIndex={"1"} w={"30%"} m={"auto"} pos={"relative"} top={"150px"}>
          <Heading fontSize={"40px"} lineHeight={"48px"} fontWeight={"normal"}>
            Supportive Community
          </Heading>
          <Text fontSize={"16px"} lineHeight={"25px"}>
            Stay motivated and engaged with a little help from a supportive
            community of other members.
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",

              cursor: "pointer",
            }}
            color="#4296cb"
            fontSize={"16px"}
            lineHeight={"25px"}
          >
            Become a member
          </Text>
        </Box>
        <img
          src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-2160.webp"
          alt=""
          height="5%"
          width="100%"
        />
      </Container>
      <Container
        maxW={"8xl"}
        marginTop="10px"
        textAlign={"start"}
        bgColor={"#f0f4f6"}
      >
        <Heading
          fontSize={"40px"}
          lineHeight={"48px"}
          fontWeight={"normal"}
          m="20px 0px"
        >
          Not sure where to start?
        </Heading>
        <Text
          fontSize={"16px"}
          lineHeight={"32px"}
          fontWeight={"normal"}
          m="20px 0px"
        >
          Programs offer day-to-day guidance on an interactive calendar to keep
          you on track.
        </Text>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 4 }}
          spacing={2}
          alignItems={"center"}
          p="2"
        >
          <Box>
            <Text
              fontSize={"16px"}
              lineHeight={"20px"}
              fontWeight={"normal"}
              m="20px 0px 8px"
              paddingBottom={"3px"}
            >
              Perfect for Beginners
            </Text>
            <Box _hover={{ border: "2px", borderColor: "#4296cb" }}>
              <img
                src="https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_31_fb-low-impact-round-2-fat-loss-program-40-minutes-or-less.jpg"
                alt=""
                width={"100%"}
              />
              <Stack p={"7"}>
                <Text color={"#4296cb"} fontSize="11px" fontWeight={"500"}>
                  4 WEEK PROGRAM - 34 MIN/DAY
                </Text>
                <Text fontSize={"18px"} lineHeight={"20px"} fontWeight={"600"}>
                  FB Low Impact Round 2 - Build Muscle & Burn Fat
                </Text>
                <Text paddingTop={"20"}>₹ 1299</Text>
              </Stack>
            </Box>
          </Box>
          <Box>
            <Text
              fontSize={"16px"}
              lineHeight={"20px"}
              fontWeight={"normal"}
              m="20px 0px 8px"
              paddingBottom={"3px"}
            >
              You Choose
            </Text>
            <Box _hover={{ border: "2px", borderColor: "#4296cb" }}>
              <img
                src="https://d18zdz9g6n5za7.cloudfront.net/plan/1020/1020-o_29_4-week-fb-blend-burn-fat-build-muscle-tone-35-or-55-minutes-a-day.jpg"
                alt=""
                width={"100%"}
              />
              <Stack p={"7"}>
                <Text color={"#4296cb"} fontSize="11px" fontWeight={"500"}>
                  4 WEEK PROGRAM - 38 MIN/DAY
                </Text>
                <Text fontSize={"18px"} lineHeight={"20px"} fontWeight={"600"}>
                  FB Blend - Burn Fat, Build Muscle, Tone; 35 or 55 Minutes a
                  Day
                </Text>
                <Text paddingTop={"20"}>₹ 1299</Text>
              </Stack>
            </Box>
          </Box>
          <Box>
            <Text
              fontSize={"16px"}
              lineHeight={"20px"}
              fontWeight={"normal"}
              m="20px 0px 8px"
              paddingBottom={"3px"}
            >
              Short on Time?
            </Text>
            <Box _hover={{ border: "2px", borderColor: "#4296cb" }}>
              <img
                src="https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_28_fb-30-4-week-fat-loss-program-for-busy-people-round-4.jpg"
                alt=""
                width={"100%"}
              />
              <Stack p={"7"}>
                <Text color={"#4296cb"} fontSize="11px" fontWeight={"500"}>
                  4 WEEK PROGRAM - 30 MIN/DAY
                </Text>
                <Text fontSize={"18px"} lineHeight={"20px"} fontWeight={"600"}>
                  FB 30 - Fat Loss Program For Busy People (Round 4)
                </Text>
                <Text paddingTop={"20"}>₹ 1299</Text>
              </Stack>
            </Box>
          </Box>
          <Box>
            <Text
              fontSize={"16px"}
              lineHeight={"20px"}
              fontWeight={"normal"}
              m="20px 0px 8px"
              paddingBottom={"3px"}
            >
              No Equipment Necessary
            </Text>
            <Box _hover={{ border: "2px", borderColor: "#4296cb" }}>
              <img
                src="https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_7_fb-bodyweight-bodyweight-only-fat-loss-program.jpg"
                alt=""
                width={"100%"}
              />
              <Stack p={"7"}>
                <Text color={"#4296cb"} fontSize="11px" fontWeight={"500"}>
                  4 WEEK PROGRAM - 40 MIN/DAY
                </Text>
                <Text fontSize={"18px"} lineHeight={"20px"} fontWeight={"600"}>
                  FB Bodyweight - Bodyweight Only Fat Loss Program
                </Text>
                <Text paddingTop={"20"}>₹ 1299</Text>
              </Stack>
            </Box>
          </Box>
        </SimpleGrid>
        <Text color={"#4296cb"} paddingBottom={"10px"}>
          View All Programs
        </Text>
      </Container>
    </Container>
  );
};
export default Home;
