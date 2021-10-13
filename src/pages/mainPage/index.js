import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { colors } from "../../colors";

import { Feedback, Navigation, Settings, Tabs } from "../../components";
import {
  HowItWorks,
  SettingsModal,
  Swap,
  Redeem,
  Deposit,
  CreateNFT,
  Charts,
} from "../../containers";

const tabs = [
  {
    name: "Swap",
    component: <Swap />,
  },
  {
    name: "Liquidity",
    component: "",
  },
  {
    name: "Stake",
    component: <Redeem />,
  },
  {
    name: "NFT",
    component: <CreateNFT />,
  },
  {
    name: "Mint",
    component: <Deposit />,
  },

  {
    name: "Bridge",
    component: <Charts />,
  },
];

const notify = () => toast("Features not available at the Moment");

export const MainPage = () => {
  const [howToUseModal, setHowToUseModal] = useState(false);

  const [settingsModal, setSettingsModal] = useState(false);

  const [mode, setMode] = useState(false);

  return (
    <Container mode={mode}>
      <ToastContainer />
      {howToUseModal && (
        <HowItWorks closeModal={() => setHowToUseModal(false)} />
      )}
      {settingsModal && (
        <SettingsModal closeModal={() => setSettingsModal(false)} />
      )}
      <Settings onClick={() => setSettingsModal(true)} />
      <Navigation
        setMode={setMode}
        mode={mode}
        showToast={notify}
        showModal={() => setHowToUseModal(true)}
      />
      <Tabs tabs={tabs} />
      <Feedback />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ${({ mode }) => (mode ? colors.background : "")};
  height: 100vh;
  transition: 0.5s ease-in-out;
  p {
    color: ${({ mode }) => (mode ? "white" : "")};
    transition: 0.5s ease-in-out;
  }
`;
