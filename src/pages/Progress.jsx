import { useEffect, useState } from "react";
import { Container, VStack, Heading, Box, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Progress = () => {
  const [workouts, setWorkouts] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(storedWorkouts);

    const dates = storedWorkouts.map(workout => workout.date);
    const durations = storedWorkouts.map(workout => workout.duration);

    setChartData({
      labels: dates,
      datasets: [
        {
          label: 'Workout Duration Over Time',
          data: durations,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    });
  }, []);

  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Heading as="h2" size="xl">Progress Over Time</Heading>
        <Box width="100%">
          <Line data={chartData} />
        </Box>
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

export default Progress;