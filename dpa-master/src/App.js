import React from "react";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/styled";
import { Routes } from "./Routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;