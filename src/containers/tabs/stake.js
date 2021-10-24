import { useState } from "react";
import styled from "styled-components";
import { Delegations, Pools } from "..";
import { colors } from "../../colors";

export const Stake = () => {
  const [tab, setTab] = useState(false);

  return (
    <Container>
      <Body>
        <Tab>
          <p
            onClick={() => setTab(false)}
            style={{ color: !tab ? colors.btn_bg_color_primary : "black" }}
          >
            Delegation
          </p>
          <p
            onClick={() => setTab(true)}
            style={{ color: tab ? colors.btn_bg_color_primary : "black" }}
          >
            Pools
          </p>
        </Tab>

        {tab ? <Pools /> : <Delegations />}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 33%;
  margin-top: 0px;
  position: relative;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    text-align: left;
    margin-left: 20px;
    cursor: pointer;
    font-weight: 600;
    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const Body = styled.div`
  padding: 20px;
`;
