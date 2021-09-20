import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 20px 100px;

  @media (max-width: 800px) {
    padding: 20px 20px;
  }
`;

export const GeneralContainer = styled.div`
  max-width: 1200px;
  margin: 0px auto;
`;

export const NavigationContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;

  button {
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;
