import React, { useContext } from "react";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import RandomColorGenerator from "../random-color-generator";
import Accordian from "../accordian";
import TreeView from "../tree-view";
import menus from "../tree-view/data";
import Tabs from "../tabs";
import { tabs } from "../tabs/data";
import { FeatureFlagsContext } from "./context/feature-flag-context";

const componentsToRender = [
  {
    key: "showLightAndDarkMode",
    component: <LightDarkMode />,
  },
  {
    key: "showTicTacToeBoard",
    component: <TicTacToe />,
  },
  {
    key: "showRandomColorGenerator",
    component: <RandomColorGenerator />,
  },
  {
    key: "showAccordian",
    component: <Accordian />,
  },
  {
    key: "showTreeView",
    component: <TreeView menus={menus} />,
  },
  {
    key: "showTabs",
    component: <Tabs tabsContent={tabs} />,
  },
];

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  if (loading) return <h1>Loading data! Please wait</h1>;

  const checkEnabledFlags = (key) => {
    return enabledFlags[key];
  };

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((item) =>
        checkEnabledFlags(item.key) ? item.component : null
      )}
    </div>
  );
};

export default FeatureFlags;
