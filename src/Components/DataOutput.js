import { Box, Flex, Heading, Button } from '@chakra-ui/react';

const DataOutput = () => {
  return (
    <>
      <Flex justifyContent="space-between" style={{ height: '50px' }}>
        <Heading size="lg">데이터 출력하기</Heading>
        <Button>출력</Button>
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

export default DataOutput;
