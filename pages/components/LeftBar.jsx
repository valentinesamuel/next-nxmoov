import { Box, Flex, Image } from "@chakra-ui/react";

const LeftBar = () => {
  return (
    <Flex
      display={["none", "none", "none", "flex"]}
      w="5rem"
      bg="#2C273D"
      h="100vh"
      padding="0px .375rem"
      pt="1rem"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Image
          src="assets/images/nxmoov.svg"
          height="2.25rem"
          marginBottom="2.9375rem"
        />

        <Flex
          justifyContent="center"
          width="100%"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius=".25rem"
            src="assets/icons/refresh.svg"
            padding="1.25rem"
            _hover={{
              background: "white.100",
            }}
          />
          <Image
            borderRadius=".25rem"
            src="assets/icons/jobs.svg"
            padding="1.25rem"
            _hover={{
              background: "white.100",
            }}
          />
          <Image
            borderRadius=".25rem"
            src="assets/icons/foursquare.svg"
            padding="1.25rem"
            _hover={{
              background: "white.100",
            }}
          />
          <Image
            borderRadius=".25rem"
            src="assets/icons/calender.svg"
            padding="1.25rem"
            _hover={{
              background: "white.100",
            }}
          />
          <Box position="relative">
            <Image
              borderRadius=".25rem"
              src="assets/icons/message.svg"
              padding="1.25rem"
              _hover={{
                background: "white.100",
              }}
            />
            <Image
              src="assets/icons/message-ping.svg"
              position="absolute"
              top="12.8px"
              left="2rem"
            />
          </Box>
          <Image
            borderRadius=".25rem"
            src="assets/icons/users.svg"
            padding="1.25rem"
            _hover={{
              background: "white.100",
            }}
          />
          <Image
            borderRadius=".25rem"
            src="assets/icons/newsfeed.svg"
            padding="1.25rem"
            _hover={{
              background: "white.100",
            }}
          />
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        paddingBottom="2.6875rem"
        justifyContent="center"
      >
        <Image
          borderRadius=".25rem"
          src="assets/icons/setting.svg"
          padding="1.25rem"
          _hover={{
            background: "white.100",
          }}
        />
        <Image
          borderRadius=".25rem"
          src="assets/icons/help.svg"
          padding="1.25rem"
          _hover={{
            background: "white.100",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default LeftBar;
