import styled from "styled-components";

const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`

const  Footer = () => {
  return (
    <Container>
       <Left> Left</Left>
       <Center>Center</Center>
       <Right> Right</Right>
    </Container>
  )
}

export default Footer

