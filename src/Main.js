import { Grid, GridItem } from '@chakra-ui/react';
import DataInput from './Components/DataInput';
import DataProcess from './Components/DataProcess';
import DataOutput from './Components/DataOutput';

const Main = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} p={3}>
      <GridItem w="100%" h="10">
        <DataInput></DataInput>
      </GridItem>
      <GridItem w="100%" h="10" colSpan={2}>
        <DataProcess></DataProcess>
      </GridItem>
      <GridItem w="100%" h="10">
        <DataOutput></DataOutput>
      </GridItem>
    </Grid>
  );
};

export default Main;
