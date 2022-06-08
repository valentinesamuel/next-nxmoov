import { Box, Image, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Landing from "./components/Landing";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import TopBar from "./components/TopBar";

const Home = () => {
  // check the screen width here
  // use '&&' to control the visibilty of the components
  // pass the screensize as prop to the landing page
  return (
    <div>
      <Flex>
        <LeftBar />
        <Box
        width={['100%', 'auto', '100%', '100%']}
        >
          <TopBar />
         <Landing/>
        </Box>
        <RightBar />
      </Flex>
    </div>
  );
};

export default Home;
