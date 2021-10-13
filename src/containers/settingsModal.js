import styled from "styled-components/macro";
import { colors } from "../colors";

import { Button, Modal } from "../components";

export const SettingsModal = ({ closeModal }) => {
  return (
    <Modal width={"30%"} closeModal={closeModal}>
      <Header>Transaction Settings</Header>
      <Info>Miner Fee?</Info>
      <MinerInput>
        <Button type={"primary"}>Auto</Button>
        <input value={0.02} />
        <Badge>RAVE</Badge>
      </MinerInput>
      <Info>Output address?</Info>
      <Button>Connect Wallet</Button>
    </Modal>
  );
};

const Header = styled.h3`
  text-align: center;
`;

const Info = styled.p`
  margin-top: 20px;
  padding-bottom: 10px;
  color: black!important;
`;

const MinerInput = styled.div`
  display: flex;
  flex-wrap: wrap;

  input {
    height: 46px;
    border: 1px solid ${colors.overlay};
    padding: 0px 10px;
    border-radius: 10px;
    flex: 0.7;
    margin-left: 10px;
    outline: none;
    font-size: 1rem;
  }
`;

const Badge = styled.div`
  border-radius: 10px;
  padding: 0px 20px;
  height: 46px;
  border: 1px solid ${colors.overlay};
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-left: 5px;
`;
