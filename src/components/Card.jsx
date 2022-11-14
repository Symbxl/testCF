import styled from "styled-components"

const Card = ({ stock }) => {
console.log(stock)
  return ( 
    <Container>
    <h1>{ stock?.["01. symbol"] }</h1>
    <h2>{ stock?.["02. open"] }</h2>
    <h2>{ stock?.["03. high"] }</h2>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  margin: 2rem;
`