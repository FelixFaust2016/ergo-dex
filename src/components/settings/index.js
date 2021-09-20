import { Button } from "..";

import { Container } from "./style";

export const Settings = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Button type={"primary"}>
        <img style={{ width: "20px" }} src={"/assets/settings.svg"} alt={""} />
      </Button>
    </Container>
  );
};
