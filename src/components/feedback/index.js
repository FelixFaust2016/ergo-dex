import { Button } from "..";

import { Container } from "./style";

export const Feedback = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Button type={"primary"}>
        <p>Drop a Feedback</p>
        <img src={"/assets/feedback.svg"} alt={""} />
      </Button>
    </Container>
  );
};
