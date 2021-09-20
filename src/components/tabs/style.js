import styled from "styled-components/macro";
import { colors } from "../../colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TabComponent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
  border-radius: 14px;
  background: #121528;
  margin-top: 20px;
  position: absolute;
  top: 70%;
`;

export const Tab = styled.div`
  padding: 5px 15px;
  background: ${(props) =>
    props.active === "active" ? colors.btn_bg_color_primary : "transparent"};
  color: ${colors.btn_text_color};
  border-radius: 10px;
  cursor: pointer;

  p {
      font-size : 0.9rem;
      font-weight: 600;
  }
`;
