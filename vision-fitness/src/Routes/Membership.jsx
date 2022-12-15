import {
  Container,
  SimpleGrid,
  Box,
  Text,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Divider,
  Stack,
} from "@chakra-ui/react";

const Membership = () => {
  return (
    <Container maxW={"10xl"} paddingTop={"90px"}>
      <SimpleGrid
        maxW={"9xl"}
        columns={{ md: 1, lg: 2 }}
        spacing={10}
        bgColor="
        #e3def6"
        m={"auto"}
      >
        <Box maxW={"60%"} textAlign={"start"} m={"auto"}>
          <Heading fontSize={"40px"} lineHeight={"48px"}>
            A Membership
          </Heading>
          <Heading fontSize={"40px"} lineHeight={"48px"}>
            for Everyone
          </Heading>
          <Text fontSize={"20px"} lineHeight={"32px"}>
            We believe reliable fitness, nutrition, and wellness content should
            be accessible to everyone, regardless of income. That’s why full
            access to premium content and features starts as low as $6.67 per
            month, and part of the proceeds go toward providing hundreds of our
            workouts, articles, and recipes absolutely free.
          </Text>
        </Box>
        <Box>
          <img
            src="https://cloudfront.fitnessblender.com/assets/img/memberships/memberships-1440.webp"
            alt=""
          />
        </Box>
      </SimpleGrid>
      <SimpleGrid
        maxW={"9xl"}
        columns={{ md: 1, lg: 2 }}
        spacing={5}
        m={" 10px auto 0px"}
      >
        <Box bgColor={"#edf8fc"}>
          {" "}
          <Heading fontSize={"40px"} lineHeight={"48px"} marginBottom={"10px"}>
            <Text display={"inline"} fontWeight={"medium"}>
              FB
            </Text>{" "}
            <Text display={"inline"} fontWeight={"medium"} color={"blue.500"}>
              Plus
            </Text>
          </Heading>
          <Text w={"45%"} m={"10px auto"} fontSize={"16px"} lineHeight={"25px"}>
            Get exclusive content and access to programs and challenges, with
            advanced features to help you reach and maintain your goals.
          </Text>
          <Button
            color={"white"}
            bg={"black"}
            marginTop={"20px 0px"}
            _hover={{ bg: "blue.700" }}
          >
            JOIN WITH PLUS
          </Button>
          <Text
            color={"#4296cb"}
            paddingBottom={"10px"}
            fontSize={"16px"}
            lineHeight={"25px"}
          >
            Learn More About FB Plus
          </Text>
        </Box>
        <Box bgColor={"#f0f4f6"}>
          <Heading
            fontSize={"40px"}
            lineHeight={"48px"}
            fontWeight={"normal"}
            marginBottom={"10px"}
          >
            Free Membership
          </Heading>
          <Text w={"45%"} m={"10px auto"} fontSize={"16px"} lineHeight={"25px"}>
            Enjoy hundreds of workout videos, articles, and recipes, with new
            content every week. No strings attached, no credit card required.
          </Text>
          <Button
            color={"white"}
            bg={"black"}
            marginTop={"20px 0px"}
            _hover={{ bg: "blue.700" }}
          >
            JOIN FOR FREE
          </Button>
        </Box>
      </SimpleGrid>
      <Container maxW={"8xl"} w={"auto"} marginTop={"50px"} textAlign={"start"}>
        <Heading
          fontSize={"40px"}
          lineHeight={"48px"}
          fontWeight={"normal"}
          marginBottom={"10px"}
        >
          All Membership Features
        </Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Features</Th>

                <Th w={"20%"} textAlign={"center"}>
                  Plus
                </Th>
                <Th w={"20%"} textAlign={"center"}>
                  Free
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td borderRight={"1px"}>
                  Hundreds of Professionally-Built Workout Videos
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
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
                <Td borderRight={"1px"}>
                  Wide Selection of Healthy Living Articles
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
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
                <Td borderRight={"1px"}>Healthy and Convenient Recipes</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
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
                <Td borderRight={"1px"}>Positive and Encouraging Community</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
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
                <Td borderRight={"1px"}>Interactive Workout Calendar</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
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
                <Td borderRight={"1px"}>
                  Vlogs, Behind-the-Scenes Updates, Weekly Giveaways
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
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
                <Td borderRight={"1px"}>
                  Search and Filter Videos to Find Exactly What You Need
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
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
                <Td borderRight={"1px"}>Save Your Favorite Videos</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
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
                <Td borderRight={"1px"}>Ads-Free Website and Videos</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>
                  "Surprise Me" Workout Selection Tool
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>Statistics for Your Activities</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>Enter and Track Custom Workouts</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>Trackers to See Your Progress</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>Exclusive Workouts</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>Exclusive Workout Challenges</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>
                  See Workout History and Take Notes on Individual Workouts
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>
                  Additional Video Filters for More Refinement
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>Tagging to Help Organize Videos</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>
                  Create, Save, and Repeat Personal Routines
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>Ability to Mark Rest Day Complete</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>
                  One Click Access to Find Similar Workouts
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>
                  Custom Difficulty and Minute Tracking for more Accurate
                  Workout Data
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>Schedule Recipes on the Calendar</Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>
                  Individual Recipe Dashboards with Tags and Notes
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>
                  Schedule Expert Articles on the Calendar
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>
                  Individual Expert Articles Dashboards with Tags and Notes
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>
                  Workout Program Shelf to help organization your active
                  programs
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderRight={"1px"}>
                  Interactive Meal Plans for Healthy Eating
                </Td>
                <Td alignItems={"center"} borderRight={"1px"}>
                  <Box w={"10%"} m={"auto"}>
                    <img
                      src="https://i.ibb.co/T0h9kJT/accept.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Td>
                <Td alignItems={"center"}></Td>
              </Tr>
              <Tr>
                <Td borderBottom={"0px"} borderRight={"1px"}></Td>
                <Td
                  borderBottom={"0px"}
                  alignItems={"center"}
                  borderRight={"1px"}
                >
                  <Stack w={"30%"} m={"auto"}>
                    <Text textAlign={"center"} fontSize={"16px"}>
                      Starting at
                    </Text>
                    <Text
                      textAlign={"center"}
                      fontSize={"30px"}
                      fontWeight={"semibold"}
                    >
                      ₹550
                    </Text>
                    <Text textAlign={"center"} fontSize={"16px"}>
                      Per Month,
                    </Text>
                    <Text textAlign={"center"} fontSize={"16px"}>
                      Paid Annually
                    </Text>
                    <Button
                      color={"white"}
                      bg={"black"}
                      marginTop={"20px 0px"}
                      _hover={{ bg: "blue.700" }}
                    >
                      JOIN
                    </Button>
                  </Stack>
                </Td>
                <Td borderBottom={"0px"} alignItems={"center"}>
                  <Stack w={"30%"} m={"auto"}>
                    <Text textAlign={"center"}> {"  "}</Text>
                    <Text
                      textAlign={"center"}
                      fontSize={"30px"}
                      fontWeight={"semibold"}
                    >
                      FREE
                    </Text>
                    <Text textAlign={"center"} fontSize={"16px"}>
                      No Credit
                    </Text>
                    <Text textAlign={"center"} fontSize={"16px"}>
                      Card Required
                    </Text>
                    <Button
                      color={"white"}
                      bg={"black"}
                      marginTop={"20px 0px"}
                      _hover={{ bg: "blue.700" }}
                    >
                      JOIN
                    </Button>
                  </Stack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
      <SimpleGrid
        maxW={"9xl"}
        columns={{ md: 1, lg: 2 }}
        spacing={10}
        bgColor="
        #f1e6f7"
        m={"40px auto"}
      >
        <Box maxW={"60%"} textAlign={"start"} m={"auto"}>
          <Heading fontSize={"40px"} lineHeight={"48px"}>
            All the Perks,
          </Heading>
          <Heading fontSize={"40px"} lineHeight={"48px"}>
            No Commitment
          </Heading>
          <Text fontSize={"20px"} lineHeight={"32px"}>
            Get full access to everything Plus has to offer with a convenient FB
            Plus Pass that fits your schedule and your budget.
          </Text>
          <Button
            color={"white"}
            bg={"black"}
            marginTop={"20px 0px"}
            _hover={{ bg: "blue.700" }}
          >
            BUY A PASS
          </Button>
        </Box>
        <Box>
          <img
            src="https://cloudfront.fitnessblender.com/assets/img/memberships/passes-720.webp"
            alt=""
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Membership;
