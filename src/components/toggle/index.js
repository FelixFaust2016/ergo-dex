import { Button } from "./style";

export const Toggle = ({ setToggle, toggle }) => {
  return (
    <Button tog={toggle} onClick={() => setToggle(!toggle)}>
      <div></div>
    </Button>
  );
};
