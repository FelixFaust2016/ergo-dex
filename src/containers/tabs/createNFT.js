import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { Create, MarketPlace, MyPurchases } from "../ntf";

export const CreateNFT = () => {
  const NFTtabs = [
    {
      name: "Market Place",
      component: <MarketPlace />,
    },
    {
      name: "My Purchase",
      component: <MyPurchases />,
    },
    {
      name: "Create NFT",
      component: <Create />,
    },
  ];

  const [currentId, setCurrentId] = useState(0);

  const handleGetId = (id) => {
    setCurrentId(id);
  };

  return (
    <Container>
      <TabContainer>
        {NFTtabs.map((nft, i) => (
          <button
            style={{
              background:
                currentId === i ? colors.btn_bg_color_primary : "transparent",
              color: currentId === i ? "#fff" : colors.btn_bg_color_primary,
            }}
            onClick={() => handleGetId(i)}
            key={i}
          >
            {nft.name}
          </button>
        ))}
      </TabContainer>

      {NFTtabs.map((nft, i) => (
        <TabComponent key={i}>{currentId === i && nft.component}</TabComponent>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 20px;
  width: calc(33% - 40px);
  margin-top: 30px;
  position: relative;
  background-color: white;
  border-radius: 20px;

  @media (max-width: 800px) {
    width: calc(80% - 40px);
  }

  @media (max-width: 500px) {
    width: calc(95% - 40px);
  }
`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    padding: 10px 20px;
    border: 1px solid ${colors.btn_bg_color_primary};
    color: ${colors.btn_bg_color_primary};
    font-size: 0.85rem;
    border-radius: 4px;
    cursor: pointer;
    background-color: transparent;
  }
`;

const TabComponent = styled.div`
  margin-top: 30px;
`;
