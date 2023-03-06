import React from "react";
import { Menu, menuOptions } from "../menu/menu";
import { AppRouter } from "../../routers/app.router";

function App() {
  return (
    <>
      <Menu options={menuOptions}></Menu>
      <AppRouter menuOptions={menuOptions}></AppRouter>
    </>
  );
}

export default App;
