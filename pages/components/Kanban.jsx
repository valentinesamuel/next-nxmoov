import { Box, Flex } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import DesktopView from "./screenviewcomponent/DesktopView";
import MobileView from "./screenviewcomponent/MobileView";

const Kanban = () => {
  const [columns, setColumns] = useState(apiData);

  return (
    <Box>
      <Flex display={["flex", "none", "none", "none"]}>
        <MobileView />
      </Flex>
      <Flex display={["none", "none", "flex", "none"]}>tablet</Flex>
      <Flex display={["none", "none", "none", "flex"]}>
        <DesktopView />
      </Flex>
    </Box>
  );
};

export default Kanban;
const apiData = {
  [nanoid()]: {
    name: "Sourcing",
    hexColor: "#287CC9",
    cards: [
      {
        id: nanoid(),
        tag: "New",
        name: "Miracle Dokidis",
        rating: 0,
        status: "New",
        time: null,
        phoneInterview: null,
        image: "https://randomuser.me/api/portraits/men/88.jpg",
      },
      {
        id: nanoid(),
        tag: "New",
        name: "Allison Curtis",
        rating: 3,
        status: "New",
        time: "null",
        phoneInterview: null,
        image: "https://randomuser.me/api/portraits/men/62.jpg",
      },
    ],
  },
  [nanoid()]: {
    name: "Screening",
    hexColor: "#287C36",
    cards: [
      {
        id: nanoid(),
        tag: "Lead",
        name: "Maren Stanton",
        rating: 3,
        status: "Challenge Sent",
        time: "2 days ago",
        phoneInterview: null,
        image: "https://randomuser.me/api/portraits/men/55.jpg",
      },
      {
        id: nanoid(),
        tag: "Applicant",
        name: "Eric Bana",
        rating: 3,
        status: "",
        time: "2 days ago",
        phoneInterview: null,
        image: "https://randomuser.me/api/portraits/men/67.jpg",
      },
    ],
  },
  [nanoid()]: {
    name: "Design Challenge",
    hexColor: "#EEA401",
    cards: [
      {
        id: nanoid(),
        tag: "Prospect",
        name: "Lee Vaccaro",
        rating: 3,
        status: "Challenge Sent",
        time: "2 days ago",
        phoneInterview: "pass",
        image: "https://randomuser.me/api/portraits/lego/6.jpg",
      },
      {
        id: nanoid(),
        tag: "Prospect",
        name: "Devin Townsend",
        rating: 4,
        status: "Disqalified",
        time: "2 days ago",
        phoneInterview: null,
        image: "https://randomuser.me/api/portraits/women/29.jpg",
      },
    ],
  },
  [nanoid()]: {
    name: "Interview",
    hexColor: "#507D7B",
    cards: [
      {
        id: nanoid(),
        tag: "Lead",
        name: "Ann Donin",
        rating: 4,
        status: "",
        time: "2 days ago",
        phoneInterview: null,
        image: "https://randomuser.me/api/portraits/women/25.jpg",
      },
      {
        id: nanoid(),
        tag: "Applicant",
        name: "Kevin Lee",
        rating: 4,
        status: "Disqalified",
        time: "2 days ago",
        phoneInterview: "fail",
        image: "https://randomuser.me/api/portraits/women/59.jpg",
      },
    ],
  },
  [nanoid()]: {
    name: "Tests",
    hexColor: "#AB56B2",
    cards: [
      {
        id: nanoid(),
        tag: "Appilcant",
        name: "Brianna Vetrovs",
        rating: 3,
        status: "Test Scheduled",
        time: "2 days ago",
        phoneInterview: "pass",
        image: "https://randomuser.me/api/portraits/lego/2.jpg",
      },
    ],
  },
  // [nanoid()]: {
  //   name: "Hired",
  //   hexColor: "#0BAD90",
  //   cards: [
  //     {
  //       id: nanoid(),
  //       tag: "Applicant",
  //       name: "Micheal Chandler",
  //       rating: 5,
  //       status: "Hired",
  //       time: "",
  //       phoneInterview: "pass",
  //       image:
  //         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
  //     },
  //     {
  //       id: nanoid(),
  //       tag: "Applicant",
  //       name: "Justing Gaethje",
  //       rating: 5,
  //       status: "Hired",
  //       time: "2 days ago",
  //       phoneInterview: "pass",
  //       image:
  //         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
  //     },
  //   ],
  // },
};
