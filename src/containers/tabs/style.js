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
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const DropDown = styled.div`
  position: relative;
  input {
    width: calc(100% - 40px);
    border: 1px solid rgba(18, 21, 40, 0.3);
    padding: 10px 20px;
    border-radius: 8px;
    margin-top: 10px;
    outline: none;
    position: relative;
    font-size: 1rem;
  }
  `;

export const DropBox = styled.div`
  width: calc(100% - 40px);
  border: 1px solid rgba(18, 21, 40, 0.3);
  padding: 10px 20px;
  margin-top: 5px;
  position: absolute;
  background: ${colors.btn_text_color};
  z-index: 2;
  
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p {
      margin-top: 10px;
      cursor: pointer;
      color: black !important;
    }
  }
`;

export const ChangeInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(18, 21, 40, 0.3);
  border-radius: 8px;
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
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: ${colors.btn_bg_color_primary};
  z-index: 1;
  left: 50%;
  top: 55%;
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
