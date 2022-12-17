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
  Pro,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import StoreBox from "../Components/StoreBox";

const Store = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://vision-fitness.onrender.com/store`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container maxW={"10xl"} pt={90}>
      {loading ? (
        <Loader />
      ) : (
        <Container maxW={"100%"}>
          <Container
            maxW={"10xl"}
            bgColor={"#f0f4f6"}
            textAlign={"left"}
            p={20}
          >
            <Heading
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
              mb={"2"}
            >
              FB Plus Passes
            </Heading>
            <Text fontSize={"16px"} lineHeight={"32px"} mb={"2"}>
              {" "}
              Passes give you full access to everything FB Plus has to offer,
              without a long-term subscription. Choose a pass that fits your
              budget and your schedule, and extend your access with another pass
              at any time. Multiple passes can be purchased at once for longer
              access.
            </Text>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 4 }}
              spacing={2}
              alignItems={"center"}
              pt="10"
            >
              {data &&
                data
                  .filter((el) => el.category === "pass")
                  .map((el) => (
                    <StoreBox
                      key={el.id}
                      image={el.image}
                      title={el.name}
                      detail={el.description}
                      subtitle={el.price}
                      id={el.id}
                    ></StoreBox>
                  ))}
            </SimpleGrid>
          </Container>
          <Container
            maxW={"10xl"}
            bgColor={"#f0f4f6"}
            textAlign={"left"}
            p={20}
            mt={1}
          >
            <Heading
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
              mb={"2"}
            >
              Fitness Blender eGift Cards
            </Heading>
            <Text fontSize={"16px"} lineHeight={"32px"} mb={"2"}>
              {" "}
              Give the gift of health and fitness with Fitness Blender eGift
              Cards. Send an electronic card via email and the recipient can log
              in, redeem your gift and buy any of our Workout Programs,
              calendar-based Meal Plans, or a membership to FB Plus!
            </Text>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 4 }}
              spacing={2}
              alignItems={"center"}
              pt="10"
            >
              {data &&
                data
                  .filter((el) => el.category === "gift")
                  .map((el) => (
                    <StoreBox
                      key={el.id}
                      image={el.image}
                      title={el.name}
                      detail={el.description}
                      subtitle={el.price}
                      id={el.id}
                    ></StoreBox>
                  ))}
            </SimpleGrid>
          </Container>
        </Container>
      )}
      <Container maxW={"10xl"}>
        <SimpleGrid
          maxW={"8xl"}
          columns={{ md: 1, lg: 2 }}
          spacing={10}
          alignItems={"center"}
          p="2"
          m={"auto"}
        >
          <Box>
            <img
              src="https://cloudfront.fitnessblender.com/assets/img/workout-complete/shirts-20200224.jpg"
              alt=""
            />
          </Box>
          <Box maxW={"70%"} textAlign={"start"} m={"auto"}>
            <Heading
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
              mb={"2"}
            >
              Fitness Blender Gear
            </Heading>
            <Heading
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight={"normal"}
              mb={"2"}
            >
              New Store Coming Soon
            </Heading>
          </Box>
        </SimpleGrid>
      </Container>
      <Container maxW={"10xl"} textAlign={"center"} bgColor={"#e6f0f8"} p="10">
        <Heading
          fontSize={"40px"}
          lineHeight={"48px"}
          fontWeight={"normal"}
          mb={"2"}
        >
          Other Shopping Options
        </Heading>
        <Text fontSize={"16px"} lineHeight={"32px"} mb={"2"}>
          Explore Workout Programs, Meal Plans, and FB Plus memberships
        </Text>
        <SimpleGrid
          maxW={"4xl"}
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={10}
          alignItems={"center"}
          p="2"
          m={"auto"}
        >
          <Button
            bgColor={"#4296cb"}
            color={"white"}
            _hover={{ bgColor: "#4296cb" }}
            onClick={() => navigate("/program")}
          >
            PROGRAMS
          </Button>
          <Button
            bgColor={"#4296cb"}
            color={"white"}
            _hover={{ bgColor: "#4296cb" }}
            onClick={() => navigate("/program")}
          >
            MEAL PLANS
          </Button>
          <Button
            bgColor={"#4296cb"}
            color={"white"}
            _hover={{ bgColor: "#4296cb" }}
            onClick={() => navigate("/membership")}
          >
            FB PLUS
          </Button>
        </SimpleGrid>
      </Container>
    </Container>
  );
};
export default Store;
