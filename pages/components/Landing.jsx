import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Table from "./Table";

const Landing = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // the kanban table will show here as component
  const sideBarVisibility = () => {
    setIsSidebarOpen((currentStatus) => {
      return !currentStatus;
    });
  };


  return (
    <>
      <Box display="flex" bg="gray.50" >
        <Sidebar
          sidebarStatus={isSidebarOpen}
          sideBarVisibilityHandler={sideBarVisibility}
        />
        <Table sidebarStatus={isSidebarOpen} />
      </Box>
    </>
  );
};

export default Landing;
