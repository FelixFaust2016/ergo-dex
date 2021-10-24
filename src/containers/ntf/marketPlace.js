import { useState } from "react";
import { Button } from "../../components";
import styled from "styled-components";
import { CreateComponent } from "../../components/create";

export const MarketPlace = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Container>
      <p>Discover, Collect and Mint NFTs on the Cardano BlockChain</p>
      <BtnContainer>
        <Button onClick={() => setClicked(false)} type={"primary"}>
          Explore
        </Button>
        <Button onClick={() => setClicked(true)}>Create</Button>
      </BtnContainer>

      {clicked ? (
        <>
          <br />
          <CreateComponent />
        </>
      ) : (
        <p style={{ marginTop: "20px" }}>This feature is available yet</p>
      )}
    </Container>
  );
};

const Container = styled.div`
  p {
    color: #000 !important;
    font-size: 1rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 10px;
    margin-top: 20px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;
