import { useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  Image,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const DataProcess = ({ data }) => {
  const htmlPattern = /(<([^>]+)>)/gi;

  useEffect(() => {
    if (data.input.length !== 0) {
      // 초기화
      data.setSearch([]);
      data.setOutput([]);

      init();
    }
  }, [data.input]);

  useEffect(() => {
    if (data.cursor !== 0) {
      const keyword = data.input[data.cursor - 1];
      const url =
        'https://api.yatchacha.com/shopping?keyword=' +
        keyword +
        '&display=100';
      axios.get(url).then(Response => {
        data.setSearch(Response.data.items);
      });
      data.setCursorTitle(keyword);
    }
  }, [data.cursor]);

  const init = async () => {
    data.setOutputLoading(true);
    // 값 넣기
    let dataTotal = [];
    for (let i = 0; i < data.input.length; i++) {
      const item = data.input[i];
      await axios
        .get(
          'https://api.yatchacha.com/shopping?keyword=' + item + '&display=1'
        )
        .then(async Response => {
          let dataResult = {};
          if (Response.data.total !== 0) {
            dataResult = Response.data.items[0];
          }
          dataTotal.push(dataResult);
        });
    }
    data.setOutput(dataTotal);
    data.setOutputLoading(false);
    data.setCursor(1);
  };

  const pick = (target, item) => {
    let tempData = data.output;
    let startArr = tempData.slice(0, target - 1);
    let endArr = [];
    if (target === data.search.length) {
      endArr = tempData.slice(target);
    } else {
      endArr = tempData.slice(target);
    }
    const resultArr = [...startArr, item, ...endArr];
    data.setOutput(resultArr);
  };

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        style={{ height: '50px' }}
      >
        <Heading size="lg">데이터 선택하기</Heading>
        <Text>{data.cursorTitle}</Text>
        <Flex alignItems="center">
          <IconButton
            mr={2}
            aria-label="Back"
            icon={<ArrowBackIcon />}
            isDisabled={data.cursor <= 1}
            onClick={() => {
              data.setCursor(data.cursor - 1);
            }}
          />
          <Heading size="lg">{data.cursor}</Heading>
          <Heading size="md" ml={1}>
            {' '}
            / {data.input.length}
          </Heading>
          <IconButton
            ml={2}
            aria-label="Forward"
            icon={<ArrowForwardIcon />}
            isDisabled={data.cursor === data.input.length}
            onClick={() => {
              data.setCursor(data.cursor + 1);
            }}
          />
        </Flex>
      </Flex>
      <Box
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        height="calc(100vh - 100px)"
        style={{ overflow: 'auto' }}
      >
        {data.search.map(item => {
          return (
            <Box p="6" borderWidth="1px" m="2" key={item.productId}>
              <Flex justifyContent="space-between">
                <Image src={item.image} w={100}></Image>
                <Table variant="unstyled">
                  <Tbody>
                    <Tr>
                      <Td
                        style={{
                          paddingTop: 0,
                          paddingBottom: 0,
                          fontSize: '14px',
                        }}
                      >
                        <Text>
                          {item.category1 !== '' && item.category1}
                          {item.category2 !== '' && ' > ' + item.category2}
                          {item.category3 !== '' && ' > ' + item.category3}
                          {item.category4 !== '' && ' > ' + item.category4}
                        </Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td style={{ paddingTop: '5px' }}>
                        <Heading size="lg">
                          {item.title.replace(htmlPattern, '')}
                        </Heading>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td style={{ paddingTop: '5px', paddingBottom: 0 }}>
                        <Heading size="md">{item.mallName}</Heading>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Flex
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="flex-end"
                  minW={150}
                >
                  <Heading size="lg">
                    {new Intl.NumberFormat('ko-KR', {
                      style: 'currency',
                      currency: 'KRW',
                    }).format(item.lprice)}
                  </Heading>
                  <Flex flexDirection="row">
                    <Button
                      mr={1}
                      onClick={() => {
                        window.open(item.link);
                      }}
                    >
                      링크
                    </Button>
                    <Button
                      colorScheme="green"
                      onClick={() => {
                        pick(data.cursor, item);
                      }}
                    >
                      선택
                    </Button>
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

export default DataProcess;
