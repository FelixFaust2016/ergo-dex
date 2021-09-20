import styled from "styled-components/macro";

export const Container = styled.div`
  width: 30%;
  height: 80px;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid rgba(18, 21, 40, 0.3);
  background: #e5e5e5;
  margin-top: 40px;

  @media(max-width: 700px){
      width: 70%;
  }
`;
