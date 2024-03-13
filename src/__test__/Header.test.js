import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component Test Cases", () => {
  it("Should load Header Component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", { name: "Login" });

    // const loginBtn = screen.getByText("Login");

    expect(loginBtn).toBeInTheDocument();
  });

  it("Should load Header Component with Cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // const loginBtn = screen.getByRole("button");

    const cartItems = screen.getByText("Cart - (0)");

    expect(cartItems).toBeInTheDocument();
  });
  it("Should load Header Component with Cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // const loginBtn = screen.getByRole("button");

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  });

  it("Should change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    // const loginBtn = screen.getByText("Login");

    expect(logoutBtn).toBeInTheDocument();
  });
});
