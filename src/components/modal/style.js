import styled from "styled-components/macro";
import { colors } from "../../colors";

export const Tint = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${colors.overlay};
  z-index: 998;
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: ${(props) => props.width};
  padding: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.btn_text_color};
  border-radius: 10px;
  z-index: 999;
  box-shadow: 0 30px 60px rgb(0 0 0 / 12%);

  @media (max-width: 800px) {
    width: calc(90% - 40px);
  }
`;
