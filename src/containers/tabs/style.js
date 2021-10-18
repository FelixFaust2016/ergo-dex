import styled from "styled-components/macro";
import { colors } from "../../colors";

export const SwapContainer = styled.div`
  width: 30%;
  margin-top: 30px;
  position: relative;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      padding-bottom: 5px;
      font-weight: 700;
    }
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const DropContainer = styled.div`
  padding: 10px 20px;
  border: 1px solid rgba(18, 21, 40, 0.3);
  border-radius: 4px;
  background: ${colors.btn_text_color};
`;

export const DropBox = styled.select`
  width: 100%;
  border: 0px;
  margin-top: 5px;
  outline: none;
`;

export const ChangeInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(18, 21, 40, 0.3);
  border-radius: 5px;
  margin-top: 10px;
  overflow: hidden;
  background-color: white;
  div {
    height: 30px;
    border-right: 1px solid rgba(18, 21, 40, 0.3);
    /* background: #e5e5e5; */
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
  }

  input {
    height: 30px;
    padding: 0px 10px;
    flex: 1;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
`;

export const SwitchBtn = styled.div`
  width: 30px;
  height: 30px;
  margin: 10px auto;
  margin-bottom: 0px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.btn_bg_color_primary};
  transform: translate(-50%, 0);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 10px;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const InputFlex = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.switch === false ? "column" : "column-reverse"};
`;
