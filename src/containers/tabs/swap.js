import { useEffect, useState } from "react";

import { Button } from "../../components";

import {
  SwapContainer,
  DropBox,
  ChangeInput,
  SwitchBtn,
  BtnContainer,
  DropContainer,
  InputFlex,
} from "./style";

const data = {
  rates: {
    ADA: 0.00225,
    AUSD: 0.00023,
  },

  base: "RAVE",
};

export const Swap = () => {
  const [currencyList, setCurrencyList] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRates] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  const [reverseField, setReverseField] = useState(false);

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


  const switchPlaces = () => {
    setReverseField(!reverseField);
  };

  return (
    <SwapContainer>
      <header>
        <p>Swap</p>
      </header>

      <DropContainer>
        <DropBox onChange={(e) => setToCurrency(e.target.value)}>
          {currencyList.map((drop) => (
            <option key={drop} value={drop}>
              {drop === "ADA"
                ? "Pool: RAVE - ADA, Fee 0.45%"
                : "Pool: RAVE - AUSD, Fee 0.45%"}
            </option>
          ))}
        </DropBox>
      </DropContainer>

      <br />
      <p>1 {data.base} ≈ 0.00025 {toCurrency}</p>
      <InputFlex switch={reverseField}>
        <ChangeInput>
          <div>{fromCurrency}</div>
          <input
            value={fromAmount}
            type="number"
            onChange={onChangeFromAmount}
          />
        </ChangeInput>
        <SwitchBtn onClick={switchPlaces}>
          <img src={"/assets/down.svg"} alt={""} />
        </SwitchBtn>
        <ChangeInput>
          <div>{toCurrency}</div>
          <input value={toAmount} type="number" onChange={onChangeToAmount} />
        </ChangeInput>
      </InputFlex>
      <BtnContainer>
        <Button type={"primary"}>Connect Wallet</Button>
      </BtnContainer>
    </SwapContainer>
  );
};
