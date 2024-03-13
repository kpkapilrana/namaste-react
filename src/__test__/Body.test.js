import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// onClick = jest.fn(() => {});

it("Should Search the Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardBeforeSearch.length).toBe(20);
  const searchBox = screen.getByTestId("searchInput");
  fireEvent.change(searchBox, { target: { value: "subway" } });
  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.click(searchBtn);

  // Screen should load 1 Card
  const cardAfterSearch = screen.getAllByTestId("resCard");
  expect(cardAfterSearch.length).toBe(1);
  //   expect(searchBtn).toBeInTheDocument();
});

it("Should Test Top Rated Restaurant Button", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });

  fireEvent.click(topRatedBtn);

  const resCard = screen.getAllByTestId("resCard");

  expect(resCard.length).toBe(10);
});
