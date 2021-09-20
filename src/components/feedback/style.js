import styled from "styled-components/macro";
import { colors } from "../../colors";

export const Container = styled.div`
  position: fixed;
  top: 90%;
  left: 40px;
  z-index: 3;
  box-shadow: 0px 4px 20px rgba(18, 21, 40, 0.2);

  button {
    p {
      font-weight: 600;
      color: ${colors.btn_text_color};
      font-size: 1rem;
    }

    img {
      margin-left: 10px;
      width: 20px;
    }
  }
`;
