import { Box, Flex, Heading } from '@chakra-ui/react';

const DataProcess = () => {
  return (
    <>
      <Flex justifyContent="space-between" style={{ height: '50px' }}>
        <Heading size="lg">데이터 선택하기</Heading>
      </Flex>
      <Box
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        height="calc(100vh - 100px)"
      >
        <Box p="6" borderWidth="1px" m="2"></Box>
        <Box p="6" borderWidth="1px" m="2"></Box>
        <Box p="6" borderWidth="1px" m="2"></Box>
      </Box>
    </>
  );
};

export default DataProcess;
