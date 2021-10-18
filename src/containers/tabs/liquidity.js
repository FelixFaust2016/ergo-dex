import { useState, useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { colors } from "../../colors";

const data = {
  rates: {
    ADA: 0.00225,
  },

  base: "RAVE",
};

export const Liquidity = () => {
  const [show, setShow] = useState(false);

  const [currencyList, setCurrencyList] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRates] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  console.log(currencyList, fromCurrency, toCurrency)

  let toAmount, fromAmount;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  const onChangeFromAmount = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const onChangeToAmount = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  useEffect(() => {
    setCurrencyList([...Object.keys(data.rates)]);
    const firstCurrency = Object.keys(data.rates)[0];
    setFromCurrency(data.base);
    setToCurrency(firstCurrency);
    setExchangeRates(data.rates[firstCurrency]);
  }, []);

  return (
    <Container>
      <header>
        <aside>
          {show ? (
            <i onClick={() => setShow(false)} className="fas fa-arrow-left"></i>
          ) : null}
          <div>
            <h3> {!show ? "Your Wallet" : "Add Liquidity"}</h3>
            <p>Remove liquidity to receive tokens back</p>
          </div>
        </aside>
        <main>
          <i className="fas fa-cog"></i>
          <i className="far fa-clock"></i>
        </main>
      </header>

      <Body>
        {!show ? (
          <p>Connect to a wallet to view your liquidity.</p>
        ) : (
          <>
            <InputContainer>
              <h5>Input</h5>

              <Input>
                <input value={toAmount} onChange={onChangeToAmount} />
                <aside>
                  <img
                    width={"40px"}
                    height={"20px"}
                    src={"/assets/cada.svg"}
                    alt={""}
                  />

                  <p>ADA</p>
                </aside>
              </Input>
            </InputContainer>
            <h3>+</h3>
            <InputContainer>
              <h5>Input</h5>

              <Input>
                <input value={fromAmount} onChange={onChangeFromAmount} />

                <aside>
                  <img
                    width={"80px"}
                    height={"20px"}
                    src={"/assets/logo.png"}
                    alt={""}
                  />
                  <p>RAVE</p>
                </aside>
              </Input>
            </InputContainer>
            <Footer>
              <div>
                <p>0.00225</p>
                <p> ADA per RAVE</p>
              </div>
              <div>
                <p>444.44</p>
                <p> RAVE per ADA</p>
              </div>
              <div>
                <p>~</p>
                <p>Share of Pool</p>
              </div>
            </Footer>
          </>
        )}
      </Body>

      <BtnContainer>
        <button onClick={() => setShow(true)}>
          {!show ? "Add Liquidity" : "Connect Wallet"}
        </button>
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 33%;
  margin-top: 30px;
  position: relative;
  background-color: white;
  border-radius: 20px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    aside {
      display: flex;
      align-items: center;
      h3 {
        padding-bottom: 5px;
        font-weight: 700;
      }

      p {
        font-size: 14px;
        font-weight: 600;
        color: black !important;
      }

      i {
        padding-right: 20px;
        font-size: 18px;
        cursor: pointer;
      }
    }

    main {
      i {
        margin-right: 20px;
        font-size: 20px;
        cursor: pointer;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

const Body = styled.div`
  padding: 20px;
  padding-top: 0px;
  text-align: center;
  p {
    color: grey !important;
  }
`;

const BtnContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0px;
  button {
    width: calc(100% - 40px);
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    background-color: ${colors.btn_bg_color_primary};
    border: none;
    color: white;
  }
`;

const InputContainer = styled.div`
  width: calc(100% - 80px);
  padding: 20px 20px;
  background-color: rgb(231, 227, 235);
  border-radius: 20px;
  margin: 0px auto;

  h5 {
    font-size: 14px;
    text-align: left;
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  input {
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 700;
    background-color: transparent;
  }

  aside {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
      padding-bottom: 5px;
    }

    p {
      font-weight: bold;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;

  div {
    padding: 20px 20px;
    padding-bottom: 0;
    p {
      text-align: center;
      margin-top: 10px;
      font-weight: 700;

      &:first-of-type {
        margin-top: 0;
        font-size: 14px;
      }

      &:last-of-type {
        font-size: 12px;
      }
    }
  }
`;
