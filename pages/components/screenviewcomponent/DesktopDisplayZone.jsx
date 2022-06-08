import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DesktopCard from "./DesktopCard";

const DesktopDisplayZone = ({ droppableColumnId, column }) => {
    // This is each column that gets rendered
  return (
    <Box
      display="flex"
      borderRight="2px solid red"
      padding="0 .625rem"
          flexDir="column"
          width="12.5rem"
      key={droppableColumnId}
    >
      <Box
        alignItems="center"
        bg="aliceblue"
        border="1px solid purple"
        borderRadius="4px"
      >
        <Box display="flex" alignItems="center">
          <Text noOfLines={1}>{column.name}</Text>
          <Text>{column.cards.length}</Text>
        </Box>
        <Box
          height=".125rem"
          borderRadius="0 0 .25rem .25rem"
          bg="darkblue"
          width="100%"
        ></Box>
      </Box>

          
          {/* This is each card that gets rendered in the column */}
      <Droppable droppableId={droppableColumnId} key={droppableColumnId}>
        {(provided, snapshot) => {
          return (
            <Box
              height="100%"
              marginTop=".75rem"
              //   overflowY="scroll"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver
                  ? "lightblue"
                  : "transparent",
              }}
            >
              {/* <DesktopCard card={card} index={index} key={index} /> */}
              {column.cards.map((card, index) => {
                return <p>Hello</p>;
              })}
              {provided.placeholder}
            </Box>
          );
        }}
      </Droppable>

      <div />
    </Box>
  );
};

export default DesktopDisplayZone;
