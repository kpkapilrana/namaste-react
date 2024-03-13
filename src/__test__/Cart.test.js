import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../pages/RestaurantMenu";
import { act } from "react-dom/test-utils";
import MOCK_MENU from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Services from "../pages/Services";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_MENU);
    },
  });
});
it("Should Load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Services />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianRecom = screen.getByText("Recommended (20)");

  fireEvent.click(accordianRecom);

  const catCard = screen.getAllByTestId("catCard");
  expect(catCard.length).toBe(20);

  const addBtns = screen.getAllByRole("button", { name: "Add" });

  expect(screen.getByText("Cart - (0)")).toBeInTheDocument();

  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[0]);

  const cartText = screen.getByText("Cart - (2)");

  expect(cartText).toBeInTheDocument();

  fireEvent.click(cartText);

  const cartCard = screen.getAllByTestId("catCard");
  expect(cartCard.length).toBe(22);

  const clearCart = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCart);
  const cartCardAfterClear = screen.getAllByTestId("catCard");
  expect(cartCardAfterClear.length).toBe(20);
  expect(
    screen.getByText("Cart is Empty! Add Items to Cart")
  ).toBeInTheDocument();
});
