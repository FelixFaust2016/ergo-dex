import styled from "styled-components/macro";
import { colors } from "../../colors";

export const ButtonContainer = styled.button`
  border: 1px solid ${colors.btn_bg_color_primary};
  padding: 0px 20px;
  background-color: ${(props) =>
    props.type === "primary" ? colors.btn_bg_color_primary : "transparent"};
  color: ${(props) =>
    props.type === "primary"
      ? colors.btn_text_color
      : colors.btn_bg_color_primary};
  height: 44px;
  border-radius: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.87rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;
