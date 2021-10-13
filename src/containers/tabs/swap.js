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
    one: "RAVE",
    two: "AUSD",
    fee: "0.40%",
  },

  {
    one: "RAVE",
    two: "ADA",
    fee: "0.45%",
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
        1 {one} ≈ 0.81 {two}
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
        <Button type={"primary"}>Connect Wallet</Button>
      </BtnContainer>
    </SwapContainer>
  );
};
