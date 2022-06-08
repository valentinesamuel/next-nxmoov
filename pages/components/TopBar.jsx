import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Flex,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import React from "react";

const TopBar = () => {
  return (
    <Box display={["none", "none", "none", "block"]}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="1rem 3rem 1rem 1rem"
      >
        <Flex alignItems="center">
          <Image src="/assets/icons/switch.svg" mr="1.5rem" />
          <Image src="/assets/icons/amd-option.svg" mr=".75rem" />
          <Text
            backgroundColor="gray.25"
            height="max-content"
            fontSize="sm"
            padding="0px 4px"
            borderRadius="4px"
            mr=".5625rem"
          >
            130
          </Text>
          <Text color="primaryColors.seaBlue" fontWeight="semibold">
            Credits
          </Text>
        </Flex>

        <Flex alignItems="center">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="#697275" />}
            />
            <Input
              type="tel"
              placeholder="Search"
              borderRadius="4rem"
              width="300px"
              marginRight="1.5rem"
            />
          </InputGroup>

          <Text marginRight="8px" width="100%">
            William Smith
          </Text>
          <Avatar
            name="William Smith"
            size="md"
            marginRight="8px"
            src="https://randomuser.me/api/portraits/men/62.jpg"
          />
          <ChevronDownIcon color="gray.500" />
          <Divider orientation="vertical" margin="0px 1.5rem" color="#E4EBED" />

          <Image src="assets/icons/bell.svg" marginRight="1.5rem" />
          <Image src="assets/icons/add.svg" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopBar;
