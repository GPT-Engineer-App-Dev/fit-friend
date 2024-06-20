import { Container, VStack, Heading, Text, Button, Box, Flex, Spacer } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaBiking } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Fitness Tracker
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Track your workouts and stay fit!
        </Text>
        <Flex width="100%" justifyContent="space-around">
          <Box textAlign="center">
            <FaRunning size="3em" />
            <Text mt={2}>Running</Text>
          </Box>
          <Box textAlign="center">
            <FaDumbbell size="3em" />
            <Text mt={2}>Weight Lifting</Text>
          </Box>
          <Box textAlign="center">
            <FaBiking size="3em" />
            <Text mt={2}>Cycling</Text>
          </Box>
        </Flex>
        <Spacer />
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;