import { ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import StarRating from "../StarRating";
import { New } from "../utils/Tag";

const MobileCard = () => {
  return (
    <Flex flexDirection="column" padding="16px" bg="gray.300" margin="12px 0">
      <Flex justifyContent="space-between">
        {/* Avatar */}
        <Flex >
          <Image
            mr=".625rem"
            size="sm"
            borderRadius="50%"
            width="40px"
            height="40px"
            src="https://randomuser.me/api/portraits/men/91.jpg"
          />
          <Flex flexDir="column">
            <Flex alignItems="center">
              <Text mr="8px">Miracle Dokidis</Text>
              <New />
            </Flex>
            <StarRating />
          </Flex>
        </Flex>
        <Image height="max-content" src="/assets/icons/options.svg" />
      </Flex>
      <Button
        mt="1rem"
        leftIcon={<ViewIcon color="gray.500" />}
        variant="outline"
      >
        View Candidate
      </Button>
    </Flex>
  );
};

export default MobileCard;
