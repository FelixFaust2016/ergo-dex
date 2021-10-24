import styled from "styled-components";

import { Button } from "../../components";
import { colors } from "../../colors";

export const Pools = () => {
  return (
    <Container>
      <Header>Stake Pools</Header>

      <StatisticsContainer>
        <Statistics style={{ width: "100%" }}>
          <h6>RAVE</h6>
          <p>some text .... and more</p>
        </Statistics>

        <Statistics>
          <h6>LIVE STAKE</h6>
          <StatContainer>
            <h4>
              48,929,537<span>.068121</span>
            </h4>
            <aside>ADA</aside>
          </StatContainer>
        </Statistics>
        <Spacer />
        <Statistics>
          <h6>LIVE STAKE</h6>
          <StatContainer>
            <aside style={{ marginLeft: "0px" }}>51,482,379.419036</aside>
            <aside>ADA</aside>
          </StatContainer>
        </Statistics>

        <Footer>
          <Statistics>
            <h6>SATURATION</h6>
            <StatContainer>
              <aside style={{ marginLeft: "0px" }}>74.071%</aside>
            </StatContainer>
          </Statistics>
          <Statistics>
            <h6>FEE MARGIN</h6>
            <StatContainer>
              <aside style={{ marginLeft: "0px" }}>0.00%</aside>
            </StatContainer>
          </Statistics>
          <Statistics>
            <h6>BLOCKS LIFETIME</h6>
            <StatContainer>
              <aside style={{ marginLeft: "0px" }}>897</aside>
            </StatContainer>
          </Statistics>{" "}
          <Statistics>
            <h6>BLOCKS IN EPOCH</h6>
            <StatContainer>
              <aside style={{ marginLeft: "0px" }}>21</aside>
            </StatContainer>
          </Statistics>
        </Footer>

        <div style={{ width: "100%", marginTop: "20px" }}>
          <Button type={"primary"}>Delegate</Button>
        </div>
      </StatisticsContainer>

      <StatisticsContainer>
        <Statistics style={{ width: "100%" }}>
          <h6>RAVE</h6>
          <p>some text .... and more</p>
        </Statistics>

        <Statistics>
          <h6>LIVE STAKE</h6>
          <StatContainer>
            <h4>
              48,929,537<span>.068121</span>
            </h4>
            <aside>ADA</aside>
          </StatContainer>
        </Statistics>
        <Spacer />
        <Statistics>
          <h6>LIVE STAKE</h6>
          <StatContainer>
            <aside style={{ marginLeft: "0px" }}>51,482,379.419036</aside>
            <aside>ADA</aside>
          </StatContainer>
        </Statistics>

        <Footer>
          <Statistics>
            <h6>SATURATION</h6>
            <StatContainer>
              <aside style={{ marginLeft: "0px" }}>74.071%</aside>
            </StatContainer>
          </Statistics>
          <Statistics>
            <h6>FEE MARGIN</h6>
            <StatContainer>
              <aside style={{ marginLeft: "0px" }}>0.00%</aside>
            </StatContainer>
          </Statistics>
          <Statistics>
            <h6>BLOCKS LIFETIME</h6>
            <StatContainer>
              <aside style={{ marginLeft: "0px" }}>897</aside>
            </StatContainer>
          </Statistics>{" "}
          <Statistics>
            <h6>BLOCKS IN EPOCH</h6>
            <StatContainer>
              <aside style={{ marginLeft: "0px" }}>21</aside>
            </StatContainer>
          </Statistics>
        </Footer>

        <div style={{ width: "100%", marginTop: "20px" }}>
          <Button type={"primary"}>Delegate</Button>
        </div>
      </StatisticsContainer>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.h4`
  margin-top: 10px;
`;

const StatisticsContainer = styled.div`
  border: 1px solid ${colors.overlay};
  padding: 0px 20px 20px 20px;
  border-radius: 13px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Statistics = styled.div`
  margin-top: 20px;

  h6 {
    font-weight: bolder;
  }

  p {
    font-size: 12px;
    color: ${colors.overlay};
    font-weight: bolder;
  }
  h4 {
    span {
      font-size: 16px;
    }
  }
`;

const StatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;

  aside {
    margin-left: 10px;
    font-size: 12px;
    font-weight: bolder;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${colors.overlay};
  margin-top: 20px;
`;
