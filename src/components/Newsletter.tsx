import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  min-width: 1024px;
  min-height: 100px;
`;
const Form = styled.div`
display:flex;
align-items: center;
justify-content: center;
padding: 50px;
`

const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: white;
`

const Newsletter = () => {
  return <Container>
    <Title>Get notified about our trending products </Title>
    <Form>
    <input placeholder=" your mail" style={{padding: '20px', width: '300px'}}/>
    <Send style={{cursor: 'pointer', marginLeft: '20px'}} />
    </Form>
    </Container>;
};

export default Newsletter;
