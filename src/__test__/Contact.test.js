import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  // afterAll(() => {
  //   console.log("All Test Cases Run");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  test("Should Load Contact Us Page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should Load Submit button inside Contact Component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should Load input message Contact Component", () => {
    render(<Contact />);

    const inputMessage = screen.getByPlaceholderText("Message");

    //Assertion
    expect(inputMessage).toBeInTheDocument();
  });

  test("Should Load 2 input box on the Contact Component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
