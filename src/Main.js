import { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import DataInput from './Components/DataInput';
import DataProcess from './Components/DataProcess';
import DataOutput from './Components/DataOutput';

const Main = () => {
  const [sort, setSort] = useState('sim');
  const [inputText, setInputText] = useState('');
  const [input, setInput] = useState([]);
  const [inputButton, setInputButton] = useState(false);
  const [search, setSearch] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [cursorTitle, setCursorTitle] = useState('');
  const [output, setOutput] = useState([]);
  const [outputLoading, setOutputLoading] = useState(false);
  const [currentStatus, setCurrentStatus] = useState('입력 대기중');

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} p={3}>
        <GridItem w="100%" h="100%">
          <DataInput
            data={{
              input,
              setInput,
              inputButton,
              setInputButton,
              setOutput,
              inputText,
              setInputText,
              setCurrentStatus,
            }}
          ></DataInput>
        </GridItem>
        <GridItem w="100%" h="100%" colSpan={2}>
          <DataProcess
            data={{
              input,
              sort,
              setSort,
              search,
              setSearch,
              cursor,
              setCursor,
              output,
              setOutput,
              setOutputLoading,
              cursorTitle,
              setCursorTitle,
              setCurrentStatus,
            }}
          ></DataProcess>
        </GridItem>
        <GridItem w="100%" h="100%">
          <DataOutput
            data={{
              input,
              output,
              setOutput,
              outputLoading,
              setOutputLoading,
              setCursor,
              setCurrentStatus,
            }}
          ></DataOutput>
        </GridItem>
        <GridItem
          colSpan={4}
          style={{ marginTop: '-18px', fontSize: '14px', marginBottom: '0px' }}
        >
          현재상황 : {currentStatus}
        </GridItem>
      </Grid>
    </>
  );
};

export default Main;
