import { useState } from "react";

import { Container, TabContainer, Tab, TabComponent } from "./style";

export const Tabs = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleCurrentTab = (id) => {
    setCurrentTab(id);
  };

  return (
    <Container>
      {tabs.map(
        (tab, i) =>
          currentTab - 1 === i && (
            <TabComponent key={i}>{tab.component}</TabComponent>
          )
      )}
      <TabContainer>
        {tabs.map((tab, i) => (
          <Tab
            onClick={() => handleCurrentTab(i + 1)}
            active={currentTab - 1 === i && "active"}
            key={i}
          >
            <p>{tab.name}</p>
          </Tab>
        ))}
      </TabContainer>
    </Container>
  );
};
