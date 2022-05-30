import { Box, Textarea, Flex, Heading, Button } from '@chakra-ui/react';

const DataInput = () => {
  return (
    <>
      <Flex justifyContent="space-between" style={{ height: '50px' }}>
        <Heading size="lg">데이터 입력하기</Heading>
        <Button>입력</Button>
      </Flex>
      <Box style={{ height: 'calc(100vh - 100px)' }}>
        <Textarea style={{ height: '100%' }} />
      </Box>
    </>
  );
};

export default DataInput;
