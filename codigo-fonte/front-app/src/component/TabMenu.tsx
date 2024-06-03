import React from "react";
import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

const TabItem = styled(Tab)(({ theme }) => ({
  textTransform: "initial",
  margin: theme.spacing(0, 2),
  minWidth: 0,
  fontWeight: "normal",
  letterSpacing: 0.5,
  color: "#fff",
  borderRadius: "8px",
  [`&.${tabClasses.selected}`]: {
    color: "#fff",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: 0,
  },
}));

type TabMenuProps = {
  tabIndex: number,
  setTabIndex: React.Dispatch<number>
}
export default function TabMenu({tabIndex, setTabIndex}: TabMenuProps) {
  return React.createElement(
    Tabs,
    {
      value: tabIndex,
      onChange: (e, index) => setTabIndex(index),
      sx: {
        width: "100%",
        borderRadius: "0 0 10px 10px",
        background: "linear-gradient(60deg, #172554, #1e3c68)",
        padding: "10px",
        boxShadow: "0px 3px 15px rgba(34, 35, 58, 0.5)",
        [`& .${tabsClasses.indicator}`]: {
          height: "100%",
          borderRadius: "8px",
          backgroundColor: "rgba(255, 255, 255, .2)",
        },
      },
    },
    React.createElement(TabItem, {
      label: "Sobre",
    }),
    React.createElement(TabItem, {
      label: "Vagas Candidatadas",
    }),
   
  );
}
