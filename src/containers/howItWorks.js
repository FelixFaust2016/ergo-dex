import styled from "styled-components/macro";
import { colors } from "../colors";

import { Modal } from "../components";

export const HowItWorks = ({ closeModal }) => {
  return (
    <Modal width={"50%"} closeModal={closeModal}>
      <Header>How to Use Guide</Header>
      <Message cl={colors.waring}>
        ⚠️ Use Google Chrome, Brave or Sidekick browser to interact with ErgoDEX
        Beta UI
      </Message>
      <Message cl={colors.danger}>
        ⛔️ Do not use Safari or Mozilla Firefox, because there are no wallet
        extensions yet
      </Message>
      <List>
        <li>
          In order to start using ErgoDEX Beta UI you need to install the
          following two extensions:
        </li><br/>
        <Link>Yoroi Nightly</Link><br/>
        <Link>Yoroi-Ergo dApp Connector Nightly</Link>
        <li>Create new ERG wallet using Yoroi Nightly</li>
        <li>
          Send a small amount of ERGs (1-2 ERGs) to your Yoroi Nightly wallet.
          For this step use <Link>Yoroi Wallet</Link> or withdraw ERGs from your
          exchange account;
        </li>
        <li>
          Congratulations! You are now ready to start testing the beta UI.
        </li>
      </List>
    </Modal>
  );
};

const Header = styled.h3`
  text-align: center;
`;

const Message = styled.p`
  color: ${(props) => props.cl};
  font-size: 1rem;
  font-weight: 500;
  margin-top: 10px;
`;

const List = styled.ol`
  padding: 20px;
  li {
    margin-top: 20px;
    line-height: 30px;
  }
`;

const Link = styled.a`
  cursor: pointer;
  color: ${colors.btn_bg_color_primary};
`;
