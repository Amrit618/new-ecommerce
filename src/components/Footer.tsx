import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

interface Payment {
  src: string;
}

const Container = styled.div`
  display: flex;
  background: rgb(5, 0, 8);
  background: linear-gradient(
    90deg,
    rgba(5, 0, 8, 0.8604035364145658) 0%,
    rgba(5, 43, 30, 1) 35%,
    rgba(5, 56, 47, 1) 40%,
    rgba(5, 72, 68, 1) 46%,
    rgba(149, 44, 104, 0.3197872899159664) 100%
  );
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
  color: white;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-color: #${(props) => props.color};
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.div<Payment>`
  width: 50%;
`;

const Footer = ({ src }: string | any) => {
  return (
    <>
      <Container>
        <Left>
          <Logo>TRENDING SHOP</Logo>
          <Desc>
            We have been serving our customers since 12 years and as we
            contacted them, they all are satisfied and happy. Don't miss your
            chance to get higly quality products.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <LinkedIn />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Twitter />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title> Useful Links</Title>
          <List>
            <ListItem>Home </ListItem>
            <ListItem>Cart </ListItem>
            <ListItem>Man Fashion </ListItem>
            <ListItem>Woman Fashion </ListItem>
            <ListItem>Accessories </ListItem>
            <ListItem>My Accout </ListItem>
            <ListItem>Order Tracking </ListItem>
            <ListItem>Wishlist </ListItem>
            <ListItem>Wishlist </ListItem>
            <ListItem>Terms </ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} />
            Helsinki, Kaivokatu 13
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} />
            +3584236664
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />
            contact@trending.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    </>
  );
};

export default Footer;
