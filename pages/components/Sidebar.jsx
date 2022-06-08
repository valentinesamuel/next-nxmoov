import { ChevronLeftIcon, DragHandleIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Close from "./CloseIcon";
import Open from "./OpenIcon";

const Sidebar = ({ sidebarStatus, sideBarVisibilityHandler }) => {
  return (
    <Box
      zIndex="1"
      position={["absolute", "absolute", "absolute", "relative"]}
      display="flex"
      flexdir="column"
      backgroundColor={
        sidebarStatus
          ? ["gray.50", "gray.50", "transparent", "transparent"]
          : ""
      }
    >
      <Box position="absolute" left="15px" top="0px">
        {sidebarStatus ? (
          <Open clickOperation={sideBarVisibilityHandler} />
        ) : (
          <Close clickOperation={sideBarVisibilityHandler} />
        )}
      </Box>
      {sidebarStatus && (
        <Flex
          flexDir="column"
          pt="1.875rem"
          width="15rem"
          pl="1.125rem"
          border="1px solid #e4ebed"
        >
          <ChevronLeftIcon h={8} w={8} />
          <Text fontWeight="semibold" mb=".75rem">
            Jobs
          </Text>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              borderBottomWidth="0px"
              borderTopWidth="0px"
              borderStyle="none"
            >
              <h2>
                <AccordionButton
                  padding=".5rem 0 .5rem 0"
                  justifyContent="space-between"
                >
                  <Flex alignItems="center">
                    <DragHandleIcon />
                    <Text>Computer Engineering</Text>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pr="0px" paddingBottom="0px">
                <Flex
                  alignItems="center"
                  padding="0 0 16px 0px"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Image src="/assets/icons/fourbox.svg" mr=".75rem" />
                    <Text fontSize="xs" color="#697275" noOfLines={1}>
                      Senior React (ID: SM..
                    </Text>
                  </Box>
                  <Image src="/assets/icons/active.svg" mr=".75rem" />
                </Flex>
                <Flex
                  alignItems="center"
                  padding="0 0 16px 0px"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Image src="/assets/icons/fourbox.svg" mr=".75rem" />
                    <Text fontSize="xs" color="#697275" noOfLines={1}>
                      C#/React Developer
                    </Text>
                  </Box>
                  <Image src="/assets/icons/active.svg" mr=".75rem" />
                </Flex>
                <Flex
                  alignItems="center"
                  padding="0 0 16px 0px"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Image src="/assets/icons/fourbox.svg" mr=".75rem" />
                    <Text fontSize="xs" color="#697275" noOfLines={1}>
                      Java Dev ... (ID: ME02142)
                    </Text>
                  </Box>
                  <Image src="/assets/icons/inactive.svg" mr=".75rem" />
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              borderBottomWidth="0px"
              borderTopWidth="0px"
              borderStyle="none"
            >
              <h2>
                <AccordionButton
                  padding=".5rem 0 .5rem 0"
                  justifyContent="space-between"
                >
                  <Flex alignItems="center">
                    <DragHandleIcon />
                    <Text>Computer Engineering</Text>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pr="0px">
                <Flex
                  alignItems="center"
                  padding="0 0 16px 0px"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Image src="/assets/icons/fourbox.svg" mr=".75rem" />
                    <Text fontSize="xs" color="#697275" noOfLines={1}>
                      Sub field
                    </Text>
                  </Box>
                  <Image src="/assets/icons/inactive.svg" mr=".75rem" />
                </Flex>
                <Flex
                  alignItems="center"
                  padding="0 0 16px 0px"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Image src="/assets/icons/fourbox.svg" mr=".75rem" />
                    <Text fontSize="xs" color="#697275" noOfLines={1}>
                      Sub field
                    </Text>
                  </Box>
                  <Image src="/assets/icons/inactive.svg" mr=".75rem" />
                </Flex>
                <Flex
                  alignItems="center"
                  padding="0 0 16px 0px"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Image src="/assets/icons/fourbox.svg" mr=".75rem" />
                    <Text fontSize="xs" color="#697275" noOfLines={1}>
                      Sub field
                    </Text>
                  </Box>
                  <Image src="/assets/icons/inactive.svg" mr=".75rem" />
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              borderBottomWidth="0px"
              borderTopWidth="0px"
              borderStyle="none"
            >
              <h2>
                <AccordionButton
                  padding=".5rem 0 .5rem 0"
                  justifyContent="space-between"
                >
                  <Flex alignItems="center">
                    <DragHandleIcon />
                    <Text>Computer Engineering</Text>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pr="0px">
                <Flex
                  alignItems="center"
                  padding="0 0 16px 0px"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Image src="/assets/icons/fourbox.svg" mr=".75rem" />
                    <Text fontSize="xs" color="#697275" noOfLines={1}>
                      Sub field
                    </Text>
                  </Box>
                  <Image src="/assets/icons/inactive.svg" mr=".75rem" />
                </Flex>
                <Flex
                  alignItems="center"
                  padding="0 0 16px 0px"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Image src="/assets/icons/fourbox.svg" mr=".75rem" />
                    <Text fontSize="xs" color="#697275" noOfLines={1}>
                      Sub field
                    </Text>
                  </Box>
                  <Image src="/assets/icons/inactive.svg" mr=".75rem" />
                </Flex>
                <Flex
                  alignItems="center"
                  padding="0 0 16px 0px"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Image src="/assets/icons/fourbox.svg" mr=".75rem" />
                    <Text fontSize="xs" color="#697275" noOfLines={1}>
                      Sub field
                    </Text>
                  </Box>
                  <Image src="/assets/icons/inactive.svg" mr=".75rem" />
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              borderBottomWidth="0px"
              borderTopWidth="0px"
              borderStyle="none"
            >
              <h2>
                <AccordionButton
                  padding=".5rem 0 .5rem 0"
                  justifyContent="space-between"
                >
                  <Flex alignItems="center">
                    <DragHandleIcon />
                    <Text>Computer Engineering</Text>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pr="0px">
                <Flex
                  alignItems="center"
                  padding="0 0 16px 0px"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Image src="/assets/icons/fourbox.svg" mr=".75rem" />
                    <Text fontSize="xs" color="#697275" noOfLines={1}>
                      Sub field
                    </Text>
                  </Box>
                  <Image src="/assets/icons/inactive.svg" mr=".75rem" />
                </Flex>
                <Flex
                  alignItems="center"
                  padding="0 0 16px 0px"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Image src="/assets/icons/fourbox.svg" mr=".75rem" />
                    <Text fontSize="xs" color="#697275" noOfLines={1}>
                      Sub field
                    </Text>
                  </Box>
                  <Image src="/assets/icons/inactive.svg" mr=".75rem" />
                </Flex>
                <Flex
                  alignItems="center"
                  padding="0 0 16px 0px"
                  justifyContent="space-between"
                >
                  <Box display="flex">
                    <Image src="/assets/icons/fourbox.svg" mr=".75rem" />
                    <Text fontSize="xs" color="#697275" noOfLines={1}>
                      Sub field
                    </Text>
                  </Box>
                  <Image src="/assets/icons/inactive.svg" mr=".75rem" />
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      )}
    </Box>
  );
};

export default Sidebar;
