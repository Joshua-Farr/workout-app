import { Flex, Spacer, Text } from "@chakra-ui/react";
import { WorkoutCard } from "./WorkoutCard";

export const Workout = () => {
  return (
    <>
      <Text fontSize="2xl" as="b" align="center">
        Todays Workout:
      </Text>
      <Flex maxHeight="max-content" direction="column" gap="2">
        <WorkoutCard exerciseInfo={"hello"} />
        <Spacer />
        <WorkoutCard />
        <Spacer />
        <WorkoutCard />
      </Flex>
    </>
  );
};
