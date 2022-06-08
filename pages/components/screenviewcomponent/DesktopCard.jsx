import { ChevronDownIcon, StarIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Applicant, Lead, Prospect, New } from "../utils/Tag";

const Card = () => {
  return (
    <Box textAlign="center" bg="white" maxW="12.5rem" padding=".75rem">
      <Flex justifyContent="space-between" alignItems="center">
        <New />
        <Image src="assets/icons/options.svg" />
      </Flex>
      <Avatar
        margin=" 0.5rem 0 0.75rem 0"
        name="Ryan Florence"
        src="https://randomuser.me/api/portraits/men/14.jpg"
      />
      <Text fontWeight="semibold" mb=".75rem">
        Miracle Dokidis
      </Text>
      <Flex justifyContent="center">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </Flex>

      {/* Status */}
      <Text fontSize="sm" margin="12px 0">
        2 days ago
      </Text>
      <Text fontSize="sm" margin="12px 0" color="green">
        Challenge Sent
      </Text>
      <Text fontSize="sm" margin="12px 0" color="green">
        Test Scheduled
      </Text>
      <Text fontSize="sm" margin="12px 0" color="green">
        Hired
      </Text>
      <Text fontSize="sm" margin="12px 0" color="red">
        Disqualified
      </Text>

      {/* to see candidate details*/}
      <Button
        mt="1.5rem"
        leftIcon={<ViewIcon color="gray.500" />}
        variant="outline"
      >
        View Candidate
      </Button>

      {/* if no phone interview */}
      <Box padding=".75rem 0" bg="#F5F5F5" borderRadius="4px">
        <Text>
          Phone Screen? <ChevronDownIcon />
        </Text>
        <Flex justifyContent="center">
          <Image src="/assets/icons/thumbdown.svg" mr="1rem" />
          <Image src="/assets/icons/thumbup.svg" />
        </Flex>
      </Box>

      {/* If they pass or fail */}
      <Flex justifyContent="center">
        <Image src="/assets/icons/pass.svg" />
        <Image src="/assets/icons/fail.svg" />
      </Flex>
    </Box>
  );
};

export default Card;
