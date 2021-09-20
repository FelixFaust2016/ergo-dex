import { Button } from "..";
import {
  Container,
  NavigationContainer,
  GeneralContainer,
  Spacer,
} from "./style";

export const Navigation = ({ showModal, showToast }) => {
  return (
    <Container>
      <GeneralContainer>
        <NavigationContainer>
          <img
            style={{ width: "15%", cursor: "pointer" }}
            src={"/assets/logo.jpeg"}
            alt={""}
          />
          <Spacer />
          <Button onClick={showModal}>Usage Guide</Button>
          <Button onClick={showToast} type={"primary"}>
            Connect to Wallet
          </Button>
        </NavigationContainer>
      </GeneralContainer>
    </Container>
  );
};
