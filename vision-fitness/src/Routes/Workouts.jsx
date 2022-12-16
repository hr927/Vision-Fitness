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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import WorkoutBox from "../Components/WorkoutBox";
import Loader from "../Components/Loader";

function Workouts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://vision-fitness.onrender.com/workouts`)
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
            fontWeight={"normal"}
            color={"#4296cb"}
          >
            ONLINE WORKOUT VIDEOS
          </Text>
          <Heading fontSize={"48px"} lineHeight={"57px"} letterSpacing={"-1px"}>
            Find Your Fitness.
          </Heading>
          <Heading fontSize={"48px"} lineHeight={"57px"} letterSpacing={"-1px"}>
            Something for Everyone.
          </Heading>
          <Text fontSize={"16px"} lineHeight={"26px"}>
            A huge selection of workout videos and programs to help you look and
            feel your best.
          </Text>
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
              Newest Free Workout Videos
            </Heading>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 4 }}
              spacing={2}
              alignItems={"center"}
              p="2"
            >
              {data &&
                data
                  .filter((el) => el.category === "free")
                  .map((el) => (
                    <WorkoutBox
                      key={el.id}
                      image={el.thumbnail}
                      title={el.title}
                      detail={el.primarydetail}
                      subtitle={el.subtitle}
                      id={el.id}
                    ></WorkoutBox>
                  ))}
            </SimpleGrid>
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
              Newest Plus Workout Videos
            </Heading>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 4 }}
              spacing={2}
              alignItems={"center"}
              p="2"
            >
              {data &&
                data
                  .filter((el) => el.category === "plus")
                  .map((el) => (
                    <WorkoutBox
                      key={el.id}
                      image={el.thumbnail}
                      title={el.title}
                      detail={el.primarydetail}
                      subtitle={el.subtitle}
                      id={el.id}
                    ></WorkoutBox>
                  ))}
            </SimpleGrid>
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
              Beginner Workouts
            </Heading>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 4 }}
              spacing={2}
              alignItems={"center"}
              p="2"
            >
              {data &&
                data
                  .filter((el) => el.category === "beginner")
                  .map((el) => (
                    <WorkoutBox
                      key={el.id}
                      image={el.thumbnail}
                      title={el.title}
                      detail={el.primarydetail}
                      subtitle={el.subtitle}
                      id={el.id}
                    ></WorkoutBox>
                  ))}
            </SimpleGrid>
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
              HIIT Workouts
            </Heading>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 4 }}
              spacing={2}
              alignItems={"center"}
              p="2"
            >
              {data &&
                data
                  .filter((el) => el.category === "HIIT")
                  .map((el) => (
                    <WorkoutBox
                      key={el.id}
                      image={el.thumbnail}
                      title={el.title}
                      detail={el.primarydetail}
                      subtitle={el.subtitle}
                      id={el.id}
                    ></WorkoutBox>
                  ))}
            </SimpleGrid>
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
              Strength Workouts
            </Heading>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 4 }}
              spacing={2}
              alignItems={"center"}
              p="2"
            >
              {data &&
                data
                  .filter((el) => el.category === "strength")
                  .map((el) => (
                    <WorkoutBox
                      key={el.id}
                      image={el.thumbnail}
                      title={el.title}
                      detail={el.primarydetail}
                      subtitle={el.subtitle}
                      id={el.id}
                    ></WorkoutBox>
                  ))}
            </SimpleGrid>
          </Container>
        </div>
      )}
    </div>
  );
}

export default Workouts;
