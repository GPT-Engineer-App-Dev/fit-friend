import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LogWorkout = () => {
  const [workout, setWorkout] = useState({ type: "", duration: "", date: "", notes: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const workouts = JSON.parse(localStorage.getItem("workouts")) || [];
    workouts.push(workout);
    localStorage.setItem("workouts", JSON.stringify(workouts));
    navigate("/");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="xl">Log Workout</Heading>
        <FormControl id="type">
          <FormLabel>Type of Exercise</FormLabel>
          <Input type="text" name="type" value={workout.type} onChange={handleChange} required />
        </FormControl>
        <FormControl id="duration">
          <FormLabel>Duration (minutes)</FormLabel>
          <Input type="number" name="duration" value={workout.duration} onChange={handleChange} required />
        </FormControl>
        <FormControl id="date">
          <FormLabel>Date</FormLabel>
          <Input type="date" name="date" value={workout.date} onChange={handleChange} required />
        </FormControl>
        <FormControl id="notes">
          <FormLabel>Notes</FormLabel>
          <Textarea name="notes" value={workout.notes} onChange={handleChange} />
        </FormControl>
        <Button colorScheme="teal" type="submit">Log Workout</Button>
      </VStack>
    </Container>
  );
};

export default LogWorkout;