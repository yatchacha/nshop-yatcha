import {
  Box,
  Flex,
  Heading,
  Button,
  Spinner,
  Image,
  Text,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const DataOutput = ({ data }) => {
  const htmlPattern = /(<([^>]+)>)/gi;
  const [outputStr, setOutputStr] = useState('');
  let count = 0;

  const copy = () => {
    let outputString = '';
    data.output.map(item => {
      outputString += item.lprice.toString() + '\n';
    });
    setOutputStr(outputString);
  };

  useEffect(() => {
    copy();
  }, [data.output]);

  return (
    <>
      <Flex justifyContent="space-between" style={{ height: '50px' }}>
        <Heading size="lg">데이터 출력하기</Heading>
        <CopyToClipboard
          text={outputStr}
          onCopy={() => {
            alert('클립보드에 복사했습니다!');
          }}
        >
          <Button>출력</Button>
        </CopyToClipboard>
      </Flex>
      <Box
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        height="calc(100vh - 100px)"
        style={{ overflow: 'auto' }}
      >
        {data.outputLoading && (
          <Flex alignItems="center" justifyContent="center" mt={5}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        )}
        {data.output.map(item => {
          count++;
          return (
            <Box p="6" borderWidth="1px" m="2" key={item.productId}>
              <Flex>
                <Image src={item.image} w={100}></Image>
                <Flex flexDirection="column" ml={1} w="100%">
                  <Text fontSize={14}>검색어 : {data.input[count - 1]}</Text>
                  <Heading size="md">
                    {item.title.replace(htmlPattern, '')} - {item.mallName}
                  </Heading>
                  <Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mt={3}
                  >
                    <Heading size="md">
                      {new Intl.NumberFormat('ko-KR', {
                        style: 'currency',
                        currency: 'KRW',
                      }).format(item.lprice)}
                    </Heading>
                    <Flex>
                      <Button
                        colorScheme="orange"
                        size="sm"
                        onClick={e => {
                          data.setCursor(
                            e.nativeEvent.target.innerHTML.replace(
                              /[^0-9]/g,
                              ''
                            )
                          );
                        }}
                      >
                        변경 ({count})
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default DataOutput;
