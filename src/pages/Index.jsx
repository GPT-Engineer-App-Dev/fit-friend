import { Container, VStack, Heading, Text, Button, Box, Flex, Spacer } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaBiking } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(storedWorkouts);
  }, []);

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
        <Button as={Link} to="/log-workout" colorScheme="teal" size="lg">
          Log Workout
        </Button>
        <Button as={Link} to="/progress" colorScheme="blue" size="lg">
          View Progress
        </Button>
        <VStack spacing={4} width="100%">
          {workouts.map((workout, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <Text><strong>Type:</strong> {workout.type}</Text>
              <Text><strong>Duration:</strong> {workout.duration} minutes</Text>
              <Text><strong>Date:</strong> {workout.date}</Text>
              <Text><strong>Notes:</strong> {workout.notes}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;