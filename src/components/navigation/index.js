import { Button, Toggle } from "..";
import {
  Container,
  NavigationContainer,
  GeneralContainer,
  Spacer,
} from "./style";

export const Navigation = ({ showModal, showToast, setMode, mode }) => {
  return (
    <Container>
      <GeneralContainer>
        <NavigationContainer>
          <img
            style={{ width: "15%", cursor: "pointer" }}
            src={"/assets/logo.png"}
            alt={""}
          />
          <Spacer />
          <Toggle setToggle={setMode} toggle={mode} />
          <div style={{width:'20px'}}/>
          <Button onClick={showModal}>How to Use</Button>
          <Button onClick={showToast} type={"primary"}>
            Connect Wallet
          </Button>
        </NavigationContainer>
      </GeneralContainer>
    </Container>
  );
};
