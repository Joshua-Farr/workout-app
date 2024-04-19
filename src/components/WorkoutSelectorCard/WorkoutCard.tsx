import {
  Card,
  CardBody,
  Flex,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { BsArrowRight } from "react-icons/bs";

export const WorkoutCard = (exerciseInfo: any) => {
  return (
    <Card>
      <CardBody>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Text fontSize="lg">Dumbell Flys</Text>
          <Text fontSize="lg">3 x 20</Text>
          <Spacer />
          <IconButton
            // colorScheme="blue"
            aria-label="Start Exercise"
            size="sm"
            icon={<BsArrowRight />}
          />
        </Flex>
      </CardBody>
    </Card>
  );
};
