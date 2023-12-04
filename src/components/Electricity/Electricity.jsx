import Counter from '../Counter/Counter';

import {
  Container,
  SubTitle,
  Wrapper,
  CounterKwh,
  Text,
} from './Electricity.styled';

const Electricity = () => {
  return (
    <Container>
      <SubTitle>
        Electricity we produced
        <br />
        for all time
      </SubTitle>
      <Wrapper>
        <CounterKwh>
          <Counter></Counter>
        </CounterKwh>
        <Text>kWh</Text>
      </Wrapper>
    </Container>
  );
};

export default Electricity;
