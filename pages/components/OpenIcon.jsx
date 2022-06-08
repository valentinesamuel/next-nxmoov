import { ChevronLeftIcon } from "@chakra-ui/icons";

const Open = ({ clickOperation }) => {
  return (
    <ChevronLeftIcon
      filter="drop-shadow(0px 5.33333px 13.3333px rgba(0, 0, 0, 0.12))"
      color="gray.500"
      w={7}
      h={7}
      borderRadius="50%"
      bg="white"
      onClick={clickOperation}
    />
  );
};

export default Open;
