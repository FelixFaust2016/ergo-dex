import styled from "styled-components/macro";
import { colors } from "../../colors";

export const Button = styled.div`
  width: 42px;
  height: 18px;
  background: ${({ tog }) => (tog ? colors.btn_text_color : "#121528")};
  transition: 0.5s ease-in-out;
  padding: 3px 3px;
  border-radius: 20px;
  cursor: pointer;

  div {
    height: 18px;
    width: 18px;
    border-radius: 20px;
    background: ${colors.btn_bg_color_primary};
    transition: 0.5s ease-in-out;
    transform: translateX(${({ tog }) => (tog ? `23px` : `0px`)});
  }
`;
