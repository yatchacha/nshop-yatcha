import { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import DataInput from './Components/DataInput';
import DataProcess from './Components/DataProcess';
import DataOutput from './Components/DataOutput';

const Main = () => {
  const [inputText, setInputText] = useState('');
  const [input, setInput] = useState([]);
  const [inputButton, setInputButton] = useState(false);
  const [search, setSearch] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [cursorTitle, setCursorTitle] = useState('');
  const [output, setOutput] = useState([]);
  const [outputLoading, setOutputLoading] = useState(false);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} p={3}>
      <GridItem w="100%" h="10">
        <DataInput
          data={{
            input,
            setInput,
            inputButton,
            setInputButton,
            setOutput,
            inputText,
            setInputText,
          }}
        ></DataInput>
      </GridItem>
      <GridItem w="100%" h="10" colSpan={2}>
        <DataProcess
          data={{
            input,
            search,
            setSearch,
            cursor,
            setCursor,
            output,
            setOutput,
            setOutputLoading,
            cursorTitle,
            setCursorTitle,
          }}
        ></DataProcess>
      </GridItem>
      <GridItem w="100%" h="10">
        <DataOutput
          data={{
            input,
            output,
            setOutput,
            outputLoading,
            setOutputLoading,
            setCursor,
          }}
        ></DataOutput>
      </GridItem>
    </Grid>
  );
};

export default Main;
