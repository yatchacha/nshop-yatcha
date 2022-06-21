import { Box, Textarea, Flex, Heading, Button } from '@chakra-ui/react';

const DataInput = ({ data }) => {
  const parse = () => {
    // 데이터 파싱해서 한 줄씩 큐에 넣기
    const currInput = data.inputText.trim();
    const currInputArray = currInput.split('\n');
    data.setInput(currInputArray);
    data.setInputButton(true);
    data.setCurrentStatus('데이터 입력 시작');
  };
  const reset = () => {
    window.location.reload();
  };

  return (
    <>
      <Flex
        justifyContent="space-between"
        style={{ height: '50px' }}
        alignItems="center"
      >
        <Heading size="lg">데이터 입력하기</Heading>
        <Button
          onClick={data.inputButton ? reset : parse}
          colorScheme={data.inputButton ? 'orange' : 'gray'}
        >
          {data.inputButton ? '초기화' : '입력'}
        </Button>
      </Flex>
      <Box style={{ height: 'calc(100vh - 100px)' }}>
        <Textarea
          onChange={e => {
            data.setInputText(e.currentTarget.value);
          }}
          style={{ height: '100%' }}
        >
          {data.inputText}
        </Textarea>
      </Box>
    </>
  );
};

export default DataInput;
