import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/07/Featured-Image-1.jpg")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Form = styled.form ` 
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Not a member? Create an Account</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confir password" />
          <Agreement>
            {" "}
            By creating an account, I consent to the processing of my personal
            data with<b>PRIVACY POLICY</b>
          </Agreement>
          <Button> Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Profile;
