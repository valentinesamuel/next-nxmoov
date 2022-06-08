import { Box, Flex, Image, Text } from "@chakra-ui/react";

const RightBar = () => {
  return (
    <Box
      display={["none", "none", "none", 'block']}
      bg="white"
      padding="1rem"
      borderLeft="1px solid #E1EAED"
    >
      <Flex flexDirection="column" alignItems="center" marginBottom="32px">
        <Image src="assets/icons/tasks.svg" paddingBottom="6px" />
        <Text color="gray.900" fontSize="xs">
          Tasks
        </Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center" marginBottom="32px">
        <Image src="assets/icons/notes.svg" paddingBottom="6px" />
        <Text color="gray.900" fontSize="xs">
          Notes
        </Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center" marginBottom="32px">
        <Image src="assets/icons/folders.svg" paddingBottom="6px" />
        <Text color="gray.900" fontSize="xs">
          Folders
        </Text>
      </Flex>
    </Box>
  );
};

export default RightBar;
