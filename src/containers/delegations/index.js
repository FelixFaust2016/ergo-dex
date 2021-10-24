import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../components";
import { colors } from "../../colors";

export const Delegations = () => {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const [ended, setEnded] = useState(false);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("October 30, 2021").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // stop timer

        clearInterval(interval.current);

        setEnded(false);
      } else {
        //update the timer

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <Container>
      <Header>Stake Balance</Header>
      <OverviewContainer>
        <Overview>
          {/* <img src={"/assets/logo.png"} alt={""} /> */}
          <TextContainer>
            <p>Early Delegator Bonus (End in Epoch 275)</p>
            <div>
              <h3>0</h3>
              <h5 style={{ marginLeft: "10px" }}>$RAVE</h5>
            </div>
          </TextContainer>
        </Overview>
        <Footer>
          <button>Buy $RAVE</button>
        </Footer>
      </OverviewContainer>

      <Statistics>
        <div>
          <h6>CONTROLLED TOTAL STAKE</h6>

          <StatisticsContainer>
            <h3>
              0.<span>000000</span>
            </h3>
            <aside>ADA</aside>
          </StatisticsContainer>
        </div>
        <Spacer />
        <div>
          <h6>NEXT PAYOUT</h6>

          <StatisticsContainer>
            {!ended ? (
              <h3 style={{ fontWeight: "bolder" }}>
                {days}d {hours}h {minutes}m {seconds}s
              </h3>
            ) : (
              <h3>EXPIRED</h3>
            )}
          </StatisticsContainer>
        </div>

        <div>
          <h6>RAVE REWARD</h6>

          <StatisticsContainer>
            <h3>0</h3>
            <aside>RAVE</aside>
          </StatisticsContainer>
          <div style={{ marginTop: "10px" }}>
            <Button type={"primary"}>Withdraw RAVE</Button>
          </div>
        </div>
        <Spacer />
        <div style={{ width: "50%" }}>
          <h6>ADA REWARDs</h6>

          <StatisticsContainer>
            <h3>
              0.<span>000000</span>
            </h3>
            <aside>ADA</aside>
          </StatisticsContainer>
          <div style={{ marginTop: "10px" }}>
            <Button type={"primary"}>Withdraw ADA</Button>
          </div>
        </div>
      </Statistics>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.h4`
  margin-top: 10px;
`;

const OverviewContainer = styled.div`
  border: 1px solid ${colors.overlay};
  padding: 20px;
  border-radius: 13px;
  margin-top: 10px;
`;

const Overview = styled.div`
  display: flex;

  img {
    width: 100px;
    height: 30px;
  }

  p {
    color: black !important;
    font-size: 14px;
    font-weight: bold;
  }
`;

const TextContainer = styled.div`
  /* margin-left: 20px; */

  div {
    display: flex;
    align-items: center;

    h5 {
      margin-left: 5px;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;

  button {
    border: none;
    color: ${colors.btn_bg_color_primary};
    outline: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: bolder;
  }
`;

const Statistics = styled.div`
  border: 1px solid ${colors.overlay};
  padding: 0px 20px 20px 20px;
  border-radius: 13px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  div {
    margin-top: 20px;
    h3 {
      span {
        font-size: 16px;
      }
    }
  }
`;

const StatisticsContainer = styled.div`
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
