import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Kanban from "./Kanban";
import StarRating from "./StarRating";

const Table = ({ sidebarStatus }) => {
  return (
    <Box
      width={["100%", "auto", "100%", "100%"]}
      backgroundColor={
        sidebarStatus
          ? ["#02071299", "0207129", "transparent", "transparent"]
          : ""
      }
      transition="color, 700ms"
    >
      <Flex justifyContent="space-between" mt="24px">
        <Flex flexDir="column">
          <Text
            fontSize="sm"
            color="primaryColors.seaBlue"
            display={["block", "block", "none", "none"]}
          >
            Back to jobs
          </Text>
          <Text as="h1" fontSize="2xl" fontWeight="bold" mb=".5rem">
            C#/React Developer
          </Text>
          <Flex mb="2.3125rem" display={["none", "none", "none", "flex"]}>
            <Box display="flex" alignItems="center">
              <Image src="/assets/icons/gray-job.svg" marginRight="10.5px" />
              <Text>Full Time</Text>
            </Box>
            <Divider orientation="vertical" m="0px 16px" />
            <Box display="flex" alignItems="center">
              <Image src="/assets/icons/location.svg" marginRight="10.5px" />
              <Text>Boston, MA</Text>
            </Box>
            <Divider orientation="vertical" m="0px 16px" />
            <Box display="flex" alignItems="center">
              <Image src="/assets/icons/clock.svg" marginRight="10.5px" />
              <Text>8 days ago</Text>
            </Box>
          </Flex>
        </Flex>

        <Flex>
          <SearchIcon
            display={["block", "block", "none", "none"]}
            w={6}
            h={6}
            color="gray.500"
            mr="2.1875rem"
          />
          <Button
            display={["none", "none", "none", "flex"]}
            mr=".75rem"
            colorScheme="teal"
            variant="outline"
            alignItems="center"
          >
            <Image src="/assets/icons/share.svg" mr=".6563rem" /> Share
          </Button>
          <Button
            display={["none", "none", "none", "flex"]}
            colorScheme="teal"
            variant="outline"
            alignItems="center"
            bg="primaryColors.celadonBlue"
            color="white"
            padding=".75rem 1.125rem"
            rightIcon={<ChevronDownIcon />}
          >
            <Image src="/assets/icons/web.svg" mr=".6563rem" />
            Published
          </Button>
        </Flex>
      </Flex>

      <Tabs>
        <TabList
          overflowY={["scroll", "scroll", "visible", "visible"]}
          overflowX={["auto", "auto", "auto", "visible"]}
        >
          <Tab fontWeight="semibold">Candidates</Tab>
          <Tab>
            <Text noOfLines={1}>Job Details</Text>{" "}
          </Tab>
          <Tab>Timeline</Tab>
          <Tab display={["none", "none", "flex", "flex"]}>Screening</Tab>
          <Tab display={["none", "none", "flex", "flex"]}>Settings</Tab>
          <Tab display={["none", "none", "flex", "flex"]}>
            <Image src="/assets/icons/avatar-stack.svg" />
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <StarRating numOfStar={3} />
            <Box display="flex" alignItems="center">
              <Text fontWeight="semibold" mr="8px">
                22 Candidates
              </Text>
              <Image
                display={["none", "none", "block", "block"]}
                src="assets/icons/candidates.svg"
              />
            </Box>
            <Kanban />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Table;
