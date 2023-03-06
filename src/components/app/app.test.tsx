import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "../../store/store";
import { MemoryRouter } from "react-router-dom";

describe("Given the App component", () => {
  describe("When is renderized", () => {
    test("Then it should renderize the home", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      );

      const element2 = screen.getByText("RRSS");
      expect(element2).toBeInTheDocument();
    });
  });
});
