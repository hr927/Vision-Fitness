import { Box, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ProgramBox({ image, title, subtitle, detail, id }) {
  const navigate = useNavigate();
  return (
    <Box
      _hover={{ border: "2px", borderColor: "#4296cb" }}
      onClick={() => navigate(`/program/${id}`)}
      textAlign={"left"}
      bgColor={"white"}
    >
      <img src={image} alt="" width={"100%"} />
      <Stack p={"5"}>
        <Text color={"#4296cb"} fontSize="11px" fontWeight={"500"}>
          {detail}
        </Text>
        <Text fontSize={"18px"} lineHeight={"20px"} fontWeight={"600"}>
          {title}
        </Text>
        <Text>{subtitle}</Text>
      </Stack>
    </Box>
  );
}

export default ProgramBox;
