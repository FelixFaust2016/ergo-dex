import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
    name: "Redeem",
    component: <Redeem />,
  },
  {
    name: "Deposit",
    component: <Deposit />,
  },
  {
    name: "Create NFT",
    component: <CreateNFT />,
  },
  {
    name: "Charts",
    component: <Charts />,
  },
];

const notify = () => toast("Features not available at the Moment");

export const MainPage = () => {
  const [howToUseModal, setHowToUseModal] = useState(false);

  const [settingsModal, setSettingsModal] = useState(false);

  return (
    <>
      <ToastContainer />
      {howToUseModal && (
        <HowItWorks closeModal={() => setHowToUseModal(false)} />
      )}
      {settingsModal && (
        <SettingsModal closeModal={() => setSettingsModal(false)} />
      )}
      <Settings onClick={() => setSettingsModal(true)} />
      <Navigation showToast={notify} showModal={() => setHowToUseModal(true)} />
      <Tabs tabs={tabs} />
      <Feedback />
    </>
  );
};
