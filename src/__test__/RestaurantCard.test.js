import { screen, render } from "@testing-library/react";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const RestaurantName = screen.getByText("UBQ by Bar...");
  expect(RestaurantName).toBeInTheDocument();
});

it("Should render Restaurant Card component with Promoted Label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardPromoted resData={MOCK_DATA} />);

  const OpenLabel = screen.getByText("Open");
  expect(OpenLabel).toBeInTheDocument();
});
