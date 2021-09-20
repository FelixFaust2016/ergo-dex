import { useState } from "react";

import { Button } from "../../components";

import {
  SwapContainer,
  DropDown,
  DropBox,
  ChangeInput,
  SwitchBtn,
  BtnContainer,
} from "./style";

const dropDown = [
  {
    one: "ERG",
    two: "SigUSD",
    fee: "0.50%",
  },
  {
    one: "ERG",
    two: "SigRSD",
    fee: "0.50%",
  },
  {
    one: "WT_ERG",
    two: "WT_ADA",
    fee: "0.40%",
  },
  {
    one: "Erdoge",
    two: "kushiti",
    fee: "0.40%",
  },
];

export const Swap = () => {
  const [drop, toggleDropDown] = useState(false);
  const [one, setOne] = useState(dropDown[0].one);
  const [two, setTwo] = useState(dropDown[0].two);
  const [fee, setFee] = useState(dropDown[0].fee);

  const handleSelectInput = (one, two, fee) => {
    setOne(one);
    setTwo(two);
    setFee(fee);
    toggleDropDown(false);
  };

  const switchPrices = () => {
    setOne(two);
    setTwo(one);
  };

  return (
    <SwapContainer>
      <header>
        <p>Swap</p>
      </header>
      <DropDown>
        <input
          onClick={() => toggleDropDown(!drop)}
          value={`Pool: ${one} - ${two}, Fee ${fee}`}
        />

        {drop && (
          <DropBox>
            {dropDown.map((drop, i) => (
              <div
                onClick={() => handleSelectInput(drop.one, drop.two, drop.fee)}
              >
                <p key={i}>
                  {drop.one} - {drop.two}
                </p>
                <p>Fee: {drop.fee}</p>
              </div>
            ))}
          </DropBox>
        )}
      </DropDown>
      <br />
      <p>
        1 {one} ≈ 817 {two}
      </p>
      <ChangeInput>
        <div>{one}</div>
        <input value={0.0} />
      </ChangeInput>
      <SwitchBtn onClick={switchPrices}>
        <img src={"/assets/down.svg"} alt={""} />
      </SwitchBtn>
      <ChangeInput>
        <div>{two}</div>
        <input value={0.0} />
      </ChangeInput>
      <BtnContainer>
        <Button type={"primary"}>Connect to Wallet</Button>
      </BtnContainer>
    </SwapContainer>
  );
};
