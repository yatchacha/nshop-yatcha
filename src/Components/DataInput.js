import { Box, Textarea, Flex, Heading, Button } from '@chakra-ui/react';

const DataInput = ({ data }) => {
  const parse = () => {
    // 데이터 파싱해서 한 줄씩 큐에 넣기
    const currInput = data.inputText.trim();
    const currInputArray = currInput.split('\n');
    data.setInput(currInputArray);
  };

  return (
    <>
      <Flex justifyContent="space-between" style={{ height: '50px' }}>
        <Heading size="lg">데이터 입력하기</Heading>
        <Button onClick={parse}>입력</Button>
      </Flex>
      <Box style={{ height: 'calc(100vh - 100px)' }}>
        <Textarea
          onChange={e => {
            data.setInputText(e.currentTarget.value);
          }}
          style={{ height: '100%' }}
        />
      </Box>
    </>
  );
};

export default DataInput;
